(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.AtlasCore=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const normalize=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const unique=a=>[...new Set(a)].sort((a,b)=>a.localeCompare(b));
const types=rows=>unique(rows.flatMap(p=>p.agreementTypes));
function filter(rows,state){const terms=normalize(state.q).split(/\s+/).filter(Boolean);return rows.filter(p=>(!state.country||p.country===state.country)&&(!state.agreementType||p.agreementTypes.includes(state.agreementType))&&terms.every(q=>normalize([p.name,p.country,...p.agreementTypes,p.agreementTypes.includes('Memorandum of Understanding')?'MOU':''].join(' ')).includes(q)));}
function stats(rows){return{institutions:rows.length,countries:unique(rows.map(p=>p.country)).length,types:types(rows).length};}
function byCountry(rows){return unique(rows.map(p=>p.country)).map(country=>({country,rows:rows.filter(p=>p.country===country)})).sort((a,b)=>b.rows.length-a.rows.length||a.country.localeCompare(b.country));}
function sorted(rows,key){return key==='source'?[...rows]:[...rows].sort((a,b)=>a[key].localeCompare(b[key]));}
function cluster(points,radius=42){const groups=[];for(const p of points){const existing=groups.find(g=>Math.hypot(g.x-p.x,g.y-p.y)<radius);if(existing){existing.members.push(p);existing.count+=p.count;existing.x=existing.members.reduce((s,p)=>s+p.x,0)/existing.members.length;existing.y=existing.members.reduce((s,p)=>s+p.y,0)/existing.members.length;}else groups.push({x:p.x,y:p.y,count:p.count,members:[p]});}return groups.map(g=>({...g,key:g.members.map(p=>p.country).sort().join('|')}));}
function csv(rows){const cell=v=>{let s=String(v??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';};return '\uFEFF'+[['Country / Region','Partner Institution','Agreement Type'],...rows.map(p=>[p.country,p.name,p.agreementTypes.join('; ')])].map(r=>r.map(cell).join(',')).join('\r\n');}
const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
const wrap=n=>((n+180)%360+360)%360-180;
function shortAngle(a,b,t){return a+wrap(b-a)*t;}
return{normalize,unique,types,filter,stats,byCountry,sorted,cluster,csv,clamp,wrap,shortAngle};
});
