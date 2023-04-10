import { Link } from "react-router-dom";

const metrics = [
  {
    id: 1,
    stat: "8K+",
    emphasis: "Concessionnaires",
    rest: "déjà séduits par notre site",
  },
  {
    id: 2,
    stat: "250K+",
    emphasis: "Véhicules en ligne",
    rest: "",
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "Satisfaction des clients :",
    rest: "le client au coeur de nos préoccupations",
  },
  {
    id: 4,
    stat: "12M+",
    emphasis: "d'utilisateurs",
    rest: "par mois",
  },
  {
    id: 5,
    stat: "Allez",
    emphasis: "où vous voulez",
    rest: "quand vous voulez",
  },
];

export default function Home() {
  return (
    <div className="width">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1630165356623-266076eaceb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Allez-y,</span>
                  <span className="block text-indigo-200">
                    même sans permis.
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Découvrez la flotte de véhicules EliteFleet©
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                    <Link
                      to="/car"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                    >
                      Louez
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p className="text-center font-normal text-gray-500 text-base tracking-wide pb-12">
              Nos partenaires particuliers et professionnels
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-16" src="/img/amazon.png" alt="Tuple" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-16" src="/img/tesla.png" alt="StaticKit" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-16" src="/img/appel.png" alt="Mirage" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img className="h-16" src="/img/google.png" alt="Transistor" />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img className="h-16" src="/img/sony.png" alt="Workcation" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="relative bg-gray-900">
          <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opaville-25 xl:absolute xl:inset-0"
                  src="https://plus.unsplash.com/premium_photo-1670354502852-86985e103ed6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-12 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent text-4xl">
                  EliteFleet©
                </span>
              </h2>
              <p className="mt-3 text-3xl font-extrabold text-white">
                Mettez à louer vos voitures sans permis
              </p>
              <p className="mt-5 text-lg text-gray-300 py-10 px-4 text-justify">
                Mettez vos voitures sans permis en location dès maintenant pour
                augmenter votre revenu ! En proposant vos véhicules à la
                location, vous pourrez rentabiliser les périodes où vous ne vous
                en servez pas. De plus, en étant en mesure de proposer des
                véhicules récents et bien entretenus, vous pourrez vous
                démarquer de vos concurrents et attirer une clientèle fidèle.
                Grâce à notre plateforme facile à utiliser, vous pourrez gérer
                vos locations en temps réel et maximiser vos revenus. N'attendez
                plus, mettez vos voitures sans permis en location dès maintenant
                et profitez de tous les avantages de notre plateforme
                EliteFleet©
              </p>
              <div className="mt-16 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 px-4">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">
                      {item.stat}
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        {item.emphasis}
                      </span>{" "}
                      {item.rest}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Prêt à démarrer</span>
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Cliquez et créez votre compte.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <Link
                to="/register"
                className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
              >
                S'inscrire
              </Link>
              <Link
                to="/car"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
              >
                Louer
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
