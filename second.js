

function add(){
    window.location="add_page.html";
    
   

}
function save(){
    var year=document.getElementById("yea").value;
    var month=document.getElementById("mon").value;
    var day=document.getElementById("day").value;
    var date=day+"-"+month+"-"+year;
    var text=document.getElementById("text").value;
    if(text==""){
        document.getElementById("blah").style.color="red";
    document.getElementById("blah").innerHTML="Please fill some text";
    }
    else if(text!==""){
        document.getElementById("blah").style.color="green";
        document.getElementById("blah").innerHTML="Awesome your work is saved";
       localStorage.setItem(date,text);
    }
}
function get(){
    var year1=document.getElementById("yea1").value;
    var month1=document.getElementById("mon1").value;
    var day1=document.getElementById("day1").value;
    var date1=day1+"-"+month1+"-"+year1;

    if(date1==""){
        document.getElementById("blah1").style.color="red";
    document.getElementById("blah1").innerHTML="Please fill some date";
    }
    else if(date1!==""){
        document.getElementById("blah1").style.color="green";
        document.getElementById("blah1").innerHTML="Given below is the text you wrote on "+date1;
        
        var text1=localStorage.getItem(date1);
        document.getElementById("text1").innerHTML=text1;
    }
}
function get_page(){
    window.location="get_page.html";
}
function go_home(){
    window.location="second.html";
}