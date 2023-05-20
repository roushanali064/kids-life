import React from 'react'
import img1 from '../../../assets/gallery-1.jpg'
import img2 from '../../../assets/gallery-2.jpg'
import img3 from '../../../assets/gallery-3.jpg'
import img4 from '../../../assets/gallery-4.jpg'

const Gallery = () => {
    return (
        <div className='mt-28'>
            <h2 className='text-4xl font-bold text-center text-[#E0035D] mb-24'>Our Toys Gallery</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img1} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img2} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img4} alt="" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img3} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img4} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img1} alt="" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img2} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img3} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img4} alt="" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img1} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img2} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;