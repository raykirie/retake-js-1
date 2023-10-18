
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function addRandomNumber() {
    
    var tableBody = document.getElementById("numberTable");


    var newRow = document.createElement("tr");
    var newCell = document.createElement("td");


    var randomNumber = getRandomNumber();
    newCell.textContent = randomNumber;


    newRow.appendChild(newCell);
    tableBody.appendChild(newRow);
}


for (var i = 0; i < 30; i++) {
    addRandomNumber();
}
