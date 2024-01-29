import React, { PropsWithChildren } from 'react'
import Sidebar from './sidebar'
import * as S from './styles'

const layout = ({ children }: PropsWithChildren) => {
	return (
		<div className={S.Container}>
			<Sidebar />
			{children}
		</div>
	)
}

export default layout
