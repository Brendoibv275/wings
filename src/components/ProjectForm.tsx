import React, { useState } from 'react';
import { X, Send, Building2, Briefcase, User, FileCode2, MessageSquare } from 'lucide-react';

type ProjectType = 'chatbot' | 'automation' | 'mvp' | 'marketing' | 'other';

export default function ProjectForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organization: '',
    projectType: '' as ProjectType,
    description: ''
  });

  const projectTypes = [
    { id: 'chatbot', label: 'Chatbot Inteligente', icon: MessageSquare },
    { id: 'automation', label: 'Automação de Processos', icon: FileCode2 },
    { id: 'mvp', label: 'MVP Personalizado', icon: Briefcase },
    { id: 'marketing', label: 'Marketing com IA', icon: Building2 },
    { id: 'other', label: 'Outro Tipo', icon: User }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Informações Pessoais</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cargo
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Seu cargo atual"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Empresa / Instituição / Profissão
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Nome da organização"
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Tipo de Projeto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectTypes.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setFormData({ ...formData, projectType: id as ProjectType })}
                  className={`p-4 border rounded-lg text-left flex items-center space-x-3 transition-colors ${
                    formData.projectType === id
                      ? 'border-primary bg-blue-50 text-primary'
                      : 'border-gray-300 hover:border-primary'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Descrição do Projeto</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descreva seu projeto
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Descreva os objetivos, funcionalidades e resultados esperados do seu projeto..."
                rows={6}
                required
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Novo Projeto</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {renderStep()}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Voltar
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="ml-auto px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Próximo
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Enviar Projeto
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}