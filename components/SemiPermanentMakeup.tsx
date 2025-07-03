import Image from 'next/image';

export default function SemiPermanentMakeup() {
  return (
     <section id="semi" className="bg-white p-12 rounded-lg shadow">
      <div className="md:flex gap-8 items-center">
        <div className="md:w-1/2">
          <div className="grid grid-cols-3 items-center gap-4">
            <Image
              src="/assets/images/lips.jpeg"
              alt="Maquillage semi-permanent lèvres"
              width={200}
              height={200}
              className="rounded-lg shadow"
            />
          </div>
          <p className="mt-4 italic">Ravivez votre beauté avec un maquillage semi-permanent, c&apos;est aussi gagner du temps, sans tirer un trait sur votre image.</p>
          <p className="mt-2">Si vous ne souhaitez pas passer par la technique de dermopigmentation, voici l&apos;alternative parfaite. La teinture hybride et la reconstruction des sourcils au henné est la solution ! C&apos;est une option douce, sans douleur ni aiguille. Idéales pour structurer le regard, corriger les asymétries ou tester avant un microblading. Ces techniques ont une tenue de 10 jours sur la peau et jusqu&apos;à 6 semaines sur les poils. L&apos;effet maquillage reste naturel et réversible. Un vrai coup d&apos;éclat, sans remord!</p>
        </div>
        <div className="md:w-1/2 flex flex-row justify-center">
          <Image
            src="/assets/images/single_lips.jpeg"
            alt="Maquillage semi-permanent yeux"
            width={500}
            height={500}
            className="rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
}