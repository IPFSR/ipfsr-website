import { cn } from '@/lib/utils'

export const Container = cn(
	'container mx-auto flex flex-col gap-7',
	'md:flex-row md:mt-10 md:gap-10'
)

export const Aside = cn(
	'self-start sticky top-[76px] text-nowrap w-80 hidden',
	'md:block'
)

export const Select = cn('mt-2 md:hidden')

export const SidebarLinks = cn('p-4 cursor-pointer hover:bg-teal-400')

export const Section = cn('p-4')

export const Content = cn('bg-zinc-900 w-full rounded-3xl p-6')

export const ContentHeading = cn(
	'font-bold scroll-mt-24',
	'before:content-[""] before:inline-block before:w-4 before:h-4 before:bg-teal-400 before:mr-3 before:rounded-sm'
)

export const ContentSubHeading = cn(
	ContentHeading,
	'before:bg-transparent before:border-2 before:border-teal-400'
)

export const Link = cn('text-teal-400 p-0')

export const BulletList = cn('list-disc ml-4 space-y-4')
