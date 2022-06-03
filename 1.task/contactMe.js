function sendEmail(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if(name != "" && surname != "" && phone != "" && message != ""){
        document.getElementById("errorMessage").style.visibility = "hidden";
        window.open('mailto:nikitashin_m@mail.ru?subject=' + 'Contact_me_via_my_web-page' + '&body=' + 
        'Name: ' + name + '%0D%0A' +
        'Surname: ' + surname + '%0D%0A' +
        'Phone: ' + phone + '%0D%0A' +
        'Message: ' + message);
    }

    if(name == "" || surname == "" || phone == "" || message == ""){
        document.getElementById("errorMessage").style.visibility = "visible";
    }
}