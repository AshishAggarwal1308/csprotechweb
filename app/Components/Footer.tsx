import Image from 'next/image';
import React from 'react';

function Footer() {
    const currentData = new Date().getFullYear();
    return (
        <footer className="relative w-full bg-blue-gray-50 pt-6 ">
            <div className="w-full px-8 mx-auto max-w-7xl">
                <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <Image className='h-auto w-auto' alt='logo' height={200} width={200} priority src="/logo.png" />
                        <p className='max-w-72 pt-2 text-gray-600'>CSProTechnology, founded in 2024, embodies a visionary approach, committed to delivering state-of-the-art enterprise solutions. Specializing in ERP, CRM, and factory automation software, we are dedicated to catalyzing business growth and optimizing operational efficiency.</p>
                    </div>
                    <div className="grid justify-between grid-cols-3 gap-4">
                        <ul>
                            <p className="block mb-3 font-sans text-sm font-medium leading-normal text-blue-gray-900 opacity-40">
                                Product
                            </p>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Tutorials
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <p className="block mb-3 font-sans text-sm font-medium leading-normal text-blue-gray-900 opacity-40">
                                Company
                            </p>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Press
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    News
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <p className="block mb-3 font-sans text-sm font-medium leading-normal text-blue-gray-900 opacity-40">
                                Resource
                            </p>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Newsletter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Help center
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-blue-gray-50 md:flex-row md:justify-between">
                    <p className="block mb-4 font-sans text-sm font-normal leading-normal text-center text-blue-gray-900 md:mb-0">
                        © {currentData}{" "}
                        <a href="/" className="text-blue-900 hover:underline">
                            Csprotechnology            </a>
                        . All Rights Reserved.
                    </p>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <a href="#" className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12zm-8.82 2.778H12V12h1.18l.443-2.89H12V7.22c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.195-2.238-.195c-2.285 0-3.777 1.384-3.777 3.89V12h-2.54v3.891h2.54v6.988a11.06 11.06 0 002.95 0v-6.988z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#" className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.78h-.527c-2.493 0-2.81.01-3.791.056-.926.043-1.433.205-1.77.342-.447.174-.767.383-1.104.72-.337.337-.546.657-.72 1.104-.137.337-.299.844-.342 1.77-.046.982-.056 1.298-.056 3.791v.527c0 2.493.01 2.81.056 3.791.043.926.205 1.433.342 1.77.174.447.383.767.72 1.104.337.337.657.546 1.104.72.337.137.844.299 1.77.342.982.046 1.298.056 3.791.056h.527c2.493 0 2.81-.01 3.791-.056.926-.043 1.433-.205 1.77-.342.447-.174.767-.383 1.104-.72.337-.337.546-.657.72-1.104.137-.337.299-.844.342-1.77.046-.982.056-1.298.056-3.791v-.527c0-2.493-.01-2.81-.056-3.791-.043-.926-.205-1.433-.342-1.77a3.122 3.122 0 00-.72-1.104c-.337-.337-.657-.546-1.104-.72-.337-.137-.844-.299-1.77-.342-.982-.046-1.298-.056-3.791-.056zm0 3.438a5.625 5.625 0 100 11.25 5.625 5.625 0 000-11.25zm0 1.75a3.875 3.875 0 110 7.75 3.875 3.875 0 010-7.75zm5.752-.219a1.313 1.313 0 11-2.625 0 1.313 1.313 0 012.625 0z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#" className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.548 2.286c-.54 0-.985.438-.985.978v17.472c0 .54.444.978.985.978h8.906c.54 0 .985-.438.985-.978V15.22h-1.985v4.093H8.533V4.685h6.934v4.093h1.985V3.264c0-.54-.444-.978-.985-.978H7.548zm3.48 9.164c0 .54-.445.978-.985.978H6.533v1.927H10.03c1.144 0 2.072-.93 2.072-2.073v-.811H10.03zm1.982 0h3.498v1.927h-3.498v-1.927z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
