import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Challenges } from './components/Challenges';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Challenges />
    </div>
  );
}

export default App;