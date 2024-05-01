// import React from 'react'

// function ImageSlider() {
//   return (
//     <div>ImageSlider</div>
//   )
// }

// export default ImageSlider;

import React from 'react';

const ImageSlider = () => {
    const images = [
        {
            src: 'https://www.boutiquecollectionbyamaya.com/tri-koggala/wp-content/uploads/sites/8/2021/12/home-deskt-header.jpg',
            thumb: 'https://www.boutiquecollectionbyamaya.com/tri-koggala/wp-content/uploads/sites/8/2021/12/home-deskt-header.jpg',
        },
        {
            src: 'https://www.imamura.biz/blog/wp-content/uploads/image02.png',
            thumb: 'https://www.imamura.biz/blog/wp-content/uploads/image02_thumb.png',
        },
        {
            src: 'https://www.imamura.biz/blog/wp-content/uploads/image03.png',
            thumb: 'https://www.imamura.biz/blog/wp-content/uploads/image03_thumb.png',
        },
    ];

    const changeImg = (url, index) => {
        document.getElementById('img').src = url;
        const thumbImages = document.querySelectorAll('.thumb-img img');
        thumbImages.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    };

    return (
        <div id="content" className="mx-auto text-center mt-10 md:mt-30">
            <div id="featured_img">
                <img id="img" src={images[0].src} alt="Featured"  className='w-full min-h-[50vh]'/>
            </div>
            <div id="thumb_img" className="cf mt-2">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`${index === 0 ? 'active ' : ''
                            }cursor-pointer max-w-32 w-32 mr-2 border-2 border-eee box-border`}
                        src={image.thumb}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => changeImg(image.src, index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
