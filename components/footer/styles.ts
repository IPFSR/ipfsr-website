import { cn } from '@/lib/utils'

export const Container = cn('bg-zinc-950 sticky top-[100vh]')

export const Wrapper = cn(
	'container mx-auto py-6 flex gap-4 flex-col justify-between',
	'md:flex-row'
)

export const Heading = cn('tracking-widest uppercase')
