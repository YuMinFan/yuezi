window.onload = function() {
	(function() {
		var oClick = $(".buttons", true);
		oClick[0].style.background = "#ee8fb3";
		var commenter = [{
			img: "img/comment-icon.jpg",
			starImg: "img/star.png",
			content: "28天的世界一晃而过，在这里育婴室5楼的责任护士子晴，绍兴， 冬梅对我们宝宝的贴心照顾，让我......"
		}, {
			img: "img/comment-icon2.png",
			starImg: "img/star.png",
			content: "首先非常感谢仕馨的护士，这份工不容易啊。我是第二次入住了，其实不算说仕馨好到非他不可，只是其他的不敢试..."
		}, {
			img: "img/comment-icon3.jpg",
			starImg: "img/star.png",
			content: "明天就离开仕馨回家了，我也来点评一下吧。这好像是我第一次主动写点评。来月子中心坐月子，应该是我...."
		}, {
			img: "img/comment-icon4.jpg",
			starImg: "img/star.png",
			content: "走了很多家月子会所，对比了一下，最后还是选择了仕馨月子会所（越秀店），没有别的，在广州这店属于老牌子了....."
		}, {
			img: "img/comment-icon5.jpg",
			starImg: "img/star.png",
			content: "仕馨月子会所，房间都有独立空调常用的家具也一应俱全，走进去还是感觉蛮温馨的，毕竟花了钱的....."
		}, {
			img: "img/comment-icon6.jpg",
			starImg: "img/star.png",
			content: "28天的世界一晃而过，在这里育婴室5楼的责任护士子晴，绍兴， 冬梅对我们宝宝的贴心照顾，让我......"
		},{
			img: "img/comment-icon7.jpg",
			starImg: "img/star.png",
			content: "28天的世界一晃而过，在这里育婴室5楼的责任护士子晴，绍兴， 冬梅对我们宝宝的贴心照顾，让我......"
		},{
			img: "img/comment-icon8.jpg",
			starImg: "img/star.png",
			content: "28天的世界一晃而过，在这里育婴室5楼的责任护士子晴，绍兴， 冬梅对我们宝宝的贴心照顾，让我......"
		},{
			img: "img/comment-icon.jpg",
			starImg: "img/star.png",
			content: "28天的世界一晃而过，在这里育婴室5楼的责任护士子晴，绍兴， 冬梅对我们宝宝的贴心照顾，让我......"
		},{
			img: "img/comment-icon10.jpg",
			starImg: "img/star.png",
			content: "28天的世界一晃而过，在这里育婴室5楼的责任护士子晴，绍兴， 冬梅对我们宝宝的贴心照顾，让我......"
		},{
			img: "img/comment-icon11.jpg",
			starImg: "img/star.png",
			content: "28天的世界一晃而过，在这里育婴室5楼的责任护士子晴，绍兴， 冬梅对我们宝宝的贴心照顾，让我......"
		}];
		var jsons = [];

		for(var i = 0; i < oClick.length; i++) {
			oClick[i].index = i;
			oClick[i].addEventListener("touchstart", function() {
				for(var i = 0; i < oClick.length; i++){
					oClick[i].style.background = "#74C5BE";
				}
				this.style.background = "#ee8fb3";
			}, false);
		}

		for(var i = 0; i < 123; i++) {
			var obj = {
				img: commenter[i%commenter.length].img,
				starImg: commenter[i%commenter.length].starImg,
				content: commenter[i%commenter.length].content
			};

			jsons[i] = obj;

		}

		addComments(jsons);
		initList();

		var oMinLeftBtn = $(".min-left-btn");
		var oMaxRightBtn = $(".max-right-btn");
		var oLeftBtn = $(".left-btn");
		var oRightBtn = $(".right-btn");
		var oBtn = $(".btns a", true);
		var currentIndex = 0;

		oMinLeftBtn.addEventListener("touchstart", function() {
			adjustBtn(currentIndex = 0, oBtn);
		}, false);

		oMaxRightBtn.addEventListener("touchstart", function() {
			adjustBtn(currentIndex = oBtn.length - 1, oBtn);
		}, false);

		oLeftBtn.addEventListener("touchstart", function() {
			if(currentIndex - 1 < 0) {
				return;
			}
			adjustBtn(--currentIndex, oBtn);
		}, false);

		oRightBtn.addEventListener("touchstart", function() {
			if(currentIndex + 1 >= oBtn.length) {
				return;
			}
			adjustBtn(++currentIndex, oBtn);
		}, false);

		function initList() {
			var oUl = $(".comment-box ul", true);
			var oBtnBox = $(".btns");

			for(var i = 0; i < oUl.length; i++) {
				oUl[i].style.display = "none";
				var oBtn = document.createElement("a");
				oBtn.setAttribute("class", "init-list-btn");
				oBtn.innerHTML = i + 1;
				oBtn.index = i + 1;
				oBtnBox.appendChild(oBtn);

			}
			var oBtn = $(".btns a", true);

			adjustBtn(0, oBtn);

			for(var i = 0; i < oBtn.length; i++) {
				oBtn[i].addEventListener("touchstart", function() {
					adjustBtn(this.index - 1, oBtn);
					for(var i = 0; i < oUl.length; i++) {
						oUl[i].style.display = "none";
					}

					oUl[this.index - 1].style.display = "block";
					currentIndex = this.index - 1;
				}, false);
			}

		}

		function adjustBtn(index, oBtn) {
			var oUl = $(".comment-box ul", true);
			for(var i = 0; i < oBtn.length; i++) {
				oBtn[i].setAttribute("class", "init-list-btn");
				oUl[i].style.display = "none";

				if(i < index || i >= index + 4) {
					oBtn[i].style.display = "none";
				} else {
					oBtn[i].style.display = "inline-block";
				}
				oBtn[i].innerHTML = oBtn[i].index;
			}

			if(index + 4 < oBtn.length) {
				oBtn[index + 3].innerHTML = "...";
				oBtn[oBtn.length - 1].style.display = "inline-block";
			}
			var cal = index + 4 - oBtn.length;

			for(var i = index - 1; cal > 0; cal--) {
				if(i < 0) {
					break;
				}
				oBtn[i--].style.display = "inline-block";
			}

			oBtn[index].setAttribute("class", "click-list-btn");
			oUl[index].style.display = "block";

		}

		function addComments(jsons) {
			var oCommentBox = $(".comment-box");
			var oUl = null;
			var cal = 0;
			for(var i = 0; i < jsons.length; i++) {
				if(i % 8 == 0) {
					oUl = document.createElement("ul");
					oCommentBox.appendChild(oUl);

				}

				var oLi = '<li>' +
					'<img src="' + jsons[i].img + '" class="comment-icon" />' +
					'<div class="comment-right floatLeft">' +
					'<div class="star-line">' +
					'<img src="' + jsons[i].starImg + '" />' +
					'</div>' +
					'<div class="comment-content">' +
					jsons[i].content +
					'</div>' +
					" </div> " +
					"</li>";
				oUl.innerHTML += oLi;
			}

		}

	})();
}