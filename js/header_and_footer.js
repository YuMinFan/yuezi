(function() {

	var oMenuBtn = $(".header-right a");
	var oMenu = $(".menu");
	var oMenuImg = $(".header-right a img");
	if(oMenuBtn) {
		oMenuBtn.addEventListener("touchstart", function() {

			if(oMenuImg.getAttribute("src") == "img/menuIcon.jpg") {
				oMenu.style.display = "block";
				oMenuImg.setAttribute("src", "img/close.png");
			} else {
				oMenu.style.display = "none";
				oMenuImg.setAttribute("src", "img/menuIcon.jpg");
			}

		})
	}

})();

(function() {
	var oNavBtn = $(".footer-nav");
	var oFooterShow = $(".footer-show");
	var oFooterNavClose = $(".footer-nav-close");
	var showFlag = false;
	if(oNavBtn) {
		oNavBtn.addEventListener("touchstart", function(ev) {
			var oEvent = ev || event;
			oEvent.cancelBubble = true;
			if(showFlag){
				oFooterShow.style.display = "none";
			}else{
				oFooterShow.style.display = "block";
			}
			showFlag = !showFlag;

		}, false);
		
		oFooterShow.addEventListener("touchstart", function(ev){
			var oEvent = ev || event;
			oEvent.cancelBubble = true;
			
		}, false);
		
		oFooterNavClose.addEventListener("touchstart", function(ev){
			var oEvent = ev || event;
			oEvent.cancelBubble = true;
			oFooterShow.style.display = "none";
			showFlag = false;
			oEvent.preventDefault();
		}, false);

		document.addEventListener("touchstart", function(ev) {
			if(!showFlag) {
				return;
			}
			oFooterShow.style.display = "none";
			showFlag = false;
		}, false);
	}

})();

(function() {
	var html = document.documentElement;
	var hWidth = html.getBoundingClientRect().width;
	html.style.fontSize = Math.floor(hWidth / 20) + "px";

})();