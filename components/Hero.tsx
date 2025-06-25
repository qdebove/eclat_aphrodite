export default function Hero() {
  return (
    <section className="bg-black text-white p-12 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <p className="text-2xl italic">L&apos;ÉLÉGANCE EST UN ART,<br/>LA BEAUTÉ UNE SUBLIMATION.</p>
          <p className="text-lg">OFFREZ-VOUS L&apos;EXCEPTION D&apos;UN REGARD,<br/>D&apos;UN SOURIRE, D&apos;UN ÉCLAT,<br/>SIGNÉ AVEC MAÎTRISE ET PERFECTION</p>
        </div>
        <div className="md:w-1/2">
          <img src="/assets/hero-model.jpg" alt="Salon Beauté" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}