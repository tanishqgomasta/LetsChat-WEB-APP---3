function clicking(){
    user_name=document.getElementById("login_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}