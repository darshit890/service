import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative h-[90vh]">
      <Image
        src="/heros.avif"
        alt="Team in office"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Maximize Your Digital Impact
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            With consumers spending more time online than ever before, having a strong
            digital presence is essential for businesses to succeed.
          </p>
          <Link href="/get-started" className="inline-block bg-[#243F5D] hover:bg-[#243F5D]/80 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Get Started
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;