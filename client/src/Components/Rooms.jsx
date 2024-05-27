import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/custom-module.css';

function Rooms() {
    return (
        <div>
            <div className="container mt-10 md:mt-30 relative">
                <div class="">
                    <div class="">
                        <div class="flex items-center">
                            <div class="w-full">
                                <div className="">
                                    <img src="https://themewagon.github.io/seapalace/img/home/bed-icon.png" alt="image"></img>
                                </div>
                                <h1 class="text-sm md:text-base font-medium mt-4 text-gold-100 tracking-[3px] uppercase">Luxury experience</h1>
                                <p class="text-2xl md:text-4xl font-semibold mt-1 text-black-900">Rooms & Suites</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                            <div class="flex flex-col relative md:col-span-2 lg:col-span-1">
                                <Link href="room-details.html" >
                                    <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden room-card">
                                        <img class="lg:h-80 md:h-72 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://www.ansonika.com/paradise/img/rooms/1.jpg" alt="room" />
                                    </div>
                                    <div class="absolute bottom-0 left-0 p-4 text-white rounded-xl w-full card-info">
                                        <p class="text-xs font-semibold tracking-[2px] uppercase">From $250/night</p>
                                        <h4 class="text-2xl font-semibold">Junior suite</h4>
                                        <p class="text-xs font-normal mt-1">Read more</p>
                                    </div>
                                </Link>
                            </div>
                            <div class="flex flex-col relative md:col-span-1 lg:col-span-1">
                                <Link href="room-details.html" >
                                    <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden room-card">
                                        <img class="lg:h-80 md:h-72 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="room" />
                                    </div>
                                    <div class="absolute bottom-0 left-0 p-4 text-white rounded-xl w-full card-info">
                                        <p class="text-xs font-semibold tracking-[2px] uppercase">From $250/night</p>
                                        <h4 class="text-2xl font-semibold">Junior suite</h4>
                                    </div>
                                </Link>
                            </div>
                            <div class="flex flex-col relative md:col-span-1 lg:col-span-1">
                                <Link href="room-details.html" >
                                    <div class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden room-card">
                                        <img class="lg:h-80 md:h-72 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="room" />
                                    </div>
                                    <div class="absolute bottom-0 left-0 p-4 text-white rounded-xl w-full card-info">
                                        <p class="text-xs font-semibold tracking-[2px] uppercase">From $250/night</p>
                                        <h4 class="text-2xl font-semibold">Junior suite</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rooms;
