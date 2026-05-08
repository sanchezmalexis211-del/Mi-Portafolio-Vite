'use client';

import { motion } from 'framer-motion';
import { Layers3, BrainCircuit, Network, MicVocal, TrendingUp, Palette, FileText, Mail } from 'lucide-react';

export default function Home() {
  
  // fadeInUp corregido para evitar errores de compilación en Vercel
  const fadeInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 } 
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200 scroll-smooth overflow-hidden font-sans">
      
      {/* 1. NAVBAR EJECUTIVA */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-black tracking-tighter text-2xl uppercase">
              <span className="text-cyan-500"></span>
          </span>
          <div className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
            <motion.a whileHover={{ scale: 1.1, color: "#fff" }} whileTap={{ scale: 0.95 }} href="#especialidades" className="transition-colors">Especialidades</motion.a>
            <motion.a whileHover={{ scale: 1.1, color: "#fff" }} whileTap={{ scale: 0.95 }} href="#sobre-mi" className="transition-colors">Perfil</motion.a>
          </div>
        </div>
      </motion.nav>

      {/* 2. HERO SECTION */}
      <motion.section 
        className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 overflow-hidden"
        initial="hidden" animate="visible" variants={staggerContainer}
      >
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-[150px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-950/10 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] font-black tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Residencia Profesional Junio 2026
            </motion.div>

            <motion.h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.85] uppercase" variants={fadeInUp}>
              Alan <br/>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Sanchez</span>
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-neutral-400 max-w-xl font-light leading-relaxed mx-auto lg:mx-0" variants={fadeInUp}>
              Ingeniero en Informática Con Conocimientos EN: <strong className="font-bold text-white">Arquitecturas Web , Desarrollo Multiplataforma</strong>, <strong className="font-bold text-white">Machine Learning</strong> e <strong className="font-bold text-white">Infraestructura de Redes</strong>.
            </motion.p>
            
            <motion.div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-4" variants={fadeInUp}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#especialidades" 
                className="px-10 py-4 bg-white text-black rounded-full font-black text-sm uppercase tracking-wider hover:bg-cyan-400 transition-colors shadow-xl shadow-cyan-500/20"
              >
                Especialidades
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/cv.pdf" 
                className="px-10 py-4 border border-white/10 rounded-full font-black text-sm uppercase tracking-wider hover:bg-neutral-900 transition-colors"
              >
                Descargar CV
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] aspect-[4/5]">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-80" />
              <div className="relative w-full h-full rounded-[2rem] border border-white/10 overflow-hidden bg-black/20 backdrop-blur-sm shadow-2xl group">
                <img 
                  src="/perfil.jpg" 
                  alt="Alan Sánchez" 
                  className="w-full h-full object-cover scale-105 transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8 right-8 text-left">
                    <p className="text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase">Multi-Stack Developer & Tech Speaker</p>
                    <p className="text-3xl font-black text-white tracking-tighter mt-1 uppercase">Alan Sánchez</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. SOBRE MÍ */}
      <motion.section 
        id="sobre-mi" 
        className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 bg-black"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3, margin: "-50px" }} variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div variants={fadeInUp}>
             <h2 className="text-4xl font-black mb-8 tracking-tighter uppercase">Sobre Mi</h2>
             <p className="text-neutral-400 text-lg font-light leading-relaxed mb-6">
               Como estudiante de octavo semestre, he desarrollado un perfil híbrido. Repleto de diferentes capacidades, cuento con conocimientos en hardware y software, lo que me ha hecho desarrollarme de mejor forma en la resolución de problemas. De igual forma, cuento con la capacidad de poder expresarme de forma eficiente, algo que no es común en cuanto a este tipo de perfil.
             </p>
             <p className="text-neutral-400 text-lg font-light leading-relaxed">
               Mi diferenciador clave es  <strong className="font-bold text-white"> el liderazgo (Speaker)</strong>. Capacidad comprobada para dirigir equipos multidisciplinarios y comunicar visiones técnicas a stakeholders de negocio.
             </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="bg-black border border-white/10 p-12 rounded-[2.5rem] relative overflow-hidden group hover:border-cyan-500/50 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full transition-transform duration-700 group-hover:scale-110" />
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Marketing & Negocio</h3>
            <p className="text-neutral-500 font-light mb-10 italic leading-relaxed text-base">
              "Fusiono el desarrollo de producto con el marketing estratégico para asegurar que cada línea de código genere valor real en el mercado."
            </p>
            <div className="inline-block px-8 py-3 border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 rounded-xl font-bold text-sm uppercase tracking-tighter shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              Residencia Profesional: Junio 2026
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 4. ESPECIALIDADES */}
      <section id="especialidades" className="py-32 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="mb-20 text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Especialidades Técnicas</motion.h1>
            <motion.div variants={fadeInUp} className="h-1.5 w-24 bg-cyan-500 mt-6 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <SpecialtyCard icon={Layers3} title="Desarrollo Full-Stack" desc="Arquitecturas integrales que conectan interfaces de alto rendimiento con sistemas de backend robustos y escalables. Enfoque en performance extrema y manejo eficiente de datos." tags={["React", "Node.js", "Firebase", "SQL"]} color="cyan" 
/>
            <SpecialtyCard icon={BrainCircuit} title="Machine Learning" desc="Entrenamiento de modelos predictivos y visión computacional avanzados con Python." tags={["Python", "AI"]} color="purple" />
            <SpecialtyCard icon={Network} title="Infraestructura" desc="Diseño de redes  y seguridad CCTV industrial." tags={["Redes", "IoT", "CCTV"]} color="emerald" />
            <SpecialtyCard icon={MicVocal} title="Speaker & Leadership" desc="Oratoria efectiva, presentación de proyectos y dirección de equipos bajo metodologías ágiles." tags={["Speaker", "Tech Lead"]} color="yellow" />
            <SpecialtyCard icon={TrendingUp} title="Marketing & Negocio" desc="Visión comercial para transformar ideas técnicas en modelos de negocio rentables." tags={["Estrategias", "Negocios"]} color="pink" />
            <SpecialtyCard icon={Palette} title="Diseño UI/UX" desc="Conceptualización y diseño de productos digitales centrados en la estética moderna con usabilidad." tags={["Figma", "UI Design"]} color="blue" />
          </motion.div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-10">
          <div className="flex gap-10 text-xs font-bold tracking-widest text-neutral-500 uppercase">
            <motion.a whileHover={{ scale: 1.1, color: "#22d3ee" }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/Sanchez-Alan21" target="_blank" className="transition-colors">LinkedIn</motion.a>
            <motion.a whileHover={{ scale: 1.1, color: "#fff" }} whileTap={{ scale: 0.9 }} href="https://github.com/sanchezmalexis211-del?tab=repositories" target="_blank" className="transition-colors">GitHub</motion.a>
            <motion.a whileHover={{ scale: 1.1, color: "#22d3ee" }} whileTap={{ scale: 0.9 }} href="mailto:sanchezmalexis211@gmail.com" className="flex items-center gap-2 transition-colors"><Mail size={16} /> Email</motion.a>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600">
              © 2026 Alan Sánchez — Ingeniero en Informática
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SpecialtyCard({ icon: Icon, title, desc, tags, color }: { 
  icon: any, 
  title: string, 
  desc: string, 
  tags: string[], 
  color: string 
}) {
  const glow: Record<string, string> = {
    cyan: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    purple: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    blue: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    emerald: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    pink: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
    yellow: "hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]",
  };

  const iconColor: Record<string, string> = {
    cyan: "text-cyan-400",
    purple: "text-purple-400",
    blue: "text-blue-400",
    emerald: "text-emerald-400",
    pink: "text-pink-400",
    yellow: "text-yellow-400",
  };

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`bg-black border border-white/5 p-10 rounded-[2.5rem] transition-all duration-300 backdrop-blur-sm ${glow[color] || ""}`}
    >
      <div className={`mb-6 p-4 inline-block bg-neutral-900/50 rounded-2xl ${iconColor[color] || ""} shadow-inner`}>
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tight uppercase text-white">{title}</h3>
      <p className="text-neutral-400 font-light text-sm leading-relaxed mb-8">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-[9px] font-black tracking-widest uppercase py-1.5 px-4 bg-white/5 border border-white/10 rounded-full text-neutral-500">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}