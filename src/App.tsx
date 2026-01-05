import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Products } from './components/Products';
import { About } from './components/About';
import { Contact } from './components/Contact';
import type { CategoryType } from './types/product';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (category: CategoryType) => {
    setSelectedCategory(category);
    navigate('/products');

    setTimeout(() => {
      const el = document.getElementById('products');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} currentSection={location.pathname} />

      <main className="flex-1">
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero onNavigate={handleNavigate} />

                <div id="categories">
                  <Categories
                    onCategorySelect={handleCategorySelect}
                    selectedCategory={selectedCategory}
                  />
                </div>

                <div id="products">
                  <Products selectedCategory={selectedCategory} />
                </div>
              </>
            }
          />

          {/* CATEGORIES */}
          <Route
            path="/categories"
            element={
              <Categories
                onCategorySelect={handleCategorySelect}
                selectedCategory={selectedCategory}
              />
            }
          />

          {/* PRODUCTS */}
          <Route
            path="/products"
            element={
              <div id="products">
                <Products selectedCategory={selectedCategory} />
              </div>
            }
          />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
