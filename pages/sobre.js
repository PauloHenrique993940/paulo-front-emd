// pages/sobre.js

import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Code, Briefcase, Zap, GraduationCap } from "lucide-react";

// Importações de Fontes (Assumindo que estão configuradas globalmente, mas incluídas para clareza)
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// --- Componente Header (Você deve usar o seu Header real aqui, ou importá-lo) ---
// Para evitar repetição e garantir que o código seja utilizável, estou assumindo que
// você moverá o Header para um componente separado (ex: components/Header.js).
// Por enquanto, usaremos um placeholder.

const Header = () => (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center py-4">
            <Link href="/" className={`${geistMono.variable} font-mono text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors`}>
                &lt;Paulo Henrique/&gt;
            </Link>
            <nav className="hidden sm:flex space-x-6">
                {/* Links de navegação aqui... */}
                <Link href="/" className="text-gray-300 hover:text-indigo-400">Início</Link>
                <Link href="/projetos" className="text-gray-300 hover:text-indigo-400">Projetos</Link>
                <Link href="/sobre" className="text-indigo-400 font-bold border-b-2 border-indigo-400">Sobre</Link>
                <Link href="/contato" className="text-gray-300 hover:text-indigo-400">Contato</Link>
            </nav>
        </div>
    </header>
);

// --- Componente da Página Sobre Mim ---
export default function SobrePage() {
    return (
        <div className={`${geistSans.variable} font-sans min-h-screen  text-white`}>
            <Header />

            <main className="container mx-auto px-4 py-16 sm:py-24 max-w-4xl">
                
                {/* Título Principal */}
                <section className="text-center mb-16">
                    <h1 className={`${geistMono.variable} font-mono text-5xl sm:text-6xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400`}>
                        Minha Jornada
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Desenvolvimento, inovação e a busca incessante por código de alta performance.
                    </p>
                </section>

                {/* Seção de Introdução e História */}
                <section className="mb-20 grid md:grid-cols-3 gap-8 items-center bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold mb-4 text-indigo-400 flex items-center space-x-3">
                           <Zap size={28} />
                           <span>Quem Eu Sou</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-4">
                            Eu sou Paulo Henrique Ferreira  França, desenvolvedor Front-end com **[X] anos** de experiência. Minha paixão é criar soluções web que não apenas pareçam boas, mas que também ofereçam uma experiência de usuário *extremamente* rápida e acessível.
                        </p>
                        <p className="text-md text-gray-400">
                            Minha jornada começou com HTML e CSS, mas rapidamente evoluiu para o ecossistema moderno do **React** e, mais especificamente, o **Next.js**. Acredito no poder do *Server-Side Rendering (SSR)* e na otimização contínua para entregar o melhor produto digital possível.
                        </p>
                    </div>
                    <div className="md:col-span-1 flex justify-center">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
                            <Image
                                src="/perfil.png"
                                alt="Foto de Perfil"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
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
                            title="Desenvolvedor Sênior | TechCorp Solutions"
                            subtitle="2020 - Presente"
                            description="Liderança técnica na migração de aplicações legadas para Next.js e TypeScript, resultando em uma melhoria de 40% no Lighthouse score."
                        />

                        {/* Item de Experiência 2 */}
                        <TimelineItem 
                            icon={Briefcase}
                            title="Desenvolvedor Júnior | Startup 2020"
                            subtitle="2018 - 2020"
                            description="Desenvolvimento de novos recursos de interface de usuário usando React e Redux em um ambiente ágil."
                        />
                        
                        {/* Item de Educação */}
                        <TimelineItem 
                            icon={GraduationCap}
                            title="Análise e Desenvolvimento de Sistemas | Centro Universitário Unifatecie"
                            subtitle="Conclusão 2024"
                            description="Especialização em estruturas de dados e algoritmos, com foco em otimização de sistemas."
                        />
                    </div>
                </section>
                
                {/* Seção Habilidades Adicionais */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold mb-8 border-b border-indigo-500 pb-2">
                        Minha Stack Principal
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Node.js', 'PostgreSQL', 'Jest/Cypress', 'Figma', 'AWS/Vercel', 'Git/GitHub'].map(tool => (
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
            <footer className="w-full bg-gray-800 text-gray-500 text-center py-4 text-sm border-t border-gray-700">
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