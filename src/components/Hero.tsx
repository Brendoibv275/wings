import React from 'react';
import { Bot, Rocket, Brain } from 'lucide-react';

interface HeroProps {
  onStartProject: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Hero({ onStartProject }: HeroProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Dê asas às suas ideias com
            <span className="text-primary"> IA</span>
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-10">
            Transformamos suas ideias em soluções reais usando Python e Inteligência Artificial.
            Automatize processos, crie MVPs e escale seu negócio com tecnologia de ponta.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              onClick={onStartProject}
              className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Iniciar Projeto
            </a>
            <a
              href="#about"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Saiba Mais
            </a>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Bot className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Automação Inteligente</h3>
            <p className="text-gray-700">Chatbots e sistemas automatizados para otimizar seu atendimento e processos.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Brain className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Marketing com IA</h3>
            <p className="text-gray-700">Estratégias personalizadas e geração de conteúdo com inteligência artificial.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Rocket className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">MVPs Sob Demanda</h3>
            <p className="text-gray-700">Desenvolvimento ágil de produtos mínimos viáveis para validar suas ideias.</p>
          </div>
        </div>
      </div>
    </div>
  );
}