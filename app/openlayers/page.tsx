import dynamic from 'next/dynamic'
import Loading from './components/Loading'
import Navigation from './components/Navigation'

const Map = dynamic(() => import('./components/VisorOL'), {
	loading: () => <Loading />,
	ssr: false,
})

export default async function page() {
	return (
		<>
			<div style={{ height: '70px', backgroundColor: '#072145' }}>
				<div className='h-100 container-fluid'>
					<div
						className='row h-100 gx-0 row-cols-3 align-items-center'
						style={{ fontFamily: 'Calibri' }}
					>
						<div
							className='col d-flex align-items-center'
							style={{ gap: '5px' }}
						>
							<div>
								<img src='/Imagen3.gif' width={46} alt='' />
							</div>
							<div>
								<img src='/Imagen1.png' alt='' />
							</div>
						</div>
						<div className='col'>
							<h2 className='my-0 text-white text-center'>GEOPORTAL ESCEGIS</h2>
						</div>
						<div
							className='col d-flex align-items-center justify-content-end fw-bold'
							style={{ gap: '20px' }}
						>
							<div>
								<a
									href='#'
									className='text-decoration-none'
									style={{ color: '#efd14b' }}
								>
									Administrador
								</a>
							</div>
							<div>
								<img src='/avatar.png' width={40} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style={{ width: '100vw', height: 'calc(100vh - 70px)' }}>
				<div className='h-100 position-relative'>
					<div className='w-100 h-100 position-absolute'>
						<Map />
					</div>
					<div
						className='position-absolute d-flex h-100 align-items-center'
						style={{ zIndex: 999 }}
					>
						<Navigation />
					</div>
				</div>
			</div>
		</>
	)
}
