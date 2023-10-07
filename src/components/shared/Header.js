import React, { Fragment } from 'react'
import { HiOutlineBell, HiOutlineSearch } from 'react-icons/hi'
import { Popover, Transition, Menu } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigation = useNavigate();

    return (
        <div className="flex flex-row justify-between items-center bg-white h-16 px-4 shadow-md">
        <div className="relative">
            <input
            type="text"
            className="rounded-sm border-2 border-neutral-200 px-4 py-2 focus:outline-none focus:border-primary-100 w-[24rem]"
            placeholder="Search"
            />
            <HiOutlineSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
        </div>

        <div className="flex flex-row items-center space-x-4">
            <Popover className="relative">
            {({ open }) => (
                <>
                <Popover.Button className="relative flex items-center justify-center text-neutral-400 hover:text-neutral-500 active:text-neutral-600">
                    <HiOutlineBell className="text-2xl text-neutral-400" />
                </Popover.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute z-10 mt-3 w-80 right-0 sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                            href="/dashboard"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-neutral-50 shadow-sm"
                        >
                            {/* Heroicon name: outline/chart-bar */}
                            <svg
                            className="flex-shrink-0 h-6 w-6 text-primary-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6M5 19h14"
                            />
                            </svg>
                            <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                                Analytics
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Get a better understanding of where your traffic is
                                coming from.
                            </p>
                            </div>
                        </a>

                        <a
                            href="/"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-neutral-50"
                        >
                            {/* Heroicon name: outline/cursor-click */}
                            <svg
                            className="flex-shrink-0 h-6 w-6 text-primary-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                            </svg>
                            <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                                Engagement
                            </p>
                            <p className="mt-1 text-sm text-gray-500 ">
                                Speak directly to your customers in a more
                                meaningful way.
                            </p>
                            </div>
                        </a>
                        </div>
                    </div>
                    </Popover.Panel>
                </Transition>
                </>
            )}
            </Popover>

            <Menu as="div" className="relative inline-block text-left">
            <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-100 focus:ring-primary-500">
                <div style={{ backgroundImage: 'url("https://source.unsplash.com/random/80x80?face")' }} className="w-8 h-8 rounded-full bg-cover bg-center mr-2">
                    <span className="sr-only">OJane Doe</span>
                </div>
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
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                <Menu.Item>
                    {({ active }) => (
                        <button onClick={() => navigation('/profile')} className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-700'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>   
                            Profile
                        </button>
                    )}
                </Menu.Item>    
                <Menu.Item>
                    {({ active }) => (
                        <button onClick={() => navigation('/settings')} className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-700'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>    
                            Settings
                        </button>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <button onClick={() => navigation('/logout')} className={`${active ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-700'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>    
                            Logout
                        </button>
                    )}
                </Menu.Item>
                </div>
            </Menu.Items>
            </Transition>
            
        </Menu>
        </div>
        </div>
    );
}
