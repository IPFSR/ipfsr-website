import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import Navlinks from './navlinks'
import * as S from './styles'

const Navbar = () => {
	return (
		<div className={S.Wrapper}>
			<div className={S.Container}>
				<Link href='/'>
					<h2>IPFSR</h2>
				</Link>
				<Navlinks />
				<DropdownMenu>
					<DropdownMenuTrigger className={S.DropdownTrigger}>
						<Menu />
					</DropdownMenuTrigger>
					<DropdownMenuContent className={S.DropdownContent}>
						<Link href='/how-to-use'>
							<DropdownMenuItem className={S.Link}>How to use</DropdownMenuItem>
						</Link>
						<Link href='/how-to-guide'>
							<DropdownMenuItem className={S.Link}>
								How to guide
							</DropdownMenuItem>
						</Link>
					</DropdownMenuContent>
				</DropdownMenu>{' '}
			</div>
		</div>
	)
}

export default Navbar
