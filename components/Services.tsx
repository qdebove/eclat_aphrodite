export default function Services() {
  const list = [
    { label: 'Extension cils à cils', price: '60 €' },
    { label: 'Extension de cils hybride', price: '65 €' },
    { label: 'Volume russe', price: '70 €' },
    { label: 'Rehaussement des cils', price: '45 €' },
    { label: 'Reconstruction des sourcils au henné', price: '40 €' },
    { label: 'Teinture hybride des sourcils', price: '20 €' },
    { label: 'Restructuration + teinture hybride des sourcils', price: '45 €' },
    { label: 'Pose de fil de soie collagène', price: '170 €' },
    { label: 'Dermopigmentation des lèvres', price: '200 €' },
    { label: 'Eye liner permanent', price: '240 €' },
    { label: 'Microblading', price: '220 €' },
    { label: 'Microshading', price: '260 €' },
    { label: 'Combo microblading + shading', price: '260 €' },
    { label: 'Dépose extension', price: '20 €' },
  ];
  return (
    <section id="services" className="bg-pink-100 p-12 rounded-lg relative overflow-hidden bg-[url('/assets/images/woman_closing_eyes.jpeg')] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative z-10 text-gray-800">
        <h2 className="text-2xl font-bold mb-6">Prestations</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {list.map((item, idx) => (
              <li key={idx} className="flex justify-between border-b pb-2">
                <span>{item.label}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        <p className="mt-6 italic">Des formules avec packs et les retouches ont des tarifs spéciaux</p>
      </div>
    </section>
  );
}