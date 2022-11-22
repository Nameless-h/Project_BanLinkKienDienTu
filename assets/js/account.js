let isAdmin;
let isSignedin = false;

$(document).ready(function () {
    localStorage.clear;

    account.forEach(element => {
        localStorage.setItem(element.username, JSON.stringify(element));
    });

    if (location.href == '/admin.html') {
        document.querySelector("span.dropdown-select").innerHTML = "Admin";
    }
});

if (localStorage.getItem("isSignedin") != "true") {
    isSignedin = false;
}
else {
    isSignedin = true;
}

if (localStorage.getItem("adminSignedin") != null) {
    document.querySelector("span.dropdown-select").innerHTML = localStorage.getItem("adminSignedin");
}

if (localStorage.getItem("userSignedIn") != null) {
    document.querySelector("span.dropdown-select").innerHTML = localStorage.getItem("userSignedIn");
    var dropdown_list = document.querySelector(".dropdown .dropdown-list");
    dropdown_list.innerHTML = `
            <li class="dropdown-item">
                <span class="dropdown-text">Thông tin cá nhân</span>
            </li>
            <li class="dropdown-item" onclick="showViewOrder()">
                <span class="dropdown-text">Xem đơn hàng đã đặt</span>
            </li>
            <li class="dropdown-item" ">
                <span class="dropdown-text" onclick="dangXuat()">Đăng xuất</span>
            </li>
                `;
    localStorage.setItem("isSignedin", "true");
    $(".dropdown-item:contains('Đăng xuất')").click(function () {
        if (isSignedin == true) {
            isSignedin = false;
            dropdown_list.innerHTML = `
                <li class="dropdown-item" onclick="displaySignMenu('Sign in')" >
                    <span class="dropdown-text" id="sign-in">Đăng nhập</span>
                </li>
                <li class="dropdown-item" onclick="displaySignMenu('Sign up')" >
                    <span class="dropdown-text" id="sign-up">Đăng kí</span>
                </li>
          `;
        }
        document.querySelector("span.dropdown-select").innerHTML = "My Account";
        localStorage.removeItem("userSignedIn");
        localStorage.setItem("isSignedin", "false");
        window.location.reload();
    });
}

function dangXuat()
{
    localStorage.setItem("isSignedin","false");
    localStorage.removeItem("userSignedIn");
    window.location.reload();
}

// $(document).ready(function () {
//     account.forEach(element => {
//         //localStorage.clear;
//         var json = JSON.stringify(element);
//         localStorage.setItem(element.username, json);
//     });
//     if (location.href == '/admin.html') {
//         document.querySelector("span.dropdown-select").innerHTML = "Admin";
//     }
// });


function dangnhap(event) {
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    var userLocal = JSON.parse(localStorage.getItem(username));
    if (username == userLocal.username && password == userLocal.password && userLocal.authority == "admin") {
        localStorage.setItem("adminSignedin", username);
        localStorage.setItem("isSignedin", "true");
        window.location.href = "/admin.html";
        event.preventDefault(); // ngăn form không bị reload sau khi submit
    }
    else if (username == userLocal.username && password == userLocal.password && userLocal.authority == "user") {
        localStorage.setItem("isSignedin", "true");
        localStorage.setItem("userSignIn", username);
        event.preventDefault();
        window.location.reload();
        console.log("you are user");
    }
    else {
        alert("Error!");
    }
    backgroundLogin.style.display = "none";
}

function createAcc(event) {
    var authority = "user";
    var username = document.getElementById("form-Name").value;
    var password = document.getElementById("form-Password").value;
    var phone = document.getElementById("form-Phone").value;
    var email = document.getElementById("form-Email").value;
    var user = {
        username: username,
        password: password,
        phone: phone,
        email: email,
        authority: authority,
    }
    localStorage.setItem(username, JSON.stringify(user));
    alert("Dang ki thanh cong");
    event.preventDefault();
    window.location.reload();
}

//         backgroundLogin.style.display = "none";
//     }
// }
// async function dangnhap(event){
// fetch('./assets/js/arr-account.json')
//     .then(
//         function (response) {
//             if (response.status !== 200) {
//                 console.log('Lỗi, mã lỗi ' + response.status);
//                 return;
//             }
//             // parse response data
//             response.json().then(data => {
//                 var username = document.getElementById("name").value;
//                 var password = document.getElementById("pass").value;
//                 data.forEach(element => {
//                     if (username == element.username && password == element.password && element.authority == "admin") {
//                         localStorage.setItem("adminSignedin", username);
//                         localStorage.setItem("isSignedin", "true");
//                         window.location.href = "/admin.html";
//                         event.preventDefault(); // ngăn form không bị reload sau khi submit
//                     }
//                     else if (username == element.username && password == element.password && element.authority == "user") {
//                         localStorage.setItem("isSignedin", "true");
//                         localStorage.setItem("userSignedIn", username);
//                         event.preventDefault();
//                         console.log("you are user");
//                     }
//                     // else {
//                     //     alert("Error!");
//                     // }
//                 });



// function dangnhap(event) {
//     var username = document.getElementById("name").value;
//     var password = document.getElementById("pass").value;
//     var userLocal = JSON.parse(localStorage.getItem(username));
//     if (username == userLocal.username && password == userLocal.password && userLocal.authority == "admin") {
//         localStorage.setItem("adminSignedin", username);
//         localStorage.setItem("isSignedin", "true");
//         window.location.href = "/admin.html";
//         event.preventDefault(); // ngăn form không bị reload sau khi submit
//     }
//     else if (username == userLocal.username && password == userLocal.password && userLocal.authority == "user") {
//         localStorage.setItem("isSignedin", "true");
//         localStorage.setItem("userSignedIn", username);
//         event.preventDefault();
//         window.location.reload();
//         console.log("you are user");
//     }
//     else {
//         alert("Error!");
//     }
//     backgroundLogin.style.display = "none";
// }
