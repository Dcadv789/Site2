import React from 'react';
import { BarChart } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BarChart className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">FinanceConsult</span>
          </div>
          
          <div className="hidden sm:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-gray-900">Início</a>
            <a href="#desafios" className="text-gray-600 hover:text-gray-900">Desafios</a>
            <a href="#solucoes" className="text-gray-600 hover:text-gray-900">Soluções</a>
            <a href="#contato" className="text-gray-600 hover:text-gray-900">Contato</a>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Fale Conosco
          </button>
        </div>
      </div>
    </nav>
  );
}