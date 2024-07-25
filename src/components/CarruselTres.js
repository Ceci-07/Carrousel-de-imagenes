import { useState } from 'react';


const imagenes = [
    {
        url:'https://i.pinimg.com/564x/8a/6e/96/8a6e9613c0e8376cb1b04ea19e7eb2d3.jpg',
        title: 'Estación VERANO'
    },
    {
        url: 'https://i.pinimg.com/736x/ad/bd/ec/adbdeceaa81325a94e08df3533afca93.jpg',
        title: 'Estación PRIMAVERA'
    },
    {
       url:'https://i.pinimg.com/564x/99/67/73/99677310b45bf439ebe7b204136e59fa.jpg',
       title: 'Estación INVIERNO'
    },
    {
      url:'https://i.pinimg.com/564x/ac/26/77/ac26779cc5c93d2f7dd1ec5cfe70ffcd.jpg',
      title:'Estación OTOÑO'
    },
];

export default function CarruselTres() {
    const [something, setSomething] = useState(0); 


function imgDerecha() {
    setSomething (something === imagenes.length - 1 ? 0 : something + 1 )
}

function imgIzquierda() {
    setSomething(something === 0 ? imagenes.length - 1 : something -1)
}
    return(
        <div className='carrusel-principal'>
            <div className='encapsular-carrusel'>
             <div className='flecha-izquierda' onClick={imgIzquierda}>
             ⬅
             </div>
             <div className='flecha-derecha' onClick={imgDerecha}>
             ⮕
             </div>
             {imagenes.map(
                (img, imgIndex) => something === imgIndex && (
                    <div key={imgIndex} className='change'>
                        <img src={img.url} alt={`Change ${imgIndex}`} />
                        <h3 className='title-de-estacion'>{img.title}</h3>

                    </div>
                )
             )}
            </div>
        </div>
    )
}

