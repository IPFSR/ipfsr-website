import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import * as S from './styles'

const guides = [
	{
		id: 1,
		title: 'Setup your IPFS/Kubo node here ',
		link: 'https://github.com/IPFSR/kubo'
	},
	{
		id: 2,
		title: 'Use sia-ds to replace your fork of Ipfs/Kubo with',
		link: 'https://github.com/IPFSR/sia-ds'
	}
]

const HowToGuide = () => {
	return (
		<div className={S.Container}>
			{guides.map(g => (
				<div key={g.id} className='mb-6'>
					<h1>{g.title}</h1>
					<Link href={g.link} passHref>
						<Button variant='link' className={S.Link}>
							{g.link}
						</Button>
					</Link>
				</div>
			))}
		</div>
	)
}

export default HowToGuide
