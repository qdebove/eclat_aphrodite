export default function Hours() {
  return (
    <section id="hours" className="bg-pink-300 p-12 rounded-lg">
      <h3 className="text-xl font-semibold text-right mb-2">LE SALON VOUS ACCUEILLE</h3>
      <p className="text-right">du lundi au vendredi de 8h30 à 17h<br/>le samedi de 8h30 à 13h</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/assets/room1.jpg" alt="Salon vue 1" className="rounded" />
        <img src="/assets/room2.jpg" alt="Salon vue 2" className="rounded" />
        <img src="/assets/room3.jpg" alt="Salon vue 3" className="rounded" />
      </div>
    </section>
  );
}