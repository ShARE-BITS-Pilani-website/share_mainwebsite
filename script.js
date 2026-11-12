document.documentElement.className='js'

var P=[
["Farcast Biosciences","Oncology · AI diagnostics","An AI-assisted oncology tool that combines the outputs of five assay types into a single intelligence report.","Automated validation and LLM workflows for interpretation and report generation."],
["GPLAN","Architecture · Generative layout","Generates optimised layouts for irregular plots, given room needs, adjacencies and circulation.","Scored layout options using utilisation, adjacency and constraint metrics, for faster iteration."],
["Agnikul","Geospatial · Machine learning","A Sentinel-1/2 ML pipeline built to estimate tree density and classify vegetation at scale.",null,["2.7M+ hectares covered","18 spectral bands","14M+ trees estimated"]],
["Vayana","Trade finance","One of India’s leading trade finance and supply chain financing platforms.",null,["$20B+ financing facilitated","1M+ businesses served"]],
["Milaap","Crowdfunding","India’s largest crowdfunding platform for medical, educational and personal causes.",null,["10M+ donors enabled","1,300+ cities reached"]],
["String Bio","Industrial biotech","Turns methane into sustainable products for feed and agriculture, cutting CO₂ emissions while boosting yields.",null,["55+ patents held"]],
["Raptee.HV","Electric mobility","A Chennai-based EV start-up building full-stack, high-voltage electric motorcycles with in-house R&D.",null,["100k units annual capacity","$3M funding raised"]],
["Honor","Consumer technology","Designs smartphones, AI and smart home products, and keeps pushing on consumer technology.",null,["180M+ users served","100+ countries present"]]
];
var A=[["Krish Agarwal","Peak XV"],["Jeevan Mohapatra","P&G, Zeropearl VC"],["Devesh Saraogi","Samsung, IBM"],["Ayush Singh","Sarvam AI"],["Bhoomi Singhal","Copenhagen University"],["Samarthh Dave","McKinsey & Co."],["Ayush Dsouza","Eternal"],["Karan Singh","Founder"],["Meghna Ramaratnam","Nomura"],["Ankur Soni","Google"],["Shobhit Khurana","JPMC"],["Tarun Negi","P&G"],["Rushant Ashtputre","Founder"],["Kush Gupta","Deutsche Bank"],["Bhavya Patel","JPMC"],["Rimen Kaur","McKinsey"],["Ayush Pratap Singh","Nomura"],["Sparsh Agarwal","Barclays"],["Swati Taparia","Flipkart"],["Manthan Patel","Morgan Stanley"],["Avisha Gupta","Goldman Sachs"],["Anisha Shewani","BCG"],["Shourya Sodhani","Elevation Capital"],["Aprajita Gupta","Apple"],["Aditya Khandelwal","BCG"],["Vishwajeet Raje","Sprinklr"]];
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;")}
document.getElementById("projects-list").innerHTML=P.map(function(p){
 var right=p[3]?'<p><span class="k">Our work.</span> '+esc(p[3])+'</p>':'<ul>'+p[4].map(function(m){var i=m.indexOf(" ");return '<li><b>'+esc(m.slice(0,i))+'</b>'+esc(m.slice(i))+'</li>'}).join("")+'</ul>';
 return '<div class="proj"><div><h3>'+esc(p[0])+'</h3><div class="tag">'+esc(p[1])+'</div></div><p>'+esc(p[2])+'</p>'+right+'</div>'}).join("");
function card(a){var w=a[0].split(" "),ini=w[0][0]+w[w.length-1][0];
 return '<div class="person"><div class="av" aria-hidden="true">'+ini+'</div><div><b>'+esc(a[0])+'</b><span>'+esc(a[1])+'</span></div></div>'}
function row(items,rev){var h=items.map(card).join("");return '<div class="marq"><div class="track'+(rev?' rev':'')+'">'+h+h+'</div></div>'}
document.getElementById("alumni-list").innerHTML=row(A.slice(0,13),0)+row(A.slice(13),1);
var F=["BCG","Bain & Company","McKinsey & Company","Kearney","Goldman Sachs","EY","Flipkart","KPMG","PwC","Avendus","Navi","Nomura","Wells Fargo","Bloomberg","Kotak Investment Banking","Info Edge Ventures"];
var fh=F.map(function(n){return '<span class="co">'+esc(n)+'</span>'}).join("");
document.getElementById("fam").innerHTML=fh+fh;
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add("in");io.unobserve(t);setTimeout(function(){t.classList.remove("rv","in")},1000)}})},{threshold:.12});
document.querySelectorAll("h2.title,.cols>div,.proj,h3.sub,.marq").forEach(function(el){el.classList.add("rv");io.observe(el)});
function count(el){var n=+el.dataset.n,s=el.dataset.s||"",t0=null;function f(t){t0=t0||t;var p=Math.min((t-t0)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
if(!rm)setTimeout(function(){document.querySelectorAll("[data-n]").forEach(count)},600);
(function(){var c=document.getElementById("net"),h=c.parentNode,x=c.getContext("2d"),W,H,N=[],m={x:-1e3,y:-1e3},vis=true,dpr=Math.min(devicePixelRatio||1,2);
function size(){var r=c.getBoundingClientRect();W=r.width;H=r.height;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);N=[];var n=Math.round(W*H/9000);for(var i=0;i<n;i++){var k=Math.random();N.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:k<.08?7:k<.14?4.5:2.2,c:k<.08?"#00C781":k<.14?"#222":"#8fe3c3"})}}
function draw(){x.clearRect(0,0,W,H);var i,j,a,b,d;
for(i=0;i<N.length;i++){a=N[i];if(!rm){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;d=Math.hypot(a.x-m.x,a.y-m.y);if(d<220&&d>1){a.x-=(a.x-m.x)/d*.6;a.y-=(a.y-m.y)/d*.6}}
 for(j=i+1;j<N.length;j++){b=N[j];d=Math.hypot(a.x-b.x,a.y-b.y);if(d<125){x.strokeStyle="rgba(0,199,129,"+(1-d/125)*.4+")";x.lineWidth=1;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
 d=Math.hypot(a.x-m.x,a.y-m.y);if(d<180){x.strokeStyle="rgba(17,17,17,"+(1-d/180)*.5+")";x.lineWidth=1;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(m.x,m.y);x.stroke()}}
for(i=0;i<N.length;i++){a=N[i];x.fillStyle=a.c;x.beginPath();x.arc(a.x,a.y,a.r,0,6.2832);x.fill()}}
function loop(){if(vis&&!document.hidden)draw();requestAnimationFrame(loop)}
size();draw();if(!rm)loop();
addEventListener("resize",function(){size();draw()});
h.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});
h.addEventListener("pointerleave",function(){m.x=m.y=-1e3});
new IntersectionObserver(function(es){vis=es[0].isIntersecting}).observe(h)})();
var bar=document.getElementById("bar");
addEventListener("scroll",function(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+(h>0?scrollY/h:0)+")"},{passive:true});
