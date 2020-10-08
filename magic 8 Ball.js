// adding the answers to the eight ball question
var messages = [
    "No",
    "Yes",
    "Try Again",
    "I\'m not feeling it right now",
    "You should give up",
    "It\'s gonna be great",
    "You should phone a friend",
    "Don\'t give up",
    "You should pray about it",
    "Why did you ask me that",
];

var question = document.getElementById("question");
var answer = document.getElementById("answer");
var eight = document.getElementById("eight");

//add the ability to display a message when nothing is typed in the checkbox
//adding a function to display message when textbox is empty
button.addEventListener("click", function () {
    if (question.value.length < 1) {
        alert("Please enter a question!");
    } else {
        eight.innerText = "";
        //adding functions to display random messages when button is clicked
        var randomNumber = Math.floor(Math.random() * (messages.length));
        document.getElementById('eight').innerHTML = messages[randomNumber];

    }
});

