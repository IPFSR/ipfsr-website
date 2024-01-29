import type { Metadata } from 'next'
import './globals.css'

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
			{children}
		</html>
	)
}
