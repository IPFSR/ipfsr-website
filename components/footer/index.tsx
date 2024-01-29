import * as S from './styles'

const Footer = () => {
	return (
		<div className={S.Container}>
			<div className={S.Wrapper}>
				<div>
					<p className={S.Heading}>Contact</p>
					<p className='text-sm'>areyesonl@gmail.com</p>
				</div>
				<div className='text-sm'>
					Project of Alvin Reyes, ARData.Tech
					<br />
					@Contributed to Sia Foundation
				</div>
			</div>
		</div>
	)
}

export default Footer
