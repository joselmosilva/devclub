
let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".form-mascara")



consolo.log(formulario)

function cliqueiNobotao(){
    formulario.style.left = "600px"
    mascara.style.visibility ="visible"
    
}
function sumirFormulario(){
    formulario.style.left = "-320px"
    mascara.style.visibility ="hidden"
}
