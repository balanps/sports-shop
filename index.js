var indexValue = 1;
showImg(indexValue);
function btm_slide(e) {
    showImg(indexValue = e);
}
function side_slide(e) {
    showImg(indexValue += e);
}
function showImg(e) {
    var i;
    const division = document.querySelectorAll('#div1');
    const sliders = document.querySelectorAll('.slideee')
    if (e > division.length) {
        indexValue = 1;
    }
    if (e < 1) {
        indexValue = division.length;
    }
    for (i = 0; i < division.length; i++) {
        division[i].style.display = 'none';
    }
    division[indexValue - 1].style.display = 'flex';
}

let Login_box = document.getElementById("login-box");
let Button_login = document.getElementById("show-login") 

Button_login.addEventListener('click', function() {
    Login_box.classList.add("login-show")
})
let Close_login = document.getElementById("close-icon")

Close_login.addEventListener('click', function() {
    Login_box.classList.remove("login-show")
})
