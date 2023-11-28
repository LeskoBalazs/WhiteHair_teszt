function handle_form(){
    alert('Sikeres regisztráció!');
}

function check_email(input){
    if (input.value != document.getElementById('email').value){
        input.setCustomValidity('A két email címnek azonosnak kell lennie!');
    }
    else{
        input.setCustomValidity('');
    }
}