'use client'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

import { Sora } from 'next/font/google'
import { usePathname } from 'next/navigation'
const inter = Sora({ subsets: ['latin'] })

const template = ({ children }: PropsWithChildren) => {
	const pathname = usePathname()
	return (
		<body
			className={cn(inter.className, 'min-h-screen', {
				'bg-gradient-to-b from-teal-400/15 from-10%': pathname === '/'
			})}>
			<Navbar />
			{children}
			<Footer />
		</body>
	)
}

export default template
