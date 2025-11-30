// pages/contato.js

import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

// Importações de Fontes
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// --- Componente Header (Placeholder, use seu componente real) ---
const Header = () => (
    <header className="sticky  top-0 z-50 text-black backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center py-4">
            <Link href="/" className={`${geistMono.variable} font-mono text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors logo`}>
                &lt;Paulo Henrique/&gt;
            </Link>
            <nav className="hidden sm:flex space-x-6">
                {/* Links de navegação aqui... */}
                <Link href="/" className="text-gray-300 hover:text-indigo-400">Início</Link>
                <Link href="/projetos" className="text-gray-300 hover:text-indigo-400">Projetos</Link>
                <Link href="/sobre" className="text-gray-300 hover:text-indigo-400">Sobre</Link>
                <Link href="/contato" className="text-indigo-400 font-bold border-b-2 border-indigo-400">Contato</Link>
            </nav>
        </div>
    </header>
);

// --- Componente da Página de Contato ---
export default function ContatoPage() {
    return (
        <div className={`${geistSans.variable} font-sans min-h-screen  text-black`}>
            <Header />

            <main className="container mx-auto px-4 py-16 sm:py-24 max-w-4xl">
                
                {/* Título Principal */}
                <section className="text-center mb-16">
                    <h1 className={`${geistMono.variable} font-mono text-5xl text-black sm:text-6xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400`}>
                        Fale Comigo
                    </h1>
                    <p className="text-xl text-black max-w-3xl mx-auto">
                        Seja para uma proposta de trabalho, parceria ou apenas dizer um "olá".
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-12">
                    
                    {/* Coluna 1: Formulário de Contato */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                        <h2 className="text-2xl font-bold mb-6 text-indigo-400 flex items-center space-x-2">
                           <Send size={24} />
                           <span>Envie uma Mensagem Direta</span>
                        </h2>
                        
                        {/* NOTA: Para este formulário funcionar de verdade, você precisará de uma solução backend
                           como Formspree, Netlify Forms, ou uma API própria do Next.js. */}
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="nome" className="block text-sm font-medium text-gray-400 mb-1">Nome Completo</label>
                                <input
                                    type="text"
                                    id="nome"
                                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-blackfocus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Seu Nome"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Seu E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-400 mb-1">Mensagem</label>
                                <textarea
                                    id="mensagem"
                                    rows="4"
                                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Detalhe sua proposta ou dúvida..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>

                    {/* Coluna 2: Informações de Contato e Links */}
                    <div className="space-y-8 p-8 text-black itens-center flex-r md:p-0">
                        <h2 className="text-2xl font-bold mb-4 text-black">Outras Formas de Contato</h2>
                        
                        {/* Item de Contato: E-mail */}
                        <ContactInfoItem 
                            icon={Mail}
                            title="E-mail Principal"
                            content="paulohenriqueferreirafranca2@gmail.com"
                            href="mailto:paulohenriqueferreirafranca2@gmail.com"
                        />
                        
                        {/* Item de Contato: LinkedIn */}
                        <ContactInfoItem 
                            icon={Linkedin}
                            title="LinkedIn"
                            content="www.linkedin.com/in/paulohenriquefranca"
                            href="www.linkedin.com/in/paulohenriquefranca"
                            target="_blank"
                        />
                        
                        {/* Item de Contato: GitHub */}
                        <ContactInfoItem 
                            icon={Github}
                            title="GitHub"
                            content="/https://github.com/PauloHenrique993940"
                            href="https://github.com/PauloHenrique993940"
                            target="_blank"
                        />

                        {/* Item de Contato: Localização (Opcional) */}
                        <ContactInfoItem 
                            icon={MapPin}
                            title="Localização"
                            content="Salvador, Bahia"
                        />
                    </div>
                </div>

            </main>

            {/* Rodapé */}
            <footer className="w-full text-black text-center py-4 text-sm border-t border-gray-700">
                &copy; {new Date().getFullYear()} [Paulo Henrique].
            </footer>
        </div>
    );
}

// --- Componente Auxiliar para Itens de Contato ---
const ContactInfoItem = ({ icon: Icon, title, content, href, target }) => (
    <div className="flex items-start space-x-4">
        <div className="mt-1 p-2 bg-indigo-600 rounded-full flex-shrink-0">
            <Icon size={20} className="text-white" />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-white mb-0.5">{title}</h3>
            {href ? (
                <Link href={href} target={target} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    {content}
                </Link>
            ) : (
                <p className="text-gray-400">{content}</p>
            )}
        </div>
    </div>
);