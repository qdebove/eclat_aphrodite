import Head from 'next/head'
import Image from 'next/image'

export default function HomeTest() {
  return (
    <>
      <Head>
        <title>L'Éclat d'Aphrodite</title>
        <meta name="description" content="Salon de beauté, extensions de cils, maquillage semi-permanent, etc." />
      </Head>
      <div className="font-serif text-gray-800">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#EFB7B7] to-[#CC6868] text-white py-16 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-4">
              <Image src="/logo.png" alt="L'Éclat d'Aphrodite" width={300} height={150} />
              <h1 className="text-4xl font-serif">Salon de beauté</h1>
              <p>Pour toute réservation</p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Instagram"><Image alt="" src="/icons/instagram.svg" width={24} height={24} /></a>
                <a href="#" aria-label="Facebook"><Image alt="" src="/icons/facebook.svg" width={24} height={24} /></a>
                <a href="#" aria-label="Twitter"><Image alt="" src="/icons/twitter.svg" width={24} height={24} /></a>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image src="/hero.jpg" alt="Salon view" width={600} height={400} className="rounded-lg object-cover" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-8">Prestations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                <li className="flex justify-between"><span>Extension cils à cils</span><span>60 €</span></li>
                <li className="flex justify-between"><span>Extension de cils hybride</span><span>65 €</span></li>
                <li className="flex justify-between"><span>Volume russe</span><span>70 €</span></li>
                <li className="flex justify-between"><span>Rehaussement des cils</span><span>45 €</span></li>
                <li className="flex justify-between"><span>Reconstruction sourcils au henné</span><span>40 €</span></li>
                <li className="flex justify-between"><span>Teinture hybride sourcils</span><span>20 €</span></li>
                <li className="flex justify-between"><span>Restructuration + teinture hybrides</span><span>45 €</span></li>
                <li className="flex justify-between"><span>Pose fil de soie collagène</span><span>170 €</span></li>
                <li className="flex justify-between"><span>Dermopigmentation lèvres</span><span>200 €</span></li>
                <li className="flex justify-between"><span>Eye-liner permanent</span><span>240 €</span></li>
                <li className="flex justify-between"><span>Microblading</span><span>220 €</span></li>
                <li className="flex justify-between"><span>Microshading</span><span>260 €</span></li>
                <li className="flex justify-between"><span>Combo microblading + shading</span><span>260 €</span></li>
                <li className="flex justify-between"><span>Dépose extension</span><span>20 €</span></li>
              </ul>
              <Image src="/services.jpg" alt="Lash services" width={600} height={400} className="rounded-lg object-cover" />
            </div>
          </div>
        </section>

        {/* Interior Gallery */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-8">Le Salon</h2>
            <div className="flex overflow-x-auto space-x-4">
              <Image src="/interior1.jpg" alt="Interior 1" width={400} height={300} className="rounded-lg flex-shrink-0" />
              <Image src="/interior2.jpg" alt="Interior 2" width={400} height={300} className="rounded-lg flex-shrink-0" />
              <Image src="/interior3.jpg" alt="Interior 3" width={400} height={300} className="rounded-lg flex-shrink-0" />
            </div>
          </div>
        </section>

        {/* Semi-permanent Makeup */}
        <section className="bg-[#F9F0F0] py-16 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-4">Maquillage semi-permanent</h2>
              <p className="mb-6">Réalisez votre beauté sans avoir à tracer chaque jour un trait.</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[url('/swatches/red-rose.png')] bg-cover mx-auto rounded-full"></div>
                  <span>Red Rose</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[url('/swatches/mars-red.png')] bg-cover mx-auto rounded-full"></div>
                  <span>Mars Red</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[url('/swatches/berry-red.png')] bg-cover mx-auto rounded-full"></div>
                  <span>Berry Red</span>
                </div>
              </div>
            </div>
            <Image src="/makeup.jpg" alt="Makeup palette" width={600} height={400} className="rounded-lg object-cover" />
          </div>
        </section>

        {/* Henna Brows */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image src="/henna.jpg" alt="Henna brows" width={600} height={400} className="rounded-lg object-cover" />
            <div>
              <h2 className="text-3xl font-serif mb-4">Teinture hybride & reconstruction</h2>
              <p className="mb-4">Alternative douce au microblading, le henné structure et colore vos sourcils jusqu'à 6 semaines. Effet naturel et réversible.</p>
            </div>
          </div>
        </section>

        {/* Collagen Thread */}
        <section className="bg-[#F9F0F0] py-16 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-4">Fil de soie au collagène</h2>
              <p className="mb-4">Le soin antirides sans aiguille pour redessiner votre peau. 4 à 6 séances, puis entretien mensuel.</p>
            </div>
            <Image src="/collagen.jpg" alt="Collagen thread" width={600} height={400} className="rounded-lg object-cover" />
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-8">Un coup d'œil à mon travail</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Image src="/portfolio1.jpg" alt="Before lashes" width={400} height={300} className="rounded-lg object-cover" />
              <Image src="/portfolio2.jpg" alt="During lashes" width={400} height={300} className="rounded-lg object-cover" />
              <Image src="/portfolio3.jpg" alt="After lashes" width={400} height={300} className="rounded-lg object-cover" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-[#CC6868] to-[#EFB7B7] text-white py-8 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-serif mb-2">Contact</h3>
              <p>Marina: 06 70 66 29 75</p>
            </div>
            <div>
              <h3 className="font-serif mb-2">Email</h3>
              <p>mmoulay@gmail.com</p>
            </div>
            <div>
              <h3 className="font-serif mb-2">Adresse</h3>
              <p>225 Chemin de Peyrot</p>
              <p>31620 Bouloc</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}