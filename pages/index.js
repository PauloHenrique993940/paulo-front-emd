/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';

import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Code,
  Zap,
  Briefcase,
} from 'lucide-react';
import { useState } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '/' },
    { name: 'Projetos', href: '/projetos' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className="sticky text-white top-0 z-50 backdrop-blur-md bordar">
      <div className="container mx-auto px-4 max-w-4xl flex justify-between items-center py-4">
        <Link
          href="/"
          className={`${geistMono.variable} font-mono text-xl font-bold transition-colors logo`}
        >
          &lt;Paulo Henrique/&gt;
        </Link>

        <nav className="hidden sm:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="cursor font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          className="sm:hidden text-gray-300 hover:text-indigo-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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

const SocialIcon = ({ href, children, label }) => (
  <Link
    href={href}
    target="_blank"
    aria-label={label}
    className="text-white hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
  >
    {children}
  </Link>
);

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} font-sans min-h-screen bg-[#0a0d14] text-white`}
    >
      <Header />

      <main className="container mx-auto px-4 py-16 sm:py-24 max-w-4xl">
        <section className="text-center mb-24">
          <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
            <Image
              src="/pauloHenrique.jpeg"
              alt="Avatar do Desenvolvedor"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <h1
            className={`${geistMono.variable} font-mono text-5xl sm:text-7xl font-extrabold tracking-tighter mb-4 title drop-shadow-[0_0_25px_rgba(0,0,0,0.7)]`}
          >
            Paulo Henrique Ferreira França
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Desenvolvedor Front-End
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/projetos"
              className="px-8 py-3 bg-[#6b14bd] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center space-x-2"
            >
              <Briefcase size={20} />
              <span className="buttonColor">Ver Projetos</span>
            </Link>

            <Link
              href="/sobre"
              className="px-8 py-3 border border-[#345b7c] text-[#b8c7d9] hover:text-white hover:border-[#5b8fff] rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              Minha Jornada
            </Link>
          </div>
        </section>

        <hr className="border-gray-800 my-16" />

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3">
            <Zap size={28} />
            <span className="text-white">Sobre Mim (Quick View)</span>
          </h2>

          <div className="bg-Card p-6 rounded-xl shadow-inner border border-gray-700">
            <p className="text-lg text-gray-300 mb-4">
              Sou apaixonado por transformar ideias...
            </p>

            <p className="text-gray-400 italic">
              "A beleza de um produto é a eficiência com que ele resolve..."
            </p>
            <Link
              href="/sobre"
              className="mt-4 inline-block text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              Leia a História Completa {'->'}
            </Link>
          </div>
        </section>
        <section className="mb-24 text-white">
          <div>
            <h2 className="text-3xl font-bold">💻 Minhas Tecnologias</h2>

            <div className="tecnologias flex flex-wrap gap-4 mt-6">
              <img 
                className="tec-item"
                src="./React.png"
                alt="React" 
              />
              <img
                className="tec-item"
                src="/javascript_icon.png"
                alt="Javascript"
              />
              <img
                className="tec-item"
                src="./TypeScript.png"
                alt="TypeScript"
              />
              <img 
                className="tec-item"
                src="/Vit.png"
                alt="Vite" 
              />
              <img
                className="tec-item"
                src="./VisualStudio.png"
                alt="Visual Studio  Code"
              />
              <img 
                className="tec-item"
                src="./HTML5.png"
                alt="HTML" 
              />
              <img 
                className="tec-item"
                src="./CSS3.png" 
                alt="CSS3" 
              />
              <img 
                className="tec-item"
                src="./Bootstrap.png"
                alt="Bootstrap" 
              />
              <img
                className="tec-item"
                src="./Tailwind.png"
                alt="Tailwind CSS"
              />
              <img
                className="tec-item"
                src="./Material.png"
                alt="Material UI"
              />
              <img className="tec-item" src="./Sass.png" alt="Sass" />
              <img className="tec-item" src="./Less.png" alt="Less" />
              <img className="tec-item" src="./JSON.png" alt="Json" />
              <img className="tec-item" src="/jquery_icone.png" alt="JQUERY" />
              <img className="tec-item" src="./Grulp.png" alt="Grulp" />
              <img className="tec-item" src="./Gulp.png" alt="Gulp" />
              <img className="tec-item" src="./icone-github.png" alt="GitHub" />
              <img className="tec-item" src="./GitHubCod.png" alt="GitHubCod" />
              <img className="tec-item" src="./Git.png" alt="Git" />
            </div>
          </div>
        </section>

        <section className="mb-24 text-white">
          <h2 className="text-3xl font-bold mb-10 border-b border-indigo pb-2 flex items-center space-x-2">
            <Code size={28} />
            <span>Projetos Destaques</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-center">
            <Image
              src="/controlefinanceiro.png"
              alt="Projeto 1"
              width={400}
              height={250}
              className="cardImagen"
            />
            <div>
              <ProjectCard
                title="Projeto Finances"
                description="Loja virtual completa com carrinho..."
                techs={['Next.js', 'TypeScript', 'Tailwind CSS']}
                link="https://controle-financeiro-delta-steel.vercel.app/"
              />
            </div>

            <div>
              <ProjectCard
                title="Projeto Marvel"
                description="Interface complexa utilizando gráficos."
                techs={['React', 'Framer Motion', 'API REST']}
                link="https://paulohenrique993940.github.io/projeto-marvel-mapadev-week-final-main/"
              />
            </div>

            <Image
              src="/hero.png"
              width={400}
              height={250}
              className="cardImagen"
            />
            <Image
              src="/botflix.png"
              width={400}
              height={250}
              className="cardImagen"
            />

            <div>
              <ProjectCard
                title="Botflix"
                description="Recomendação de filmes com APIs externas."
                techs={['API REST']}
                link="https://paulohenrique993940.github.io/botflix-pro-redesign-main/"
              />
            </div>

            <Image
              src="/pokedexunit.png"
              width={400}
              height={250}
              className="cardImagen"
            />

            <div>
              <ProjectCard
                title="Pokedex Unit"
                description="Visualização de Pokemons e atributos."
                techs={['Javascript']}
                link="https://pokedex-uniti.vercel.app/"
              />
            </div>
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

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">
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

      <footer className="w-full text-gray-400 text-center py-4 text-sm border-t border-gray-700">
        &copy; {new Date().getFullYear()} Paulo Henrique — Construído com ⚛️
        Next.js.
      </footer>
    </div>
  );
}

const ProjectCard = ({ title, description, techs, link }) => (
  <Link
    href={link}
    className="block p-6 bg-[#11141b] rounded-xl border border-gray-700 shadow-xl hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
  >
    <h3 className="text-2xl font-semibold mb-3 text-indigo-400 drop-shadow-[0_0_12px_rgba(80,80,255,0.35)]">
      {title}
    </h3>

    <p className="text-gray-300 mb-4">{description}</p>

    <div className="flex flex-wrap gap-2">
      {techs.map((tech) => (
        <span
          key={tech}
          className={`${geistMono.variable} font-mono text-xs px-3 py-1 bg-gray-800 rounded-lg text-gray-300`}
        >
          {tech}
        </span>
      ))}
    </div>
  </Link>
);
