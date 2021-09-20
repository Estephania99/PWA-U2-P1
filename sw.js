//console.log('WS: Hola mundo :) ya es tarde ');

self.addEventListener('install',(event)=>{
    console.log('SW: Instalado');
});

self.addEventListener('activate',(event)=>{
    console.log('SW: Activado y controlando la app');
});

self.addEventListener('fetch',(event)=>{
    console.log(event.request.url);
    if(event.request.url.includes('.jpg')){
        let newResp = fetch('/images/gatito.jpg');
        console.log('Es una imagen');
        event.respondWith(newResp);
    }

    if(event.request.url.includes('page.css')){
        let newResponse = new Response(`body{
            background-color: black !important;
            color: red;
        }`,{
            headers:{
                'Content-Type':'text/css'
            }
        });
        event.respondWith(newResponse);
    }
})