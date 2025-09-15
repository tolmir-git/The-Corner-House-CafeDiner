import React, { useEffect } from 'react';
import AnimatedPage from '../components/Menu_Animation';
import { showOrderButton } from '../components/order_button';
function MainsPage() {
  useEffect(() => {
    showOrderButton();
  }, []);

  return (
    <AnimatedPage>
    <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
            <h1 className="section-title text-4xl sm:text-5xl font-bold mb-4">Our Mains Menu</h1>
            <p className="text-lg sm:text-xl text-gray-600">Rich, Hot and Healthy Mains just for you</p>
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
            {/* HOMEMADE PULLED PORK CARD */}
            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">HOMEMADE PULLED PORK</h2>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Pulled Pork In A Toasted Brioche Bun With Salad & Gherkin</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£5.95</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Pulled Pork & Cheese Oven Baked Jacket Potato</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£7.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Pulled Pork On Cheesy Chips</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£7.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Pulled Pork On A Jumbo Hot Dog With Cheese</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£7.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Chips/Fries</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£6.95</span>
                        </div>
                        <p className="text-gray-600 text-sm italic">Served In A Baguette</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheesy Chips</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£4.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Small Chips/Fries</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£1.95</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* HOMEMADE CHILLI CON CARNE CARD */}
            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">HOMEMADE CHILLI CON CARNE</h2>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Chilli Con Carne With Boiled Rice</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right whitespace-nowrap">£7.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Chilli Con Carne & Cheese Oven Baked Jacket Potato</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right whitespace-nowrap">£8.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Chilli Con Carne With Cheesy Chips</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right whitespace-nowrap">£7.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Chilli Con Carne With Jumbo Cheese Dog</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right whitespace-nowrap">£7.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Chips/Fries</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£3.25</span>
                        </div>
                        <p className="text-gray-600 text-sm italic">Served In A Baguette</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheesy Chips</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right whitespace-nowrap">£4.50</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Small Chips/Fries</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right whitespace-nowrap">£1.95</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* REFACTORED MAINS CARD */}
            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md col-span-1 md:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">MAINS</h2>
                {/* Using a grid to create columns inside the card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                    {/* Item 1 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Gammon Ham, 2 Fried Eggs & Chips</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£9.50</span>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Large Steak & Kidney Pudding</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£10.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">With Chips/Mashed/Jacket Potato & Beans/Mushrooms/Gravy.</p>
                    </div>
                    {/* Item 3 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Homemade Meat Pie</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£9.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">With Chips/Mashed/Jacket Potato & Beans/Mushrooms/Gravy.</p>
                    </div>
                     {/* Item 4 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Homemade Meat Pie With Gravy</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£5.95</span>
                        </div>
                    </div>
                     {/* Item 5 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">3 Sausages, Mashed Potatoes & Gravy</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£8.50</span>
                        </div>
                    </div>
                     {/* Item 6 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">2 Sausages, Chips & Beans</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£6.95</span>
                        </div>
                    </div>
                     {/* Item 7 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">2 Fried Eggs & Chips</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£5.95</span>
                        </div>
                    </div>
                     {/* Item 8 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">2 Fried Eggs, Chips & Beans</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£6.50</span>
                        </div>
                    </div>
                     {/* Item 9 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Sausage, Fried Egg & Chips</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£5.95</span>
                        </div>
                    </div>
                     {/* Item 10 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">2 Sausages, 2 Fried Eggs & Chips</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£7.50</span>
                        </div>
                    </div>
                     {/* Item 11 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Bowl Of Chips Or Curly Fries</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£3.25</span>
                        </div>
                    </div>
                     {/* Item 12 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Cheesy Chips Or Cheesy Curly Fries</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£4.50</span>
                        </div>
                    </div>
                     {/* Item 13 */}
                     <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Crusty Buttered Roll</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£1.00</span>
                        </div>
                    </div>
                     {/* Item 14 */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Bowl Of Soup With A Roll</h3>
                            <span className="price text-xl sm:text-2xl font-bold text-right whitespace-nowrap">£3.95</span>
                        </div>
                    </div>
                </div>
                 <p className="text-sm italic text-gray-500 mt-6 pt-4 border-t border-gray-200">1 Slice Of Bread & Butter With Any Meal Above Available On Request</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:gap-8 mb-12">
            <div className="bg-white rounded-3xl p-6 sm:p-8 card shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">3 EGG OMELETTES</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    <div className="flex justify-between items-center border-b sm:border-0 pb-2 sm:pb-0">
                        <h3 className="font-semibold text-gray-800">Plain Omelette</h3>
                        <span className="price_extras font-bold">£4.50</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-0 pb-2 sm:pb-0">
                        <h3 className="font-semibold text-gray-800">Cheese Omelette With Side Salad, Bread & Butter</h3>
                        <span className="price_extras font-bold">£6.50</span>
                    </div>
                    <div className="flex justify-between items-center col-span-full">
                        <h3 className="font-semibold text-gray-800">Cheese Omelette With Chips Or Jacket Potato & Side Salad</h3>
                        <span className="price_extras font-bold">£8.50</span>
                    </div>
                </div>
                <p className="text-sm italic text-gray-500 mt-4 pt-4 border-t border-gray-200">
                    CHEESE & HAM or CHEESE & MUSHROOM OMELETTE also available.
                    <br/>
                    Due to kitchen restrictions omelettes without cheese can only be served plain and folded with your chosen filling.
                </p>
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

export default MainsPage;
