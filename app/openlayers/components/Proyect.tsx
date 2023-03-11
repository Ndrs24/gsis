import {
	faFolderClosed,
	faFolderOpen,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import Category from './Category'

export default function Proyect() {
	const [openProyect, setOpenProyect] = useState(false)

	return (
		<>
			<div
				role={'button'}
				onClick={() => setOpenProyect(!openProyect)}
				aria-controls='collapse-proyect'
				aria-expanded={openProyect}
				className='w-100 border'
				style={{ height: '25px' }}
			>
				<h6>
					<FontAwesomeIcon icon={openProyect ? faFolderOpen : faFolderClosed} />{' '}
					Proyecto Antapacay
				</h6>
			</div>
			<Collapse in={openProyect}>
				<div id='collapse-proyect'>
					<Category name='1. Licencias' />
					<Category name='2. Conceciones mineras' />
				</div>
			</Collapse>
		</>
	)
}
