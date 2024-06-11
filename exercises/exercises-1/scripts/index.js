"use strict"

window.onload = function() {
    fetchAndDisplayUserData();
};

function fetchAndDisplayUserData() {
    fetch("http://localhost:3000/users/")
        .then((response) => response.json())
        .then((data) => {
            const tableBody = document.querySelector("#userTableBody");
            data.forEach((user) => {
                const row = document.createElement("tr");

                const idCell = document.createElement("td");
                idCell.textContent = user.name;
                row.appendChild(idCell);

                const nameCell = document.createElement("td");
                nameCell.textContent = user.username;
                row.appendChild(nameCell);

                const emailCell = document.createElement("td");
                emailCell.textContent = user.email;
                row.appendChild(emailCell);

                const actionsCell = document.createElement("td");

                const editLink = document.createElement("a");
                editLink.href = `edit.html?id=${user.id}`;
                editLink.textContent = "Edit" + " ";
                editLink.classList.add("link-success", "-sm", "mr-2");
                actionsCell.appendChild(editLink);

                const deleteLink = document.createElement("a");
                deleteLink.href = `delete.html?id=${user.id}`;
                deleteLink.textContent = "Delete";
                deleteLink.classList.add("link-danger", "link-sm");
                actionsCell.appendChild(deleteLink);


                row.appendChild(actionsCell);

                tableBody.appendChild(row);
            });
        })
    
}