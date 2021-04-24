// let myVariable = "Hello World"
// console.log(myVariable)

function myFunction() {
    console.log("Hello World")
}

myFunction()

console.log(myFunction)

const myFunction2 = () => {
    console.log("Hello World")

}

window.onload = () => {
    const btn = document.getElementById("btn")
    console.log(btn)
    btn.innerHTML = "World"
    btn.style = "color: red"

    const handleClick = () => {
        console.log("Clicked")
    }

    btn.onclick = handleClick
}