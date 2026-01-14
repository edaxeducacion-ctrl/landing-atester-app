
import React from 'react';
import { 
  Users, 
  Download, 
  ChevronRight,
  PieChart,
  Wallet,
  Clock,
  Heart,
  MessageCircle,
  Smartphone,
  AlertCircle,
  Play,
  ExternalLink,
  Eye,
  Zap,
  Gift,
  CheckCircle2
} from 'lucide-react';

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 bg-[#0b1e1a]/95 backdrop-blur-md z-50 border-b border-emerald-900/30">
    <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-emerald-500 p-1.5 rounded-lg shadow-lg shadow-emerald-500/20">
          <Wallet className="text-[#0b1e1a] w-5 h-5" />
        </div>
        <span className="text-xl font-black tracking-tight text-white uppercase">
          Zero <span className="text-emerald-500">Deudas</span>
        </span>
      </div>
      <div className="hidden sm:flex items-center gap-2 text-emerald-500/50 text-[10px] font-bold uppercase tracking-widest">
        <Heart className="w-3 h-3 fill-emerald-500/50" />
        Acceso Exclusivo para Amigos
      </div>
    </div>
  </nav>
);

const StepCard: React.FC<{ 
  number: string; 
  title: string; 
  desc: string; 
  link?: string; 
  btnText?: string; 
  icon: React.ReactNode;
  imgUrl?: string;
  variant?: 'emerald' | 'amber';
}> = ({ number, title, desc, link, btnText, icon, imgUrl, variant = 'emerald' }) => {
  const isAmber = variant === 'amber';
  
  return (
    <div className={`bg-[#050d0b] border ${isAmber ? 'border-amber-500/30' : 'border-emerald-900/40'} rounded-[2.5rem] p-8 flex flex-col items-center text-center group hover:scale-[1.02] transition-all shadow-xl relative overflow-hidden h-full`}>
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <span className={`text-6xl font-black ${isAmber ? 'text-amber-500' : 'text-emerald-500'}`}>{number}</span>
      </div>
      <div className={`w-16 h-16 ${isAmber ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}>
        {icon}
      </div>
      <span className={`${isAmber ? 'text-amber-500/60' : 'text-emerald-500/60'} font-black text-[10px] uppercase tracking-[0.2em] mb-2 relative z-10`}>Paso {number}</span>
      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
        {desc}
      </p>
      
      {imgUrl && (
        <div className={`mb-8 w-full max-w-[220px] rounded-2xl overflow-hidden border ${isAmber ? 'border-amber-900/40' : 'border-emerald-900/40'} shadow-lg relative z-10 aspect-[9/16] bg-slate-900/50`}>
          <img src={imgUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}

      {link && btnText ? (
        <a 
          href={link} 
          target="_blank"
          className={`w-full py-4 ${isAmber ? 'bg-amber-500 text-[#1a140b] hover:bg-amber-400 shadow-amber-500/20' : 'bg-emerald-500 text-[#0b1e1a] hover:bg-emerald-400 shadow-emerald-500/20'} rounded-2xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg relative z-10`}
        >
          {btnText}
          <ChevronRight className="w-4 h-4" />
        </a>
      ) : (
        <div className="w-full py-4 bg-slate-800/50 text-slate-400 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700/50">
          <CheckCircle2 className="w-4 h-4" />
          En progreso
        </div>
      )}
    </div>
  );
};

const JumpshareVideo: React.FC = () => (
  <div className="w-full max-w-4xl mx-auto mb-20 px-4">
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[9px] font-black mb-4 border border-emerald-500/20 uppercase tracking-widest">
        <Zap className="w-3 h-3 fill-emerald-500" />
        Masterclass 9:16
      </div>
      <h3 className="text-2xl md:text-3xl font-black text-white">Domina la Regla 50/30/20</h3>
      <p className="text-slate-400 text-sm mt-4 max-w-lg mx-auto">Mira este video detallado en formato vertical sobre cómo organizar tus finanzas personales paso a paso.</p>
    </div>
    <div className="max-w-[320px] mx-auto aspect-[9/16] rounded-[3rem] overflow-hidden border-[6px] border-[#1a2b27] shadow-[0_0_80px_-20px_rgba(16,185,129,0.4)] bg-black relative">
      <iframe 
        id="js_video_iframe" 
        src="https://jumpshare.com/embed/kFdvHxuRm3GXuP5YT1bj" 
        frameBorder="0" 
        className="absolute top-0 left-0 w-full h-full"
        allow="autoplay; fullscreen"
        title="Regla 50/30/20 Video"
      ></iframe>
    </div>
  </div>
);

const VideoCard: React.FC<{ title: string; subtitle: string; embedUrl: string; icon: React.ReactNode }> = ({ title, subtitle, embedUrl, icon }) => (
  <div className="flex flex-col items-center w-full">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[9px] font-black mb-4 border border-emerald-500/20 uppercase tracking-widest">
      {icon}
      {subtitle}
    </div>
    <div className="w-full max-w-[280px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border-4 border-[#1a2b27] shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] bg-black relative">
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
    <h4 className="text-white font-bold mt-4 text-sm">{title}</h4>
  </div>
);

const VideoGallerySection: React.FC = () => (
  <section className="px-6 py-20 max-w-6xl mx-auto">
    <JumpshareVideo />
    
    <div className="text-center mb-12">
      <h3 className="text-2xl font-black text-white mb-4 italic">Vistazos Rápidos</h3>
      <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
        Explora la interfaz de Zero Deudas diseñada para ser intuitiva y minimalista.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
      <VideoCard 
        title="Demo de la Interfaz"
        subtitle="App en Acción"
        embedUrl="https://jumpshare.com/embed/UM5Wk9VNIv9QjWjbK0LA"
        icon={<Eye className="w-3 h-3 fill-emerald-500" />}
      />
      <VideoCard 
        title="Resumen 50/30/20"
        subtitle="Regla Financiera"
        embedUrl="https://jumpshare.com/embed/TPepRFxa5Eu0btwtG41D"
        icon={<Play className="w-3 h-3 fill-emerald-500" />}
      />
    </div>
  </section>
);

const AppPreview: React.FC = () => (
  <div className="relative w-[280px] h-[560px] bg-[#050d0b] border-[8px] border-[#1a2b27] rounded-[48px] overflow-hidden shadow-2xl mx-auto ring-1 ring-emerald-900/50">
    <div className="h-7 w-28 bg-[#1a2b27] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20"></div>
    <div className="p-5 pt-12 space-y-5">
      <div className="flex justify-between items-center text-[10px] text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
          <span className="font-bold text-white">Hola, Rossell</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center text-[8px] text-slate-400">R</div>
      </div>
      <div className="bg-[#1a2b27] p-5 rounded-2xl border border-white/5 shadow-inner">
        <p className="text-[9px] text-slate-400 uppercase font-bold tracking-wider mb-1">Balance General</p>
        <p className="text-2xl font-black text-white">10.000,00 S/</p>
      </div>
      <div className="space-y-2">
        <div className="bg-[#1a2b27] p-3 rounded-xl border-l-4 border-amber-500 flex justify-between items-center">
          <span className="text-[10px] font-bold">Necesidades (50%)</span>
          <span className="text-[10px] text-amber-500 font-bold">5.000,00 S/</span>
        </div>
        <div className="bg-[#1a2b27] p-3 rounded-xl border-l-4 border-blue-500 flex justify-between items-center">
          <span className="text-[10px] font-bold">Deseos (30%)</span>
          <span className="text-[10px] text-blue-500 font-bold">3.000,00 S/</span>
        </div>
        <div className="bg-[#1a2b27] p-3 rounded-xl border-l-4 border-emerald-500 flex justify-between items-center">
          <span className="text-[10px] font-bold">Ahorro (20%)</span>
          <span className="text-[10px] text-emerald-500 font-bold">2.000,00 S/</span>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0b1e1a] border-t border-slate-800/50 flex justify-around items-center px-6">
      <div className="w-5 h-5 rounded-md bg-emerald-500/20"></div>
      <div className="w-10 h-10 rounded-xl bg-emerald-500 -mt-10 shadow-lg shadow-emerald-500/40 flex items-center justify-center">
        <Wallet className="w-5 h-5 text-[#0b1e1a]" />
      </div>
      <div className="w-5 h-5 rounded-md bg-slate-800"></div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b1e1a] text-slate-200 selection:bg-emerald-500/30">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-6 py-12 max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
             <div className="bg-emerald-500/10 p-4 rounded-3xl border border-emerald-500/20 shadow-xl shadow-emerald-500/5">
                <Heart className="w-8 h-8 text-emerald-500 animate-pulse" />
             </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            ¿Me ayudas a probar <br />
            <span className="text-emerald-500">mi primera app</span>?
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Hola, soy Rossell. He creado <strong>Zero Deudas</strong> para organizar mejor nuestro dinero. 
            <br/><br/>
            Si me ayudas probándola 14 días, <span className="text-white font-bold italic underline decoration-emerald-500 decoration-2 underline-offset-4">la tendrás gratis para siempre.</span>
          </p>
        </section>

        {/* Triple Step Section */}
        <section className="px-6 py-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <StepCard 
              number="1"
              title="Únete al Grupo"
              desc="Únete a mi comunidad de testers en Google para obtener acceso exclusivo a la descarga."
              link="https://groups.google.com/g/testers-mi-app-finanzas"
              btnText="Unirme al Grupo"
              icon={<Users className="w-8 h-8" />}
              imgUrl="https://i.imgur.com/dq7Zfpu.jpeg"
            />
            <StepCard 
              number="2"
              title="Descarga la App"
              desc="Una vez unido al grupo, abre la Play Store desde tu Android e instala la aplicación oficial."
              link="https://play.google.com/store/apps/details?id=com.edaxedu.misfinanzas"
              btnText="Ir a Google Play"
              icon={<Download className="w-8 h-8" />}
              imgUrl="https://i.imgur.com/yn3IwEB.jpeg"
            />
            <StepCard 
              number="3"
              title="Sé Constante"
              desc="Usa la app durante 14 días seguidos. ¡Al terminar, se activará gratis de por vida en tu cuenta!"
              icon={<Clock className="w-8 h-8" />}
              variant="amber"
            />
          </div>

          {/* CRITICAL REMINDER */}
          <div className="mt-12 p-8 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-6 shadow-2xl max-w-4xl mx-auto">
            <div className="bg-emerald-500/10 p-4 rounded-2xl text-emerald-500 shrink-0">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-black text-emerald-500 uppercase tracking-wider mb-1">¡Aviso Importante!</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Usa el <strong>mismo correo de Google</strong> tanto en el grupo como en la Play Store. Es la única forma en que Google te reconocerá como usuario de prueba.
              </p>
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <VideoGallerySection />

        {/* Features & Preview */}
        <section className="px-6 py-24 bg-[#050d0b] mt-12 border-y border-emerald-900/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[150px] rounded-full"></div>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 space-y-10">
              <div className="flex gap-6">
                <div className="bg-emerald-500/10 p-4 rounded-2xl text-emerald-500 h-fit border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
                  <PieChart className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Regla 50/30/20</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Divide tus ingresos automáticamente: necesidades, deseos y ahorro. Sin complicaciones.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-emerald-500/10 p-4 rounded-2xl text-emerald-500 h-fit border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
                  <Gift className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Licencia Gratis de por Vida</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Al completar la prueba de 14 días, la aplicación quedará activada sin costo alguno para siempre.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-emerald-500/10 p-4 rounded-2xl text-emerald-500 h-fit border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
                  <Smartphone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Experiencia Premium</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Interfaz fluida, modo oscuro y notificaciones inteligentes para mantener tus finanzas bajo control.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <AppPreview />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-6 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
             <MessageCircle className="text-emerald-500 w-8 h-8" />
             <h2 className="text-3xl font-black text-white tracking-tight">¿Tienes dudas?</h2>
          </div>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            Puedes escribirme en cualquier momento. Gracias de corazón por ayudarme a que este proyecto crezca.
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
               <div className="w-2.5 h-2.5 rounded-full bg-emerald-900/50"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-emerald-700/50"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            </div>
            <p className="text-slate-600 text-[11px] uppercase font-black tracking-[0.4em]">Zero Deudas • Hecho con ❤️ • 2024</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
