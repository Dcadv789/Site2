import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle
} from 'lucide-react';
import { PrivacyModal } from './modals/PrivacyModal';
import { TermsModal } from './modals/TermsModal';

export function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const links = {
    empresa: [
      { label: 'Sobre Nós', href: '#' },
      { label: 'Planos', href: '#planos' },
      { label: 'Política de Privacidade', href: '#', onClick: (e) => {
        e.preventDefault();
        setIsPrivacyModalOpen(true);
      }},
      { label: 'Termos de Uso', href: '#', onClick: (e) => {
        e.preventDefault();
        setIsTermsModalOpen(true);
      }},
      { label: 'FAQ', href: '#faq' },
    ],
    servicos: [
      { label: 'Consultoria Empresarial', href: '#servicos', onClick: () => {
        const tabsElement = document.querySelector('[role="tablist"]');
        const consultoriaTab = tabsElement?.querySelector('[value="consultoria-empresarial"]') as HTMLButtonElement;
        if (consultoriaTab) consultoriaTab.click();
      }},
      { label: 'BPO Financeiro', href: '#servicos', onClick: () => {
        const tabsElement = document.querySelector('[role="tablist"]');
        const bpoTab = tabsElement?.querySelector('[value="bpo-financeiro"]') as HTMLButtonElement;
        if (bpoTab) bpoTab.click();
      }},
      { label: 'Antecipação de Recebíveis', href: '#servicos', onClick: () => {
        const tabsElement = document.querySelector('[role="tablist"]');
        const antecipacaoTab = tabsElement?.querySelector('[value="antecipacao-recebiveis"]') as HTMLButtonElement;
        if (antecipacaoTab) antecipacaoTab.click();
      }},
      { label: 'Soluções Digitais', href: '#servicos', onClick: () => {
        const tabsElement = document.querySelector('[role="tablist"]');
        const solucoesTab = tabsElement?.querySelector('[value="solucoes-digitais"]') as HTMLButtonElement;
        if (solucoesTab) solucoesTab.click();
      }},
      { label: 'Hub de Ferramentas', href: '#servicos', onClick: () => {
        const tabsElement = document.querySelector('[role="tablist"]');
        const hubTab = tabsElement?.querySelector('[value="hub-ferramentas"]') as HTMLButtonElement;
        if (hubTab) hubTab.click();
      }},
      { label: 'Mentoria e Treinamentos', href: '#servicos', onClick: () => {
        const tabsElement = document.querySelector('[role="tablist"]');
        const mentoriaTab = tabsElement?.querySelector('[value="mentoria-treinamentos"]') as HTMLButtonElement;
        if (mentoriaTab) mentoriaTab.click();
      }},
    ],
  };

  const socialLinks = [
    { icon: MessageCircle, href: 'https://wa.me/5511999999999', label: 'WhatsApp' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 pb-16 border-b border-gray-800">
          {/* Coluna da logo e newsletter */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              <img
                src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//Logo%20Azul.svg"
                alt="DC Advisors"
                className="h-12 w-auto brightness-0 invert"
              />
              
              <p className="text-gray-400 leading-relaxed">
                Levando sua empresa à outro patamar financeiro
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
          <div className="lg:col-span-3 lg:ml-12">
            <div>
              <h3 className="text-lg font-medium mb-4">Sobre Nós</h3>
              <ul className="space-y-1">
                {links.empresa.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div>
              <h3 className="text-lg font-medium mb-4">Serviços</h3>
              <ul className="space-y-1">
                {links.servicos.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
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
          <div className="lg:col-span-3 lg:col-start-10" style={{ marginTop: '-25px' }}>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-lg font-medium mb-4">Contato</h3>
              <div className="space-y-4">
                <a href="tel:+551199999999" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                  (11) 99456-1052
                </a>
                <a href="mailto:contato@dcadvisors.com.br" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                  contato@dcadvisors.com.br
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>Rua Teodoro Sampaio, 744 Cj 108 - São Paulo - SP - Brasil</span>
                </div>

                {/* Redes Sociais */}
                <div className="flex gap-4 pt-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-gray-400">
          <p>© 2025 DC Advisors. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Modais */}
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </footer>
  );
}