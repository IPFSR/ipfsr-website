import { cn } from '@/lib/utils'

export const Container = cn('container mx-auto flex items-center py-6')

export const Wrapper = cn(
	'self-start sticky top-0 z-10 bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30',
	'md:justify-start'
)

export const NavLinks = cn('ml-10 gap-10 hidden', 'md:flex')

export const Link = cn('hover:text-teal-400 tracking-widest uppercase text-sm')

export const DropdownTrigger = cn('block md:hidden')

export const DropdownContent = cn('w-dvw border-0 py-4 px-6 bg-[#0F0F0F]')
