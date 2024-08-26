import Image from 'next/image'
import Link from 'next/link'

const PoweredBy = () => (
	<Link
		href={'https://www.ardata.tech/'}
		target='_blank'
		style={{
			textDecoration: 'none',
			display: 'flex',
			alignItems: 'center',
			gap: 6,
			position: 'fixed',
			bottom: 14,
			right: 14,
			borderRadius: 6,
			background: 'white',
			padding: '6px 12px',
			boxShadow: '8px 8px 8px -10px rgba(0,0,0,0.19)',
			zIndex: 999
		}}>
		<p
			style={{
				padding: 0,
				margin: 0,
				fontSize: 14,
				color: 'black',
				fontWeight: 500
			}}>
			Powered By
		</p>
		<Image
			src='/ar-tech.png'
			alt='AR Data Tech Logo'
			width={82}
			height={25}
			style={{ marginTop: -6 }}
		/>
	</Link>
)

export default PoweredBy
