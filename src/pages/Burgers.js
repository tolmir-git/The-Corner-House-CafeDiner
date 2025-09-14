import React, { useEffect } from 'react';
import AnimatedPage from '../components/Menu_Animation';
import { showOrderButton } from '../components/order_button';
function BurgersPage() {
  useEffect(() => {
    showOrderButton();
  }, []);

  return (
    <AnimatedPage>
    <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
            <h1 className="section-title text-4xl sm:text-5xl font-bold mb-4">Burgers</h1>
            <p className="text-lg sm:text-xl text-gray-600">put a small description to the page.</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md min-h-[650px] w-full xl:max-w-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Quarter-Pound Beef Burger</h2>
                <p className="text-gray-500 mb-4 italic text-sm">Served In A Toasted Brioche Bun With Lettuce, Tomato, Onion Gherkin.</p>
                <div className="space-y-6">
                    <div className="relative group">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Quarter-Pound Burger</h3>
                                 {/* <span className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 text-xs px-3 py-1 rounded-full font-semibold shadow-sm border border-amber-200">⭐ Popular</span>  */}
                            </div>
                            <span className="price text-xl sm:text-2xl font-bold">£5.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">With Melted Cheddar </h3>
                            <span className="price text-xl sm:text-2xl font-bold">£5.95</span>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">With Melted Cheddar & Bacon </h3>
                                <span className="price text-xl sm:text-2xl font-bold">£6.95</span>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Extra Homemade Beef Patty </h3>
                            </div>
                            <span className="price text-xl sm:text-2xl font-bold">£2.50</span>
                        </div>
                    </div>
                    <div>

                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">3 Onion Rings In Burger </h3>
                            <span className="price text-xl sm:text-2xl font-bold">£1.00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md min-h-[650px] w-full xl:max-w-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Burgers</h2>
                <p className="text-gray-500 mb-4 italic text-sm"><b>40z BATTERED CHICKEN BURGER</b> Served In A Toasted Brioche Bun With Lettuce, Tomato & Mayo.</p>
                <p className="text-gray-600 text-sm"><b className="price text-lg sm:text-xl font-bold text-right">*</b>S = Sandwich, B = Baguette, R = Roll</p>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Chicken Burger </h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£5.50</span>
                        </div>
                        
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">With Melted Cheddar </h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£5.95</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">With Melted Cheddar & Bacon </h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£6.95</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Extra Chicken Fillet </h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£2.50</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md min-h-[650px] w-full md:col-span-2 md:max-w-lg md:mx-auto xl:col-span-1 xl:max-w-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Homemade Quarter-Pound Veggie Burger</h2>
                <p className="text-gray-500 mb-4 italic text-sm">Served In A Toasted Brioche Bun With Lettuce, Tomato, Onion & Gherkin</p>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Quarter-Pound Burger </h3>
                            <span className="price text-xl sm:text-2xl font-bold">£5.50 </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">With Melted Cheddar</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£5.95</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Extra Homemade Veggie Patty</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£2.50 </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">3 Onion Rings In Burger</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£1.00</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Hash Brown </h3>
                            <span className="price text-xl sm:text-2xl font-bold">80p</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 card shadow-md col-span-1 md:col-span-2 xl:col-span-3">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Burgers Extras</h2>
                <p className="text-gray-500 mb-4 italic text-sm">A nice addition to your burger</p>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-grey-600">Chips/Fries/Curly Fries</h3>
                        <span className="price_extras text-x1">£3.25</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Cheesy Chips/Curly Fries </h3>
                        <span className="price_extras text-sm">£4.50</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Small Chips/Fries/Curly Fries </h3>
                        <span className="price_extras text-sm">£1.95</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Onion Rings (8)</h3>
                        <span className="price_extras text-sm">£2.50</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Homemade Pulled Pork Or Chilli</h3>
                        <span className="price_extras text-sm">£2.50</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Crispy Onions Or Fried Onions</h3>
                        <span className="price_extras text-sm">£1.00</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Coleslaw (4 Oz Pot)</h3>
                        <span className="price_extras text-sm">£1.25</span>
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

export default BurgersPage;