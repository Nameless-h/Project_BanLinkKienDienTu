$(document).ready(function(){
    account.forEach(element => {
        var json = JSON.stringify(element);
	    localStorage.setItem(element.username,json);
    });
});
// scoll header menu bar
window.addEventListener('scroll',function () {
    var header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
});
// ham display ra menu dang nhap
function displaySignMenu(input){
    var loginMenu = document.getElementById("login");
    var createMenu = document.getElementById("create");
    if(input=="Sign in")
    {
        loginMenu.style.display="block";
        createMenu.style.display="none";
    }
    else if(input=="Sign up")
    {
        createMenu.style.display="block";
        loginMenu.style.display="none";
    }
    else{
        loginMenu.style.display="none";
        createMenu.style.display="none";
    }
}
function dangnhap(){
    var username = document.getElementById("name").value;
	var password = document.getElementById("pass").value;
    var userLocal=JSON.parse(localStorage.getItem(username));

    if(username==userLocal.username && password==userLocal.password && userLocal.authority =="admin"){
        alert("Dang nhap thanh cong");
        isSignedin = true;
        console.log("you are admin");
    }
    
    else if(username==userLocal.username && password==userLocal.password && userLocal.authority =="user"){
        alert("Dang nhap thanh cong");
        isSignedin = true;
        console.log("you are user");
    }
    else{
        alert("Error!");
    }
}






