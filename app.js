const nombre = prompt("Bienvenido,¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");


const msg = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;

alert(msg);

const pregunta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

if(pregunta == 1){
    alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
}else{
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
}