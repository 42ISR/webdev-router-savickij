// import { useState } from 'react';
// import Header from './components/Header.jsx';
// import HomePage from './pages/HomePage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
 import SearchPage from './pages/SearchPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
// import NotFoundPage from './pages/NotFoundPage.jsx';
// import { products, categories } from './data/products.js';

import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./pages/Layout"

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [selectedProductId, setSelectedProductId] = useState(null);
//   const [activeCategory, setActiveCategory] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   function goTo(page) {
//     setCurrentPage(page);
//   }

//   function selectProduct(id) {
//     setSelectedProductId(id);
//     setCurrentPage('product');
//   }

//   function handleSearch(query) {
//     setSearchQuery(query);
//     setCurrentPage('search');
//   }

//   const searchResults = searchQuery
//     ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
//     : [];

//   function renderPage() {
//     switch (currentPage) {
//       case 'home':
//         return (
//           <HomePage
//             featuredProducts={products.slice(0, 3)}
//             onSelectProduct={selectProduct}
//             onGoToCatalog={() => goTo('catalog')}
//           />
//         );

//       case 'catalog':
//         return (
//           <CatalogPage
//             products={products}
//             categories={categories}
//             activeCategory={activeCategory}
//             onSelectCategory={setActiveCategory}
//             onSelectProduct={selectProduct}
//           />
//         );

//       case 'product':
//         return (
//           <ProductPage
//             product={products.find(p => p.id === selectedProductId)}
//             onBack={() => goTo('catalog')}
//           />
//         );

//       case 'search':
//         return (
//           <SearchPage
//             query={searchQuery}
//             results={searchResults}
//             onSelectProduct={selectProduct}
//           />
//         );

//       case 'about':
//         return <AboutPage />;

//       case 'contacts':
//         return <ContactsPage />;

//       default:
//         return <NotFoundPage path={'/' + currentPage} onGoHome={() => goTo('home')} />;
//     }
//   }

//   return (
//     <>
//       <Header currentPage={currentPage} onNavigate={goTo} onSearch={handleSearch} />
//       <main className="page-area">{renderPage()}</main>
//     </>
//   );
// }

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="catalog/:id" element={<ProductPage />} />
        <Route path="search" element={<SearchPage/>} />
      </Route>
    </Routes>
  )
}

export default App