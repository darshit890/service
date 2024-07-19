import { cn } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import AnimatedShinyText from './magicui/animated-shiny-text';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: '📱',
    title: 'Social Media Advertising',
    description: 'We create and manage targeted advertising campaigns on popular social media platforms such as Facebook, Instagram, Twitter, and LinkedIn.',
  },
  {
    icon: '🔍',
    title: 'Search Engine Marketing',
    description: 'Our SEM services include pay-per-click (PPC) advertising on search engines like Google and Bing, as well as search engine optimization.',
  },
  {
    icon: '📧',
    title: 'Email Marketing',
    description: 'Our email marketing services involve crafting compelling email campaigns to nurture leads, engage existing customers.',
  },
  {
    icon: '🖼️',
    title: 'Display Advertising',
    description: 'We design and implement visually appealing display ad campaigns across various online platforms and websites.',
  },
  {
    icon: '📊',
    title: 'Analytics and Reporting',
    description: 'We provide comprehensive analytics and reporting services to track the performance of your advertising campaigns.',
  },
  {
    icon: '📝',
    title: 'Strategic Planning',
    description: 'We develop and distribute high-quality, relevant content such as blog posts, articles, videos, and infographics.',
  },
];

const ServicesSection = () => {
  return (
    <section className="pt-16  bg-gray-100 pb-24">
      <div className="max-w-7xl px-4 mx-auto">
      <div className="z-10 flex min-h-[7rem] items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-50 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-100 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Services</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;