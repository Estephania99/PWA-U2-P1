console.log('Hola mundo desde app.js');


let url = window.location.href;
let swDirectory = "/PWA-U2-P1/sw.js"; //miRepositoio

// Preguntamos si el navegador y/o el sitio dispone de SW
if(navigator.serviceWorker){
    //console.log("Genial");
    console.log('La url es: '+url);

    if(url.includes('localhost')){
        navigator.serviceWorker.register('/sw.js');
    }else{
        navigator.serviceWorker.register(swDirectory);
    }

    
}else{
    console.log('Lastima cambia de navegador');
}