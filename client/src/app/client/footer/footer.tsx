import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  const footerLinks = [
    {
      title: "Make Money",
      links: [
        "Sell on Amazon",
        "Sell on Amazon Business",
        "Associates Programme",
        "Fullfillment by Amazon",
        "Advertise Your Products",
      ],
    },
    {
      title: "Payment Methods",
      links: [
        "Amazon Payment Methods",
        "Amazon Platinum Mastercard",
        "Amazon Money Store",
        "Gift Cards",
        "Amazon Currency Convertor",
      ],
    },
    {
      title: "Support",
      links: [
        "Track Pacakges or View Orders",
        "Delivery Rates & Policies",
        "Amazon Prime",
        "Returns & Replacements",
      ],
    },
  ];
  return (
    <div className='bg-amazon-dark min-h-[12vh] flex items-center px-20 h-full text-white gap-10 py-16'>
      <div>
        <Link href='/'>
          <Image src='/amazon-logo-white.png' alt="Logo Image"  height={100} width={100} />
        </Link>
      </div>
      <div className='flex flex-1 justify-between px-20'>
        {
          footerLinks.map((section)=> {return <div className='flex flex-col gap-2' key={section.title}>
            <span className='text-base '>{section.title}</span>
            <ul className='text-base flex flex-col gap-1 font-light'>
              {
                section.links.map((link)=> {return <li className='cursor-pointer link-hover' key={link}>{link}</li>})
              }

            </ul>
             </div>})
        }

      </div>
    </div>
  )
}

export default Footer