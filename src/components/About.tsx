import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre a Wing's</h2>
            <p className="text-lg text-gray-700 mb-6">
              Somos uma empresa especializada em transformar ideias em realidade através da tecnologia.
              Nossa equipe combina expertise em programação Python, inteligência artificial e marketing
              digital para criar soluções que impulsionam o crescimento do seu negócio.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-2" />
                <p className="text-gray-700">Especialistas em Python e Inteligência Artificial</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-2" />
                <p className="text-gray-700">Background em Marketing e Vendas</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-2" />
                <p className="text-gray-700">Desenvolvimento Ágil de MVPs</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-blue-400 opacity-10 absolute inset-0"></div>
            <div className="aspect-square rounded-2xl bg-white p-8 relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Team working"
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}