import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductsSection from './components/ProductsSection'
import Footer from './components/Footer'
import { categories } from './data/products'
import './App.css'

function App() {
  // القسم النشط حالياً — يتحكم به شريط التبويبات (Categories) وروابط الهيدر/الفوتر
  // القسم الافتراضي عند فتح الصفحة هو زاوية القهوة، وليس الميلك شيك
  const [activeCategoryId, setActiveCategoryId] = useState('coffee')

  return (
    <div className="app">
      <Header activeCategoryId={activeCategoryId} onSelectCategory={setActiveCategoryId} />

      <main>
        <Hero />

        {/* شريط التبويبات — يبدّل القسم المعروض دون إعادة تحميل الصفحة */}
        <Categories
          categories={categories}
          activeCategoryId={activeCategoryId}
          onSelectCategory={setActiveCategoryId}
        />

        {/* يعرض قسم واحد فقط — القسم النشط المختار من التبويبات */}
        <ProductsSection categories={categories} activeCategoryId={activeCategoryId} />
      </main>

      <Footer activeCategoryId={activeCategoryId} onSelectCategory={setActiveCategoryId} />
    </div>
  )
}

export default App
