//listado a sortear
let estudiantesAnotados = ["DALAL, JOSE","AHUMADA, CAMILA DENISSE ","GRANEROS HEREDIA, MATTEO DAVID","ROMERO, FLORENCIA SOFIA","MAIRENA MALDONADO, ALDANA BELÉN","LOBOS, MAXIMILIANO","MAFONE , GUADALUPE MILAGROS","RUIZ, CECILIA MACARENA","PALACIO, NAHIARA SHELI","MANSILLA, ANA MORENA ","BINI, WANDA LUDMILA","PONCE, ARELI ELUNEY","VILLAGRA MACIAS , ANTONELLA ","HERRERA, ESPERANZA ELISABETH ","RODRIGUEZ FERREYRA, LUCAS DIEGO","DÍAZ CORALES  , MARIA LILIANA","FARIAS , BIANCA ","MORALES NARVAEZ, JOAQUÍN ","ALLENDE, ALEJO JOAQUIN","GIGENA, DANA MELIZA"];
//elementos del DOM
let list = document.getElementById("myList");
const botonSorteador = document.getElementById("sorteador");
let subtitulo = document.getElementById("cantidadAnotados");


//variable globales
let estudiantesSorteados = [];
let aleatorio;
let numeroDeAnotados = estudiantesAnotados.length;
subtitulo.innerHTML = `Se han anotado ${numeroDeAnotados} estudiantes para la especialidad de Idiomas` ;
//funciones


botonSorteador.addEventListener('click',(e)=>{
    let inputBox = document.getElementById('matricula').value;
    let matricula = parseInt(inputBox);
    if(matricula<0){
        alert("debes ingresar un numero valido de matricula")
    }else{
        if (matricula){
            sortear(matricula,numeroDeAnotados);
            estudiantesSorteados.sort();
            console.log(estudiantesSorteados);
        for (let i =0;i<estudiantesSorteados.length;i++){
            let li = document.createElement('li');
            li.innerText = estudiantesSorteados[i];
            list.appendChild(li);
        }
        estudiantesSorteados = [];
        document.getElementById("sorteador").disabled = true;
        }else{
            alert("debes ingresar un numero valido de matricula")
        }
    }
    
    
})

function indiceAleatorio(cantidadEstudiantesAnotados){
    let numero = Math.floor(Math.random()*cantidadEstudiantesAnotados);
    aleatorio = numero;
}

function sortear (matriculaDisponible,cantidadEstudiantesAnotados){
    if (matriculaDisponible>=cantidadEstudiantesAnotados){
        estudiantesSorteados = estudiantesAnotados;
    } else{
        for (let i = 0;i<matriculaDisponible;i++){
            indiceAleatorio(cantidadEstudiantesAnotados);
            if(!estudiantesSorteados.includes(estudiantesAnotados[aleatorio] )){
                estudiantesSorteados.push(estudiantesAnotados[aleatorio]);
            
            }else{
                i--;
            }
            
        }
    }

}

