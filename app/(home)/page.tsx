import FeatureCard from '@/components/featureCard'
import { Button } from '@/components/ui/button'
import { ArchiveRestore, Replace, SquareStack } from 'lucide-react'
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
				<Link href='https://github.com/IPFSR' passHref>
					<Button>Check out in Github</Button>
				</Link>
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
		</div>
	)
}

export default Home
