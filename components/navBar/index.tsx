import { Dropbox } from 'iconsax-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-[99] bg-white text-black p-4 flex justify-center text-[20px] shadow-lg'>
      <div className='container flex justify-between max-w-[1300px] items-center lg:py-3'>
        <div className='flex flex-row items-center gap-1'>
          <Dropbox size="40"color="#66BB6A"/>
          <p className='text-[24px] text-[#304959]'>Tech<span className='font-bold'>Consulting</span></p>
        </div>
        <ul className='flex space-x-4 text-[18px] justify-center items-center'>
          <div className='hidden lg:flex space-x-4 '>
            <li><Link href='#hero-section'>Inicio</Link></li>
            <li><Link href='#services-section'>Servicios</Link></li>
            <li><Link href='#benefits-section'>Beneficios</Link></li>
          </div>
          <li className='text-white font-bold bg-green-400 px-3 py-1 rounded-tl-lg rounded-br-lg'>
            <Link href='#contact-detail'>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}