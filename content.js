var img = document.getElementsByClassName("tItemImg");
var img2 = document.getElementsByClassName("oItemImg");
var buttons = document.getElementsByClassName("button");
var popout = document.getElementById("offerPop");
var news = document.getElementById("newsHolder");
var streams = document.getElementById("streamContainer");
var menu = document.getElementsByClassName("menuItem");
var profile = document.getElementById('profileImg');
var img_to_replace = "https://assets.krunker.io/textures/previews/weapons/weapon_8_m0_79.png";
var img_replacement = "https://assets.krunker.io/textures/previews/melee/melee_10_2.png";
var build = "";
var twitch = true;

//Get newest build method
if (profile != null) {
	window.setTimeout(function(){
		var imgsrc = profile.src;
		build = imgsrc.slice(53);
	}, 2000);
}

function updateImages() {
	
	if (window.location.href == "https://krunker.io/social.html?p=itemsales&i=2362") {
		window.close();
	}
	
	if (document.getElementById("leftYTBox") != null) {
		document.getElementById("leftYTBox").style.display = "none";
		if (document.getElementById("recYTVid") != null && twitch == true) {
			document.getElementById("recYTVid").src = "https://www.kipstudios.net/assets/images/favicon.ico";
		}
		document.getElementById("aHolder").style.display = "none";
		document.getElementById("rightABox").style.display = "none";
	}
	
	for (var i = 0; i < img2.length; i++) {
	  if (img2[i].src == img_to_replace + build) {
		  img2[i].src = img_replacement;
		  var par2 = img2[i].parentNode;
		  var border2 = par2.getAttribute("style");
		  if (border2 == "border: 2px solid #b2f252;") {
			  par2.style = "border: 2px solid #292929;";
			  par2.setAttribute("data-index", "1735");
		  }
	  }
	}
	
	for (var i = 0; i < img.length; i++) {
	  if (popout.style.display != "none") {
		  if (img[i].src == img_to_replace + build) {
			  img[i].src = img_replacement;
			  var par = img[i].parentNode;
			  var border = par.getAttribute("style");
			  if (border == "border: 2px solid #b2f252;") {
				  par.style = "border: 2px solid #292929;";
				  par.setAttribute("onclick", "openSales(1735)");
			  }
			  var child = par.childNodes;
			  if (child[1].innerHTML == "Love") {
				  child[1].innerHTML = "Redux";
				  var estvalue = document.getElementsByClassName('tHolderR')[0].childNodes;
				  estvalue[2].innerHTML = "Est. Value <span style='color:#fff'>110,000</span> KR";
			  }
		  }
	  }
	}
	
}

function updateCSS() {
	//UI Customization
	for (var i = 0; i < buttons.length; i++) {
		if (buttons != null) {
			buttons[i].classList.remove("buttonG");
			buttons[i].classList.remove("buttonPI");
			buttons[i].classList.remove("buttonP");
			buttons[i].classList.add("buttonR");
		}
	}
	
	for (var i = 0; i < menu.length; i++) {
		if (menu != null) {
			menu[i].setAttribute("style", "background: rgba(0,0,0,0);");
		}
	}
	
	if (news != null) {
		news.setAttribute("style", "display: none;");
		streams.setAttribute("style", "display: none;");
		document.getElementById("aContainer").remove();
		document.getElementById("mLevelCont").setAttribute("style", "background: red;");
		document.getElementById("mainLogo").src = "https://krunker.io/img/logo_4.png";
		document.getElementById("seasonLabel").remove();
	}
}

updateCSS();
updateImages();
var bruh = setInterval(updateImages, 100);
console.log("started");
