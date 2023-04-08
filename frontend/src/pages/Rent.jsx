/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { Link } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
} from "@heroicons/react/solid";
// eslint-disable-next-line import/no-unresolved
import DatePicker from "@components/DatePicker";
import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Rent() {
  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [dataCar, setDataCar] = useState([]);

  const [filtersList, setFiltersList] = useState([]);
  // console.log("🚀 ~ Rent ~ filtersList:", filtersList)
  const [filterCar, setFilterCar] = useState([]);
  // console.log("🚀 ~ Rent ~ filterCar:", filterCar)

  const getUniqueValues = (data, field) => [
    ...new Set(data.map((e) => e[field])),
  ];

  const filtersName = ["modele", "couleur", "annee", "type", "ville", "marque"];

  const fetchFilters = (res) => {
    const filters = [];
    Object.keys(res.data[0]).map((key) => {
      if (filtersName.includes(key)) {
        filters.push({
          id: key,
          name: key,
          options: getUniqueValues(res.data, key).map((value) => ({
            value,
            label: value,
            checked: false,
          })),
        });
      }
      return null;
    });
    setFiltersList(filters);
  };

  const fetchCars = (res) => {
    const cars = res.data.map((car) => ({
      id: car.id,
      marque: car.marque,
      modele: car.modele,
      type: car.type,
      annee: car.annee.toString(),
      couleur: car.couleur,
      ville: car.ville,
      image: JSON.parse(car.image).image1,
      prix: car.prix,
    }));
    setDataCar(cars);
  };

  useEffect(() => {
    axios
      .get(`${VITE_BACKEND_URL}/private/vehicles`)
      .then((res) => {
        fetchCars(res);
        fetchFilters(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleModelFilter = (e) => {
    let updatedFilterCar = [...filterCar];
    const updatedFiltersList = [...filtersList];

    if (
      e.target.checked === true &&
      !updatedFilterCar.includes(e.target.value)
    ) {
      updatedFilterCar.push(e.target.value);
    } else {
      updatedFilterCar = updatedFilterCar.filter(
        (filter) => filter !== e.target.value
      );
    }

    new Promise((resolve) => {
      resolve(
        updatedFiltersList.map((filter) => {
          if (filter.id === e.target.name) {
            filter.options = filter.options.map((option) => {
              if (option.value === e.target.value) {
                option.checked = e.target.checked;
              }
              return option;
            });
          }
          return filter;
        })
      );
    }).then((res) => {
      setFiltersList(res);
    });

    setFilterCar(updatedFilterCar);
  };

  return (
    <div>
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Fermeture Menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <form className="mt-4 border-t border-gray-200">
                {/* FILTER FOR PHONE */}
                <div className="mb-4">
                  <DatePicker />
                </div>
                {filtersList.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium capitalize text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>

                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  onChange={handleModelFilter}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 min-w-0 flex-1 text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <main className="width mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Location
          </h1>
          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Tri
                  <ChevronDownIcon
                    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opaville-0 scale-95"
                enterTo="transform opaville-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opaville-100 scale-100"
                leaveTo="transform opaville-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opaville-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <button
              type="button"
              className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filtres</span>
              <FilterIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">
            Produits
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
            {/* Filters */}
            <form className="hidden lg:block">
              {filtersList.map((section) => (
                <Disclosure
                  as="div"
                  key={section.id}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium capitalize text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                onChange={handleModelFilter}
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
              <DatePicker />
            </form>
            {/* Product grid */}
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
              {dataCar
                .filter((car) =>
                  filterCar.length === 0
                    ? car
                    : Object.keys(car).some((key) =>
                        filterCar.includes(car[key])
                      )
                )
                .map((product) => (
                  <Link
                    key={product.id}
                    to={`/car/${product.id}`}
                    className="group text-sm"
                  >
                    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opaville-75">
                      <img
                        src={product.image}
                        alt={product.image}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-base italic">
                      {product.marque} {product.modele}
                    </p>
                    <p className="mt-2 font-thin text-sm text-gray-900">
                      {product.prix} € / 24 h
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
