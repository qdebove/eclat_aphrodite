export default function Gallery() {
  return (
    <section id="gallery" className="bg-white p-12 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">UN COUP D'ŒIL À MON TRAVAIL</h3>
      <p>Offrez-vous une pose beauté dans un cadre calme et reposant</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <img src="/assets/gal1.jpg" alt="Galerie 1" className="rounded" />
        <img src="/assets/gal2.jpg" alt="Galerie 2" className="rounded" />
        <img src="/assets/gal3.jpg" alt="Galerie 3" className="rounded" />
      </div>
    </section>
  );
}