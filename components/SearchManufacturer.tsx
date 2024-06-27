'use client';
import { useState, Fragment } from 'react';
import { Combobox, ComboboxButton, ComboboxInput, Transition, ComboboxOptions, ComboboxOption } from '@headlessui/react'

import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image';
import clsx from 'clsx';


const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerProps) => {
    const [query, setQuery] = useState('');

    const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    ))

  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className='relative w-full'>
                <ComboboxButton className="absolute top-[14px]">
                    <Image 
                        src="/car-logo.svg"
                        width={20}
                        height={20}
                        className='ml-4'
                        alt="Car Logo"
                    />
                </ComboboxButton>

                <ComboboxInput 
                    className="search-manufacturer__input"
                    placeholder='Volkswagen'
                    displayValue={(manufacturer: string) => manufacturer}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <Transition
                    as={Fragment}
                    data-transition="transition ease-in duration-100"
                    data-enter="opacity-100"
                    data-leave="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <ComboboxOptions>
                        {filteredManufacturers.map((item) => (
                                <ComboboxOption
                                    key={item}
                                    className={({ active }) =>
                                      `relative search-manufacturer__option ${
                                        active ? "bg-primary-blue text-white" : "text-gray-900"
                                      }`
                                    }
                                    value={item}
                                >
                                    {({ focus, selected }) => (
                                         <div className={clsx('group flex gap-2')}>
                                        {selected}
                                        {item}
                                        </div>
                                    )}
                                </ComboboxOption>
                            ))
                        }
                    </ComboboxOptions>
                </Transition>

            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer