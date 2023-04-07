/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "@assets/logo.png";

function Header() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [isOwner, setIsOwner] = useState(false);
  const [estAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setIsOwner(!currentUser.user.prenom);
      setIsAdmin(currentUser.user.estAdmin === 1);
    } else {
      setIsOwner(false);
      setIsAdmin(false);
    }
  }, [currentUser]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.replace("/login");
  };

  return (
    <Popover className="relative bg-white width">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to="/">
            <span className="sr-only">Workflow</span>
            <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <Link to="/">
            <h2 className="text-sm font-normal text-gray-500 hover:text-gray-900">
              ACCUEIL
            </h2>
          </Link>
          <Link to="/car">
            <h2 className="text-sm font-normal text-gray-500 hover:text-gray-900">
              LOCATION
            </h2>
          </Link>
        </Popover.Group>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          {currentUser && !estAdmin && !isOwner && (
            <Link
              to="/profil"
              className="whitespace-nowrap text-sm font-medium uppercase text-gray-500 hover:text-gray-900"
            >
              {currentUser.user.prenom}
            </Link>
          )}
          {currentUser && estAdmin && (
            <Link
              to="/admin"
              className="whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              ADMIN PANNEL
            </Link>
          )}
          {currentUser && isOwner && (
            <Link
              to="/fleet"
              className="whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              MY FLEET
            </Link>
          )}
          {currentUser && (
            <button
              type="button"
              onClick={handleLogout}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              DECONNEXION
            </button>
          )}
          {!currentUser && (
            <>
              <Link
                to="/login"
                className="whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                CONNEXION
              </Link>
              <Link
                to="/register"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                ENREGISTREMENT
              </Link>
            </>
          )}
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opaville-0 scale-95"
        enterTo="opaville-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opaville-100 scale-100"
        leaveTo="opaville-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-30"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opaville-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  <Link
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 "
                  >
                    <h2 className="text-base font-medium text-gray-900">
                      <Popover.Button>ACCUEIL</Popover.Button>
                    </h2>
                  </Link>
                  <Link
                    to="/car"
                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 "
                  >
                    <h2 className="ttext-base font-medium text-gray-900">
                      <Popover.Button>LOCATION</Popover.Button>
                    </h2>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="mt-6">
                {currentUser && !estAdmin && !isOwner && (
                  <Link
                    to="/profil"
                    className="whitespace-nowrap text-sm font-medium uppercase text-gray-500 hover:text-gray-900"
                  >
                    <Popover.Button>{currentUser.user.prenom}</Popover.Button>
                  </Link>
                )}
                {currentUser && estAdmin && (
                  <Link
                    to="/admin"
                    className="whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-900"
                  >
                    <Popover.Button>ADMIN PANNEL</Popover.Button>
                  </Link>
                )}
                {currentUser && isOwner && (
                  <Link
                    to="/fleet"
                    className="whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-900"
                  >
                    <Popover.Button>MY FLEET</Popover.Button>
                  </Link>
                )}
                {currentUser && (
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Popover.Button>DECONNEXION</Popover.Button>
                  </button>
                )}
                {!currentUser && (
                  <>
                    <Link to="/login">
                      <Popover.Button className="mt-6 font-medium link w-full text-center">
                        CONNEXION
                      </Popover.Button>
                    </Link>
                    <Link to="/register">
                      <Popover.Button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        ENREGISTREMENT
                      </Popover.Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
export default Header;
