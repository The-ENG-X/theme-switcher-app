import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './index.css';

const App = () => (
  <ThemeProvider>
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
