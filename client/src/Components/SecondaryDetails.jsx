import React from 'react';
import PrimaryButton from './CommonComponents/PrimaryButton';

function SecondaryDetails() {
    return (
        <div>
            <div className="">
                <div className="bg-white">
                    <div className="container py-20 md:py-24">
                        <div className="flex flex-wrap justify-between items-center mb-20 md:mb-16">
                            <div className="w-full lg:w-6/12">
                                <div className="rounded-lg overflow-hidden mb-4 flex justify-center overflow-hidden relative h-[45vh]">
                                    <div className="transform scale-105 absolute top-0 left-0 w-full h-full">
                                        <img src="https://www.ansonika.com/paradise/img/local_amenities_1.jpg" alt="" className="object-cover object-center w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12">
                                <div className="text-left">
                                    <small class="block text-sm md:text-base font-medium text-gold-100 tracking-[3px] uppercase">Local Amenities</small>
                                    <h3 className="text-lg sm:text-2xl font-semibold mb-4 text-black-900">Restaurants</h3>
                                    <p className="text-sm font-light mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <PrimaryButton text="Read more" classes=""/>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-between items-center">
                            <div class="w-full lg:w-1/2 lg:order-2">
                                <div className="rounded-lg overflow-hidden mb-4 flex justify-center overflow-hidden relative h-[45vh]">
                                    <div className="transform scale-105 absolute top-0 left-0 w-full h-full">
                                        <img src="https://www.ansonika.com/paradise/img/local_amenities_3.jpg" alt="" className="object-cover object-center w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-5/12 lg:order-1">
                                <div class="text-left">
                                    <small class="block text-sm md:text-base font-medium text-gold-100 tracking-[3px] uppercase">Local Amenities</small>
                                    <h3 class="text-lg sm:text-2xl font-semibold mb-4 text-black-900">Art & Culture</h3>
                                    <p class="text-sm font-light mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <PrimaryButton text="Read more" classes=""/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default SecondaryDetails;
