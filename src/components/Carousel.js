import { useState }  from 'react';

const images = [
    'https://i.pinimg.com/564x/82/ce/f9/82cef925c62c486f243e5e9444db8b37.jpg',
    'https://i.pinimg.com/564x/1e/0a/99/1e0a991bdee4502776c618b32266c8db.jpg',
    'https://i.pinimg.com/736x/1e/57/6a/1e576a39404c220e88f8297f1ab46409.jpg',
    'https://i.pinimg.com/564x/69/ba/fc/69bafc419f6ec73098fe09ea32832124.jpg',
    'https://i.pinimg.com/564x/e5/c7/ea/e5c7ea16bd04fc9a2742e0044519f327.jpg',
    'https://i.pinimg.com/564x/cf/e8/85/cfe8856061f56b294752144e6075a5c2.jpg',
];

export default function Carousel() {
    const [arrow, setArrow] = useState(0);


function nextImage() {
    setArrow(arrow === images.length - 1 ? 0 : arrow + 1);
}

function previousImage() {
    setArrow(arrow === 0 ? images.length - 1 : arrow -1);
}

return(
    <div className='carousel'>
    <div className='carousel-container'>
      <div className='left-arrow' onClick={previousImage}>
        ⬅
      </div>
      <div className='right-arrow' onClick={nextImage}>
        ⮕
      </div>
      {images.map(
        (image, index) => arrow === index && (
            <div key={index} className='displace'>
                <img src={image} alt={`Displace ${index}`} />
            </div>
        )
      )}
      </div>
    </div>
);
}