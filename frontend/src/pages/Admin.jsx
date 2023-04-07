import axios from "axios";
import React, { useEffect, useState } from "react";

const { VITE_BACKEND_URL } = import.meta.env;
const API_URL = `${VITE_BACKEND_URL}/private/`;

let tabs = [
  { name: "Utilisateur", href: "#", current: true },
  { name: "Loueurs", href: "#", current: false },
  { name: "Team", href: "#", current: false },
  { name: "Paiements", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Admin() {
  const [people, setPeople] = useState([]);
  const [owner, setOwner] = useState([]);
  const [usersTab, setUsersTab] = useState(true);

  function fetchUsers(data) {
    const users = data.map((user) => {
      return {
        id: user.id,
        name: user.firstName,
        title: user.lastName,
        department: user.drivingLicenseNumber,
        email: user.email,
        role: "Member",
        image: user.avatar,
      };
    });
    setPeople(users);
  }

  function fetchOwners(data) {
    const mappedOwners = data.map((o) => {
      return {
        id: o.id,
        entreprise: o.entreprise,
        ville: o.ville,
        email: o.email,
        role: "Owner",
        estValide: o.estValide,
      };
    });
    setOwner(mappedOwners);
  }

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem("user")).user;
    if (!token) {
      window.location.href = "/login";
    }
    axios
      .get(`${API_URL}users/`, {
        headers: {
          Authorization: `Bearer ${token}}`,
        },
      })
      .then((response) => {
        fetchUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`${API_URL}owners/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        fetchOwners(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleClickTabs(e) {
    if (e.target.value === "Loueurs") {
      setUsersTab(false);
    } else if (e.target.value === "Utilisateur") {
      setUsersTab(true);
    }

    const updatedTabs = tabs.map((tab) => {
      const isCurrent = tab.name === e.target.value;
      return { ...tab, current: isCurrent };
    });

    tabs = updatedTabs;
  }

  return (
    <div className="width content min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name} value={tab.name}>
                {tab.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab.name}
                href={tab.href}
                value={tab.name}
                onClick={(e) => {
                  handleClickTabs(e);
                }}
                className={classNames(
                  tab.current
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-500 hover:text-gray-700",
                  "px-3 py-2 font-medium text-sm rounded-md"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Rajouter un utilisateur
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        {usersTab ? (
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Nom
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Matricule
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) =>
                      person.id === 1 ? null : (
                        <tr key={person.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={person.image}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">
                                  {person.name}
                                </div>
                                <div className="text-gray-500">
                                  {person.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="text-gray-900">{person.title}</div>
                            <div className="text-gray-500">
                              {person.department}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.role}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <p className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                              Edit
                              <span className="sr-only">, {person.name}</span>
                            </p>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Nom
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Matricule
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {owner.map((o) => (
                      <tr key={o.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {o.entreprise}
                              </div>
                              <div className="text-gray-500">{o.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">{o.title}</div>
                          <div className="text-gray-500">{o.ville}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span
                            className={`inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ${
                              o.estValide
                                ? "text-green-800 bg-green-100"
                                : "text-red-500 bg-red-100"
                            }`}
                          >
                            {o.estValide ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {o.role}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <p className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                            Edit<span className="sr-only">, {o.ville}</span>
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
