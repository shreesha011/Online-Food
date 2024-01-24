import React from 'react'
import {banner1,banner2,banner3,banner4,banner5} from '../images';
import { type } from '@testing-library/user-event/dist/type';


const images=[banner1,banner2,banner3,banner4,banner5];

const Header = ({title,image}) => {
  return (
    <div className='w-full h-[100vh]'>

        <div className='relative w-full h-full'>
            {/* Adedd the images in the Home Page using src */}
            <img 
            src={image ?? images[Math.floor(Math.random() * images.length)]}  
            alt="Recipes"
            className='w-full h-full object-cover'
            />
         </div>

         {/* It will Show the Title in the Home Page */}
         <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 '>
            <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>{title}</h1>

          {/* If the type is home page then only it must show the bellow description */}
            {
            type && (
                <p className='text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full'>Welcome to FlavorVerse, your passport to culinary adventures!
              <br className='hidden md:block' /> Discover a treasure trove of
              delectable recipes from around the globe.</p>
            )
            }
         </div>

         
       
    </div>
  )
}

export default Header