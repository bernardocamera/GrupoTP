const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const dni = document.getElementById("dni")
const mail = document.getElementById("mail")
const fecnac = document.getElementById("fecnac")
const telefono = document.getElementById("telefono")

const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit" , e=>{

    e.preventDefault();
    
    let warnings=""
    let entrar=false

    /*Expresion regular para validar el DNI que se ingresa*/
    let valAceptadosNumericos = /^[0-9]+$/
    
    /*Expresion regular para validar el mail que se ingresa*/
    let regexEmail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    /*Expresion regular para validar el telefono que se ingresa*/
    let valAceptadosTel = /^[0-9]+$/

    /*Validacion del nombre*/
    if(nombre.value.length == 0){
            warnings += 'El nombre no es válido <br>'
            entrar=true
    }

    /*Validacion del apellido*/
    if(apellido.value.length == 0){
            warnings += 'El apellido no es válido <br>'
            entrar=true
    }

    /*Validacion del DNI*/
    if(!valAceptadosNumericos.test(dni.value)){
            warnings += 'El DNI no es válido <br>'
            entrar=true
    }

     /*Validacion de fecha nacimiento*/
     if(fecnac.value.length == 0){
        warnings += 'La fecha de nacimiento no es válida <br>'
        entrar=true
    }

    /*Validacion del mail*/
    if(!regexEmail.test(mail.value)){
            warnings += 'El mail no es válido <br>'
            entrar=true
    }

    /*Validacion del telefono*/
    if(!valAceptadosTel.test(telefono.value)){       
            warnings += 'El teléfono no es válido <br>'
            entrar=true
    }

   

    if(entrar){
        /*warnings += 'Faltan completar campos <br>'*/
        parrafo.innerHTML=warnings
    }else { 
            warnings +='¡Enviado!'
            parrafo.innerHTML=warnings
    }  

})

