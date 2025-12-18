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
import { ArticlePage } from './components/ArticlePage';
import { initScrollAnimations } from './utils/scrollAnimations';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentArticleId, setCurrentArticleId] = useState<string | null>(null);

  // Inicializar animações de scroll quando a página mudar
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, [currentPage, currentArticleId]);

  const handleNavigate = (path: string) => {
    // Extract page from path
    const pageMap: { [key: string]: string } = {
      '/': 'home',
      '/quem-somos': 'about',
      '/solucoes': 'solutions',
      '/metodologias': 'methodologies',
      '/resultados': 'results',
      '/conteudos': 'content',
      '/contato': 'contact',
      '/politica-privacidade': 'privacy-policy',
      '/termos-uso': 'terms-of-use',
      '/artigos': 'articles',
    };

    // Handle article detail pages (/artigo/:id)
    if (path.startsWith('/artigo/')) {
      const articleId = path.split('/artigo/')[1];
      setCurrentArticleId(articleId);
      setCurrentPage('article-detail');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    // Handle hash navigation for same-page anchors
    if (path.includes('#')) {
      const [pagePath, hash] = path.split('#');
      const page = pageMap[pagePath] || pageMap['/'];
      setCurrentPage(page);
      setCurrentArticleId(null);
      
      // Scroll to element after page loads
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const page = pageMap[path] || pageMap['/'];
      setCurrentPage(page);
      setCurrentArticleId(null);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'solutions':
        return <SolutionsPage onNavigate={handleNavigate} />;
      case 'methodologies':
        return <MethodologiesPage onNavigate={handleNavigate} />;
      case 'results':
        return <ResultsPage onNavigate={handleNavigate} />;
      case 'content':
        return <ContentPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case 'terms-of-use':
        return <TermsOfUsePage onNavigate={handleNavigate} />;
      case 'articles':
        return <ArticlesPage onNavigate={handleNavigate} />;
      case 'article-detail':
        return currentArticleId ? (
          <ArticlePage articleId={currentArticleId} onNavigate={handleNavigate} />
        ) : (
          <ArticlesPage onNavigate={handleNavigate} />
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5562981859003"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:brightness-110 transition-all duration-300 group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 animate-pulse" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#2c3e50] text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco!
        </span>
      </a>
    </div>
  );
}