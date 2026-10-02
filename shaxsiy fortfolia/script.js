const $=s=>document.querySelector(s);
const skills=[["HTML","H5","#e44d26",90,"Semantik va toza kod, zamonaviy tuzilmalar."],["CSS","C3","#1572b6",85,"Chiroyli va responsiv dizaynlar."],["JavaScript","JS","#d6b800",80,"Interaktiv va jonli web-ilovalar."],["Python","Py","#3776ab",70,"Ma’lumotlar, AI va avtomatlashtirish."],["React","⚛","#0aa6c9",60,"Zamonaviy va tezkor interfeyslar."],["Figma","Fg","#a259ff",75,"Dizayn va prototiplar."]];
$('#skg').innerHTML=skills.map(s=>`<div class="glass glow rv"><div class="sh"><span class="ic" style="background:${s[2]}">${s[1]}</span>${s[0]}<em>${s[3]}%</em></div><div class="bar"><i data-w="${s[3]}"></i></div><p>${s[4]}</p></div>`).join('');
const projects=[["O‘quv markazi sayti","🎓","Zamonaviy ta’lim markazi veb-sayti, admin panel va responsiv dizayn.",["HTML","CSS","JS"],"Markaz haqida ma’lumot, kurslar, o‘qituvchilar va ro‘yxatdan o‘tish bo‘limlari hamda boshqaruv uchun admin panel."],["Barber Shop sayti","💈","Onlayn bron qilish, admin panel va Telegram bildirishnomalar.",["HTML","CSS","JS","PHP"],"Mijozlar onlayn vaqt band qiladi, admin buyurtmalarni boshqaradi va yangi bronlar Telegramga yuboriladi."],["Test platforma","🧠","AI yordamidagi savollar, natijalar tizimi va 20+ savol.",["React","JS","Tailwind"],"AI savollar yaratadi, platforma natijalarni hisoblaydi va foydalanuvchi o‘sishini ko‘rsatadi."],["Kundalik xarajat","💸","Shaxsiy xarajatlarni boshqarish dashboardi.",["React","JS","Tailwind"],"Kunlik xarajatlarni kiritish, toifalar bo‘yicha tahlil va oylik hisobotlar bilan zamonaviy dashboard."]];
const imgs=["assets/img4.jpg", "assets/img5.jpg", "assets/img6.jpg", "assets/img7.jpg"];const grads=["#1b3a85,#0b1a40","#3a1b85,#0b1a40","#0b6f9e,#0b1a40","#0b9e6f,#0b1a40"];
$('#pjg').innerHTML=projects.map((p,i)=>`<article class="glass glow pc rv" data-i="${i}" tabindex="0"><div class="pv" style="background:url(${imgs[i]}) center/cover"></div><div class="bd"><h3>${p[0]}</h3><p>${p[2]}</p><div class="tags">${p[3].map(t=>`<span>${t}</span>`).join('')}</div><span class="btn" style="align-self:flex-start">Saytni ko‘rish</span></div></article>`).join('');
function openP(i){const p=projects[i];$('#mt').textContent=p[0];$('#md').textContent=p[4];$('#mg').innerHTML=p[3].map(t=>`<span>${t}</span>`).join('');$('#modal').classList.add('open')}
document.querySelectorAll('.pc').forEach(c=>{c.onclick=()=>openP(c.dataset.i);c.onkeydown=e=>e.key==='Enter'&&openP(c.dataset.i)});
$('#mc').onclick=()=>$('#modal').classList.remove('open');$('#modal').onclick=e=>e.target.id==='modal'&&e.currentTarget.classList.remove('open');
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');const b=e.target.querySelector('.bar i');if(b)b.style.width=b.dataset.w+'%';io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
// typing
const roles=["Web Dasturchi","Dizayner","IT mutaxassis"];let ri=0,ci=0,del=0;const ty=$('#typ');
(function t(){const w=roles[ri];ty.textContent=w.slice(0,ci);if(!del&&ci++===w.length){del=1;return setTimeout(t,1400)}if(del&&--ci===0){del=0;ri=(ri+1)%3}setTimeout(t,del?45:90)})();
// nav
$('#burger').onclick=()=>$('#nav').classList.toggle('open');
$('#nav').onclick=e=>e.target.tagName==='A'&&$('#nav').classList.remove('open');
$('#theme').onclick=()=>{const l=document.documentElement.dataset.theme==='dark';document.documentElement.dataset.theme=l?'light':'dark';$('#theme').textContent=l?'☀️':'🌙'};
const secs=[...document.querySelectorAll('section[id]')],links=[...document.querySelectorAll('#nav a')];
addEventListener('scroll',()=>{let c='home';secs.forEach(s=>{if(scrollY+120>=s.offsetTop)c=s.id});links.forEach(a=>a.classList.toggle('on',a.hash==='#'+c));$('#top').classList.toggle('show',scrollY>600);$('#cityS').style.setProperty('--py',Math.min(scrollY*.12,60)+'px')},{passive:true});
$('#top').onclick=()=>scrollTo({top:0});
addEventListener('pointermove',e=>{$('#glow').style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
// particles
const cv=$('#fx'),cx=cv.getContext('2d');let P=[];function rs(){cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;P=Array.from({length:Math.min(70,cv.width/18)},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,r:Math.random()*1.8+.4,v:Math.random()*.4+.1}))}
rs();addEventListener('resize',rs);
(function dr(){cx.clearRect(0,0,cv.width,cv.height);cx.fillStyle='rgba(90,190,255,.7)';P.forEach(p=>{p.y-=p.v;if(p.y<0)p.y=cv.height;cx.beginPath();cx.arc(p.x,p.y,p.r,0,7);cx.fill()});requestAnimationFrame(dr)})();
// chatbot
const win=$('#win'),msgs=$('#msgs');
function add(t,c){const d=document.createElement('div');d.className='m '+c;d.textContent=t;msgs.append(d);msgs.scrollTop=1e9}
function ans(q){q=q.toLowerCase();
if(/kim|haqida|tanish/.test(q))return"Muxammad Ali — 18 yoshli o‘zbekistonlik web dasturchi, dizayner va IT ishqibozi. U zamonaviy texnologiyalar bilan insonlarga foydali loyihalar yaratadi.";
if(/xizmat|narx|buyurtma/.test(q))return"Xizmatlar: biznes va o‘quv markazlar uchun veb-saytlar, admin panellar, UI/UX dizayn (Figma), Telegram bot integratsiyalari va web-ilovalar.";
if(/loyiha|sayt|ish/.test(q))return"Loyihalar: O‘quv markazi sayti, Barber Shop sayti (onlayn bron), AI test platformasi va Kundalik xarajat dashboardi. “Loyihalar” bo‘limida batafsil ko‘rishingiz mumkin.";
if(/texnolog|biladi|ko.nikma|html|css|python|react|figma|javascript/.test(q))return"Texnologiyalar: HTML 90%, CSS 85%, JavaScript 80%, Figma 75%, Python 70%, React 60%.";
if(/bog|aloqa|telegram|email|pochta/.test(q))return"Bog‘lanish uchun sahifa pastidagi shaklni to‘ldiring yoki Telegram, Instagram va Email tugmalaridan foydalaning.";
if(/salom|assalom|hi|hello/.test(q))return"Salom! Qanday yordam bera olaman?";
return"Bu haqda aniq ma’lumotim yo‘q. Muxammad Ali, uning loyihalari, ko‘nikmalari yoki bog‘lanish usullari haqida so‘rang.";}
function say(q){add(q,'u');setTimeout(()=>add(ans(q),'b'),450)}
add("Salom! Men sizning AI yordamchingizman. Sizga portfolio, loyihalar, web dasturlash va Muxammad Ali haqida ma’lumot berishda yordam beraman.",'b');
["Muxammad Ali kim?","Qanday xizmatlar bor?","Loyihalarni ko‘rsat","Qaysi texnologiyalarni biladi?","Bog‘lanish"].forEach(q=>{const b=document.createElement('button');b.textContent=q;b.onclick=()=>say(q);$('#qk').append(b)});
$('#fab').onclick=()=>win.classList.toggle('open');
$('#cf').onsubmit=e=>{e.preventDefault();const v=$('#ci').value.trim();if(v){say(v);$('#ci').value=''}};
$('#cform').onsubmit=e=>{e.preventDefault();$('#ok').textContent='Xabaringiz yuborildi. Tez orada javob beraman!';e.target.reset()};