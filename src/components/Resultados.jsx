import React from 'react'
import { Microscope, Users, Smartphone, Calendar, CheckCircle2 } from 'lucide-react'

const resultados = [
  { icon: Microscope, titulo: 'Horta Acadêmica', desc: 'Implantação de uma horta acadêmica como espaço de aprendizagem prática no campus com cultivo de hortaliças orgânicas.' },
  { icon: Smartphone, titulo: 'Site com Chatbot de IA', desc: 'Disponibilização de um protótipo de site com chatbot de inteligência artificial para consultas sobre cultivo.' },
  { icon: Users, titulo: 'Comunidade Integrada', desc: 'Capacitação da comunidade acadêmica sobre sustentabilidade, cultivo orgânico e alimentação saudável.' },
]

const proximosCiclo = [
  { periodo: 'Fev/2026', acao: 'Replanejamento e Preparação do Segundo Ciclo - Seleção de novas espécies e aquisição de insumos' },
  { periodo: 'Mar/2026', acao: 'Execução do Replantio - Preparação do terreno e plantio de novas espécies' },
  { periodo: 'Abr–Mai/26', acao: 'Acompanhamento e Manutenção - Manutenção contínua da horta' },
  { periodo: 'Jun/2026', acao: 'Consolidação dos Resultados - Análise final e finalização do site' },
  { periodo: 'Jul/2026', acao: 'Exposição - Apresentação final e avaliação do projeto' },
]

export default function Resultados() {
  return (
    <section id="resultados" className="py-24 bg-spotify-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">05 / Impacto</span>
          <h2 className="section-title">Resultados Alcançados</h2>
          <p className="text-spotify-silver max-w-3xl font-medium">
            Principais conquistas do projeto até o momento.
          </p>
        </div>

        {/* Cards de resultados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {resultados.map(r => (
            <div key={r.titulo} className="bg-spotify-surface rounded-lg p-10 text-center hover:bg-spotify-card transition-all duration-300 shadow-med group ring-1 ring-white/5">
              <div className="w-20 h-20 bg-spotify-mid rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-spotify-green transition-colors duration-300 shadow-heavy">
                <r.icon className="w-10 h-10 text-spotify-green group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-black text-white mb-4 text-xl tracking-tight uppercase">{r.titulo}</h3>
              <p className="text-spotify-silver text-sm leading-relaxed font-bold">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


