import { cn } from '@/lib/utils'

export const Container = cn('container mx-auto')

export const Section = cn('mt-16', 'md:mt-32')

export const Hero = cn('text-center flex flex-col items-center gap-4', Section)

export const HerorHeading = cn('text-6xl font-bold max-w-2xl')

export const HeroSubheading = cn('max-w-md text-muted-foreground')

export const Highlight = cn('text-teal-400')

// Features
export const FeaturesHeading = cn('font-bold mb-4')

export const FeaturesCard = cn(
	'flex gap-6 flex-col last:mb-10',
	'md:flex-row md:last:mb-0'
)
