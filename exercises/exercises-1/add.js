"use strict"

window.onload = function () {
    const saveButton = document.getElementById("saveButton");
    saveButton.onclick = addUserData;
};

function addUserData() {
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    const userData = {
        name: name,
        username: username,
        email: email
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        if (response.ok) {
            console.log('User data saved successfully.');
            window.location.href = "index.html";
        } else {
            console.error('Failed to save user data.');
            
        }
    })
}

