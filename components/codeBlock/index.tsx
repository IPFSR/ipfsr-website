'use client'

import React, { PropsWithChildren } from 'react'
import * as S from './styles'
import { useCopyToClipboard } from 'usehooks-ts'
import { Copy } from 'lucide-react'
import { Button } from '../ui/button'

const CodeBlock = ({ children }: PropsWithChildren) => {
	const [, copy] = useCopyToClipboard()
	return (
		<div className={S.Container}>
			<p className='overflow-auto'>{children}</p>{' '}
			<Button
				variant='ghost'
				size='icon'
				onClick={() => copy(children?.toString() ?? '')}>
				<Copy />
			</Button>
		</div>
	)
}

export default CodeBlock
