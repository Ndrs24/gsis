import { useState } from 'react'

export default function Layer({ keyref, name }: { keyref: any; name: string }) {
	const [active, setActive] = useState<boolean>(false)

	return (
		<div className='w-100 d-flex'>
			<div className='form-check'>
				<input
					className='form-check-input'
					type='checkbox'
					checked={active}
					id={`layer-${keyref}`}
					onChange={(e) => setActive(e.target.checked)}
				/>
				<label
					className='form-check-label fw-semibold'
					htmlFor={`layer-${keyref}`}
					style={{ cursor: 'pointer' }}
				>
					{name}
				</label>
			</div>
			{/**
       * 
       * <Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				centered
				scrollable
			>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Table striped bordered hover style={{ maxWidth: '100%' }}>
						<thead>
							<tr>
								<th>Propiedad</th>
								<th>Valor</th>
							</tr>
						</thead>
						<tbody>
							{infoModal &&
								infoModal.map((info: any, i: any) => {
									return (
										<tr key={i}>
											<th>{info.name}</th>
											<td>{info.value}</td>
										</tr>
									)
								})}
						</tbody>
					</Table>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
       */}
		</div>
	)
}
