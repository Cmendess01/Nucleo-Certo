'use client'

import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    institutionType: '',
    beds: '',
    state: '',
    challenge: '',
    preferredContact: 'email',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        institution: '',
        institutionType: '',
        beds: '',
        state: '',
        challenge: '',
        preferredContact: 'email',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const institutionTypes = [
    'Hospital Privado',
    'Hospital Público',
    'Clínica Especializada',
    'Clínica Multiespecialidades',
    'Laboratório',
    'Secretaria de Saúde',
    'Operadora de Saúde',
    'Terceiro Setor',
    'Outro',
  ];

  const challenges = [
    'Acreditação e Qualidade',
    'Gestão Estratégica',
    'Finanças e Custos',
    'Fusões e Aquisições',
    'Setor Público',
    'Gestão de Pessoas',
    'Múltiplos desafios',
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(62) 98185-9003',
      link: 'https://wa.me/5562981859003',
      linkText: 'WhatsApp',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@nucleocore.com.br',
      link: 'mailto:contato@nucleocore.com.br',
      linkText: 'Enviar e-mail',
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Goiânia, Goiás',
      subContent: 'Atuação Nacional e Internacional',
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/nucleocore/',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://br.linkedin.com/in/nucleo-core-gest%C3%A3o-hol%C3%ADstica-em-sa%C3%BAde-b174301b0',
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/nucleocore/',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6">
            Contato
          </h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto">
            Entre em contato e descubra como nossas metodologias podem elevar sua gestão a outro nível
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-[#C7A25B] transition-all">
                <div className="w-14 h-14 rounded-xl bg-[#C7A25B]/10 flex items-center justify-center mb-4 mx-auto">
                  <info.icon className="w-7 h-7 text-[#C7A25B]" />
                </div>
                <h5 className="text-lg font-semibold text-[#0D1B2A] mb-2">{info.title}</h5>
                <p className="text-[#4A4A4A] mb-2">{info.content}</p>
                {info.subContent && (
                  <p className="text-sm text-[#7A8C9D]">{info.subContent}</p>
                )}
                {info.link && (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-[#C7A25B] hover:text-[#A98845] transition-colors"
                  >
                    {info.linkText}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="text-center mb-16">
            <h5 className="text-lg font-semibold text-[#0D1B2A] mb-6">Siga-nos nas redes sociais</h5>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center hover:bg-[#C7A25B] hover:text-white transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6 text-[#C7A25B] group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-4">
              Solicite um Diagnóstico Gratuito
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-[#C7A25B]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#C7A25B]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-4">Mensagem Enviada com Sucesso!</h3>
                <p className="text-lg text-[#4A4A4A] mb-6">
                  Obrigado pelo contato. Nossa equipe responderá em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-[#0D1B2A] font-medium">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A25B] focus:border-transparent"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-[#0D1B2A] font-medium">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A25B] focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Institution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-[#0D1B2A] font-medium">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A25B] focus:border-transparent"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="institution" className="block text-sm mb-2 text-[#0D1B2A] font-medium">
                      Nome da Instituição *
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      required
                      value={formData.institution}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A25B] focus:border-transparent"
                      placeholder="Hospital / Clínica"
                    />
                  </div>
                </div>

                {/* Institution Type and Beds */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="institutionType" className="block text-sm mb-2 text-[#0D1B2A] font-medium">
                      Tipo de Instituição *
                    </label>
                    <select
                      id="institutionType"
                      name="institutionType"
                      required
                      value={formData.institutionType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A25B] focus:border-transparent"
                    >
                      <option value="">Selecione...</option>
                      {institutionTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="beds" className="block text-sm mb-2 text-[#0D1B2A] font-medium">
                      Número de Leitos / Unidades
                    </label>
                    <input
                      type="text"
                      id="beds"
                      name="beds"
                      value={formData.beds}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A25B] focus:border-transparent"
                      placeholder="Ex: 50 leitos"
                    />
                  </div>
                </div>

                {/* State and Challenge */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="state" className="block text-sm mb-2 text-[#0D1B2A] font-medium">
                      Estado *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A25B] focus:border-transparent"
                      placeholder="Ex: Goiás"
                    />
                  </div>
                  <div>
                    <label htmlFor="challenge" className="block text-sm mb-2 text-[#0D1B2A] font-medium">
                      Desafio Principal *
                    </label>
                    <select
                      id="challenge"
                      name="challenge"
                      required
                      value={formData.challenge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A25B] focus:border-transparent"
                    >
                      <option value="">Selecione...</option>
                      {challenges.map((challenge, index) => (
                        <option key={index} value={challenge}>{challenge}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Contact */}
                <div>
                  <label className="block text-sm mb-2 text-[#0D1B2A] font-medium">
                    Canal preferencial de contato *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#C7A25B] focus:ring-[#C7A25B]"
                      />
                      <span className="text-[#4A4A4A]">E-mail</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#C7A25B] focus:ring-[#C7A25B]"
                      />
                      <span className="text-[#4A4A4A]">Telefone</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#C7A25B] focus:ring-[#C7A25B]"
                      />
                      <span className="text-[#4A4A4A]">WhatsApp</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-[#0D1B2A] font-medium">
                    Mensagem / Detalhes do projeto
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A25B] focus:border-transparent resize-none"
                    placeholder="Conte-nos mais sobre seus desafios e objetivos..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-[#C7A25B] text-white font-semibold rounded-lg hover:bg-[#A98845] transition-all inline-flex items-center justify-center gap-2"
                  >
                    Enviar mensagem
                    <Send className="w-5 h-5" />
                  </button>
                  <p className="text-sm text-[#7A8C9D] mt-4">
                    Ao enviar este formulário, você concorda com nossa Política de Privacidade
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-[#E6D2A8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
            Prefere Falar Diretamente Conosco?
          </h2>
          <p className="text-xl text-[#0D1B2A] mb-10 leading-relaxed">
            Entre em contato pelo WhatsApp e tire suas dúvidas em tempo real
          </p>
          <a
            href="https://wa.me/5562981859003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0D1B2A] text-white font-semibold rounded-lg hover:bg-[#2E3A45] transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}