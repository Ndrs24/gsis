import {
	faFolderClosed,
	faFolderOpen,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import Map from './Map'

export default function Category({ name }: { name: string }) {
	const [openCategory, setOpenCategory] = useState(false)
	return (
		<div className='card card-body border-0 py-1'>
			<div
				role={'button'}
				onClick={() => setOpenCategory(!openCategory)}
				aria-controls='collapse-category'
				aria-expanded={openCategory}
				className='w-100 border'
				style={{ height: '25px' }}
			>
				<h6>
					<FontAwesomeIcon
						icon={openCategory ? faFolderOpen : faFolderClosed}
					/>{' '}
					{name}
				</h6>
			</div>
			<Collapse in={openCategory}>
				<div id='collapse-category'>
					<div className='card card-body border-0 py-1'>
						<Map name='Componentes aprobados' />
					</div>
				</div>
			</Collapse>
		</div>
	)
}
