import PoweredBy from '@/components/poweredBy'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'IPFSR',
	description:
		'Enhance Your Data Security with IPFSR. The Pluggable IPFS Datastore for Reliable Backup and Recovery from Sia Renterd'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='dark'>
			{children}
			<PoweredBy />
		</html>
	)
}
