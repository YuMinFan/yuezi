/**
 * Created by whisper on 2017/7/23.
 */
window.onload = function () {
    // console.log(localStorage.getItem("key"))
    init();
    window.onresize = function () {
        init();
    };

    //自适应
    function init() {
        var html = document.documentElement;
        var hWidth = html.getBoundingClientRect().width;
        html.style.fontSize = Math.floor(hWidth / 20) + "px";
    }

    var problem_title = document.querySelectorAll(".problem .problem_title .problem_title_top");
    var problem_content = document.querySelectorAll(".problem_content");
    console.log(problem_content)
    for(var i = 0 ; i < problem_title.length ; i++){
        problem_title[i].index = i;
        problem_title[i].flag = true;
        styleInit(i);
        function styleInit(i) {
            if(localStorage.getItem("key") == i){
                problem_title[i].style.backgroundColor = "#ed85ad";
                problem_title[i].querySelector("img").style.transform = "rotate(0deg)";
                problem_content[i].style.display = "block";
                problem_title[i].flag = false;
            }
        }
        problem_title[i].onclick = function () {
            for(var i = 0 ; i < problem_title.length ; i++){
                problem_title[i].style.backgroundColor = "#74c5be";
                problem_title[i].querySelector("img").style.transform = "rotate(-90deg)";
                problem_content[i].style.display = "none";
                if(this.index != i)
                    problem_title[i].flag = true;

            }
            if(this.flag){
                this.style.backgroundColor = "#ed85ad";
                this.querySelector("img").style.transform = "rotate(0deg)";
                this.flag = false;
                problem_content[this.index].style.display = "block";
            }else{
                this.style.backgroundColor = "#74c5be";
                this.querySelector("img").style.transform = "rotate(-90deg)";
                this.flag = true;
                problem_content[this.index].style.display = "none";

            }



        }
    }



}