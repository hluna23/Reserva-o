const newReserv = document.getElementsByClassName("newReserv")
const smoky = document.getElementsByClassName("smoky")
const smoky2 = document.getElementsByClassName("smoky2")
const form  = document.getElementsByClassName("form")
const spanMesa = document.getElementsByClassName("span_mesa")
const spanArea = document.getElementsByClassName("span_area")


function newReserv() {

  if(document.getElementById("mesa1").checked){
    alert("Mesa 1 esta selecionada")
  }
  if(document.getElementById("mesa2").checked){
    alert("Mesa 2 esta selecionada")
  }
  if(document.getElementById("mesa3").checked){
    alert("Mesa 3 esta selecionada")
  }
  if(document.getElementById("mesa4").checked){
    alert("Mesa 4 esta selecionada")
  }
}

form.addEventListener("click", newReserv, (e) =>{
  e.preventDefault();
  newReserv();
})

function newReserv1() {

  if(smoky.checked){
    alert("Area de fumadores selecionada")
  }
  if(smoky2.checked){
    alert("Area de no fumadores selecionada")
  }

}