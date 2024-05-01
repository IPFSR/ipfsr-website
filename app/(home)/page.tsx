import FeatureCard from '@/components/featureCard'
import { Button } from '@/components/ui/button'
import { ArchiveRestore, Replace, SquareStack } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

const featureCardList = [
	{
		id: 1,
		icon: <Replace color='#2dd4bf' size={48} />,
		description: 'Replaces the Kubo flatfs data store with renterd'
	},
	{
		id: 2,
		icon: <SquareStack color='#2dd4bf' size={48} />,
		description: 'Automatic replication from Ipfs/Kubo to Renterd'
	},
	{
		id: 3,
		icon: <ArchiveRestore color='#2dd4bf' size={48} />,
		description: 'Rehydrate / Restore Ipfs/Kubo data from Renterd'
	}
]

const Home = () => {
	return (
		<div className={S.Container}>
			<section className={S.Hero}>
				<p className={S.HerorHeading}>
					Enhance Your Data Security with{' '}
					<span className={S.Highlight}>IPFSR</span>
				</p>
				<h3 className={S.HeroSubheading}>
					The Pluggable IPFS Datastore for Reliable Backup and Recovery from Sia
					Renterd
				</h3>
				<div className='flex gap-2'>
					<Link href='https://github.com/IPFSR' passHref>
						<Button>View Github</Button>
					</Link>
				</div>
			</section>

			<section className={S.Section}>
				<h1 className={S.FeaturesHeading}>Features</h1>
				<div className={S.FeaturesCard}>
					{featureCardList.map(card => (
						<FeatureCard
							key={card.id}
							icon={card.icon}
							description={card.description}
						/>
					))}
				</div>
			</section>

			<div className='container my-36 mx-auto md:px-6'>
				<section className='mb-32 text-center'>
					<div className='grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12'>
						<div className='mb-12 lg:mb-0 flex flex-col items-center'>
							<Image
								src='/ipfsr-logo.png'
								alt='IPFSR Logo'
								width={60}
								height={60}
								className='rounded-full mb-4'
							/>
							<h5 className='mb-4 text-lg font-bold'>
								IPFS integrated with Sia Renterd (IPFSR)
							</h5>
							<Link href='https://github.com/IPFSR/kubo' target='_blank'>
								<Button>Visit Link</Button>
							</Link>
						</div>

						<div className='mb-12 lg:mb-0 flex flex-col items-center'>
							<Image
								src='/ipfs-desktop.png'
								alt='IPFSR Logo'
								width={150}
								height={60}
								className='mb-4'
							/>
							<h5 className='mb-4 text-lg font-bold'>
								IPFS Desktop App backed by IPFSR Kubo Sia Renterd
							</h5>
							<Link
								href='https://github.com/IPFSR/ipfs-desktop'
								target='_blank'>
								<Button>Visit Link</Button>
							</Link>
						</div>

						<div className='mb-12 lg:mb-0 flex flex-col items-center'>
							<Image
								src='/go-ds.png'
								alt='IPFSR Logo'
								width={60}
								height={60}
								className='mb-4'
							/>
							<h5 className='mb-4 text-lg font-bold'>
								GO datastore leveldb plugin for IPFSR Kubo
							</h5>
							<Link
								href='https://github.com/IPFSR/go-ds-leveldb-sia '
								target='_blank'>
								<Button>Visit Link</Button>
							</Link>
						</div>

						<div className='mb-12 lg:mb-0 flex flex-col items-center'>
							<Image
								src='/sia-ds.png'
								alt='IPFSR Logo'
								width={60}
								height={60}
								className='mb-4'
							/>
							<h5 className='mb-4 text-lg font-bold'>
								GO datastore plugin for IPFSR Kubo
							</h5>
							<Link href='https://github.com/IPFSR' target='_blank'>
								<Button>Visit Link</Button>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Home
