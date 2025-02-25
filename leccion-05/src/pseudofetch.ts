import { errorMsg } from "./data";

const data = [
    {
        "title": "Atardecer en la Playa",
        "description": "Un hermoso atardecer sobre una playa de arena dorada, con el sol descendiendo en el horizonte y reflejando su luz sobre el mar tranquilo.",
        "imgSrc": "https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "alt": "Atardecer sobre una playa de arena"
    },
    {
        "title": "Paisaje Montañoso",
        "description": "Una vista impresionante de un paisaje montañoso con picos cubiertos de niebla y valles verdes que se extienden hasta el horizonte.",
        "imgSrc": "https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "alt": "Paisaje montañoso"
    },
    {
        "title": "Horizonte de la Ciudad",
        "description": "Un vibrante horizonte de la ciudad iluminado por luces brillantes que reflejan la energía de la vida nocturna en la metrópoli.",
        "imgSrc": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2l1ZGFkfGVufDB8fDB8fHww",
        "alt": "Horizonte de la ciudad por la noche"
    },
    {
        "title": "Sendero en el Bosque",
        "description": "Un sendero sereno a través de un denso bosque, donde los rayos del sol se filtran entre los árboles y las hojas crujen bajo los pies.",
        "imgSrc": "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9zcXVlfGVufDB8fDB8fHww",
        "alt": "Sendero a través de un denso bosque"
    },
    {
        "title": "Dunas del Desierto",
        "description": "Dunas de arena dorada bajo un cielo azul claro, formando ondulaciones perfectas moldeadas por el viento del desierto.",
        "imgSrc": "https://plus.unsplash.com/premium_photo-1675628634509-a17a34153f1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVuYXN8ZW58MHx8MHx8fDA%3D",
        "alt": "Dunas de arena dorada"
    },
    {
        "title": "Montañas Nevadas",
        "description": "Majestuosas montañas cubiertas de nieve brillan bajo un cielo despejado, con cumbres blancas que contrastan con el paisaje rocoso.",
        "imgSrc": "https://plus.unsplash.com/premium_photo-1673859054724-d3ce699da39d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9udGElQzMlQjFhJTIwbmV2YWRhfGVufDB8fDB8fHww",
        "alt": "Montañas cubiertas de nieve"
    },
    {
        "title": "Olas del Océano",
        "description": "Olas cristalinas del océano rompiendo contra la orilla, creando espuma blanca y un sonido relajante que llena el aire.",
        "imgSrc": "https://images.unsplash.com/photo-1513553404607-988bf2703777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NlYW5vfGVufDB8fDB8fHww",
        "alt": "Olas rompiendo contra la orilla"
    },
    {
        "title": "Hojas de Otoño",
        "description": "Hojas de otoño en tonos rojos, naranjas y amarillos cubren el suelo de un bosque, creando una alfombra natural vibrante.",
        "imgSrc": "https://plus.unsplash.com/premium_photo-1668136403317-1230640e4b9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3RvJUMzJUIxb3xlbnwwfHwwfHx8MA%3D%3D",
        "alt": "Hojas de otoño coloridas"
    },
    {
        "title": "Noche Estrellada",
        "description": "Un cielo nocturno claro y profundo, repleto de estrellas brillantes que parecen extenderse hasta el infinito.",
        "imgSrc": "https://plus.unsplash.com/premium_photo-1686050878751-89499d28d153?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9jaGUlMjBlc3RyZWxsYWRhfGVufDB8fDB8fHww",
        "alt": "Cielo nocturno claro lleno de estrellas"
    },
    {
        "title": "Campo de Flores",
        "description": "Un extenso campo cubierto de flores en plena floración, con colores vibrantes que se extienden hasta el horizonte bajo un cielo azul.",
        "imgSrc": "https://plus.unsplash.com/premium_photo-1671974489943-98babcc868d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbXBvJTIwZGUlMjBmbG9yZXN8ZW58MHx8MHx8fDA%3D",
        "alt": "Campo lleno de flores en flor"
    }
];

export const pseudoFetch = async (giveResponse: boolean) => {
    let response = await new Promise((resolve,reject) => setTimeout(() =>{
        if(giveResponse){
            resolve(data);
        }else{
            reject(Error(errorMsg));
        }
        
    },1000));
    return response;
}