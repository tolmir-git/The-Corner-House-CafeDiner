import React, { useEffect } from 'react';
import AnimatedPage from '../components/Menu_Animation';
import { showOrderButton } from '../components/order_button';
function DessertPage() {
  useEffect(() => {
    showOrderButton();
  }, []);

  return (
    <AnimatedPage>
    <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
            <h1 className="section-title text-4xl sm:text-5xl font-bold mb-4">Our Dessert Menu</h1>
            <p className="text-lg sm:text-xl text-gray-600">Indulge your sweet tooth with our delicious desserts and homemade cakes.</p>
            <div className="flex justify-center gap-4 mt-4">
                <span className="inline-flex items-center gap-1">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                    <span className="text-sm text-gray-600">Vegetarian</span>
                </span>
                <span className="inline-flex items-center gap-1">
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">N</span>
                    <span className="text-sm text-gray-600">Contains Nuts</span>
                </span>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Pancakes & Sweets</h2>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Chocolate Pancakes</h3>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">N</span>
                            </div>
                            <span className="price text-xl sm:text-2xl font-bold">£5.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">3 Pancakes with Chocolate Flake, Chocolate Sauce & Vanilla Ice Cream.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Banana Pancakes</h3>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                            </div>
                            <span className="price text-xl sm:text-2xl font-bold">£5.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">3 Pancakes with Fresh Banana, Chocolate Sauce & Ice Cream.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Pancakes with Syrup</h3>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                            </div>
                            <span className="price text-xl sm:text-2xl font-bold">£4.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">3 Pancakes with Vanilla Ice Cream & Maple Syrup.</p>
                    </div>
                </div>
            </div>

            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Pies & Cakes</h2>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Banana Split</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£4.50</span>
                        </div>
                        <p className="text-gray-600 text-sm">A classic dessert perfect for sharing.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Apple Pie</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£4.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">Served with your choice of custard or ice cream.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Homemade Cakes</h3>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">N</span>
                            </div>
                            <span className="price text-xl sm:text-2xl font-bold">from £2.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">Homemade Cake of the Day £2.95. Homemade Cake & Custard £3.95. Also available: Large Chocolate Muffin £2.95, or with Custard £3.95.</p>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 card shadow-md col-span-1 md:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Extras</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-semibold text-lg">Jam, Marmalade, Marmite, Honey</h3>
                        <span className="price text-lg">50p</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-semibold text-lg">Kit Kat</h3>
                        <span className="price text-lg">£1.00</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-semibold text-lg">Ice Cream Single Scoop</h3>
                        <span className="price text-lg">£1.50</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-semibold text-lg">Ice Cream Two Scoops</h3>
                        <span className="price text-lg">£2.50</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <a href="https://just-eat.co.uk/restaurants-the-corner-house-southend-on-sea/menu?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=foodorder" 
        target="_blank" 
        rel="noopener noreferrer"
        id="floatingOrderBtn" 
        className="fixed right-4 top-1/2 -translate-y-1/2 text-white px-6 py-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 flex items-center gap-2 font-bold z-50 bg-amber-500 hover:bg-amber-600"
        style={{ 
            visibility: 'hidden',
            transform: 'translate(100%, -50%)'
        }}>
        <span>Order Now</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    </a>
    </AnimatedPage>
  );
}

export default DessertPage;