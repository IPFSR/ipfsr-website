import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

const inter = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'IPFSR',
	description:
		'Enhance Your Data Security with IPFSR. The Premier Pluggable IPFS Datasto e for Reliable Backup and Recovery of IPFS Data'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='dark'>
			<body className={cn(inter.className, 'min-h-screen')}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
