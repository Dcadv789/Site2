import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contato" className="pt-12 md:pt-16 pb-12 md:pb-16 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  <h3 className="text-lg font-medium text-gray-900">{t('contact.form.phone')}</h3>
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
            <form className="space-y-6">
              <div className="space-y-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t('contact.form.placeholders.name')}
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
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t('contact.form.placeholders.phone')}
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
                />
              </div>

              <motion.button
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