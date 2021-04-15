function check(){
    var mam=document.getElementById("password").value;
    var another_pass=localStorage.getItem("pass");
    if(mam==another_pass){
        document.getElementById("nan").style.color="black";
        document.getElementById("nan").innerHTML="Access Granted"; 
        setTimeout(move(),7000);
    }
    else{
        document.getElementById("nan").style.color="red";
        document.getElementById("nan").innerHTML="Access denied"; 
    }
}
function move(){
window.location="second.html";
}
function add_low(){
    var password1=document.getElementById("pass1").value;
    if(password1==""){
        document.getElementById("l").innerHTML="Please Enter This Field";
    }else{
        localStorage.setItem("pass",password1);
        window.location="index.html";
    }
}
function create(){
    window.location="1.html";
}

