import React from 'react'


const Gallery = () => {
    return (
        <div className='mt-28'>
            <h2 className='text-4xl font-bold text-center text-[#E0035D] mb-24'>Our Toys Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/3zjr0WJ/gallery-1-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/BntxvPx/gallery-2-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/D7jZYSn/gallery-4-1.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/SQF9VxD/gallery-3-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/D7jZYSn/gallery-4-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/3zjr0WJ/gallery-1-1.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/BntxvPx/gallery-2-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/SQF9VxD/gallery-3-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/D7jZYSn/gallery-4-1.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/3zjr0WJ/gallery-1-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/BntxvPx/gallery-2-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/SQF9VxD/gallery-3-1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;