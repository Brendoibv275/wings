import React from 'react';
import { MessageSquare, PenTool, Bot, Rocket, Brain, Code } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Chatbots Inteligentes",
      description: "Assistentes virtuais personalizados que aprendem com cada interação, oferecendo atendimento 24/7.",
      examples: ["Atendimento ao Cliente", "FAQ Automatizado", "Qualificação de Leads"]
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Geração de Conteúdo",
      description: "Criação automatizada de conteúdo relevante e otimizado para suas necessidades.",
      examples: ["Posts para Redes Sociais", "Artigos para Blog", "Newsletters"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Automação de Processos",
      description: "Automatize tarefas repetitivas e aumente a eficiência operacional.",
      examples: ["Extração de Dados", "Relatórios Automatizados", "Integração de Sistemas"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600">Soluções personalizadas para impulsionar seu negócio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.examples.map((example, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}