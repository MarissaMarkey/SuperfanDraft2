var s=document.getElementById("sand")
var b=document.getElementById("beach")
var f=document.getElementById("forest")
var c=document.getElementById("city")
var m=document.getElementById("mainimg")

function changeSand() {
	s.src= "images/sandunes2.png"
	b.src = "images/jumpingsandunes.png";
	f.src = "images/dunebuggy.png";
	c.src = "images/horses.png";
	m.src = "images/oregonsand.png";
	document.getElementById("narrowcol2").classList.add("sandcolor");
}

function changeForest() {
	s.src= "images/waterfall.png"
	b.src = "images/oregonlake.png";
	f.src = "images/bigforest.png";
	c.src = "images/foreststreet.png";
	m.src = "images/oregonforest.png";
}


function changeBeach() {
	s.src= "images/lighthouse.jpg"
	b.src = "images/oregonbeachjump.png";
	f.src = "images/beach.png";
	c.src = "images/beachtrees.png";
	m.src = "images/oregonbeach.png";
}

function changeCity() {
	s.src= "images/portland2.jpg"
	b.src = "images/salem.jfif";
	f.src = "images/street.jpg";
	c.src = "images/portland.jpg";
}


