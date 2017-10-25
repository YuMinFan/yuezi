/**
 * Created by 123 on 2017/7/22.
 */
//选项卡
function tab(obj,k,textArr,smallImgArr,bigImgArr) {
    var room = document.querySelector(".room");
    var roomText = room.querySelectorAll(".roomText p");
    var roomBigImg = room.querySelectorAll(".roomBigImg");
    /*    var roomSmallImgUl = room.querySelectorAll(".room-smallImg Ul");*/
    /*var roomSmallImgLi = roomSmallImgUl[i].children;*/
    /*console.log(obj);*/
    /* for(var k=0;k<roomSmallImgUl.length;k++){*/
    var length = smallImgArr.length / 2;//单个ul图片个数
    for (var i = k * length; i < length * (k + 1); i++) {
        var newRoomSmallImgLi = document.createElement("li");
        newRoomSmallImgLi.innerHTML = "<img src='img/" + smallImgArr[i] + "' alt=''/>";
        /* console.log(i);*/
        obj.appendChild(newRoomSmallImgLi);
    }
    var roomSmallImgLi = obj.children;
    for (var i = 0; i < length ; i++) {
        /* console.log(roomSmallImgLi)*/
        roomSmallImgLi[i].index = i+k*(length);
        roomSmallImgLi[i].onclick = function () {
            /*console.log(k);*/
            roomText[k].innerText = textArr[this.index];
            roomText[k].parentNode.style.marginTop = -roomText[k].parentNode.offsetHeight / 2 + "px";
            roomBigImg[k].innerHTML = "<img src='img/" + bigImgArr[this.index] + "' alt=''>";
        }
    }


}
function selfAdaption() {
    var html = document.documentElement;
    var hWidth = html.getBoundingClientRect().width;
    html.style.fontSize = Math.floor(hWidth / 20) + "px";
    var outdoor = document.querySelector(".outdoor");
    var oBox = outdoor.querySelector(".box");
    var outdoorImg = outdoor.querySelector(".outdoorImg");
    outdoorImg.style.top = oBox.offsetHeight - outdoorImg.offsetHeight / 6 + "px";
    var room = document.querySelector(".room");
    var roomText = room.querySelectorAll(".roomText");
    for (var i = 0; i < roomText.length; i++) {
        roomText[i].style.marginTop = -roomText[i].offsetHeight / 2 + "px";
    }
    var roomSmallImgUl = room.querySelectorAll(".room-smallImg Ul");
    for (var i = 0; i < roomSmallImgUl.length; i++) {
        /* roomSmallImgUl[i].style.maxWidth=hWidth+"px";*/
        var roomSmallImgLi = roomSmallImgUl[i].children;
    /*    console.log( roomSmallImgUl[i]);*/
        // console.log(parseFloat(getStyle(roomSmallImgLi[1],'width')))/*+","+parseFloat(getStyle(roomSmallImgLi[1],'marginLeft')))*/;
        var ulWidth = roomSmallImgLi.length * parseFloat(getStyle(roomSmallImgLi[i], 'width')) + (roomSmallImgLi.length - 1) * parseFloat(getStyle(roomSmallImgLi[1], 'marginLeft'));
        if (ulWidth >= hWidth)
            ulWidth = hWidth;
        roomSmallImgUl[i].style.width = ulWidth + 'px';

    }
}