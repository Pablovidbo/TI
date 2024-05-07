const preguntas = [
    {
        "texto": "Género:",
        "opciones": [
            {
                "respuesta": "Varón",
                "siguiente_pregunta": "eventoVaron",
                "imagen": "js/imagenes/h.png"
            },
            {
                "respuesta": "Mujer",
                "siguiente_pregunta": "eventoMujer",
                "imagen": "js/imagenes/m.png"
            }
        ]
    },




    {
        "id": "eventoVaron",
        "texto": "A qué evento asistirá:",
        "opciones": [
            {
                "respuesta": "Trabajo",
                "siguiente_pregunta": "aromaVaron",
                "imagen": "js/imagenes/h.png"
            },
            {
                "respuesta": "Clase",
                "siguiente_pregunta": "aromaVaron",
                "imagen": "js/imagenes/h.png"
            },
            {
                "respuesta": "Playa",
                "siguiente_pregunta": "aromaVaron",
                "imagen": "js/imagenes/h.png"

            },
            {
                "respuesta": "Matrimonio",
                "siguiente_pregunta": "aromaVaron",
                "imagen": "js/imagenes/h.png"

            },
            {
                "respuesta": "Casual",
                "siguiente_pregunta": "aromaVaron",
                "imagen": "js/imagenes/h.png"
            }
        ]
    },
    {
        "id": "eventoMujer",
        "texto": "A qué evento asistirá:",
        "opciones": [
            {
                "respuesta": "Trabajo",
                "siguiente_pregunta": "aromaMujer",
                "imagen": "js/imagenes/m.png"
            },
            {
                "respuesta": "Clase",
                "siguiente_pregunta": "aromaMujer",
                "imagen": "js/imagenes/m.png"
            },
            {
                "respuesta": "Playa",
                "siguiente_pregunta": "aromaMujer",
                "imagen": "js/imagenes/m.png"
            },
            {
                "respuesta": "Matrimonio",
                "siguiente_pregunta": "aromaMujer",
                "imagen": "js/imagenes/m.png"
            },
            {
                "respuesta": "Casual",
                "siguiente_pregunta": "aromaMujer",
                "imagen": "js/imagenes/m.png"
            }
        ]
    },







    {
        "id": "aromaVaron",
        "texto": "Qué aroma te gusta:",
        "opciones": [
            {
                "respuesta": "Frutales",
                "siguiente_pregunta": "res1Varon",
                "imagen": "js/imagenes/h.png"
            },
            {
                "respuesta": "Frescos",
                "siguiente_pregunta": "res2Varon",
                "imagen": "js/imagenes/h.png"
            },
            {
                "respuesta": "Maderos",
                "siguiente_pregunta": "res3Varon",
                "imagen": "js/imagenes/h.png"
            },
            
        ]
    },
    {
        "id": "aromaMujer",
        "texto": "Qué aroma te gusta:",
        "opciones": [

            {
                "respuesta": "Rosas",
                "siguiente_pregunta": "res1Mujer",
                "imagen": "js/imagenes/m.png"
            },
            {
                "respuesta": "Lavanda",
                "siguiente_pregunta": "res2Mujer",
                "imagen": "js/imagenes/m.png"
            },
            {
                "respuesta": "ácido",
                "siguiente_pregunta": "res3Mujer",
                "imagen": "js/imagenes/m.png"
            },
        ]
    },




    {
        "id": "res1Varon",
        "texto": "Resultados:",
        "opciones": [
            {
                "respuesta": "Frutales",      
                "imagen": "js/imagenes/h.png"
            },
            {
                "respuesta": "Frescos",      
                "imagen": "js/imagenes/h.png"
            },
            
        ]
    },
    {
        "id": "res2Varon",
        "texto": "Resultados:",
        "opciones": [
            {
                "respuesta": "Frutales",      
                "imagen": "js/imagenes/h.png"
            },
            {
                "respuesta": "Frescos",      
                "imagen": "js/imagenes/h.png"
            },
            
        ]
    },
    {
        "id": "res3Varon",
        "texto": "Resultados:",
        "opciones": [
            {
                "respuesta": "Frutales",                    
                "imagen": "js/imagenes/h.png"
            },
            {
                "respuesta": "Frescos",          
                "imagen": "js/imagenes/h.png"
            },
            
        ]
    },




    {
        "id": "res1Mujer",
        "texto": "Resultados:",
        "opciones": [
            {
                "respuesta": "Frutales",                    
                "imagen": "js/imagenes/m.png"
            },
            {
                "respuesta": "Frescos",          
                "imagen": "js/imagenes/m.png"
            },
            
        ]
    },
    {
        "id": "res2Mujer",
        "texto": "Resultados:",
        "opciones": [
            {
                "respuesta": "Frutales",                    
                "imagen": "js/imagenes/m.png"
            },
            {
                "respuesta": "Frescos",          
                "imagen": "js/imagenes/m.png"
            },
            
        ]
    },
    {
        "id": "res3Mujer",
        "texto": "Resultados:",
        "opciones": [
            {
                "respuesta": "Frutales",                    
                "imagen": "js/imagenes/m.png"
            },
            {
                "respuesta": "Frescos",          
                "imagen": "js/imagenes/m.png"
            },
            
        ]
    },





];

const preguntaContainer = document.getElementById('pregunta-container');
const preguntaTexto = document.getElementById('pregunta-texto');
const opcionesContainer = document.getElementById('opciones');
const resultadosContainer = document.getElementById('resultados');
const perfume1Container = document.getElementById('perfume1');
const perfume2Container = document.getElementById('perfume2');

let respuestas = {};

function mostrarPregunta(pregunta) {
    preguntaTexto.textContent = pregunta.texto;
    opcionesContainer.innerHTML = '';

    


    
    pregunta.opciones.forEach(opcion => {
        const button = document.createElement('button');
        button.className = 'opcion-button';
        button.innerHTML = `<img src="${opcion.imagen}" alt="${opcion.respuesta}"><span>${opcion.respuesta}</span>`;
        button.addEventListener('click', () => {
            respuestas[pregunta.id] = opcion.respuesta;
            const siguientePregunta = opcion.siguiente_pregunta;
            if (siguientePregunta) {
                const siguiente = preguntas.find(pregunta => pregunta.id === siguientePregunta);
                mostrarPregunta(siguiente);
            } else {
                mostrarResultados();
            }



        });
        opcionesContainer.appendChild(button);
    });
}

function mostrarResultados() {
    preguntaContainer.style.display = 'none';
    resultadosContainer.style.display = 'block';


    perfume1Container.innerHTML = '<p>Gracias por su preferencia !!</p>';

}

mostrarPregunta(preguntas[0]); 