const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Close button
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = ""; // Clear input box
        saveData(); // Save data after adding task
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save data after toggling task
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove task
        saveData(); // Save data after removing task
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Save the list to localStorage
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || ''; // Load the list from localStorage
}

// Call showTask to display any saved tasks when the page loads
window.onload = showTask;
