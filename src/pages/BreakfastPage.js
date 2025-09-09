import React from 'react';
import AnimatedPage from '../components/Menu_Animation';

function BreakfastPage() {
  return (
    <AnimatedPage>
    <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
            <h1 className="section-title text-4xl sm:text-5xl font-bold mb-4">Our Breakfast Menu</h1>
            <p className="text-lg sm:text-xl text-gray-600">Start your day the right way with our hearty and delicious breakfast options, served all day.</p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md min-h-[650px] w-full xl:max-w-md ">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Full English & Veggie</h2>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Full English</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£6.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">2 Sausages, 2 Bacon, 2 Fried Eggs, Baked Beans & Toast.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Small English</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£5.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">Sausage, Bacon, Fried Egg, Baked Beans & Toast.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Vegetarian</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£6.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">2 Hash Browns, 2 Fried Eggs, Mushrooms, Grilled Tomatoes, Baked Beans & Toast.<span>Add 2 Veggie Sausages for £1.00.</span></p>
                    </div>
                    <div>
                        
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold"> Small Vegetarian</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£5.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">Hash Brown, Fried Egg, Mushrooms, Grilled Tomatoes, Baked Beans & Toast.<br></br><span>Add a Veggie Sausage for £1.00.</span></p>
                    </div>
                    <div>

                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">All Day Brunch</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£8.50</span>
                        </div>
                        <p className="text-gray-600 text-sm">Fried Egg, Pork Sausage, Bacon, Baked Beans,Mushrooms,  Chips, Bread & Butter.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Corner House Special</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£6.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">2 Sausages, 2 Bacon, 2 Fried Eggs, 2 Hash Browns, Baked Beans & Toast.</p>
                    </div>
                </div>
            </div>

            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md min-h-[650px] w-full xl:max-w-md">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Sandwiches & Baguettes</h2>
                <p className="text-gray-500 mb-4 italic text-sm">Veggie sausages available for all options.</p>
                <p className="text-gray-600 text-sm"><b className="price text-lg sm:text-xl font-bold text-right">*</b>S = Sandwich, B = Baguette, R = Roll</p>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Bacon</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£4.50 (S*) / £6.75 (B*) / £3.95 (R*)</span>
                        </div>
                        
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Double Bacon</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£6.50 (S*) / £8.75 (B*) / £5.95 (R*)</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Sausage</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£4.50 (S*) / £6.75 (B*) / £3.95 (R*)</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Sausage, Egg & Bacon</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£5.95 (S*) / £8.95 (B*) / £5.50 (R*)</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Bacon & Egg </h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£5.25 (S*) / £7.75 (B*) / £4.75 (R*)</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Sausage & Egg </h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£5.25 (S*) / £7.75 (B*) / £4.75 (R*)</span>
                        </div>  
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Sausage & Bacon</h3>
                            <span className="price text-lg sm:text-xl font-bold text-right">£5.25 (S*) / £7.75 (B*) / £4.75 (R*)</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-pattern rounded-3xl p-6 sm:p-8 card shadow-md min-h-[650px] w-full md:col-span-2 md:max-w-lg md:mx-auto xl:col-span-1 xl:max-w-md ">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Pancakes & Yorkshire</h2>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">American Pancakes</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£8.50</span>
                        </div>
                        <p className="text-gray-600 text-sm">4 Pancakes with 2 Butter Portions, 4 Streaky Bacon & Maple Syrup.</p>
                    </div>
                    <div>
                         <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Bacon & Egg Pancakes</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£7.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">2 back bacon, 2 fried eggs, 2 pancakes, maple syrup, and butter.</p>
                    </div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Breakfast Yorkshire</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£9.50</span>
                        </div>
                        <p className="text-gray-600 text-sm">2 Bacon, Pork Sausage, Mushrooms, Grilled Tomato, Beans & Fried Egg On Top.</p>
                    </div>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold section-title mt-8 mb-6">Muffins & On Toast</h2>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Sausage Patty Muffin</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£3.25</span>
                        </div>
                        <p className="text-gray-600 text-sm">Served with Burger Cheese.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">Double SausagePatty & Egg</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£4.95</span>
                        </div>
                        <p className="text-gray-600 text-sm">A breakfast muffin served with burger cheese.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl sm:text-2xl font-semibold">On Toast Options</h3>
                            <span className="price text-xl sm:text-2xl font-bold">£3.50</span>
                        </div>
                        <p className="text-gray-600 text-sm">Single Fried Egg, Scrambled Eggs, Grilled Mushrooms, Grilled Tomatoes, or Grilled Cheese on Toast.</p>
                        <p className="text-sm italic text-gray-500 mt-2">Double any of the above for £4.95.</p>
                    </div>
                </div>
            </div>
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 card shadow-md col-span-1 md:col-span-2 xl:col-span-3">
                <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6">Extras & Sides</h2>
                <p className="text-gray-500 mb-4 italic text-sm">A nice addition to your meal</p>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                         <h3 className="font-Monferrat font-bold text-grey-600">Homemade Bubble & Squeak</h3>
                        <span className="price_extras text-x1">£2.00</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Hash Brown</h3>
                        <span className="price_extras text-sm">80p</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Chips</h3>
                        <span className="price_extras text-sm">£3.25</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Soup With A Roll Or Bread & Butter</h3>
                        <span className="price_extras text-sm">£3.95</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Toasted Tea Cake</h3>
                        <span className="price_extras text-sm">£2.50</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Slice Of Toast</h3>
                        <span className="price_extras text-sm">80p</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Two Slices Of Toast</h3>
                        <span className="price_extras text-sm">£1.50</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Jam, Marmalade, Marmite, Honey</h3>
                        <span className="price_extras text-sm">50p</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Buttered Roll</h3>
                        <span className="price_extras text-sm">£1.00</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Homemade Cake Of The Day</h3>
                        <span className="price_extras text-sm">£2.95</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Sausage Patty</h3>
                        <span className="price_extras text-sm">£1.50</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Grilled Frankfurter</h3>
                        <span className="price_extras text-sm">£1.75</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Pork Sausage or Veggie Sausage</h3>
                        <span className="price_extras text-sm">£1.50</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Bacon</h3>
                        <span className="price_extras text-sm">£1.50</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Black Pudding</h3>
                        <span className="price_extras text-sm">80p</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Grilled Tomato</h3>
                        <span className="price_extras text-sm">80p</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Mushrooms</h3>
                        <span className="price_extras text-sm">£1.35</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Baked Beans</h3>
                        <span className="price_extras text-sm">£1.35</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Fried Egg</h3>
                        <span className="price_extras text-sm">£1.00</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Scrambled Eggs</h3>
                        <span className="price_extras text-sm">£1.95</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Small Chips/Fries</h3>
                        <span className="price_extras text-sm">£1.95</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Cheesy Chips</h3>
                        <span className="price_extras text-sm">£4.50</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Diced Fried Potatoes</h3>
                        <span className="price_extras text-sm">£3.50</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Toast / Fried Slice</h3>
                        <span className="price_extras text-sm">80p</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Bread & Butter</h3>
                        <span className="price_extras text-sm">70p</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Crusty Roll</h3>
                        <span className="price_extras text-sm">£1.00</span>
                    </div>
                    <div className="flex justify-between items-center border-b sm:border-b-0 sm:border-r sm:pr-4 pb-2 sm:pb-0 border-gray-200">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Pancake & Butter</h3>
                        <span className="price_extras text-sm">£1.00</span>
                    </div>
                    <div className="flex justify-between items-center sm:pl-4">
                        <h3 className="font-Monferrat font-bold text-gray-600 ">Maple Syrup (2 oz Pot)</h3>
                        <span className="price_extras text-sm">£1.00</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </AnimatedPage>
  );
}

export default BreakfastPage;