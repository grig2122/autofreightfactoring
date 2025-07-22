import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <Image 
        src="/assets/logo.png" 
        alt="AutoFreightFactoring Logo" 
        width={40} 
        height={40} 
        className="h-10 w-10" 
        priority
      />
      <span className="text-lg font-bold text-gray-900">
        AutoFreightFactoring
      </span>
    </Link>
  )
}