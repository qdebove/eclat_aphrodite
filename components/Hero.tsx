import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-[#824e50] text-[#DFA9AB] p-12 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex flex-col space-y-6">
         <Image
            src="/assets/images/logo_eclat_aphrodite.png"
            alt="Salon Beauté"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="space-y-4">
            <p className="text-2xl italic">
              L&apos;ÉLÉGANCE EST UN ART,<br />
              LA BEAUTÉ UNE SUBLIMATION.
            </p>
            <p className="text-lg">
              OFFREZ-VOUS L&apos;EXCEPTION D&apos;UN REGARD,<br />
              D&apos;UN SOURIRE, D&apos;UN ÉCLAT,<br />
              SIGNÉ AVEC MAÎTRISE ET PERFECTION
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-row justify-center">
          <Image
            src="/assets/images/woman.jpeg"
            alt="Salon Beauté"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}