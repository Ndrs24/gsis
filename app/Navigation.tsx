export default function Navigation() {
	return (
		<div className='d-flex' style={{ height: '70vh' }}>
			{/** Nav Collapse */}
			<div
				className='collapse collapse-horizontal h-100 show'
				id='collapseWidthExample'
			>
				<div
					className='card card-body m-0 p-0 rounded-0 border-0 border-end h-100'
					style={{ width: '335px' }}
				>
					<div
						className='d-flex align-items-center justify-content-center bg-danger'
						style={{ height: '40px' }}
					>
						<h5 className='my-0 text-white'>CAPAS</h5>
					</div>
					<div className='container'>
						<form action='#' className='py-3'>
							<input
								type='text'
								className='form-control form-control-sm border'
								placeholder='Busca la capa que necesitas'
							/>
						</form>
						<div
							role='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseExample'
							aria-expanded='true'
							aria-controls='collapseExample'
						>
							<h5>Mina Tiyana</h5>
						</div>
						<div className='collapse show' id='collapseExample'>
							<div className='card card-body border-0 py-1'>
								<div className='w-100 d-flex'>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											value=''
											id='flexCheckDefault'
											checked
										/>
										<label
											className='form-check-label fw-semibold'
											htmlFor='flexCheckDefault'
										>
											Deposito Tintaya
										</label>
									</div>
								</div>
								<div className='w-100 d-flex'>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											value=''
											id='flexCheckDefault'
											checked
										/>
										<label
											className='form-check-label fw-semibold'
											htmlFor='flexCheckDefault'
										>
											Poza Relaves
										</label>
									</div>
								</div>
								<div className='w-100 d-flex'>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											value=''
											id='flexCheckDefault'
											checked
										/>
										<label
											className='form-check-label fw-semibold'
											htmlFor='flexCheckDefault'
										>
											Tuberia Relaves
										</label>
									</div>
								</div>
								<div className='w-100 d-flex'>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											value=''
											id='flexCheckDefault'
											checked
										/>
										<label
											className='form-check-label fw-semibold'
											htmlFor='flexCheckDefault'
										>
											Tuberia Linea Emergencia
										</label>
									</div>
								</div>
								<div className='w-100 d-flex'>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											value=''
											id='flexCheckDefault'
											checked
										/>
										<label
											className='form-check-label fw-semibold'
											htmlFor='flexCheckDefault'
										>
											Tuberia Spigot
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/** Nav Togle */}
			<div
				className='h-100 overflow-hidden bg-white'
				style={{ width: '45px', borderRadius: '0% 15px 15px 0%!important' }}
			>
				<button
					className='btn btn-danger w-100 rounded-0'
					data-bs-toggle='collapse'
					data-bs-target='#collapseWidthExample'
					aria-expanded='false'
					aria-controls='collapseWidthExample'
					style={{ height: '40px' }}
				>
					T
				</button>
			</div>
		</div>
	)
}
