/* eslint-disable prefer-const */
/* eslint-disable radix */
/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-unresolved
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, XIcon } from "@heroicons/react/solid";
import OrderSummaries from "@components/OrderSummaries";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const assuranceMethods = [
  {
    id: 1,
    title: "Standard",
    turnaround: "Assurance tourix",
    prix: "€5.00",
  },
  { id: 2, title: "Premium", turnaround: "A vie", prix: "€30.00" },
];
const paymentMethods = [
  { id: "carte-bleu", title: "Carte Bleu" },
  { id: "carte-noire", title: "Carte Noire" },
  { id: "Carte-routiere", title: "Carte Routiére" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Order({ carPrice, dataCar, duration, close }) {
  const navigate = useNavigate();
  const { user: currentUser } = useSelector((state) => state.auth);
  const [summariesModal, setSummariesModal] = useState(false);

  const car = [
    {
      id: dataCar.id,
      marque: dataCar.marque,
      modele: dataCar.modele,
      prix: dataCar.prix,
      couleur: "couleur " + dataCar.couleur,
      size: dataCar.kilometrage + "km",
      imageSrc: dataCar.image,
      imageAlt: dataCar.type,
    },
  ];
  const [assurance, setAssurance] = useState(assuranceMethods[0]);

  let TVA = carPrice + 224 + parseInt(assurance.prix.split("€")[1]) * 0.2;

  let TOTAL = carPrice + 224 + 999 + parseInt(assurance.prix.split("€")[1]);

  function handleSubmit(e) {
    e.preventDefault();
    setSummariesModal(true);
  }

  function handleClose() {
    if (summariesModal) {
      navigate("/");
    }
    setSummariesModal(false);
    close();
  }

  return (
    <div className="fixed h-screen top-0 left-0 w-screen overflow-auto backdrop-blur-sm">
      <div className="bg-gray-50 relative z-30 mx-5 xl:mx-60 my-5 xl:my-10">
        <button
          type="button"
          className="absolute z-40 top-0 right-20 -mr-12 pt-4 pr-2 focus:outline-none sm:-mr-16 sm:pt-5 sm:pr-4"
          onClick={handleClose}
        >
          <span className="sr-only">Close panel</span>
          <XIcon
            className="h-6 w-6 text-gray-600 hover:text-black"
            aria-hidden="true"
          />
        </button>
        {!summariesModal ? (
          <div className=" max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Valider ma réservation</h2>
            <form
              className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Informations
                  </h2>
                  <div className="mt-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Adresse e-mail
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email-address"
                        name="email-address"
                        autoComplete="email"
                        defaultValue={currentUser?.user.email}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 border-t border-gray-200 pt-10">
                  <h2 className="text-lg font-medium text-gray-900">
                    Information de contact
                  </h2>
                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Prénom
                      </label>
                      <div className="mt-1">
                        <input
                          defaultValue={currentUser?.user.prenom}
                          type="text"
                          id="first-name"
                          name="first-name"
                          autoComplete="given-name"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nom
                      </label>
                      <div className="mt-1">
                        <input
                          defaultValue={currentUser?.user.nom}
                          type="text"
                          id="last-name"
                          name="last-name"
                          autoComplete="family-name"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Addresse
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="address"
                          id="address"
                          autoComplete="street-address"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="ville"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ville
                      </label>
                      <div className="mt-1">
                        <input
                          defaultValue={currentUser?.user.ville}
                          type="text"
                          name="ville"
                          id="ville"
                          autoComplete="address-level2"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Pays
                      </label>
                      <div className="mt-1">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>France</option>
                          <option>Suisse</option>
                          <option>Groland</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Code postal
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Téléphone
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 border-t border-gray-200 pt-10">
                  <RadioGroup value={assurance} onChange={setAssurance}>
                    <RadioGroup.Label className="text-lg font-medium text-gray-900">
                      Assurances
                    </RadioGroup.Label>
                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      {assuranceMethods.map((e) => (
                        <RadioGroup.Option
                          key={e.id}
                          value={e}
                          className={({ checked, active }) =>
                            classNames(
                              checked
                                ? "border-transparent"
                                : "border-gray-300",
                              active ? "ring-2 ring-indigo-500" : "",
                              "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
                            )
                          }
                        >
                          {({ checked, active }) => (
                            <>
                              <div className="flex-1 flex">
                                <div className="flex flex-col">
                                  <RadioGroup.Label
                                    as="span"
                                    className="block text-sm font-medium text-gray-900"
                                  >
                                    {e.title}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className="mt-1 flex items-center text-sm text-gray-500"
                                  >
                                    {e.turnaround}
                                  </RadioGroup.Description>
                                  <RadioGroup.Description
                                    as="span"
                                    className="mt-6 text-sm font-medium text-gray-900"
                                  >
                                    {e.prix}
                                  </RadioGroup.Description>
                                </div>
                              </div>
                              {checked ? (
                                <CheckCircleIcon
                                  className="h-5 w-5 text-indigo-600"
                                  aria-hidden="true"
                                />
                              ) : null}
                              <div
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "absolute -inset-px rounded-lg pointer-events-none"
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                {/* Payment */}
                <div className="mt-10 border-t border-gray-200 pt-10">
                  <h2 className="text-lg font-medium text-gray-900">
                    Paiement
                  </h2>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Type de paiement</legend>
                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                        <div
                          key={paymentMethod.id}
                          className="flex items-center"
                        >
                          {paymentMethodIdx === 0 ? (
                            <input
                              id={paymentMethod.id}
                              name="payment-type"
                              type="radio"
                              defaultChecked
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                          ) : (
                            <input
                              id={paymentMethod.id}
                              name="payment-type"
                              type="radio"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                          )}
                          <label
                            htmlFor={paymentMethod.id}
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            {paymentMethod.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                    <div className="col-span-4">
                      <label
                        htmlFor="card-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Numéro de carte bancaire
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="card-number"
                          name="card-number"
                          autoComplete="cc-number"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="col-span-4">
                      <label
                        htmlFor="name-on-card"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nom de la carte
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="name-on-card"
                          name="name-on-card"
                          autoComplete="cc-name"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="expiration-date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date d'expiration (MM/YY)
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="expiration-date"
                          id="expiration-date"
                          autoComplete="cc-exp"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="cvc"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Code de sécurité
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="cvc"
                          id="cvc"
                          autoComplete="csc"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Order summary */}
              <div className="mt-10 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">
                  Résumé de la location
                </h2>
                <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <h3 className="sr-only">Resumé</h3>
                  <ul className="divide-y divide-gray-200">
                    {car.map((product) => (
                      <li key={product.id} className="flex py-6 px-4 sm:px-6">
                        <div className="flex-shrink-0">
                          <img
                            src={product.imageSrc.image1}
                            alt={product.imageAlt.image1}
                            className="w-20 rounded-md"
                          />
                        </div>
                        <div className="ml-6 flex-1 flex flex-col">
                          <div className="flex">
                            <div className="min-w-0 flex-1">
                              <h4 className="text-sm">
                                {product.marque} {product.modele}
                              </h4>
                              <p className="mt-1 text-sm text-gray-500">
                                {product.couleur}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {product.size}
                              </p>
                            </div>
                            <div className="ml-4 flex-shrink-0 flow-root" />
                          </div>
                          <div className="flex-1 pt-2 flex items-end justify-between">
                            <p className="mt-1 text-sm font-medium text-gray-900">
                              En location pour {duration} jours
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                    <div className="flex items-center justify-between">
                      <dt className="text-sm">Sous-total</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        {carPrice}€
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-sm">Caution</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        999€
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-sm">Assurance</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        {assurance.prix.split("€")[1]}€
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-sm">TVA</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        {TVA}€
                      </dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                      <dt className="text-base font-medium">Total</dt>
                      <dd className="text-base font-medium text-gray-900">
                        {TOTAL}€
                      </dd>
                    </div>
                  </dl>
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      Good ?
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <OrderSummaries total={TOTAL} dataCar={dataCar} />
        )}
      </div>
    </div>
  );
}
