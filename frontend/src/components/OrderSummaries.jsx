/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

export default function OrderSummaries({ dataCar, total }) {
  const { user: currentUser } = useSelector((state) => state.auth);

  const car = [
    {
      id: dataCar.id,
      marque: dataCar.marque,
      modele: dataCar.modele,
      prix: dataCar.prix,
      couleur: `couleur ${dataCar.couleur}`,
      size: `${dataCar.kilometrage}km`,
      imageSrc: dataCar.image,
      imageAlt: dataCar.type,
    },
  ];
  const reduction = total * 0.133;
  const totalReduction = total - reduction;
  return (
    <div className="bg-white z-50">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Merci {currentUser?.user.prenom}
          </h1>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Vous avez commandé une {car[0].marque} {car[0].modele}
          </p>
          <p className="mt-2 text-base text-gray-500">
            Votre commande #14034056 est confirmée.
          </p>

          <dl className="mt-12 text-sm font-medium">
            <dt className="text-gray-900">Factures</dt>
            <dd className="text-indigo-600 mt-2">51547878755545848512</dd>
          </dl>
        </div>

        <div className="mt-10 border-t border-gray-200">
          <h2 className="sr-only">Votre commande</h2>

          <h3 className="sr-only">Items</h3>
          {car.map((product) => (
            <div
              key={product.id}
              className="py-10 border-b border-gray-200 flex space-x-6"
            >
              <img
                src={product.imageSrc.image1}
                alt={product.imageAlt.image1}
                className="flex-none w-60 h-60 object-center object-cover bg-gray-100 rounded-lg sm:w-80 sm:h-80"
              />
              <div className="flex-auto flex flex-col">
                <div>
                  <h4 className="font-medium text-gray-900">{product.name}</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Vos informations</h3>

            <h4 className="sr-only">Addresses</h4>
            <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
              <div>
                <dt className="font-medium text-gray-900">Adresse</dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block">{currentUser?.user.ville}</span>
                    <span className="block">31000</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Paiement</dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block">Mastercard</span>
                    <span className="block">Carte Noire</span>
                    <span className="block">Carte Routiére</span>
                  </address>
                </dd>
              </div>
            </dl>

            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Sous total</dt>
                <dd className="text-gray-700">€{total}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="flex font-medium text-gray-900">
                  Réduction
                  <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2">
                    bigcarsmall10k
                  </span>
                </dt>
                <dd className="text-gray-700">
                  -€{Math.round(reduction)} (10%)
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Total</dt>
                <dd className="text-gray-900">${totalReduction}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
