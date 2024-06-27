"use client";

import { CarProps } from '@/types';
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition, TransitionChild } from '@headlessui/react';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps ) => {
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <TransitionChild 
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25'></div>
                </TransitionChild>
            </Dialog>
        </Transition>
    </>
  )
}

export default CarDetails