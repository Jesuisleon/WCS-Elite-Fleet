/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import Order from "@components/Order";
import fr from "date-fns/locale/fr";

const { VITE_BACKEND_URL } = import.meta.env;

export default function CardDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { user: currentUser } = useSelector((state) => state.auth);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setIsOwner(!currentUser.user.prenom);
    } else {
      setIsOwner(false);
    }
  }, [currentUser]);

  const [orderModal, setOrderModal] = useState(false);
  const [carPrice, setCarPrice] = useState(0);
  const [dataCar, setDataCar] = useState([]);
  const [dateReserved, setDateReserved] = useState([]);
  const [duration, setDuration] = useState(0);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const day = range[0].endDate.getDate() - range[0].startDate.getDate() + 1;
    if (dataCar.length !== 0) {
      setCarPrice(dataCar[0].prix * day);
      setDuration(day);
    }
  }, [range]);

  const filterRentedData = (e) => {
    return Object.keys(e[0])
      .map((key) =>
        typeof e[0][key] === "object" && e[0][key] !== null ? e[0][key] : null
      )
      .filter((other) => other !== null);
  };

  const fetchDates = (data) => {
    const newDateReserved = filterRentedData(data);
    let rentDetails = newDateReserved.map((obj) => {
      return { locationDebut: obj.locationDebut, locationFin: obj.locationFin };
    });
    rentDetails = rentDetails.map(
      (item) =>
        (item.locationDebut = new Date(item.locationDebut)) &&
        (item.locationFin = new Date(item.locationFin))
    );
    setDateReserved(rentDetails);
  };

  const fetchCars = (data) => {
    const newCars = data.map((key) => {
      return {
        id: key.id,
        marque: key.marque,
        modele: key.modele,
        type: key.type,
        annee: key.annee,
        couleur: key.couleur,
        ville: key.ville,
        image: JSON.parse(key.image),
        kilometrage: key.kilometrage,
        prix: key.prix,
      };
    });
    setDataCar(newCars);
  };

  useEffect(() => {
    axios
      .get(`${VITE_BACKEND_URL}/private/cardetails/${id}`)
      .then((res) => {
        fetchCars(res.data);
        fetchDates(res.data);
        setCarPrice(res.data[0].prix);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="width">
      <nav aria-label="Breadcrumb">
        <button type="button" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </button>
      </nav>

      {dataCar.length === 0 && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
        </div>
      )}
      {dataCar.length !== 0 && (
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={dataCar[0].image.image1}
                alt={dataCar[0].modele}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src={dataCar[0].image.image2}
                  alt={dataCar[0].modele}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src={dataCar[0].image.image3}
                  alt={dataCar[0].modele}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={dataCar[0].image.image4}
                alt={dataCar[0].modele}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-6 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-10 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl text-center font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {dataCar[0].marque}
                <p className="text-lg font-normal">{dataCar[0].modele}</p>
              </h1>
            </div>
            <div className="mt-10">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    Déplacez-vous autrement ! La {dataCar[0].manufacturer}
                    {dataCar[0].model} est le véhicule idéal pour tous vos
                    trajets urbains à 2. La {dataCar[0].manufacturer}
                    {dataCar[0].model} peut se conduire avec et sans permis.
                    N'hésitez pas à venir l'essayer !
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Détails</h3>

                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Type: {dataCar[0].type}
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Année: {dataCar[0].annee}
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Couleur: {dataCar[0].couleur}
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Kilométrage: {dataCar[0].kilometrage} KM
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Calendrier */}
            <div className="mt-4 lg:mt-0 lg:row-span-2">
              <div className="flex flex-col justify-center items-center mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                <h2 className="sr-only">Information produit</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  €{carPrice}{" "}
                </p>
                <p className="text-sm text-gray-500">/jour</p>
                <p className="text-xl text-center text-gray-900 flex flex-col items-center">
                  Réservation
                </p>
                <DateRange
                  disabledDates={dateReserved}
                  onChange={(item) => setRange([item.selection])}
                  editableDateInputs
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  months={1}
                  direction="horizontal"
                  showDateDisplay={false}
                  showMonthAndYearPickers={false}
                  showSelectionPreview
                  minDate={new Date()}
                  rangeColors={["rgb(79 70 229)"]}
                  locale={fr}
                />
                {!isOwner && (
                  <button
                    role={range.length > 0 ? "button" : "disabled"}
                    type="submit"
                    onClick={() => {
                      if (range.length > 0) {
                        setOrderModal(true);
                      }
                    }}
                    className="mt-10 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Réserver
                  </button>
                )}
              </div>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8" />
          </div>
        </div>
      )}
      {orderModal && (
        <Order
          dataCar={dataCar[0]}
          carPrice={carPrice}
          duration={duration}
          close={() => setOrderModal(false)}
        />
      )}
    </div>
  );
}
