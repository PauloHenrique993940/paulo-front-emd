"use client";

import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Code, Briefcase, Zap, GraduationCap, TextAlignCenter } from "lucide-react";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


const Header = () => (
  <header className="sticky top-0 z-50 bg-blue-950 text-white backdrop-blur-md border-b border-gray-800">
    <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center py-4">
      <Link
        href="/"
        className={`${geistMono.variable} font-mono text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors`}
      >
        &lt;Paulo Henrique/&gt;
      </Link>
      <nav className="hidden sm:flex space-x-6">
        {/* Links de navegação aqui... */}
        <Link href="/" className="text-gray-300 hover:text-indigo-400">
          Início
        </Link>
        <Link href="/projetos" className="text-gray-300 hover:text-indigo-400">
          Projetos
        </Link>
        <Link
          href="/sobre"
          className="text-indigo-400 font-bold border-b-2 border-indigo-400"
        >
          Sobre
        </Link>
        <Link href="/contato" className="text-gray-300 hover:text-indigo-400">
          Contato
        </Link>
      </nav>
    </div>
  </header>
);


export default function SobrePage() {
    return (
      <div
        className={`${geistSans.variable} font-sans min-h-screen  text-white`}
      >
        <Header />

        <main className="container mx-auto px-4 py-16 sm:py-24 max-w-4xl">
          {/* Título Principal */}
          <section className="text-center mb-16">
            <h1
              className={`${geistMono.variable} font-mono text-5xl sm:text-6xl font-extrabold tracking-tighter mb-4 text-black`}
            >
              Minha Jornada
            </h1>
            <p className="text-xl  max-w-3xl mx-auto">
              Desenvolvimento, inovação e a busca incessante por código de alta
              performance.
            </p>
          </section>

          {/* Seção de Introdução e História */}
          <section className="mb-20 flex gap-20  bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-between  items-center mb-10">
                <div className="flex items-center space-x-3">
                  <Zap size={28} className="text-indigo-400" />
                  <h2 className="text-3xl font-bold text-indigo-400">
                    Quem Eu Sou
                  </h2>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-10 border-4 border-indigo-400 shadow-lg">
                  <Image
                    src="/perfil.png"
                    alt="Foto de Perfil"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              <p className="text-lg text-justiy leading-relaxed  mb-4">
                Sou Paulo Henrique Ferreira França, desenvolvedor Front-end
                dedicado a criar experiências digitais marcantes. Acredito que
                cada linha de código é uma oportunidade de entregar valor real
                às pessoas. Meu foco está em transformar ideias em interfaces
                que unem design, desempenho e acessibilidade.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Gosto de trabalhar com tecnologias modernas, explorando o
                potencial de HTML, CSS, JavaScript e React. Busco constantemente
                evoluir, aprendendo novas ferramentas e aprimorando minha forma
                de pensar e desenvolver. Mais do que escrever código, gosto de
                resolver problemas e simplificar o complexo.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Para mim, o front-end é onde a tecnologia encontra a
                criatividade. É o espaço onde o visual e a lógica se unem para
                criar algo que realmente faz diferença. Cada projeto é uma
                chance de aprender, experimentar e superar limites.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Tenho uma visão centrada no usuário e atenção aos detalhes.
                Valorizo interfaces intuitivas, responsivas e leves, que
                funcionam bem em qualquer dispositivo. Acredito que performance
                é parte essencial da experiência do usuário — não um detalhe.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Sou movido por desafios e pela vontade de entregar algo melhor a
                cada novo projeto. Trabalho com foco em clareza, consistência e
                propósito. Vejo o desenvolvimento como uma forma de arte e
                expressão, mas também como uma ferramenta de impacto real.
              </p>
              <p className="text-lg text-indigo-300 font-semibold italic mb-6 text-center leading-relaxed">
                “Quero continuar crescendo, transformando ideias em projetos que
                inspirem, unam pessoas e gerem impacto positivo no mundo.”
              </p>

              <h2 className="text-3xl font-bold mb-4 text-indigo-400 flex items-center space-x-3">
                <Zap size={28} />
                <span>Minha História</span>
              </h2>
              <p className="text-lg text-gray-300 mb-4 ">
                Minha trajetória começou com <strong>HTML</strong> e{' '}
                <strong>CSS</strong>, mas rapidamente evoluiu para o ecossistema
                moderno do <strong>React</strong> e, mais especificamente, do{' '}
                <strong>Next.js</strong>. Acredito no poder do{' '}
                <strong>Server-Side Rendering (SSR)</strong> e na
                <em>otimização contínua</em> como caminhos para entregar
                produtos digitais rápidos, acessíveis e de alto impacto.
              </p>
            </div>
          </section>

          {/* Seção de Experiência e Educação (Timeline/Vertical Flow) */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-indigo-500 pb-2 flex items-center space-x-3">
              <Briefcase size={28} />
              <span>Experiência & Formação</span>
            </h2>

            <div className="space-y-12">
              {/* Item de Experiência 1 */}
              <TimelineItem
                icon={Briefcase}
                title="Graduação em Engenharia de Software EAD| Universidade Estácio"
                subtitle="10/2025 Conclusão prevista: 09/2029"
                description="
                   Nesta atividade prática, dedico-me ao desenvolvimento de interfaces de usuário responsivas, seguindo princípios de Design System e Acessibilidade Web. O foco principal é a modularidade do código e a otimização de performance.
                   Tecnologias e Ferramentas utilizadas:

                   Linguagens: HTML5, CSS3 (Sass/Styled-Components), JavaScript/TypeScript.

                   Frameworks/Bibliotecas: React, Next.js (se aplicável), Redux/Context API.

                    Metodologia: Aplicamos Scrum em ciclos de desenvolvimento e utilizamos Git para controle de versão."
              />

              {/* Item de Experiência 2 */}
              <TimelineItem
                icon={Briefcase}
                title="Pós-Graduação em Desenvolvimento Front-End | Universidade Anhaguera"
                subtitle="08/ 2025 Conclusão prevista: 07/2026"
                description="Participação em grupos de estudo e projetos práticos focados na Arquitetura de Front-End em escala (micro-frontends) e na Otimização de Performance (Core Web Vitals). Análise e aplicação de padrões avançados de design, como Component-Driven Development (Desenvolvimento Orientado a Componentes)."
              />

              {/* Item de Educação */}
              <TimelineItem
                icon={GraduationCap}
                title="Análise e Desenvolvimento de Sistemas | Centro Universitário Unifatecie"
                subtitle="Conclusão 2024"
                description="Especialização em estruturas de dados e algoritmos, com foco em otimização de sistemas."
              />
              <TimelineItem
                icon={GraduationCap}
                title="●	DevQuest – DevemDobro Desenvolvimento Web Full Stack – Curso de Extensão Universitária  "
                subtitle="Cursando"
                description="
                  Imersão Full Stack prática na metodologia DevQuest, cobrindo Front-End, Back-End e soft skills.
                  Aprendizado de HTML5 e CSS3 focado em design responsivo e acessibilidade desde o primeiro projeto.
                  Domínio de JavaScript e TypeScript através do desenvolvimento de funcionalidades complexas e consuming de APIs.Especialização em React para construção de componentes reutilizáveis e arquitetura de aplicações modernas.Prática intensiva em Git/GitHub e Terminal, essenciais para o trabalho em equipe e controle de versão profissional.
                  Projetos de ponta a ponta, integrando Node.js, Banco de Dados (SQL/NoSQL) e preparando o aluno para a entrega de soluções reais."
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-8 mt-10 border-b border-indigo-500 pb-2 flex justify-center w-full">
                Outros cursos apenas no cúrriculo
              </h1>
            </div>
          </section>

          {/* Seção Habilidades Adicionais */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-8 border-b border-indigo-500 pb-2">
              Minha Stack Principal
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Node.js',
                'PostgreSQL',
                'Jest/Cypress',
                'Figma',
                'AWS/Vercel',
                'Git/GitHub',
                'JavaScript',
                'React.JS',
                'hTML5 Semântico',
                'Respónsividade',
                'UX/UI',
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium shadow-md border border-gray-600 transition-transform hover:bg-indigo-600 hover:text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </main>

        {/* Rodapé */}
        <footer className="w-full  text-center py-4 text-sm border-t border-gray-700">
          &copy; {new Date().getFullYear()} Paulo Henrique .
        </footer>
      </div>
    );
}

// --- Componente Auxiliar para a Linha do Tempo ---
const TimelineItem = ({ icon: Icon, title, subtitle, description }) => (
    <div className="flex relative items-start md:items-center">
        {/* Ponto e Linha */}
        <div className="flex flex-col items-center mr-4 md:mr-6">
            <div className="w-4 h-4 rounded-full bg-indigo-500 z-10 flex items-center justify-center">
                <Icon size={12} className="text-gray-900" />
            </div>
            <div className="h-full w-0.5 bg-gray-700 absolute top-0 bottom-0 mt-2"></div>
        </div>
        
        {/* Conteúdo */}
        <div className="bg-gray-800 p-4 rounded-lg flex-1 border border-gray-700 hover:border-indigo-500 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
            <p className="text-sm text-indigo-400 mb-2">{subtitle}</p>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
);