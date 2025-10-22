"use client"
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

// Importa ícones da biblioteca Lucide-React
import { Menu, X, Github, Linkedin, Mail, Code, Zap, Briefcase } from "lucide-react";
import { useState } from "react";

// Configuração das fontes (conforme seu código original)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- Componente Header (Menu de Navegação Responsivo) ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Projetos", href: "/projetos" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl flex justify-between items-center py-4">
        {/* Logo/Nome */}
        <Link
          href="/"
          className={`${geistMono.variable} font-mono text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors`}
        >
          &lt;Paulo Hemrique/&gt;
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden sm:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-indigo-400 font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Menu Mobile Button */}
        <button
          className="sm:hidden text-gray-300 hover:text-indigo-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      {isOpen && (
        <div className="sm:hidden absolute w-full bg-gray-900 border-b border-gray-800 pb-4 transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-indigo-400 transition-colors"
              onClick={() => setIsOpen(false)} // Fecha ao clicar
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};


// --- Componente de Ícone Social (Utilizando Lucide-React) ---
const SocialIcon = ({ href, children, label }) => (
  <Link
    href={href}
    target="_blank"
    aria-label={label}
    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
  >
    {children}
  </Link>
);

// --- Componente principal da Home Page (Home) ---
export default function Home() {
  return (
    <div className={`${geistSans.variable} font-sans min-h-screen  text-white`}>
      <Header /> {/* Adicionando o menu de navegação */}
      {/* Container Principal */}
      <main className="container mx-auto px-4 py-16 sm:py-24 max-w-4xl">
        {/* Seção 1: HERO - Apresentação de Alto Impacto */}
        <section className="text-center mb-24">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl ring-4 ring-indigo-500/20">
            {/* Otimização de Imagem */}
            <Image
              src="/perfil.png"
              alt="Avatar do Desenvolvedor"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <h1
            className={`${geistMono.variable} font-mono text-5xl sm:text-7xl font-extrabold tracking-tighter mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-950`}
          >
            Paulo Henrique Ferreira França
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Desenvolvedor Web Front-End especializado em React e Next.js, com
            experiência na construção de interfaces modernas e responsivas.
            Apaixonado por criar experiências de usuário (UX) intuitivas,
            desempenho otimizado e aplicações escaláveis, sempre focando em
            soluções eficientes e de alta qualidade.
          </p>

          {/* Botão de Chamada para Ação (CTA) */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/projetos"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center space-x-2"
            >
              <Briefcase size={20} />
              <span>Ver Projetos</span>
            </Link>
            <Link
              href="/sobre"
              className="px-8 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-indigo-500 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Minha Jornada</span>
            </Link>
          </div>
        </section>

        {/* --- Linha Divisória Elegante --- */}
        <hr className="border-gray-800 my-16" />

        {/* Nova Seção 2: SOBRE MIM (Visão Rápida) */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3 text-indigo-400">
            <Zap size={28} />
            <span>Sobre Mim (Quick View)</span>
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-inner border border-gray-700">
            <p className="text-lg text-gray-300 mb-4">
              Sou apaixonado por transformar ideias em experiências digitais
              rápidas e acessíveis. Minha especialidade é o ecossistema
              React/Next.js, que utilizo para garantir SEO, performance
              (SSR/SSG) e código limpo.
            </p>
            <p className="text-gray-400 italic">
              "A beleza de um produto é a eficiência com que ele resolve o
              problema do usuário."
            </p>
            <Link
              href="/sobre"
              className="mt-4 inline-block text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              Leia a História Completa {'->'}
            </Link>
          </div>
        </section>

        {/* Seção 3: DESTAQUE DE PROJETOS */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 border-b border-indigo-500 pb-2 flex items-center space-x-2">
            <Code size={28} />
            <span>Projetos em Destaque</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-center">
            <img
              src={'./controlefinanceiro.png'}
              alt="Projeto 1"
              className="cardImagen"
            />
            <ProjectCard
              title="Plataforma Finanças"
              description="Loja virtual completa com carrinho, checkout e gerenciamento de estado global. Demonstrando Redux/Zustand."
              techs={['Next.js', 'TypeScript', 'Tailwind CSS']}
              link="https://controle-financeiro-delta-steel.vercel.app/"
            />
            <ProjectCard
              title="Projeto marvel"
              description="Interface complexa para visualização de dados, utilizando gráficos e tabelas dinâmicas em tempo real."
              techs={['React', 'Framer Motion', 'API REST']}
              link="https://paulohenrique993940.github.io/projeto-marvel-mapadev-week-final-main/"
            />
            <img src={'./hero.png'} alt="Projeto 1" className="cardImagen" />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projetos"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors border-b border-indigo-400 border-opacity-0 hover:border-opacity-100"
            >
              Ver todos {'>'}
            </Link>
          </div>
        </section>

        {/* Seção 4: HABILIDADES PRINCIPAIS (Skills) - Mantida e aprimorada */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 border-b border-indigo-500 pb-2">
            Stack e Habilidades
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              'Next.js (App Router)',
              'React Hooks',
              'TypeScript',
              'Tailwind CSS',
              'Performance Optimization',
              'Framer Motion',
              'Testes Unitários (Jest/RTL)',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 text-indigo-400 rounded-lg text-sm font-medium shadow-md border border-gray-700 transition-all hover:bg-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Seção 5: Contato Rápido / Links Sociais (Com ícones reais) */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-indigo-300">
            Vamos Construir Algo Juntos?
          </h2>
          <div className="flex justify-center space-x-8 text-3xl">
            <SocialIcon
              href="https://github.com/PauloHenrique993940"
              label="GitHub"
            >
              <Github size={32} />
            </SocialIcon>
            <SocialIcon
              href="www.linkedin.com/in/paulohenriquefranca"
              label="LinkedIn"
            >
              <Linkedin size={32} />
            </SocialIcon>
            <SocialIcon
              href="mailto:paulohenriqueferreirafranca2@gmail.com"
              label="Email"
            >
              <Mail size={32} />
            </SocialIcon>
          </div>
        </section>
      </main>
      {/* Rodapé Fixo */}
      <footer className="w-full bg-gray-800 text-gray-500 text-center py-4 text-sm border-t border-gray-700">
        &copy; {new Date().getFullYear()} Paulo Henrique. Código aberto e
        construído com ⚛️ Next.js.
      </footer>
    </div>
  );
}

// --- Componente Reutilizável para o Card de Projeto (Inalterado, mas mais bonito com o contexto) ---
const ProjectCard = ({ title, description, techs, link }) => (
  <Link
    href={link}
    className="block p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-2xl hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
  >
    <h3 className="text-2xl font-semibold mb-3 text-indigo-400">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {techs.map(tech => (
        <span
          key={tech}
          className={`${geistMono.variable} font-mono text-xs px-3 py-1 bg-gray-700 rounded-lg text-gray-300`}
        >
          {tech}
        </span>
      ))}
    </div>
  </Link>
);