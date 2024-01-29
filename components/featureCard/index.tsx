import { ReactNode } from 'react'
import * as S from './styles'
import { cn } from '@/lib/utils'

interface Props {
	icon: ReactNode
	description: string
	className?: string
}

const FeatureCard = ({ icon, description, className }: Props) => {
	return (
		<div className={cn(className, S.Container)}>
			<div className={S.Icon}>{icon}</div>
			<p className={S.Description}>{description}</p>
		</div>
	)
}

export default FeatureCard
