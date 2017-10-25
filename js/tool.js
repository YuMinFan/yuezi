/**
 * Created by Ace on 2017/7/21.
 */

(function(){
    var html = document.documentElement;
    var hWidth = html.getBoundingClientRect().width;
    html.style.fontSize = Math.floor(hWidth/20) + "px";
})();


//改变图片数组
function change_psImg(dir_name,img_num){
    var psImg=[];
    for(var i=0;i<img_num;i++) {
        psImg[i] = "img/" + dir_name + "/" + i + ".jpg";
    }
    return psImg;
}

//插入li
function insert_li(obj,img_arr,txt_arr, hrefs){
    for(var i=0;i<img_arr.length;i++){
        var _li=document.createElement("li");
        var _img=document.createElement("img");
        _img.src=img_arr[i];
        if(txt_arr){
            var _p=document.createElement("p");
            _p.innerText=txt_arr[i];
            _li.appendChild(_img);
            _li.appendChild(_p);
        }
        if(hrefs){
            var _a=document.createElement("a");
            _a.href = hrefs[i];
            _a.appendChild(_img);
            _li.appendChild(_a);
            _a.style.display = "inline-block";
        }
        obj.appendChild(_li);
    }
}

//添加事件绑定
function addEvent(obj,type,fn){
    obj.addEventListener(type,fn,false);
}

//设置显示
function show(obj){
    obj.style.display='block';
}

//设置隐藏
function hide(obj){
    obj.style.display='none';
}

//设置css
function css(obj, attr, value) {
    if(attr == "opacity") {
        obj.style["opacity"] = value;
        if(obj.style.opacity) {
            obj.style.opacity = value;
        } else {
            obj.style.filter = "alpha(opacity=" + value * 100 + ")";
        }
    } else {
        obj.style[attr] = value;
    }
}

//判断class是否存在
function hasClass(obj,className){
    return obj.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
}

//添加class
function addClass(obj,className){
    if(!hasClass(obj,className)){
        obj.className+=' '+className;
    }
}

//移除class
function removeClass(obj,className){
    if(hasClass(obj,className)){
        obj.className=obj.className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),' ');
    }
}