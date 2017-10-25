/**
 * Created by whisper on 2017/7/22.
 */

window.onload = function() {
	var html = document.documentElement;
	var hWidth = html.getBoundingClientRect().width;
	html.style.fontSize = Math.floor(hWidth / 20) + "px";

	var startX = 0,
		startM = 0,
		endX = 0,
		navL = 0;
	window.onresize = function() {
		var html = document.documentElement;
		var hWidth = html.getBoundingClientRect().width;
		html.style.fontSize = hWidth / 20 + "px";
		touchMove();
	};

	touchMove();

	function touchMove() {
		/*触摸拖动*/
		var oUl = document.querySelector(".about .about_problems .about_problems_img ul");
		var Img = document.querySelectorAll(".about .about_problems .about_problems_img ul li img");
		var moveFlag = false;
		var judgeX = true;

		startX = 0, startM = 0, endX = 0, navL = 0;
		var deviceWidth = document.body.clientWidth; //屏幕宽度

		for(var i = 0; i < Img.length; i++) {
			Img[i].index = i;
			Img[i].onclick = function() {
				localStorage.setItem("key", this.index);
			}
		}

		oUl.addEventListener("touchstart", start, false); //注册事件
		oUl.addEventListener("touchmove", move, false); //注册事件
		oUl.addEventListener("touchend", function() {
			judgeX = true;
			moveFlag = false;
		}, false);

		//手指按下
		function start(ev) {
			var oEvent = ev || event;

			oEvent.cancelBubble = true;
			startX = oEvent.targetTouches[0].clientX;
			navL = oUl.offsetLeft;
			if(navL >= 0) {
				oUl.style.left = 0 + "px";
			}

		}

		//手指移动
		function move(ev) {

			if(!judgeX) {
				return;
			}

			var oEvent = ev || event;
			oEvent.cancelBubble = true;
			startM = oEvent.targetTouches[0].clientX;
			endX = startM - startX;

			if(!moveFlag) {
				if(Math.abs(endX) > 10) {
					judgeX = true;
				} else {
					judgeX = false;
					return;
				}
			}
			oEvent.preventDefault();

			oUl.style.left = endX + navL + "px";

			if(oUl.offsetLeft >= 0) {
				oUl.style.left = 0 + "px";
			} else if(oUl.offsetLeft <= deviceWidth - oUl.offsetWidth) {
				oUl.style.left = (deviceWidth - 10 - oUl.offsetWidth) + "px";
			}

		}

	}

	var about_contact_content = document.querySelector(".about_contact_content");
	var btn = about_contact_content.querySelectorAll(".about_contact_content_top span");
	var aDiv = about_contact_content.children;
	initDiv();

	function initDiv() {
		for(var i = 1; i < aDiv.length; i++) {
			aDiv[i].style.display = "none";
		}
	}
	aDiv[1].style.display = "block";
	for(var i = 0; i < btn.length; i++) {
		btn[i].index = i;
		btn[i].onclick = function() {
			initDiv();
			for(var i = 0; i < btn.length; i++) {
				btn[i].style.backgroundColor = "#74c5be";
			}

			aDiv[this.index + 1].style.display = "block";
			if(this.index + 1 == 2) {
				touchMoveBottom();

			}
			this.style.backgroundColor = "#ed85ad";
		}

	}
	if(aDiv[2].style.display == "block") {}

	function touchMoveBottom() {
		/*触摸拖动*/
		var about_Branch = document.querySelector(".about .about_Branch");
		var oUl = about_Branch.querySelector("ul");

		about_Branch.addEventListener("touchstart", start, true); //注册事件
		about_Branch.addEventListener("touchmove", move, true); //注册事件

		//手指按下
		function start(ev) {
			var oEvent = ev || event;
			ev.cancelBubble = true;
			startX = oEvent.targetTouches[0].clientY;
			navL = oUl.offsetTop;
			if(navL >= 0) {
				oUl.style.top = 0 + "px";
			}
		}

		//手指移动
		function move(ev) {
			var oEvent = ev || event;
			ev.cancelBubble = true;
			startM = oEvent.targetTouches[0].clientY;
			endX = startM - startX;
			if(navL + endX >= 0) {
				oUl.style.top = 0 + "px";
			} else if(navL + endX <= about_Branch.offsetHeight - oUl.offsetHeight) {
				oUl.style.top = (about_Branch.offsetHeight - oUl.offsetHeight) + "px";
				
			} else {
				oEvent.preventDefault();
				oUl.style.top = endX + navL + "px";

			}

		}

	}
}