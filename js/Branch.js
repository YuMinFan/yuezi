

//动态创建li
function init() {
    var oUl = document.querySelector(".branch-context .branch-Img ul");
    var imgArr = ['Branch_03.jpg','Branch_05.jpg','Branch_09.jpg','Branch_10.jpg','Branch_13.jpg','Branch_14.jpg'];
    var textArr = ['云山店-度假悠养型', '西关店-精品优养型', '越秀店-保健安养型', '东莞店-清馨舒养型', '普宁店-私享静养型', '萝岗店-雅致安养型'];
    for(var i=0; i<imgArr.length; i++){
        var Li = document.createElement("li");
        Li.innerHTML = "<a href='#'><img src='img/"+imgArr[i]+"' alt=''><p>"+textArr[i]+"</p></a>" ;
        oUl.appendChild(Li);
    }
}

