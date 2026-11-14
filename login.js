

document.getElementById("sign-up-btn").addEventListener('click', function(){


    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username ==="admin" && password=== "admin123"){
        window.location.href='http://127.0.0.1:5500/home.html';
    }

    else{
        alert("Inalid Credentials");
    }

});