import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="flex mt-16 justify-center items-center h-full w-full">
            {/* Image Component */}
            <Image
                src="/img-3.png" 
                alt="banner"
                width={1000} 
                height={500} 
            />
        </div>
    );
};

export default Banner;
