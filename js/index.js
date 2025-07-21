
//Document = hace referencia a toda la pagina web
//documentElemento = hace referencia al elemento del documento web
//style = hace referencia la estilo de la pagina 
let botonConvertir = document.getElementById("button-convertir");
let dineroAConvertir = document.getElementById("cantidad-a-convertir");
let monedainicial = document.getElementById("monedaOriginal"); 
let monedaFinal = document.getElementById("monedaFinal"); 

function convertirCambio(){
    botonConvertir.addEventListener("click", () => {
        alert("Estas seguro que queres convertir "+monedainicial.value+" "+dineroAConvertir.value+" a "+monedaFinal.value+" ?")
    })
}

convertirCambio()

document.getElementById("button-fondo").addEventListener("click", ()=>
    cambiarFondo("red"),
    //agrandarBoton(30,30)
);

function cambiarFondo(color){
    if(document.documentElement.style.getPropertyValue('color') === "red"){
        document.documentElement.style.setProperty('color',"green");
    }else{
        document.documentElement.style.setProperty('color',color);
    }
} 

function agrandarBoton(heigth,width){
//    if(document.documentElement.style.getPropertyValue('heigth') === heigth && 
//   document.documentElement.style.getPropertyValue('width') === width){
//        document.documentElement.style.setProperty('heigth',20+"px");
//        document.documentElement.style.setProperty('width'+20+"px");
//    }
//    document.documentElement.style.setProperty('heigth',heigth+"px");
//    document.documentElement.style.setProperty('width',width+"px")
}



