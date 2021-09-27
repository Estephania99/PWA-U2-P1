//console.log('WS: Hola mundo :) ya es tarde ');
var _window = this || self || window;
let url = _window.location.href;

self.addEventListener('install',(event)=>{
    console.log('SW: Instalado');
});

self.addEventListener('activate',(event)=>{
    console.log('SW: Activado y controlando la app');
});

self.addEventListener('fetch',(event)=>{
    console.log(event.request.url);
    if(event.request.url.includes('.jpg')){
        let newResp = "";
        if(url.includes('localhost')){
            newResp = fetch('/images/gatito.jpg');
        }else{
            newResp = fetch('/PWA-U2-P1/images/gatito.jpg');
        }
        
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

    if(event.request.url.includes('reqres')){
        let newResp = new Response(JSON.stringify({
            mensaje:"Este es el mensaje interceptado",
        }), {
            headers: {'Content-Type': 'application/json'}
          });
        console.log(event.request);
        event.respondWith(newResp);
    }
});

/*self.addEventListener('message', (event) => {
    if(event.data == 'click'){
        fetch("https://reqres.in/api/users?page=2")
        .then((resp) => resp.json())
        .then((respJson) => {
          console.log(respJson);
        });
    }
  });*/