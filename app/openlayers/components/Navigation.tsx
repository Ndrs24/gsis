'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCaretLeft,
	faCaretRight,
	faLayerGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap'
import Proyect from './Proyect'

export default function Navigation() {
	const [navShow, setNavShow] = useState(false)
	return (
		<div className='d-flex' style={{ height: '70vh' }}>
			{/** Nav Collapse */}
			<Collapse in={navShow} dimension={'width'}>
				<div id='collapse-nav' style={{ fontFamily: 'Calibri' }}>
					<div
						className='card card-body m-0 p-0 rounded-0 border-0 border-end h-100'
						style={{ width: '335px' }}
					>
						<div
							className='d-flex align-items-center justify-content-center'
							style={{ height: '40px', backgroundColor: '#015a95' }}
						>
							<h5 className='my-0 text-white'>MENÚ ESTRUCTURAL</h5>
						</div>
						<div className='container'>
							<form action='#' className='py-3'>
								<input
									type='text'
									className='form-control form-control-sm border'
									placeholder='Busca la capa que necesitas'
								/>
							</form>
							<Proyect />
						</div>
					</div>
				</div>
			</Collapse>
			{/** Nav Togle */}
			<div
				className='h-100 overflow-hidden bg-white'
				style={{ width: '45px', borderRadius: '0% 15px 15px 0%!important' }}
			>
				<Button
					onClick={() => setNavShow(!navShow)}
					aria-controls='collasetNavShowpse-nav'
					aria-expanded={navShow}
					className='w-100 rounded-0'
					style={{ height: '40px', border: 0, backgroundColor: '#015a95' }}
				>
					<FontAwesomeIcon
						icon={navShow ? faCaretLeft : faCaretRight}
						size={'xl'}
					/>
				</Button>
				<div className='w-100 d-flex flex-column justify-content-center'>
					<div
						className='btn btn-light px-0 text-center'
						onClick={() => setNavShow(true)}
						aria-controls='collasetNavShowpse-nav'
						aria-expanded={navShow}
					>
						<FontAwesomeIcon icon={faLayerGroup} size={'xl'} />
					</div>
				</div>
			</div>
		</div>
	)
}
