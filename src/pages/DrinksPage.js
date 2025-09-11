import React, { useEffect } from 'react';
import AnimatedPage from '../components/Menu_Animation';
import { showOrderButton } from '../components/order_button';
function DrinksPage() {
  useEffect(() => {
    showOrderButton();
  }, []);

  return (
    <AnimatedPage>
    <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
            <h1 className="section-title text-4xl sm:text-5xl font-bold mb-4">Our Drinks Menu</h1>
            <p className="text-lg sm:text-xl text-gray-600">Enjoy a wide range of hot drinks, cold beverages, and alcoholic options.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">

            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Hot Drinks</h2>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Tea</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£2.00</span>
                        </div>
                        <p className="text-gray-600 text-sm">Pot or Mug of Tea. Pot for Two £3.90. Decaf Available.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Coffee</h3>
                            <span className="price text-xl sm:text-2xl font-bold">from £2.25</span>
                        </div>
                        <p className="text-gray-600 text-sm">Lavazza Italian Coffee: Espresso £2.25, Black £2.50, White £2.60.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Specialty Coffee</h3>
                            <span className="price text-xl sm:text-2xl font-bold">from £2.90</span>
                        </div>
                        <p className="text-gray-600 text-sm">Cappuccino £2.90, Latte £2.90, Hot Chocolate £3.10, Mocha £3.35. Large 50p extra. Flavoured Syrups & Marshmallows 50p. Decaf available.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold"><b className="price text-lg sm:text-xl font-bold text-right">*</b>Extras</h3>
                            <span className="price text-xl sm:text-2xl font-bold"></span>
                        </div>
                        <ul className="text-gray-600 text-sm list-disc list-inside">
                            <li>Iced Coffee Bottle (250ml) £2.50</li>
                            <li>Large Drinks 50p</li>
                            <li>Oat or Soya Milk 25p</li>
                            <li>Honey 50p</li>
                            <li>Marshmallows 50p</li>
                        </ul>    
                    </div>
                </div>
            </div>


            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Cold Drinks</h2>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Milkshakes</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£4.50</span>
                        </div>
                        <p className="text-gray-600 text-sm">Strawberry, Vanilla, or Chocolate Muffin. All milkshakes are served with whipped cream.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Soft Drinks</h3>
                            <span className="price text-xl sm:text-2xl font-bold">from £1.25</span>
                        </div>
                        <p className="text-gray-600 text-sm">Cans £1.65, Ribena £1.65, Soft Drink Bottles (500 ml) £2.50, Fruit Juice Bottle (500 ml) £2.25, Bottled Water (500 ml) £1.25, Energy Drinks £2.50.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 card shadow-md col-span-1 md:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Beer & Wine</h2>
                <p className="text-gray-500 mb-4 italic text-sm">Available from 11 am only. Served with a meal.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-semibold text-lg">Beer (330 ml)</h3>
                        <span className="price text-lg">£3.95</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-semibold text-lg">Wine (187 ml)</h3>
                        <span className="price text-lg">£3.95</span>
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

export default DrinksPage;