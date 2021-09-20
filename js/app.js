console.log('Hola mundo desde app.js');

// Preguntamos si el navegador y/o el sitio dispone de SW
if(navigator.serviceWorker){
    console.log("Genial");
    navigator.serviceWorker.register('/sw.js');
}else{
    console.log('Lastima cambia de navegador');
}