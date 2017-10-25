function animate(obj, json, fn) {
	clearInterval(obj.timer);
	var len = 0;
	for(var attr in json) {
		if(attr != "opacity") {
			len++;
		}

	}
	var cal = 0;
	obj.timer = setInterval(function() {
		cal = 0;
		for(var attr in json) {
			if(attr == "opacity") {
				setStyle(obj, attr, json[attr]);
			} else {
				var current = parseInt(getStyle(obj, attr));
				var speed = (json[attr] - current) / 10;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				setStyle(obj, attr, speed + current);
			}

			if(!speed) {
				cal++;
			}
		}

		if(cal == len) {
			clearInterval(obj.timer);
			fn ? fn() : 0;
		}

	}, 30);
}

function MultAttranimate(objs, attr, target, moveSpeed) {
	clearInterval(objs.timer);
	objs.flag = false;
	objs.timer = setInterval(function() {
		for(var i = 0; i < objs.length; i++) {
			var obj = objs[i];
			var current = parseInt(getStyle(obj, attr));
			var speed = (target - current) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			setStyle(obj, attr, speed + current);
			if(!speed) {
				clearInterval(objs.timer);
				objs.flag = true;
			}
		}

	}, moveSpeed);
}

function multAnimate(objs, jsons, moveSpeed) {
	clearInterval(objs.timer);
	if(!moveSpeed) {
		moveSpeed = 10;
	}
	var flag = true;
	objs.timer = setInterval(function() {
		flag = true;
		for(var i = 0; i < objs.length; i++) {
			var obj = objs[i];
			for(var j = 0; j < jsons.length; j++) {
				var json = jsons[i];
				for(var attr in json) {
					if(attr == "opacity") {
						setStyle(obj, attr, json[attr]);
					} else {
						var current = parseInt(getStyle(obj, attr));
						var speed = (json[attr] - current) / moveSpeed;
						speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
						setStyle(obj, attr, speed + current);
					}

					if(current != json[attr]) {
						flag = false;
					}
				}
			}
		}

		if(flag) {
			clearInterval(objs.timer);
		}
	}, 30);
}

function getStyle(obj, attr) {
	var sty;
	if(window.getComputedStyle) {
		sty = window.getComputedStyle(obj, null)[attr];

	} else {
		sty = obj.currentStyle[attr];

	}
	return sty;
}

function setStyle(obj, attr, value) {
	if(attr == "opacity") {
		obj.style["opacity"] = value;
		if(obj.style.opacity) {
			obj.style.opacity = value;
		} else {
			obj.style.filter = "alpha(opacity=" + value * 100 + ")";
		}

	} else if(attr == "zIndex") {
		obj.style.zIndex = value
	} else {

		obj.style[attr] = value + "px";
	}

}

function $(val, flag) {
	if(flag) {
		return document.querySelectorAll(val);
	} else {
		return document.querySelector(val);
	}

}