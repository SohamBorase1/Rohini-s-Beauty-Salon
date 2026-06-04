function openService(type){

let html = "";

if(type==="facial"){
html=`
<h2>✨ Facial Services</h2>
<p>Gold Facial - ₹599</p>
<p>Diamond Facial - ₹999</p>
<p>Fruit Facial - ₹499</p>
`;
}

if(type==="hair"){
html=`
<h2>💇 Hair Services</h2>
<p>Hair Cut - ₹299</p>
<p>Hair Spa - ₹899</p>
<p>Hair Color - ₹1499</p>
`;
}

if(type==="makeup"){
html=`
<h2>💄 Makeup</h2>
<p>Party Makeup - ₹1999</p>
<p>Bridal Makeup - ₹6999</p>
`;
}

if(type==="threading"){
html=`
<h2>🧵 Threading</h2>
<p>Eyebrow - ₹40</p>
<p>Upper Lip - ₹30</p>
<p>Forehead - ₹50</p>
`;
}

if(type==="waxing"){
html=`
<h2>🕯 Waxing</h2>
<p>Full Hand - ₹299</p>
<p>Full Leg - ₹499</p>
<p>Full Body - ₹1999</p>
`;
}

document.getElementById("popupBody").innerHTML=html;
document.getElementById("popup").style.display="block";

}

function closeService(){
document.getElementById("popup").style.display="none";
}