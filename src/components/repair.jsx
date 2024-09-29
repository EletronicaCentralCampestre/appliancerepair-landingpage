import React from 'react'

import {WashingMachine, Refrigerator, Tv, Microwave, Heater, Wrench} from 'lucide-react'


const Repair = () => {
    const repairItems = [
        {
            title: 'Geladeira',
            icon: Refrigerator
        },
        {
            title: 'Maquina de Lavar',
            icon: WashingMachine
        },
        {
            title: 'Fogão',
            icon: Heater
        },
        {
            title: 'Microondas',
            icon: Microwave
        },
        {
            title: 'Panelas Eletricas, Televisões e outros',
            icon: Wrench,
        },
        
    ]
  return (
    <div className='text-center bg-primary py-[3rem]'>
        <h1 className='primary-heading text-white'>Nós reparamos</h1>
        <div className=''>
            <div className=' items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
                {repairItems.map((data, index) => (
                    <div key={index} className='p-4 rounded-lg'>
                        <data.icon alt={data.title} color='white' className='w-[80px] h-full mx-auto' />
                        <h4 className='text-white'>{data.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Repair