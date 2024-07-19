'use client'
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Subscribing email:', email);
  };

  return (
    <footer className="bg-gray-100 pt-20 pb-12 px-4 sm:px-6 lg:px-8  ">
      <div className="max-w-7xl bg-white mx-auto border p-10 rounded-3xl">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          <div className="mb-8 lg:mb-0">
            <Link href="/" className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full mr-2"></div>
              <span className="text-xl font-bold">FramerHub</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 lg:mb-0">
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                <li><Link href="/membership" className="text-gray-600 hover:text-gray-900">Membership</Link></li>
                <li><Link href="/testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</Link></li>
                <li><Link href="/support" className="text-gray-600 hover:text-gray-900">Get Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Products</h3>
              <ul className="space-y-2">
                <li><Link href="/toolbox" className="text-gray-600 hover:text-gray-900">Toolbox</Link></li>
                <li><Link href="/components" className="text-gray-600 hover:text-gray-900">Components</Link></li>
                <li><Link href="/templates" className="text-gray-600 hover:text-gray-900">PRO Templates</Link></li>
                <li><Link href="/inspiration" className="text-gray-600 hover:text-gray-900">Design Inspiration</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Account</h3>
              <ul className="space-y-2">
                <li><Link href="/signin" className="text-gray-600 hover:text-gray-900">Sign In</Link></li>
                <li><Link href="/activate" className="text-gray-600 hover:text-gray-900">Activate License</Link></li>
                <li><Link href="/reset-password" className="text-gray-600 hover:text-gray-900">Reset Password</Link></li>
              </ul>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQs</Link>
              <Link href="/changelog" className="text-gray-600 hover:text-gray-900">Changelog</Link>
              <Link href="/license" className="text-gray-600 hover:text-gray-900">Product License</Link>
            </div>
            <p className="text-gray-600">Copyright © 2024 - All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;