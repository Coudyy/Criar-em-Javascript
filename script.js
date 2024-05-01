function alterarPorId(){

    let alterarId = document.getElementById("Botão1");
    alterarId.style.color = "red";

}
function alterarPorName() {
    let elementos = document.getElementsByName("Botão2");
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.color = "green";
    }
}

function alterarPorClass(){
    let alterarClass = document.getElementsByClassName("Botão3");
    for (let i = 0; i < alterarClass.length; i++){
        alterarClass[i].style.color = "blue";
    }
}
function olaMundo(){
    alert("Olá mundo!")
}

function resultadoConta(){
    let x = parseFloat(document.getElementById("numero1").value);
    let z = parseFloat(document.getElementById("numero2").value);

    alert(x+z)
}