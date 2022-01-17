let boton = document.getElementById("pagar")
let botonMostrar = document.getElementById("mostrar")

boton.addEventListener("click", (e) => {
    pagar()
})

botonMostrar.addEventListener("click", (e) => {
  traerProductos()
})


const carrito = [
    {nombre: "Auricular", descripcion: "otra cosa", img: "imagen", id: 1, cantidad: 2, precio: 100},
    {nombre: "Auricular", descripcion: "otra cosa", img: "imagen", id: 2, cantidad: 1, precio: 1400},
    {nombre: "Auricular", descripcion: "otra cosa", img: "imagen", id: 2, cantidad: 3, precio: 100},
    {nombre: "Auricular", descripcion: "otra cosa", img: "imagen", id: 2, cantidad: 4, precio: 100}]




const pagar = () => {
    const productosToMp = carrito.map((element) => {
              let nuevoElemento = {
                title: element.nombre,
                description: element.descripcion,
                picture_url: element.img,
                category_id: element.id,
                quantity: element.cantidad,
                currency_id: "ARS",
                unit_price: element.precio,
              };
              return nuevoElemento;
            });
    
    $.ajax({
      method: "POST",
      url: "https://api.mercadopago.com/checkout/preferences",
      data: JSON.stringify(productosToMp),
      headers: {
          Authorization: "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006",
        },
        data: JSON.stringify({
            items: productosToMp,
        }),
        success: function (response) {
            const data = response;
            
            window.open(data.init_point, "_blank")
            
        }
    })
}

function traerDatos () {
    $.get("https://api.mercadolibre.com/sites/MLA/search?q=zapatillas",
    function(result, status){
        console.log(result)
        console.log(status)
    }
    )
}

//fase 1
// function traerProductos () {
//     let aux = fetch("./product.json")
//     console.log(aux)
// }

// fase 2

//async =  asíncrono
//await = esperar

async function traerProductos () {
    let response = await fetch("./product.json")
    let data = await response.json()
    console.log(data)
}

// Ejemplo implementando el metodo POST:
// async function postData(url = '', data = {}) {
//     // Opciones por defecto estan marcadas con un *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://example.com/answer', { answer: 42 })
//     .then(data => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });


//     fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         headers: { //Es la cabeza de las peticiones parte 1 
//             //informacion que nos pide la api para hacer las consultas 
//             //informacion sencible
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data) // parte 2 //informaciones que tenemos que enviar
//     });


//curl = consulta
//entenderlo y adaptarlo 


//     curl -X POST \
//     'https://api.mercadopago.com/checkout/preferences' \
//     -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
//     -H 'Content-Type: application/json' \
//     -d '{
//   "items": [
//     {
//       "title": "Dummy Title",
//       "description": "Dummy description",
//       "picture_url": "http://www.myapp.com/myimage.jpg",
//       "category_id": "cat123",
//       "quantity": 1,
//       "currency_id": "U$",
//       "unit_price": 10
//     }
//   ],
//   "payer": {
//     "phone": {},
//     "identification": {},
//     "address": {}
//   },
//   "payment_methods": {
//     "excluded_payment_methods": [
//       {}
//     ],
//     "excluded_payment_types": [
//       {}
//     ]
//   },
//   "shipments": {
//     "free_methods": [
//       {}
//     ],
//     "receiver_address": {}
//   },
//   "back_urls": {},
//   "differential_pricing": {},
//   "tracks": [
//     {
//       "type": "google_ad"
//     }
//   ]
// }'




// async function generarLinkDePago() {
//     const productsToMP = carrito.map((element) => {
//       let nuevoElemento = {
//         title: element.nombre,
//         description: element.descripcion,
//         picture_url: element.img,
//         category_id: element.id,
//         quantity: Number(element.cantidad),
//         currency_id: "ARS",
//         unit_price: Number(element.precio),
//       };
//       return nuevoElemento;
//     });
//     const response = await fetch(
//       "https://api.mercadopago.com/checkout/preferences",
//       {
//         method: "POST",
//         headers: {
//           Authorization:
//             "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006",
//         },
//         body: JSON.stringify({
//           items: productsToMP,
//         }),
//       }
//     );
  
//     const data = await response.json();
//     window.open(data.init_point, "_blank");
//   }

