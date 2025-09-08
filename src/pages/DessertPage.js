import React from 'react';
import AnimatedPage from '../components/Menu_Animation';

function DessertPage() {
  return (
    <AnimatedPage>
    <main className="container mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="section-title text-4xl sm:text-5xl font-bold mb-4">Our Dessert Menu</h1>
        <p className="text-lg sm:text-xl text-gray-600">Indulge your sweet tooth with our delicious desserts and homemade cakes.</p>
      </div>

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
      </div>
    </main>
    </AnimatedPage>
  );
}

export default DessertPage;