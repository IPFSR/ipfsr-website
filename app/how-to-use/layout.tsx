import React, { PropsWithChildren } from 'react'
import * as S from './styles'
import Sidebar from './sidebar'

const layout = ({ children }: PropsWithChildren) => {
	return (
		<div className={S.Container}>
			<Sidebar />
			{children}
		</div>
	)
}

export default layout
