var nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// variables creadas por el alumno
var paleta = document.getElementById("paleta");

var grillaPixeles = document.getElementById("grilla-pixeles");

var indicaColor = document.getElementById("indicador-de-color");

var colorActual;

var mouseClick = false;

$(document).ready(function() {
    paletaDinamica(nombreColores);
    grillaDinamica();
    pintarPixel();
});

//funcion que agrega los colores a la paleta
function paletaDinamica(arrayDeColores) {
    for (var i = 0; i < arrayDeColores.length; i++) {
        let divCreador = document.createElement("div");
        divCreador.className = "color-paleta";
        divCreador.style.backgroundColor = arrayDeColores[i];
        paleta.appendChild(divCreador);
    }
}

//funcion que crea dinamicamente los pixeles del tablero 
function grillaDinamica() {
    for (var i = 0; i < 1749; i++) { //se ve mejor en mi pc con esos px
        let pixelCreador = document.createElement("div");
        grillaPixeles.appendChild(pixelCreador);
    }
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
    (function() {
        // Se guarda el color de la rueda en colorActual
        colorActual = colorPersonalizado.value;
        indicaColor.style.backgroundColor = colorActual;
    })
);

//indicador de color actual 
paleta.addEventListener("click", indicadorDeColor);

//funcion que indica el color actual
function indicadorDeColor(e) {
    colorActual = e.target.style.backgroundColor;
    indicaColor.style.backgroundColor = colorActual;

}

//Detectando el mouse
grillaPixeles.addEventListener("mousedown", function(e) {
    mouseClick = true;
    pintarPixel(e)
});

grillaPixeles.addEventListener("mouseover", function(e) {
    pintarPixel(e);
});

grillaPixeles.addEventListener("mouseup", function(e) {
    mouseClick = false;
});

//funcion para pintar
function pintarPixel(e) {
    if (mouseClick) {
        e.target.style.backgroundColor = colorActual;
    }
}

//Desde aca, cero creatividad, me queme todo con este proyecto. 

// funcion borrar
$("#borrar").click(function() {
    $("#grilla-pixeles div").animate({
        "background-color": "white",
        "outline": "1px solid black"
    }, 3000);
});


//cargar superheroes
$("#batman").click(function() {
    cargarSuperheroe(batman);
});

$("#wonder").click(function() {
    cargarSuperheroe(wonder);
});

$("#flash").click(function() {
    cargarSuperheroe(flash);
});

$("#invisible").click(function() {
    cargarSuperheroe(invisible);
});

//guardar PixelArt
$("#guardar").click(function() {
    guardarPixelArt();
});