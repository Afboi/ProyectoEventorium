import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
//import encargado detraer el hook que cambia el tema
//import { useChangeTheme } from "../../hooks/useChangeTheme";

// Navigation items for the navigation bar
const navigation = [
  // { name: "Calendario", href: "/EventDetails", current: false },
  { name: "Activities", href: "/ViewMore", current: false },
  { name: "Homepage", href: "/Homepage", current: true },
  // { name: "Agregar tarea", href: "#", current: false },
];
// Helper function to join class names into a single string
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Navigation Bar component.
 * This component is responsible for displaying the navigation bar on the page.
 *
 */
export function Nav({ onOpenProfileModal, data }) {

  // Constant responsible for changing the theme
  //const setTheme = useChangeTheme();

  export const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("Token");
    } catch (error) {
      console.log("Renove authentication token failed :", error?.message);
    }
  };
  

  // The Disclosure component from Headless UI is used to create a responsive navigation bar
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-0 w-full px-2 sm:px-6 lg:px-8 bg-white dark:bg-dark-blue">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                {/* Logo image */}
                <div className="flex flex-shrink-0 items-center">
                  <a href="/Homepage">
                    <img
                      className="h-12 w-auto"
                      src="../../../public/logo.png"
                      alt="Your Company"
                    />
                  </a>
                  <p className="text-lg font-[380] text-[#018B8A]  ml-4 text-center">Eventorium</p>
                </div>
                {/* Navigation items */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 self">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-green border-2 border-green  hover:bg-blue hover:text-white dark:border-orange dark:hover:bg-orange dark:text-white"
                            : "text-green hover:bg-blue hover:text-white dark:text-white dark:hover:bg-orange dark:hover:text-white",
                          "rounded-full px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Notification button */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:text-white dark:hover:text-orange dark:focus:ring-orange dark:focus:ring-offset-orange">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={data.image_url}
                        alt="User profile"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {/* Profile dropdown text */}
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-main-bg ring-opacity-5 focus:outline-none dark:bg-dark-blue dark:ring-white dark:text-white">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            onClick={onOpenProfileModal}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-blue dark:text-white"
                            )}
                          >
                            My profile
                          </a>
                        )}
                      </Menu.Item>
                      {/* 
                      Boton encargado de activar y desactivar el modo oscuro de la web, desactivado en estos momentos hasta tener resuelto el diseño oscuro
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-blue dark:text-white" 
                            )}
                            onClick={setTheme}
                          >
                            Change Theme
                          </a>
                        )}
                      </Menu.Item>
                      */}
                    
                          
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-blue dark:text-white"
                            )}
                          >
                            Log out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-green hover:text-white"
                      : "text-green hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
