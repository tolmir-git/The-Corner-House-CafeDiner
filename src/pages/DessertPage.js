import React from 'react';
import AnimatedPage from '../components/Menu_Animation';

function DessertPage() {
  return (
    <AnimatedPage>
    <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
            <h1 className="section-title text-4xl sm:text-5xl font-bold mb-4">Our Dessert Menu</h1>
            <p className="text-lg sm:text-xl text-gray-600">Indulge your sweet tooth with our delicious desserts and homemade cakes.</p>
             <div class="flex justify-center gap-4 mt-4">
                <span class="inline-flex items-center gap-1">
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                    <span class="text-sm text-gray-600">Vegetarian</span>
                </span>
                <span class="inline-flex items-center gap-1">
                    <span class="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">N</span>
                    <span class="text-sm text-gray-600">Contains Nuts</span>
                </span>
            </div>
        </div>

        {/*Menu Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Pancakes & Sweets Section */}
            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Pancakes & Sweets</h2>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Chocolate Pancakes</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£5.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">3 Pancakes with Chocolate Flake, Chocolate Sauce & Vanilla Ice Cream.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Banana Pancakes</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£5.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">3 Pancakes with Fresh Banana, Chocolate Sauce & Ice Cream.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Pancakes with Syrup</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£4.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">3 Pancakes with Vanilla Ice Cream & Maple Syrup.</p>
                    </div>
                </div>
            </div>

            {/* Pies & Cakes Section */}
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
                            <h3 className="text-xl sm:text-2xl font-semibold">Homemade Cakes</h3>
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
    </AnimatedPage>
  );
}

export default DessertPage;