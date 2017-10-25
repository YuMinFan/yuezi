window.onload = function() {

	(function() {
		var html = document.documentElement;
		var hWidth = html.getBoundingClientRect().width;
		html.style.fontSize = Math.floor(hWidth / 20) + "px";
	})();

	//初始化图片
	(function() {
		var oUl = $(".shop-show-box ul");
		var jsons = {
			branch: [{
				href: "yunShan.html",
				img: "img/yunshang.png",
				name: "云山店-度假悠养型"
			}, {
				href: "yueXiu.html",
				img: "img/yuexiu.png",
				name: "越秀店-保健安养型"
			}, {
				href: "luoGang.html",
				img: "img/luogang.png",
				name: "萝岗店-雅致安养型"
			}, {
				href: "puNing.html",
				img: "img/puning.png",
				name: "普宁店-私享静养型"
			}, {
				href: "dongGuan.html",
				img: "img/dongguan.png",
				name: "东莞店-清馨舒养型"
			}, {
				href: "xiGuan.html",
				img: "img/xiguan.png",
				name: "西关店-精品优养型"
			}],

			listPage: [{
				href: "article.html",
				text: "美女辣妈 * 入住仕馨真的是明智",
				time: "2017-05-19"
			}, {
				href: "article.html",
				text: "美女辣妈 * 入住仕馨真的是明智",
				time: "2017-05-19"
			}, {
				href: "article.html",
				text: "美女辣妈 * 入住仕馨真的是明智",
				time: "2017-05-19"
			}, {
				href: "article.html",
				text: "美女辣妈 * 入住仕馨真的是明智",
				time: "2017-05-19"
			}, {
				href: "article.html",
				text: "美女辣妈 * 入住仕馨真的是明智",
				time: "2017-05-19"
			}, {
				href: "article.html",
				text: "美女辣妈 * 入住仕馨真的是明智",
				time: "2017-05-19"
			}, {
				href: "article.html",
				text: "美女辣妈 * 入住仕馨真的是明智",
				time: "2017-05-19"
			}, {
				href: "article.html",
				text: "美女辣妈 * 入住仕馨真的是明智",
				time: "2017-05-19"
			}]
		}

		for(var i = 0; i < jsons.branch.length; i++) {
			var oLi = '<li>' +
				'<a href=' + jsons.branch[i].href + '>' +
				'<img src=' + jsons.branch[i].img + ' />' +
				'<p>' + jsons.branch[i].name + '</p>' +
				'</a>' +
				'</li>';

			oUl.innerHTML += oLi;
		}

		var oListPage = $(".lists-page ul");

		for(var i = 0; i < jsons.listPage.length; i++) {
			var oLi = '<li>' +
				"<a href= " + jsons.listPage[i].href + ">" +
				'<div class="dot">' +
				'</div>' +
				"<div class='list-left'>" + jsons.listPage[i].text + "</div>" +
				'<div class="list-right floatRight">' +
				'<div class="list-line"></div>' +
				'<p>' + jsons.listPage[i].time + '</p></div></a></li>';

			oListPage.innerHTML += oLi;
		}

	})();

	//轮播

	(function() {
		var html = document.documentElement;
		var hWidth = html.getBoundingClientRect().width;
		var oLi = $(".shop-show-box ul li", true);
		var oUl = $(".shop-show-box");
		var rec_width = parseInt(oLi[0].offsetWidth);
		var marginWidth = 2 * parseInt(getStyle(oLi[0], "margin-left"));
		var width = parseInt(rec_width + marginWidth);
		var timer = null;
		var flag = "left";

		var jsons = [];

		var cal = -Math.floor(oLi.length / 3);

		for(var i = 0; i < oLi.length; i++, cal++) {
			jsons[i] = {
				left: cal * width,
				flag: 6

			}

		}

		jsons[0].flag = 4;
		jsons[oLi.length - 1].flag = 4;

		init();
		autoPlay();

		var startX, endX;
		var moveFlag = false;
		var judgeX = true;

		for(var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].addEventListener("touchstart", function(ev) {
				var oEvent = ev || event;
				startX = oEvent.changedTouches[0].clientX - parseInt(getStyle(this, "left"));
			}, false);

			oLi[i].addEventListener("touchmove", function(ev) {

				if(!judgeX) {
					return;
				}

				var oEvent = ev || event;
				endX = oEvent.changedTouches[0].clientX - parseInt(getStyle(this, "left"));
				if(!moveFlag) {
					if(Math.abs(endX - startX) > 3) {
				
						judgeX = true;
					} else {
						judgeX = false;
						return;
					}
					moveFlag = true;
				}
				oEvent.preventDefault();
				clearInterval(timer);
				oEvent.preventDefault();
				var changeDis = endX - startX;

				if(changeDis > hWidth || changeDis < -hWidth) {
					return;
				}

				if(changeDis) {

					if(judge()) {
						adjust(flag);
					}
					flag = changeDis > 0 ? "right" : "left";
					for(var i = 0; i < oLi.length; i++) {

						setStyle(oLi[i], "left", parseInt(getStyle(oLi[i], "left")) + parseInt(changeDis));

					}

				}

			}, false);

			oLi[i].addEventListener("touchend", function(ev) {
				var oEvent = ev || event;
				oEvent.cancelBubble = true;
				var dir = endX - startX;
				if(dir) {
					dir > 0 ? flag = "right" : flag = "left";
				}
				moveFlag = false;
				judgeX = true;
				autoPlay();
			}, false);
		}

		function init() {
			for(var i = 0; i < oLi.length; i++) {
				setStyle(oLi[i], "left", jsons[i].left);
			}
		}

		function autoPlay() {

			var speed = 1;
			clearInterval(timer);
			timer = setInterval(function() {
				flag == "left" ? speed = -1 : speed = 1;
				if(!judge()) {
					for(var i = 0; i < oLi.length; i++) {

						setStyle(oLi[i], "left", parseInt(getStyle(oLi[i], "left")) + speed);

					}

				} else {
					adjust(flag);
				}

			}, 88);
		}

		function judge() {
			for(var i = 0; i < oLi.length; i++) {
				if(jsons[i].flag != 4) {
					var currentLeft = parseInt(getStyle(oLi[i], "left"));
					var preIndex = i == 0 ? oLi.length - 1 : i - 1;
					var postIndex = i == oLi.length - 1 ? 0 : i + 1;
					var preLeft = jsons[preIndex].left;
					var postLeft = jsons[postIndex].left;
					if(currentLeft <= preLeft || currentLeft >= postLeft) {
						return true;
					}

				}
			}
			return false;
		}

		function adjust(flag) {

			var turnLeft;
			for(var i = 0; i < oLi.length; i++) {
				var currentLeft = parseInt(getStyle(oLi[i], "left"));
				if(jsons[i].left == width) {
					turnLeft = flag == "left" ? currentLeft : currentLeft - 2 * width;
					break;
				}
			}

			if(flag == "left") {
				var tmp = jsons[jsons.length - 1];
				for(var i = jsons.length - 1; i > 0; i--) {
					jsons[i] = jsons[i - 1];
				}
				jsons[0] = tmp;
			} else {
				var tmp = jsons[0];
				for(var i = 0; i < jsons.length - 1; i++) {
					jsons[i] = jsons[i + 1];
				}
				jsons[jsons.length - 1] = tmp;
			}

			if(isNaN(turnLeft) || Math.abs(turnLeft) > 100) {
				turnLeft = 0;

			}

			for(var i = 0; i < jsons.length; i++) {
				setStyle(oLi[i], "left", jsons[i].left + turnLeft);
			}

		}
	})();

	//专业月子服务
	(function() {
		var len = 8;
		var oServiceCLick = $(".service-click", true);
		var hrefs = ["careSystem.html", "healthCare.html", "rehabilitationSystem.html", "nutritionSystem.html", "plasticBeauty.html", "intelligenceDevelopment.html", "defenseSystem.html", "securitySystem.html"];
		var oImg = $(".month-img", true);
		for(var i = 1; i <= len; i++) {
			oImg[i - 1].setAttribute("src", "img/mon" + i + ".jpg");
			oServiceCLick[i - 1].setAttribute("href", hrefs[i - 1]);
		}
	})();

	//点击 鼠标移入移出情况
	(function() {
		var oClickOne = $(".click-one", true);
		var oClickTwo = $(".button-two", true);
		var oListLeft = $(".list-left", true);
		var oDot = $(".dot", true);

		for(var i = 0; i < oClickOne.length; i++) {
			oClickOne[i].addEventListener("touchstart", function() {
				for(var i = 0; i < oClickOne.length; i++) {
					oClickOne[i].style.background = "#74c5be";
				}
				this.style.background = "#ee8fb3";
			}, false);
		}

		for(var i = 0; i < oClickTwo.length; i++) {
			oClickTwo[i].addEventListener("touchstart", function() {
				for(var i = 0; i < oClickTwo.length; i++) {
					oClickTwo[i].style.background = "#74C5BE";
				}
				this.style.background = "#ee8fb3";
			}, false);
		}

		oClickOne[0].style.background = "#EE8FB3";
		oClickTwo[0].style.background = "#EE8FB3";

		for(var i = 0; i < oListLeft.length; i++) {
			oListLeft[i].index = i;
			oListLeft[i].addEventListener("touchstart", function() {
				for(var i = 0; i < oListLeft.length; i++) {
					oListLeft[i].style.color = "#838385";
					oDot[i].style.background = "#74C5BE";
				}
				this.style.color = "#EE8fb3";
				oDot[this.index].style.background = "#EE8FB3";

			}, false);
		}

	})();

}