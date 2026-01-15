import React from 'react';

interface ResponsiveImageProps {
    src: string;
    sizes: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, sizes }) => {
    const srcSet = `
        ${src}?w=320 320w,
        ${src}?w=480 480w,
        ${src}?w=800 800w,
        ${src}?w=1200 1200w
    `.trim();

    return (
        <img
            src={`${src}?w=800`} // Fallback image
            srcSet={srcSet}
            sizes={sizes}
            alt=""
        />
    );
};

export default ResponsiveImage;