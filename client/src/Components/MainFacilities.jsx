import React from 'react'
import parking from '../../src/assets/images/parking.png';
import smartphone from '../../src/assets/images/smartphone.png';
import bar from '../../src/assets/images/cocktail.png';
import pool from '../../src/assets/images/swimming-pool.png'
import '../assets/custom-module.css';

function MainFacilities() {
    return (
        <div>
            <div className="container mt-10 md:mt-30 relative">
                <div class="flex items-center text-center">
                    <div class="w-full">
                        <h1 class="text-sm md:text-base font-medium mt-4 text-gold-100 tracking-[3px] uppercase">Paradise Hotel</h1>
                        <p class="text-2xl md:text-4xl font-semibold mt-1 text-black-900">Main Facilities</p>
                    </div>
                </div>
                <div class="row mt-10 sm:mt-14 flex flex-wrap">
                    <div class="col-xl-3 col-md-6 w-full md:w-1/2 xl:w-1/4 text-center">
                        <div class="box_facilities-no-border box_facilities animate-slideInUp duration-600 ease delay-180">
                            <div className="flex justify-center">
                                <img src={parking} alt="parking" />
                            </div>
                            <h3 class="text-base sm:text-lg font-semibold mt-2 text-black-900">Private Parking</h3>
                            <p class="text-sm mt-3 font-light">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 w-full md:w-1/2 xl:w-1/4 text-center">
                        <div class="box_facilities animate-slideInUp duration-600 ease delay-180">
                            <div className="flex justify-center">
                                <img src={smartphone} alt="smartphone" />
                            </div>
                            <h3 class="text-base sm:text-lg font-semibold mt-2 text-black-900">Private Parking</h3>
                            <p class="text-sm mt-3 font-light">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 w-full md:w-1/2 xl:w-1/4 text-center">
                        <div class="box_facilities animate-slideInUp duration-600 ease delay-180">
                            <div className="flex justify-center">
                                <img src={bar} alt="bar" />
                            </div>
                            <h3 class="text-base sm:text-lg font-semibold mt-2 text-black-900">Bar & Restaurant</h3>
                            <p class="text-sm mt-3 font-light">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 w-full md:w-1/2 xl:w-1/4 text-center">
                        <div class="box_facilities animate-slideInUp duration-600 ease delay-180">
                            <div className="flex justify-center">
                                <img src={pool} alt="pool" />
                            </div>
                            <h3 class="text-base sm:text-lg font-semibold mt-2 text-black-900">Swimming Pool</h3>
                            <p class="text-sm mt-3 font-light">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainFacilities;
