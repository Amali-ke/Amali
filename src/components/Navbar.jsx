import  { Fragment } from "react";
import  { useState } from "react";
import {ChevronDownIcon} from '@heroicons/react/20/solid'
// import { Link } from "react-scroll";
import {Menu, Transition} from '@headlessui/react';
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { PlusIcon } from "@heroicons/react/20/solid";

import Logo from "../images/amali2.png";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



export default function navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-start md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={Logo}
                    alt="Amali Community"
                    style={{ height: "180px" }}
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={Logo}
                    alt="Amali Community"
                    style={{ height: "180px" }}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="hidden list-none  md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <li>

                  <a
                    href="/"
                    className="inline-flex items-center border-b-2 hover:border-[#ece537] border-transparent px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Home
                  </a>
                  </li>
                  <li>

                  <a
                    href="/involved"
                    className="inline-flex items-center border-b-2  hover:border-[#ece537] border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Get Involved
                  </a>
                  </li>
                  <li>

                  <a
                    href="/community"
                    className="inline-flex items-center border-b-2  hover:border-[#ece537] border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Communities
                  </a>
                  </li>
                  <li>

                 
                  <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 "  >
        <a
                    href="#"
                    className="inline-flex w-full items-center  gap-x-1.5 border-b-2  hover:border-[#ece537] border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    About

                  </a>
          {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/about"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  About Amali
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/team"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Our Team
                </a>
              )}
            </Menu.Item>
           
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
                  </li>
                    
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-[#ece537] px-4 py-3 text-sm font-semibold text-[#1C161F] shadow-sm hover:bg-[#c0c04c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {/* <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" /> */}
                    Join Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-[#010102] bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-[#1c161f] sm:pl-5 sm:pr-6"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/involved"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#1c161f] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Get Involved
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/community"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#1c161f] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Communities
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#1c161f] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                About Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/team"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#1c161f] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Team
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
