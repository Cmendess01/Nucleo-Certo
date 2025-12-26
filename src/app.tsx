'use client'

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { SolutionsPage } from './components/SolutionsPage';
import { MethodologiesPage } from './components/MethodologiesPage';
import { ResultsPage } from './components/ResultsPage';
import { ContentPage } from './components/ContentPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfUsePage } from './components/TermsOfUsePage';
import { ArticlesPage } from './components/ArticlesPage';
import { initScrollAnimations } from './utils/scrollAnimations';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'methodologies':
        return <MethodologiesPage />;
      case 'results':
        return <ResultsPage />;
      case 'content':
        return <ContentPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'terms-of-use':
        return <TermsOfUsePage />;
      case 'articles':
        return <ArticlesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />

      <a
        href="https://wa.me/5562981859003"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:brightness-110 transition-all duration-300 group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 animate-pulse" />
        <span className="absolute right-16 bg-[#2c3e50] text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco!
        </span>
      </a>
    </div>
  );
}