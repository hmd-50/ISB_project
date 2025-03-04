let isArabic = true;
    
function  Language() {
    const title = document.getElementById("title");
    
    const lfname = document.getElementById("lname");
    const fname = document.getElementById("name");
    
    const lpassword = document.getElementById("lpassword");
    const password = document.getElementById("password");
    
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const b3 = document.getElementById("b3");
    const b4 = document.getElementById("b4");
    const b5 = document.getElementById("b5");

    const sh = document.getElementById("sh");
    const body = document.body;

    if (isArabic == true) {
        title.textContent = "Register";
        
        lfname.textContent=" usarName "
        fname.placeholder = "Enter your usarName" ;

        lpassword.textContent=" password "
        password.placeholder = "Enter your password" ;


        b1.textContent = " english ";
        b2.textContent = " show ";
        b3.textContent = " save ";
        b4.textContent = " clear ";
        b5.textContent = " login ";

        sh.textContent = " Stored Data "
        body.classList.add("ltr");
        document.documentElement.lang = "en";

    } else {
        title.textContent = "تسجيل";
        
        lfname.textContent=" اسم المستخدم "
        fname.placeholder = "الرجاء ادخال اسم المستخدم" ;

        lpassword.textContent=" رمز المرور "
        password.placeholder = "الرجاء ادخال رمز المرور" ;
       
        b1.textContent = " عربي ";
        b2.textContent = " عرض  ";
        b3.textContent = " حفظ ";
        b4.textContent = " مسح ";
        b5.textContent = " دخول ";

        sh.textContent = " جدول البيانات "
        body.classList.remove("ltr");
        document.documentElement.lang = "ar";
    }

    isArabic = !isArabic;
}


/*--------------------------------------------------*/
function saveData() {
let name = document.getElementById("name").value;
let password = document.getElementById("password").value;


if (name === "" || password === "") {
    alert("الرجاء تعبائه جميع الحقول");
    return;
}

let users = JSON.parse(localStorage.getItem("users")) || [];
users.push({ name, password });
localStorage.setItem("users", JSON.stringify(users));
document.getElementById("name").value = "";
document.getElementById("password").value = "";


alert("تم حفظ البيانات");

}

function showData() {
let users = JSON.parse(localStorage.getItem("users")) || [];
let userList = document.getElementById("output");
userList.innerHTML = "";

users.forEach(user => {
    let li = document.createElement("li");
    li.textContent = `Name: ${user.name} / Password: ${user.password}`;
    userList.appendChild(li);
});
}

function checkData() {
let name = document.getElementById("name").value;
let password = document.getElementById("password").value;
let users = JSON.parse(localStorage.getItem("users")) || [];

let found = users.some(user => user.name === name && user.password === password);

if (found) {
    alert("تم التحقق و التسجيل بنجاح");
   // window.location.href = "http://127.0.0.1:5500/ISB4_main.html"; // Change to your desired page
   window.location.replace("http://127.0.0.1:5500/ISB5_main.html",);

} else {
    alert("اسم المستخدم او كلمة المرور غير صحيحة.");
}
}

function clearData() {

localStorage.clear('users')
//namesArray = [];
document.getElementById("output").innerHTML = "  ";
alert("جميع البيانات تم حذفها")
}
