'use client'

import { Separator } from '@/components/ui/separator'
import * as S from './styles'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { useEffect, useState } from 'react'

const sidebarLinks = ['Install', 'Design', 'Usage', 'Contribute', 'License']

const Sidebar = () => {
	const [selectedLink, setSelectedLink] = useState('')

	useEffect(() => {
		const element = document.getElementById(selectedLink)
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			})
		}
	}, [selectedLink])

	return (
		<div>
			<aside className={S.Aside}>
				<Separator />
				<section>
					{sidebarLinks.map(link => (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<div
							key={link}
							className={S.SidebarLinks}
							onClick={() => setSelectedLink(link.toLowerCase())}>
							<h3>{link.toUpperCase()}</h3>
						</div>
					))}
				</section>
				<Separator />
			</aside>

			<div className={S.Select}>
				<Select onValueChange={value => setSelectedLink(value.toLowerCase())}>
					<SelectTrigger className={S.Select}>
						<SelectValue placeholder='sia-ds' />
					</SelectTrigger>
					<SelectContent>
						{sidebarLinks.map(link => (
							<SelectItem value={link.toLowerCase()}>{link}</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}

export default Sidebar
