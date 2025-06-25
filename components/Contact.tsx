import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-pink-100 p-12 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Salon de beauté</h3>
      <p>Pour toute Réservation</p>
      <div className="flex space-x-4 text-2xl mt-2">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaFacebook /></a>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-semibold">Téléphone</h4>
          <p>Marina 06 70 66 29 75</p>
        </div>
        <div>
          <h4 className="font-semibold">Adresse e-mail</h4>
          <p>mmoujaly@gmail.com</p>
        </div>
        <div>
          <h4 className="font-semibold">Adresse postale</h4>
          <p>225 Chemin de Peyrot<br/>31620 Bouloc</p>
        </div>
      </div>
    </section>
  );
}