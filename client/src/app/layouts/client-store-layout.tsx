import Side from '@/components/admin/sidebar/sidebar'
import { usePathname } from 'next/navigation'
import React from 'react'
import Navbar from '../client/navbar/navbar'
import Footer from '../client/footer/footer'

const ClientStoreLayout = ({children}:{children: React.ReactNode}) => {
  const pathname = usePathname()
  return !['/login', '/signup'].some(path => pathname.includes(path)) ? (
    <div className='flex flex-col min-h-[100vh]'>
      <Navbar />
      <main className='flex-1 min-h-[100vh]'>{children}</main>
      <Footer />
    </div>
  ) : children
}

export default ClientStoreLayout