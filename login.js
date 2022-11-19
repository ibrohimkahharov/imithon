const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", Myfunc)

function Myfunc(event) {
    event.preventDefault();
    const Name = event.target[0].value
    const Email = event.target[1].value
    const Password = event.target[2].value
    console.log(Name)
    console.log(Email)
    console.log(Password)

    const localName = localStorage.getItem("name")
    const localEmail = localStorage.getItem("email")
    const localPassword = localStorage.getItem("password")

    if (localName === Name && localEmail === Email && localPassword === Password) {
        location.replace("/product.html")
    } else {
        alert("nimadir xato ketdi qayta uruning")
    }


}