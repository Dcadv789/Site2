import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  const [num1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2] = useState(Math.floor(Math.random() * 10) + 1);
  const [userAnswer, setUserAnswer] = useState('');
  const correctAnswer = num1 + num2;

  // Função para formatar o número de WhatsApp
  const formatWhatsApp = (value: string) => {
    // Remove tudo que não for número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara conforme o usuário digita
    let formatted = numbers;
    if (numbers.length > 0) {
      formatted = `(${numbers.slice(0, 2)}`;
      if (numbers.length > 2) {
        formatted += `) ${numbers.slice(2, 7)}`;
        if (numbers.length > 7) {
          formatted += `-${numbers.slice(7, 11)}`;
        }
      }
    }
    
    return formatted;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    // Limita o tamanho máximo considerando a máscara
    if (formatted.length <= 15) {
      e.target.value = formatted;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(userAnswer) === correctAnswer) {
      // Aqui você pode adicionar a lógica de envio do formulário
      console.log('Formulário válido, enviando...');
    } else {
      alert('Por favor, verifique sua resposta para a soma.');
    }
  };

  return (
    <section id="contato" className="pt-12 md:pt-16 pb-12 md:pb-16 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout Mobile */}
        <div className="lg:hidden space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-[20px] sm:text-[15px] font-bold text-gray-900 mb-6 uppercase tracking-wide">
              {t('contact.title')}
            </h2>
            <p className="text-[24px] sm:text-[30px] text-gray-600 leading-relaxed font-light">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Formulário Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label htmlFor="name-mobile" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name-mobile"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t('contact.form.placeholders.name')}
                  required
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="email-mobile" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email-mobile"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t('contact.form.placeholders.email')}
                  required
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="whatsapp-mobile" className="block text-sm font-medium text-gray-700">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp-mobile"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="(00) 00000-0000"
                  onChange={handleWhatsAppChange}
                  required
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="message-mobile" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message-mobile"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t('contact.form.placeholders.message')}
                  required
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Verificação: Quanto é {num1} + {num2}?
                </label>
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Digite a resposta"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t('contact.form.submit')}
              </motion.button>
            </form>
          </motion.div>

          {/* Informações de Contato Mobile */}
          <div className="space-y-6">
            <a href="https://wa.me/5511994561052" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                <p>(11) 99456-1052</p>
              </div>
            </a>

            <a href="mailto:contato@dcadvisors.com.br" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{t('contact.form.email')}</h3>
                <p>contato@dcadvisors.com.br</p>
              </div>
            </a>

            <div className="flex items-start gap-3 text-gray-600">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{t('contact.form.address')}</h3>
                <p>Rua Teodoro Sampaio, 744 Cj 108 - São Paulo - SP - Brasil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Desktop */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coluna da esquerda - Imagem e Informações de Contato */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <h2 className="text-[20px] sm:text-[15px] font-bold text-gray-900 mb-6 uppercase tracking-wide">
                {t('contact.title')}
              </h2>
              <p className="text-[24px] sm:text-[30px] text-gray-600 leading-relaxed font-light">
                {t('contact.subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                alt={t('contact.officeImage')}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/0" />
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">(11) 99456-1052</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{t('contact.form.email')}</h3>
                  <p className="text-gray-600">contato@dcadvisors.com.br</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{t('contact.form.address')}</h3>
                  <p className="text-gray-600">Rua Teodoro Sampaio, 744 Cj 108 - São Paulo - SP - Brasil</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Coluna da direita - Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t('contact.form.placeholders.name')}
                  required
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t('contact.form.placeholders.email')}
                  required
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="(00) 00000-0000"
                  onChange={handleWhatsAppChange}
                  required
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t('contact.form.placeholders.message')}
                  required
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Verificação: Quanto é {num1} + {num2}?
                </label>
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Digite a resposta"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t('contact.form.submit')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}