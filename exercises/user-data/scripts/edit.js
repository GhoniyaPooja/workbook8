"use strict";

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    const saveButton = document.getElementById("saveButton");
    saveButton.onclick = saveUserData;

    // Fetch user data and fill the form
    fetch(`http://localhost:3000/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            document.getElementById("name").value = user.name;
            document.getElementById("username").value = user.username;
            document.getElementById("email").value = user.email;
        })


function saveUserData() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    const userData = {
        name: name,
        username: username,
        email: email,
    };

    // Update user data with a PUT request
    fetch(`http://localhost:3000/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })
        .then(response => {
            if (response.ok) {
                console.log("User data updated successfully.");
                window.location.href = "index.html";
            } else {
                console.error("Failed to update user data.");
                
            }
        })
}
}