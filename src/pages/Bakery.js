import React, { useEffect } from 'react';
import AnimatedPage from '../components/Menu_Animation';
import { showOrderButton } from '../components/order_button';
function BakeryPage() {
  useEffect(() => {
    showOrderButton();
  }, []);

  return (
    <AnimatedPage>
    <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
            <h1 className="section-title text-4xl sm:text-5xl font-bold mb-4">Hot Savoury Bakery</h1>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">TOASTIES & PANINI'S</h2>
                <p className="text-gray-500 mb-4 italic text-sm"><br></br></p>
                <div className="space-y-6">
                    <div className="relative group">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Cheese </h3>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                                 {/* <span className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 text-xs px-3 py-1 rounded-full font-semibold shadow-sm border border-amber-200">⭐ Popular</span>  */}
                            </div>
                            <span className="price text-xl sm:text-2xl font-bold">£5.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheese & Tomato Or Onion</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                            <span className="price text-xl sm:text-2xl font-bold">£5.50</span>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Cheese & Tuna Mayo  </h3>
                            </div>
                            {/* Цена теперь является вторым дочерним элементом для flex-контейнера */}
                            <span className="price text-xl sm:text-2xl font-bold">£6.95</span>
                        </div>
                    </div>
                    <div>
                        
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Cheese & Ham</h3>
                            </div>
                            <span className="price text-xl sm:text-2xl font-bold">£6.50</span>
                        </div>
                    </div>
                    <div>

                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheese & Bacon</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£6.50</span>
                        </div>
                    </div>
                    <div>

                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheese & Chicken Breast </h3>
                            <span className="price text-xl sm:text-2xl font-bold">£6.50</span>
                        </div>
                    </div>
                    <div>

                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheese & Homemade Pulled Pork  </h3>
                            <span className="price text-xl sm:text-2xl font-bold">£7.50</span>
                        </div>
                    </div>
                    <p className="text-sm italic text-gray-500 mt-2"><b>ADD CHICKEN TO ANY OF THE ABOVE E1.00 EXTRA. ADD SMALL CHIPS OR FRIES E1.95</b></p>
                </div>
            </div>

            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">OVEN BAKED JACKETS</h2>
                <p className="text-gray-500 mb-4 italic text-sm">Available From 11 am - With Salad Garnish</p>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheese</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                            <span className="price text-lg sm:text-xl font-bold text-right">£6.95</span>
                        </div>
                        
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Baked Beans</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£6.95</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Egg Mayo</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£6.95</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Tuna Mayo</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£6.95</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheese & Beans</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                            <span className="price text-lg sm:text-xl font-bold text-right">£7.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheese & Coleslaw</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                            <span className="price text-lg sm:text-xl font-bold text-right">£7.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheese & Tuna Mayo</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£7.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheese & Bacon</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£7.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Homemade Pulled Pork</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£8.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Homemade Chilli Con Carne</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£8.50</span>
                        </div>
                    </div>
                    <p className="text-sm italic text-gray-500 mt-2"><b>EXTRA FILLINGS £1.00 EACH</b></p>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 card shadow-md col-span-1 md:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">FRESH SALADS</h2>
                <p className="text-gray-500 mb-4 italic text-sm">Lettuce, Tomato, Cucumber, Onion, Sweetcorn, Boiled Egg, Homemade Coleslaw, Grated Cheese, Beetroot & Mixed Peppers. </p>
               
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-grey-600">Cheese </h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                        <span className="price_extras text-x1">£8.95</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Egg Mayo</h3>
                        <span className="price_extras text-sm">£8.95</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Tuna Mayo</h3>
                        <span className="price_extras text-sm">£8.95</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Carved Ham</h3>
                        <span className="price_extras text-sm">£9.50</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Chicken Breast </h3>
                        <span className="price_extras text-sm">£9.50</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Homemade Pulled Pork </h3>
                        <span className="price_extras text-sm">£9.50</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">3 Egg Omelette</h3>
                        <span className="price_extras text-sm">£9.50</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Small Salad Bowl </h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                        <span className="price_extras text-sm">£2.00</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Crusty Roll </h3>
                        <span className="price_extras text-sm">£1.00</span>
                    </div>
                    <p className="text-sm italic text-gray-500 mt-2">1 Slice Of Bread & Butter With All Salads On Request.</p>
                </div>
            </div>
        </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md min-h-[650px]">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">SANDWICHES</h2>
                <p className="text-gray-500 mb-4 italic text-sm">White Or Wholemeal Bread</p>
                <div className="space-y-6">
                    <div className="relative group">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Cheese </h3>
                                <span className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 text-xs px-3 py-1 rounded-full font-semibold shadow-sm border border-amber-200">⭐ Popular</span>
                            </div>
                            <span className="price text-xl sm:text-2xl font-bold">£4.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Egg Mayo </h3>
                            <span className="price text-xl sm:text-2xl font-bold">£4.50</span>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Tuna Mayo</h3>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                            </div>
                            <span className="price text-xl sm:text-2xl font-bold">£4.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Carved Ham </h3>
                            </div>
                            <span className="price text-xl sm:text-2xl font-bold">£5.25</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Chicken Breast </h3>
                            <span className="price text-xl sm:text-2xl font-bold">£5.25</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md min-h-[650px] w-full xl:max-w-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">BAGUETTES</h2>
                <p className="text-gray-500 mb-4 italic text-sm">10" Baked On The Premises </p>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheese</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                            <span className="price text-lg sm:text-xl font-bold text-right">£6.75</span>
                        </div>
                        
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Egg Mayo</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£6.75</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Tuna Mayo</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£6.75</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Carved Gammon Ham</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£7.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Chicken Breast</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£7.50</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md min-h-[650px] w-full md:col-span-2 md:max-w-lg md:mx-auto xl:col-span-1 xl:max-w-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">CRUSTY ROLLS</h2>
                <p className="text-gray-500 mb-4 italic text-sm">Baked On The Premises</p>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheese </h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">V</span>
                            <span className="price text-xl sm:text-2xl font-bold">£3.75</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Egg Mayo </h3>
                            <span className="price text-xl sm:text-2xl font-bold">£3.75</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Tuna Mayo</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£3.75</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Chicken Breast</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£4.25</span>
                        </div>
                    </div>
                </div>
                <p className="text-sm italic text-gray-500 mt-2"><b>EXTRA FILLINGS £1.00 EACH</b></p>
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

export default BakeryPage;