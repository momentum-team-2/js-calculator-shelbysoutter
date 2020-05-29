//event listeners for button clicks
let dog = document.querySelector("#display")

dog.value = ""


let button_7 = document.querySelector("#seven")
button_7.addEventListener("click", function(event) {
    dog.value += "7"
})

let button_8 = document.querySelector("#eight")
button_8.addEventListener("click", function(event) {
    dog.value += "8"
})

let button_9 = document.querySelector("#nine")
button_9.addEventListener("click", function(event) {
    dog.value += "9"
})

let button_slash = document.querySelector("#divide")
button_slash.addEventListener("click", math)

let button_4 = document.querySelector("#four")
button_4.addEventListener("click", function(event) {
    dog.value += "4"
})

let button_5 = document.querySelector("#five")
button_5.addEventListener("click", function(event) {
    dog.value += "5"
})

let button_6 = document.querySelector("#six")
button_6.addEventListener("click", function(event) {
    dog.value += "6"
})

let button_0 = document.querySelector("#zero")
button_0.addEventListener("click", function(event) {
    dog.value += "0"
})

let button_1 = document.querySelector("#one")
button_1.addEventListener("click", function(event) {
    dog.value += "1"
})

let button_2 = document.querySelector("#two")
button_2.addEventListener("click", function(event) {
    dog.value += "2"
})

let button_3 = document.querySelector("#three")
button_3.addEventListener("click", function(event) {
    dog.value += "3"
})

let button_decimal = document.querySelector("#decimal")
button_decimal.addEventListener("click", function(event) {
    dog.value += "."
})

let button_equal = document.querySelector("#equal")
button_equal.addEventListener("click", function(event) {
    eval(dog.value)
})

let button_plus = document.querySelector("#plus")
button_plus.addEventListener("click", math)

let button_C = document.querySelector("#C")
button_C.addEventListener("click", clearDisplay)

//functions to reset display/perform mathematical function

function clearDisplay() {
    dog = ""
    dog.innerHTML = ""
}

function math() {
    let value = eval (dog)
    value = dog
    setInnerHTML(value)
}