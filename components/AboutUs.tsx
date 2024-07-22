import Image from 'next/image';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="text-white ">
      <div className="max-w-7xl mx-auto border p-10 rounded-3xl bg-gray-900">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 ">
            <h2 className="text-4xl font-bold mb-6">ABOUT</h2>
            <p className="mb-4">
              My name is Sophie Vermeulen and moving the needle is second nature to me. With a
              focus mainly on blackwork and dotwork, I create intricate and mesmerizing designs
              that push the boundaries of tattoo art.
            </p>
            <p className="mb-4">
              Over the years, my dedication to these styles has garnered me numerous awards, showcasing my artistic
              mastery and innovative approach.
            </p>
            <p className="mb-4">
              From the bustling streets of New York to the sun-soaked shores of Los Angeles and the vibrant city of Tokyo, I have
              traveled far and wide, leaving an indelible mark with my captivating blackwork and dotwork tattoos. Join me on
              this artistic journey and discover why my work resonates with ink enthusiasts worldwide.
            </p>
            <div className="mt-8">
              <p className="text-sm mb-2">Mentioned in</p>
              <div className="flex gap-4">
                <span className="font-serif italic">TIME</span>
                <span className="font-serif">VOGUE</span>
                <span className="font-bold">GQ</span>
                <span className="font-serif">Forbes</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <Image
              src="/heros.avif" // Replace with your actual image path
              alt="Tattoo artist at work"
              width={600}
              height={400}
              layout="responsive"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-lime-400 text-black py-2 px-4 rotate-[-2deg]">
              <span className="font-bold">12 YEARS IN THE BUSINESS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;