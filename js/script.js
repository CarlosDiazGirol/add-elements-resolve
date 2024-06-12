 // Aquí tu código

const agregarBtn = document.getElementById("agregar")
const lista = document.getElementById("lista")

function addList () {
  const ciudad = prompt("Introduce una ciudad")
  // lista.insertAdjacentHTML("beforeend", ("<li>" + ciudad + "</li>"))
  if(ciudad) {
    const li = document.createElement("li")
    li.innerHTML = ciudad
    lista.appendChild(li)
  } else {
    alert("Por favor ingrese un elemento válido")
  }
}

agregarBtn.addEventListener("click", addList) 