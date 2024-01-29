import { cn } from '@/lib/utils'

export const Container = cn('sticky top-[100vh] mt-20')

export const Wrapper = cn(
	'container mx-auto py-6 flex gap-4 flex-col justify-between',
	'md:flex-row'
)

export const Heading = cn('tracking-widest uppercase text-sm font-bold')
