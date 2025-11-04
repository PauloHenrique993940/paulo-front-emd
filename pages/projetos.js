import Image from "next/image";
import Link from "next/link";
// Importações de Fontes e Ícones
import { Geist, Geist_Mono } from "next/font/google";
import { Code, ExternalLink, Github, Menu, X } from "lucide-react";
import { useState } from "react";

// --- Configuração das Fontes ---
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
    { name: "Início", href: "/" }, // <-- LINK PARA HOME
    { name: "Projetos", href: "/projetos" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-blue-950 text-white   backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center py-4">
        <Link
          href="/"
          className={`${geistMono.variable} font-mono text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors`}
        >
          &lt;Paulo Henrique/&gt;
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
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};


// --- Dados Mock de Projetos (Mantido) ---
const PROJECTS_DATA = [
  {
    id: 1,
    slug: 'Site de Direitos',
    title: 'Adivocacia',
    description:
      'Site dedicado à informação e orientação sobre direitos, oferecendo conteúdos claros, confiáveis e acessíveis para cidadãos e profissionais do setor jurídico.',
    techs: ['HTML5', 'CSS3', 'JAVASCRIPT'],
    image: '/adivocacia.png',
    liveUrl: 'https://advocacia-kappa.vercel.app/',
    repoUrl: 'https://github.com/PauloHenrique993940/Advocacia.git',
  },
  {
    id: 2,
    slug: 'Psicologia',
    title: 'Psicologia',
    description: 'Interface para Site Instucional focado na performance.',
    techs: ['FlexBox'],
    image: '/psi.png',
    liveUrl: 'https://site-psicologia-livid.vercel.app/',
    repoUrl: 'https://github.com/PauloHenrique993940/SitePsicologia.git',
  },
  {
    id: 3,
    slug: 'PokeDex',
    title: 'Pokedex',
    description:
      'Aplicação responsiva  de uma pokedex para filtro de apenas 3 Pokemons',
    techs: ['Fetch API'],
    image: '/pokedex.png',
    liveUrl: 'https://clima-exemplo.vercel.app/',
    repoUrl: 'https://github.com/seuusuario/clima-app',
  },
  {
    id: 4,
    slug: 'Clone da Página Disney+',
    title: 'Clone Disney+',
    description:
      'Aplicação responsiva de Clone  da página Diney+ com filtro dinamico',
    techs: ['HTML5', 'NPM', 'SASS', 'GULP'],
    image: '/disney.png',
    liveUrl: 'https://clone-lime-iota.vercel.app/',
    repoUrl: 'https://github.com/PauloHenrique993940/clone_.git',
  },
  {
    id: 5,
    slug: 'Pousada',
    title: 'Pousada',
    description:
      'Site de uma prataforma de Hotéis onde é possivel visualizar  suítes ',
    techs: ['HTML5 semãntico', 'CSS3  Grid e Flexbox', 'JavaScript Validação'],
    image: '/pousada2.png',
    liveUrl: 'https://pousada-pi.vercel.app/',
    repoUrl: 'https://github.com/PauloHenrique993940/Pousada.git',
  },
  {
    id: 6,
    slug: 'site-institucional',
    title: 'Freelance - Site Patroa dos Empregos',
    description:
      "Desenvolvimento de site institucional moderno e responsivo para a marca 'Patroa dos Empregos'. Estrutura otimizada para navegação simples, identidade visual personalizada e foco na apresentação clara dos serviços.",
    techs: ['Flex'],
    image: '/sitefrelance.png',
    liveUrl: 'https://site-patroa-do-emprego.vercel.app/',
    repoUrl: 'https://github.com/PauloHenrique993940/SitePatroaDoEmprego.git',
  },

  {
    id: 7,
    slug: 'Restaurante',
    title: 'Página Restaurante',
    description:
      'Ecommerce de um restaurante onde oferece opção de cardápio e modal.',
    techs: ['HTML5', 'NPM', 'SASS', 'GULP'],
    image: '/restaurante.png',
    liveUrl: 'https://restaurante-peach-alpha.vercel.app/',
    repoUrl: 'https://github.com/PauloHenrique993940/Restaurante.git',
  },
  {
    id: 8,
    slug: 'Fullture todo List',
    title: 'Fullture todo List',
    description:
      'Crtie uma prataforma para controle de tarefas onde o usuário adiciona e exclui tarefa além de acompanhamento em tempo real',
    techs: ['HTML5', 'CSS', 'JAVASCRIPT'],
    image: '/list.png',
    liveUrl: 'https://projeto-fullture-todo.vercel.app/',
    repoUrl: 'https://github.com/PauloHenrique993940/ProjetoFullture-Todo.git',
  },

  {
    id: 8,
    slug: 'Clarity Finanças',
    title: 'Clarity Finanças -> React',
    description:
      'Página interativa desenvolvida com React e Vite, utilizando Hooks para gerenciamento de estado e lógica reativa, garantindo performance, modularidade e experiência fluida ao usuário.',
    techs: ['React', 'Vite', 'UseContext', 'Pages'],
    image: '/financeiro.png',
    liveUrl: 'https://controle-financeiro-delta-steel.vercel.app/',
    repoUrl: 'https://github.com/PauloHenrique993940/controle-financeiro.git',
  },
  {
    id: 8,
    slug: 'cafeteria Sabor e Aroma',
    title: 'Cafeteria Sabor e Aroma',
    description:
      'Página interativa desenvolvida com React e Next, utilizando Hooks para gerenciamento de estado e lógica reativa, garantindo performance, modularidade e experiência fluida ao usuário e filtros dinâmicos.',
    techs: ['React', 'Next', 'TypeScript'],
    image: '/cafeteria.png',
    liveUrl:
      'https://cafe-aroma-preto-2t3me1rxy-paulohenrique537s-projects.vercel.app/',
    repoUrl: 'https://github.com/PauloHenrique993940/cafe-aroma.git',
  },
];


// --- Componente Reutilizável para o Card de Projeto COMPLETO (Mantido) ---
const FullProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transition-all duration-300 hover:border-indigo-500 hover:shadow-indigo-500/20">

    <div className="relative h-48 w-full">
      <Image
        src={project.image}
        alt={`Visualização do projeto ${project.title}`}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 hover:scale-[1.02]"
      />
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-3 text-indigo-400">{project.title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techs.map(tech => (
          <span
            key={tech}
            className={`${geistMono.variable} font-mono text-xs px-3 py-1 bg-gray-700 rounded-full text-gray-300`}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        <Link
          href={project.liveUrl}
          target="_blank"
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
        >
          <ExternalLink size={18} />
          <span>Live Demo</span>
        </Link>
        <Link
          href={project.repoUrl}
          target="_blank"
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
        >
          <Github size={18} />
          <span>GitHub</span>
        </Link>
      </div>
    </div>
  </div>
);


// --- Componente da Página Principal de Projetos ---
export default function ProjetosPage() {

  return (
    <div className={`${geistSans.variable} font-sans min-h-screen  text-white`}>

      <Header /> {/* <-- O Header Completo foi Adicionado Aqui */}

      <main className="container mx-auto px-4 py-16 sm:py-24 max-w-6xl">
        <section className="text-center mb-16">
          <h1 className={`${geistMono.variable} font-mono text-5xl sm:text-6xl font-extrabold tracking-tighter mb-4  text-black`}>
            Toda minha trajetória de Desenvolvimento voçê acompanha, Aqui!
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Uma coleção de trabalhos que demonstram minhas habilidades em design, desenvolvimento e otimização com React e Next.js.
          </p>
        </section>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS_DATA.map(project => (
            <FullProjectCard key={project.id} project={project} />
          ))}
        </div>
        

        {/* CTA para Contato no final */}
        <div className="text-center mt-20 p-8 bg-gray-800 rounded-xl border border-gray-700">
          <h2 className="text-3xl font-bold mb-3">Interessado em Colaborar?</h2>
          <p className="text-gray-400 mb-6">
            Tenho disponibilidade para novos desafios e projetos.
          </p>
          <Link
            href="/contato"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            Entre em Contato Agora
          </Link>
        </div>
      </main>

      {/* Rodapé Fixo */}
      <footer className="w-full text-black text-center py-4 text-sm border-t border-gray-700">
        &copy; {new Date().getFullYear()} Paulo Henrique Ferreira França.
      </footer>
    </div>
  );
}