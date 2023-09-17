import Image from 'next/image'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'

export default function Footer() {
  return (
    <section className='w-full bg-light  font-rubik mt-16'>
      <footer className='max-w-5xl m-auto'>
        <div className='flex justify-between py-20 flex-wrap gap-y-10'>
          <article className='max-w-xs flex flex-col gap-6'>
            <Image src='logoFood.svg' alt='logo' width='120' height='40' />
            <span className='text-lg font-normal text-[#1d1d1db3] leading-none'>
              Jalan Semangka Raya, Telaga Murni,Cikarang Barat, Kab. Bekasi
            </span>
            <ul className='flex gap-8'>
              <li className='bg-white p-2 rounded-full shadow-md shadow-black/50 cursor-pointer'>
                <AiOutlineInstagram className='w-full'/>
              </li>
              <li className='bg-gold p-2 rounded-full shadow-md shadow-black/50 cursor-pointer'>
                <BiLogoFacebook clas/>
              </li>
              <li className='bg-white p-2 rounded-full shadow-md shadow-black/50 cursor-pointer'>
                <AiOutlineTwitter clas/>
              </li>
            </ul>
          </article>
          <article>
            <h3 className='text-xl font-semibold'>Company</h3>
            <ul className='[&>li]:text-lg [&>li]:font-normal [&>li]:text-[#1d1d1db3] flex flex-col gap-3 mt-4'>
              <li>About Us</li>
              <li>Career</li>
              <li>How It Work</li>
            </ul>
          </article>
          <article>
            <h3 className='text-xl font-semibold'>Policy</h3>
            <ul className='[&>li]:text-lg [&>li]:font-normal [&>li]:text-[#1d1d1db3] flex flex-col gap-3 mt-4'>
              <li>FAQ</li>
              <li>Privacy</li>
              <li>Shipping</li>
            </ul>
          </article>
          <article>
            <h3 className='text-xl font-semibold'>Get In Touch</h3>
            <ul className='[&>li]:text-lg [&>li]:font-normal [&>li]:text-[#1d1d1db3] flex flex-col gap-3 mt-4'>
              <li>+62 896 7311 2766</li>
              <li>food@example.com</li>
            </ul>
          </article>
        </div>
        <div className='border-t border-black/70 p-10 flex justify-center'>
          <p>© 2022 Let’sFood. ALL RIGHT RESERVED.</p>
        </div>
      </footer>
    </section>
  )
}

import React from 'react'
