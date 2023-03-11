import {
	faFolderClosed,
	faFolderOpen,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import Layer from './Layer'

export default function Map({ name }: { name: string }) {
	const [openMap, setOpenMap] = useState(false)

	return (
		<>
			<div
				role={'button'}
				onClick={() => setOpenMap(!openMap)}
				aria-controls='collapse-map'
				aria-expanded={openMap}
				className='w-100 border'
				style={{ height: '25px' }}
			>
				<h6>
					<FontAwesomeIcon icon={openMap ? faFolderOpen : faFolderClosed} />{' '}
					{name}
				</h6>
			</div>
			<Collapse in={openMap}>
				<div id='collapse-map'>
					<div className='card card-body border-0 py-1'>
						<Layer keyref={2} name='Deposito Tintaya' />
						<Layer keyref={3} name='Poza Relaves' />
						<Layer keyref={4} name='Tuberia Relaves' />
						<Layer keyref={5} name='Tuberia Linea Emergencia' />
						<Layer keyref={6} name='Tuberia Spigot' />
					</div>
				</div>
			</Collapse>
		</>
	)
}
