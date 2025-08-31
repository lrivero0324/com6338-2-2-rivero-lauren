// Your code here
function greet() {
    var name = prompt("What is your name?")
    alert("Hello, " + name)
    var age = parseInt(prompt("How old are you?"))
    var hadBirthday = confirm("Have you had a birthday this year?")
    var currentYear = new Date().getFullYear()
    var birthYear = hadBirthday ? currentYear - age : currentYear - age - 1
    alert("You were born in " + birthYear)
}
