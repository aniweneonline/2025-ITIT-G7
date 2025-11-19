 // ALERT BUTTON
function myAlert() {
    alert("Welcome to my website!");
}



// FORM VALIDATION
function checkForm() {
    var name = document.getElementById("name").value;

    if (name.trim() === "") {
        alert("Name cannot be empty!");
        return false;
    }
    return true;
}



// IMAGE HOVER
function changePic() {
    document.getElementById("hoverPic").src = "images/pic2.jpg";
}

function restorePic() {
    document.getElementById("hoverPic").src = "images/pic1.jpg";
}
