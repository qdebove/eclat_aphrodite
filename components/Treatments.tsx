export default function Treatments() {
  return (
    <section id="treatments" className="bg-pink-200 p-12 rounded-lg">
      <div className="md:flex gap-8">
        <div className="md:w-1/2">
          <img src="/assets/fil-de-soie.jpg" alt="Fil de soie collagène" className="rounded-lg" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-xl font-semibold">Le nouveau traitement anti-rides sans chirurgie</h3>
          <p className="italic">Le Fil de soie au collagène, le nouveau réflexe jeunesse, le soin qui redessine votre peau à effet immédiat.</p>
          <p>Venez sublimer la peau sans aiguille, tout en douceur, pour une durée de deux semaines après la première pose. La stimulation du collagène pour prolonger l’éclat, nécessite 4 à 6 séances espacées d’une semaine, puis un entretien par mois.</p>
        </div>
      </div>
    </section>
  );
}