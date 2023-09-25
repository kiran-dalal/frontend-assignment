import React from 'react';
import './App.css'; // You can style your components in App.css


// Import your components
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import ContactForm from './ContactForm';

const App = () => {
  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products',
      id: 'product',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ],
    },
    { name: 'Contact Us', id: 'contact us'},
  ];

  return (
    <div className="App">
      <Navigation menuItems={navbar} />
      <Banner />
      <ProductList />
      <ContactForm />
      {/* Add other components here */}
    </div>
  );
};

export default App;
