import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductsSection from './components/ProductsSection'
import Promotions from './components/Promotions'
import Footer from './components/Footer'
import { categories } from './data/products'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />

        {/* شريط تنقّل سريع بين أقسام المنيو */}
        <Categories categories={categories} />

        {/* كل أقسام المنيو تُعرض بالكامل بالترتيب */}
        <ProductsSection categories={categories} />

        {/* قسم "الأكثر طلباً" — يعرض المنتجات المميزة تلقائياً */}
        <Promotions categories={categories} />
      </main>

      <Footer />
    </div>
  )
}

export default App
