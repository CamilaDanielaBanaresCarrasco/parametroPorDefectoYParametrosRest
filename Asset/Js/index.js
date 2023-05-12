
//Esto se utiliza para colocar un paremtro por defecto si esque la persona no ingresa un dato
const saludar =(nombre, saludo, mensaje = `¿Como has estado ${nombre}?`) =>{return [nombre, saludo,mensaje]}



console.log(saludar("javier", "Buenos dias"))
console.log(saludar("javier", "Buenos dias", "Que tal"))


//------------parametros Rest--------------------------------


function f(a,b,...argumentos) {  }

function funcionConRest(a,b,...muchosArgumentosMás){

    console.log(`à; ${a}`)
    console.log(`b; ${b}`)
    console.log(`argumentos; ${muchosArgumentosMás}`)
}

funcionConRest("uno","dos","tres","cuatro","cinco","seis",)