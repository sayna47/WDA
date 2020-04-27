document.addEventListener("DOMContentLoaded", (e) => {
    var btns = document.getElementsByClassName("header-component__nav__btn");
    // var _btn = btns[0];
    // btns[0] = btns[2];
    // btns[2] = _btn;
    for (var i = 0; i < btns.length; i++) {
        if (i == 0 || i % 2 == 0) {
            btns[i].style.color = "red";
            // txt = btns[i].innerHTML; 
        }
    }
    // var _btns = [];
    // _btns = [...btns];
    // var nav = document.querySelector(".header-component__nav");
    // // console.log(_btns);
    // // nav.innerHTML ="";
    // console.log(nav)
    // const __btn = _btns[1];
    // const _nav = nav;
    // _nav.append(__btn);
    // _nav.append(__btn);
    // _nav.append(__btn);
    // _nav.append(__btn);

    // // nav.insertAdjacentElement("afterend",_btns[1]);
    // console.log(_nav);

    // // for (var i = 0; i<_btns.length;i++ ) {

    // //     nav.insertAdjacentElement("beforeend",_btns[i]);

    // // }
    // document.body.appendChild(_nav)
}
);
// jaye home o about change beshe
// creat element, node in js 
// 