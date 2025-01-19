import React from 'react';
import Marquee from 'react-fast-marquee';

const logos = [
  { src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png', alt: 'Chatgpt' },
  { src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png', alt: 'Chatgpt' },
  { src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png', alt: 'Chatgpt' },
  { src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png', alt: 'Chatgpt' },
  { src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png', alt: 'Chatgpt' },
  { src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png', alt: 'Chatgpt' },
  { src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png', alt: 'Chatgpt' },
  { src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png', alt: 'Chatgpt' },
  { src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png', alt: 'Chatgpt' },

];

const Mar: React.FC = () => {
  return (
    <div className="bg-[#f4f4f4] py-4 pb-10 pt-10  ">
      <Marquee speed={50} autoFill={true} >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-16 mx-8 object-contain"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Mar;
