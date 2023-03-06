import dynamic from 'next/dynamic'
import Navigation from './Navigation'

const Map = dynamic(() => import('./Map'), {
	loading: () => <>Cargando el mapa...</>,
	ssr: false,
})

export default function page() {
	return (
		<>
			<div className='bg-danger' style={{ height: '70px' }}>
				<div className='container-fluid d-flex h-100 align-items-center gap-3 text-white'>
					<h1 className='my-0 h2'>ESCEGIS</h1>
					<div
						className='my-0'
						style={{ borderLeft: '1px solid #fff', height: '50px' }}
					></div>
					<h3 className='my-0'>Plataforma privada de datos Georeferenciados</h3>
					<h5 className='my-0 ms-auto'>#Esta es solo una maqueta#</h5>
				</div>
			</div>
			<div style={{ width: '100vw', height: 'calc(100vh - 70px)' }}>
				<div className='h-100 position-relative'>
					<Map className='position-absolute' />
					{/*<div
						className='position-absolute d-flex h-100 align-items-center'
						style={{ zIndex: 999 }}
					>
						<Navigation />
	</div> */}
				</div>
			</div>
		</>
	)
}
