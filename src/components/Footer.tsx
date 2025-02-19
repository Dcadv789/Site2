import React from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

export function Footer() {
  const links = {
    empresa: [
      { label: 'Sobre nós', href: '#' },
      { label: 'Nosso time', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Notícias', href: '#' },
    ],
    servicos: [
      { label: 'Consultoria Empresarial', href: '#' },
      { label: 'BPO Financeiro', href: '#' },
      { label: 'Antecipação de Recebíveis', href: '#' },
      { label: 'Soluções Digitais', href: '#' },
      { label: 'Hub de Ferramentas', href: '#' },
      { label: 'Mentoria e Treinamentos', href: '#' },
    ],
    suporte: [
      { label: 'Central de Ajuda', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Termos de Uso', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          {/* Coluna da logo e newsletter */}
          <div className="lg:col-span-4">
            <div className="space-y-8">
              <img
                src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//Logo%20Azul.svg"
                alt="DC Advisors"
                className="h-8 w-auto brightness-0 invert"
              />
              
              <p className="text-gray-400 leading-relaxed">
                Transformando a gestão financeira da sua empresa com soluções inovadoras e personalizadas.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Newsletter</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-6">Empresa</h3>
              <ul className="space-y-4">
                {links.empresa.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6">Serviços</h3>
              <ul className="space-y-4">
                {links.servicos.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6">Suporte</h3>
              <ul className="space-y-4">
                {links.suporte.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Informações de contato */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-lg font-medium">Contato</h3>
            <div className="space-y-4">
              <a href="tel:+551199999999" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200">
                <Phone className="w-5 h-5" />
                (11) 99999-9999
              </a>
              <a href="mailto:contato@dcadvisors.com.br" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="w-5 h-5" />
                contato@dcadvisors.com.br
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                Av. Paulista, 1000 - São Paulo, SP
              </div>
            </div>

            {/* Redes sociais */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-gray-400">
          <p>© 2024 DC Advisors. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}