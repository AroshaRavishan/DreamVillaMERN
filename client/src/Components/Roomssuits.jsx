// import React from 'react'
// import bed from '../../src/assets/images/bed.png';
// import wifi from '../../src/assets/images/wifi.png';
// import television from '../../src/assets/images/television.png';
// import PrimaryButton from './CommonComponents/PrimaryButton';


// function Roomssuits() {
//   return (
//     <div>
//       <div className="container mt-30 relative">
//         <div class="">
//           <div className="">
//             <div class="relative overflow-hidden rounded-xl h-[75vh] scale-105">
//               <img src="https://www.ansonika.com/paradise/img/rooms/1.jpg" alt="" class="absolute inset-0 object-cover w-full h-full carousel-image" />
//             </div>
//             <div class="flex justify-end">
//               <div class="lg:w-3/5 relative bg-white p-10 shadow-lg -mt-50 transform transition-transform duration-300 rounded-3">
//                 <small class="block text-sm md:text-base font-medium text-gold-100 tracking-[3px] uppercase block mb-0">From $190/night</small>
//                 <h2 class="text-lg sm:text-2xl font-semibold text-black-900 mt-2">Deluxe Room</h2>
//                 <p class="text-sm font-light mt-2">Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.</p>
//                 <div class="flex items-center space-x-4 mt-4">
//                   <ul class="">
//                     <li class="float-left flex items-center leading-none my-0 mr-6 mb-2">
//                       <img src={bed} alt="bed" />
//                       <span class="ml-2 text-sm font-light">King Size Bed</span>
//                     </li>
//                     <li class="float-left flex items-center leading-none my-0 mr-6 mb-2">
//                       <img src={wifi} alt="wifi" />
//                       <span class="ml-2 text-sm font-light">Free Wifi</span>
//                     </li>
//                     <li class="float-left flex items-center leading-none my-0 mr-6 mb-2">
//                       <img src={television} alt="television" />
//                       <span class="ml-2 text-sm font-light">32 Inch TV</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div class="flex items-center justify-between mt-6">
//                   <a href="room-details.html" class="text-blue-500 hover:underline">
//                     <PrimaryButton text="Read more" classes="" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <div class="relative overflow-hidden rounded-xl h-[75vh] scale-105 mt-20 sm:mt-40">
//               <img src="https://www.ansonika.com/paradise/img/rooms/4.jpg" alt="" class="absolute inset-0 object-cover w-full h-full carousel-image" />
//             </div>
//             <div class="flex justify-start">
//               <div class="lg:w-3/5 relative bg-white p-10 shadow-lg -mt-50 transform transition-transform duration-300 rounded-3">
//                 <small class="block text-sm md:text-base font-medium text-gold-100 tracking-[3px] uppercase block mb-0">From $240/night</small>
//                 <h2 class="text-lg sm:text-2xl font-semibold text-black-900 mt-2">Superior Room</h2>
//                 <p class="text-sm font-light mt-2">Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.</p>
//                 <div class="flex items-center space-x-4 mt-4">
//                   <ul class="">
//                     <li class="float-left flex items-center leading-none my-0 mr-6 mb-2">
//                       <img src={bed} alt="bed" />
//                       <span class="ml-2 text-sm font-light">King Size Bed</span>
//                     </li>
//                     <li class="float-left flex items-center leading-none my-0 mr-6 mb-2">
//                       <img src={wifi} alt="wifi" />
//                       <span class="ml-2 text-sm font-light">Free Wifi</span>
//                     </li>
//                     <li class="float-left flex items-center leading-none my-0 mr-6 mb-2">
//                       <img src={television} alt="television" />
//                       <span class="ml-2 text-sm font-light">32 Inch TV</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div class="flex items-center justify-between mt-6">
//                   <a href="room-details.html" class="text-blue-500 hover:underline">
//                     <PrimaryButton text="Read more" classes="" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <div class="relative overflow-hidden rounded-xl h-[75vh] scale-105 mt-20 sm:mt-40">
//               <img src="https://www.ansonika.com/paradise/img/rooms/2_b.jpg" alt="" class="absolute inset-0 object-cover w-full h-full carousel-image" />
//             </div>
//             <div class="flex justify-end">
//               <div class="lg:w-3/5 relative bg-white p-10 shadow-lg -mt-50 transform transition-transform duration-300 rounded-3">
//                 <small class="block text-sm md:text-base font-medium text-gold-100 tracking-[3px] uppercase block mb-0">From $190/night</small>
//                 <h2 class="text-lg sm:text-2xl font-semibold text-black-900 mt-2">Deluxe Room</h2>
//                 <p class="text-sm font-light mt-2">Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.</p>
//                 <div class="flex items-center space-x-4 mt-4">
//                   <ul class="">
//                     <li class="float-left flex items-center leading-none my-0 mr-6 mb-2">
//                       <img src={bed} alt="bed" />
//                       <span class="ml-2 text-sm font-light">King Size Bed</span>
//                     </li>
//                     <li class="float-left flex items-center leading-none my-0 mr-6 mb-2">
//                       <img src={wifi} alt="wifi" />
//                       <span class="ml-2 text-sm font-light">Free Wifi</span>
//                     </li>
//                     <li class="float-left flex items-center leading-none my-0 mr-6 mb-2">
//                       <img src={television} alt="television" />
//                       <span class="ml-2 text-sm font-light">32 Inch TV</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div class="flex items-center justify-between mt-6">
//                   <a href="room-details.html" class="text-blue-500 hover:underline">
//                     <PrimaryButton text="Read more" classes="" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Roomssuits



import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bed from '../../src/assets/images/bed.png';
import wifi from '../../src/assets/images/wifi.png';
import television from '../../src/assets/images/television.png';
import PrimaryButton from './CommonComponents/PrimaryButton';
import '../assets/custom-module.css';


const images = [
  'https://www.ansonika.com/paradise/img/rooms/1.jpg',
  'https://www.ansonika.com/paradise/img/rooms/2.jpg',
  'https://www.ansonika.com/paradise/img/rooms/3.jpg'
];

function Roomssuits() {
  return (
    <div>
      <div className="container mt-30 relative">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-4 items-center">
          <div class="xl:col-span-8">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows showArrows={false}>
              {images.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl h-[60vh] rounded-3">
                  <img src={image} alt="" className="absolute inset-0 object-cover w-full h-full carousel-image" />
                </div>
              ))}
            </Carousel>
          </div>
          <div class="xl:col-span-4">
            <div className="flex justify-end box-detail-card-row-1">
              <div className="w-full relative bg-white p-10 shadow-lg transform transition-transform duration-300 rounded-3 box-card">
                <small className="block text-sm md:text-base font-medium text-gold-100 tracking-[3px] uppercase block mb-0">From $190/night</small>
                <h2 className="text-lg sm:text-2xl font-semibold text-black-900 mt-2">Deluxe Room</h2>
                <p className="text-sm font-light mt-2">Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.</p>
                <div className="flex items-center space-x-4 mt-4">
                  <ul>
                    <li className="float-left flex items-center leading-none my-0 mr-6 mb-2">
                      <img src={bed} alt="bed" />
                      <span className="ml-2 text-sm font-light">King Size Bed</span>
                    </li>
                    <li className="float-left flex items-center leading-none my-0 mr-6 mb-2">
                      <img src={wifi} alt="wifi" />
                      <span className="ml-2 text-sm font-light">Free Wifi</span>
                    </li>
                    <li className="float-left flex items-center leading-none my-0 mr-6 mb-2">
                      <img src={television} alt="television" />
                      <span className="ml-2 text-sm font-light">32 Inch TV</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <a href="room-details.html" className="text-blue-500 hover:underline">
                    <PrimaryButton text="Read more" classes="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-4 items-center mt-20 sm:mt-40">
          <div class="xl:col-span-4 xl:order-last">
            <div className="flex justify-end box-detail-card-row-2">
              <div className="w-full relative bg-white p-10 shadow-lg transform transition-transform duration-300 rounded-3 box-card z-1">
                <small className="block text-sm md:text-base font-medium text-gold-100 tracking-[3px] uppercase block mb-0">From $190/night</small>
                <h2 className="text-lg sm:text-2xl font-semibold text-black-900 mt-2">Deluxe Room</h2>
                <p className="text-sm font-light mt-2">Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.</p>
                <div className="flex items-center space-x-4 mt-4">
                  <ul>
                    <li className="float-left flex items-center leading-none my-0 mr-6 mb-2">
                      <img src={bed} alt="bed" />
                      <span className="ml-2 text-sm font-light">King Size Bed</span>
                    </li>
                    <li className="float-left flex items-center leading-none my-0 mr-6 mb-2">
                      <img src={wifi} alt="wifi" />
                      <span className="ml-2 text-sm font-light">Free Wifi</span>
                    </li>
                    <li className="float-left flex items-center leading-none my-0 mr-6 mb-2">
                      <img src={television} alt="television" />
                      <span className="ml-2 text-sm font-light">32 Inch TV</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <a href="room-details.html" className="text-blue-500 hover:underline">
                    <PrimaryButton text="Read more" classes="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-8 order-first xl:order-last">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows showArrows={false}>
              {images.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl h-[60vh] rounded-3">
                  <img src={image} alt="" className="absolute inset-0 object-cover w-full h-full carousel-image" />
                </div>
              ))}
            </Carousel>
          </div>

        </div>
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-4 items-center mt-20 sm:mt-40">
          <div class="xl:col-span-8">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows showArrows={false}>
              {images.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl h-[60vh] rounded-3">
                  <img src={image} alt="" className="absolute inset-0 object-cover w-full h-full carousel-image" />
                </div>
              ))}
            </Carousel>
          </div>
          <div class="xl:col-span-4">
            <div className="flex justify-end box-detail-card-row-1">
              <div className="w-full relative bg-white p-10 shadow-lg transform transition-transform duration-300 rounded-3 box-card">
                <small className="block text-sm md:text-base font-medium text-gold-100 tracking-[3px] uppercase block mb-0">From $190/night</small>
                <h2 className="text-lg sm:text-2xl font-semibold text-black-900 mt-2">Deluxe Room</h2>
                <p className="text-sm font-light mt-2">Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.</p>
                <div className="flex items-center space-x-4 mt-4">
                  <ul>
                    <li className="float-left flex items-center leading-none my-0 mr-6 mb-2">
                      <img src={bed} alt="bed" />
                      <span className="ml-2 text-sm font-light">King Size Bed</span>
                    </li>
                    <li className="float-left flex items-center leading-none my-0 mr-6 mb-2">
                      <img src={wifi} alt="wifi" />
                      <span className="ml-2 text-sm font-light">Free Wifi</span>
                    </li>
                    <li className="float-left flex items-center leading-none my-0 mr-6 mb-2">
                      <img src={television} alt="television" />
                      <span className="ml-2 text-sm font-light">32 Inch TV</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <a href="room-details.html" className="text-blue-500 hover:underline">
                    <PrimaryButton text="Read more" classes="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-4 items-center mt-20 sm:mt-40">
          <div class="xl:col-span-4 xl:order-last">
            <div className="flex justify-end box-detail-card-row-2">
              <div className="w-full relative bg-white p-10 shadow-lg transform transition-transform duration-300 rounded-3 box-card z-1">
                <small className="block text-sm md:text-base font-medium text-gold-100 tracking-[3px] uppercase block mb-0">From $190/night</small>
                <h2 className="text-lg sm:text-2xl font-semibold text-black-900 mt-2">Deluxe Room</h2>
                <p className="text-sm font-light mt-2">Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.</p>
                <div className="flex items-center space-x-4 mt-4">
                  <ul>
                    <li className="float-left flex items-center leading-none my-0 mr-6 mb-2">
                      <img src={bed} alt="bed" />
                      <span className="ml-2 text-sm font-light">King Size Bed</span>
                    </li>
                    <li className="float-left flex items-center leading-none my-0 mr-6 mb-2">
                      <img src={wifi} alt="wifi" />
                      <span className="ml-2 text-sm font-light">Free Wifi</span>
                    </li>
                    <li className="float-left flex items-center leading-none my-0 mr-6 mb-2">
                      <img src={television} alt="television" />
                      <span className="ml-2 text-sm font-light">32 Inch TV</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <a href="room-details.html" className="text-blue-500 hover:underline">
                    <PrimaryButton text="Read more" classes="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-8 order-first xl:order-last">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows showArrows={false}>
              {images.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl h-[60vh] rounded-3">
                  <img src={image} alt="" className="absolute inset-0 object-cover w-full h-full carousel-image" />
                </div>
              ))}
            </Carousel>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Roomssuits;

