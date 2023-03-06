'use client'
import { MapContainer, TileLayer, GeoJSON, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'

export default function Map({ className }: { className: string }) {
	const [geoJSON1, setGeoJSON1] = useState<any>()
	const [geoJSON2, setGeoJSON2] = useState<any>()
	const [geoJSON3, setGeoJSON3] = useState<any>()
	const [geoJSON4, setGeoJSON4] = useState<any>()
	const [geoJSON5, setGeoJSON5] = useState<any>()

	const [geoJSON1In, setGeoJSON1In] = useState<boolean>(true)
	const [geoJSON2In, setGeoJSON2In] = useState<boolean>(true)
	const [geoJSON3In, setGeoJSON3In] = useState<boolean>(true)
	const [geoJSON4In, setGeoJSON4In] = useState<boolean>(true)
	const [geoJSON5In, setGeoJSON5In] = useState<boolean>(true)

	const [satelital, setSatelital] = useState<boolean>(true)

	useEffect(() => {
		require('bootstrap/js/dist/collapse')
		fetch('capas/depositotintaya_2.geojson')
			.then((result) => result.json())
			.then((data) => setGeoJSON1(data))
		fetch('capas/pozarelaves_3.geojson')
			.then((result) => result.json())
			.then((data) => setGeoJSON2(data))
		fetch('capas/tubera_Relaves_5.geojson')
			.then((result) => result.json())
			.then((data) => setGeoJSON3(data))
		fetch('capas/tuberia_lineaemergencia_4.geojson')
			.then((result) => result.json())
			.then((data) => setGeoJSON4(data))
		fetch('capas/tuberiaspigotA_1.geojson')
			.then((result) => result.json())
			.then((data) => setGeoJSON5(data))
	}, [])

	return (
		<>
			<MapContainer
				className={className}
				zoomControl={false}
				center={[-14.882172564125725, -71.31709941864443]}
				zoom={14}
				style={{ width: '100%', height: '100%' }}
			>
				<LayersControl>
					<LayersControl.BaseLayer checked name='OSM'>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
					</LayersControl.BaseLayer>
					<LayersControl.BaseLayer name='Google Satelital'>
						<TileLayer
							url='http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
							subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
						/>
					</LayersControl.BaseLayer>
				</LayersControl>

				{geoJSON1In && geoJSON1 && (
					<GeoJSON data={geoJSON1} style={{ color: 'red' }} />
				)}
				{geoJSON2In && geoJSON2 && (
					<GeoJSON data={geoJSON2} style={{ color: 'green' }} />
				)}
				{geoJSON3In && geoJSON3 && (
					<GeoJSON data={geoJSON3} style={{ color: 'yellow' }} />
				)}
				{geoJSON4In && geoJSON4 && (
					<GeoJSON data={geoJSON4} style={{ color: 'pink' }} />
				)}
				{geoJSON5In && geoJSON5 && (
					<GeoJSON data={geoJSON5} style={{ color: 'purple' }} />
				)}
			</MapContainer>
			<div
				className='position-absolute d-flex h-100 align-items-center'
				style={{ zIndex: 999 }}
			>
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
													checked={geoJSON1In}
													id='flexCheckDefault'
													onChange={(e) => setGeoJSON1In(e.target.checked)}
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
													checked={geoJSON2In}
													id='flexCheckDefault'
													onChange={(e) => setGeoJSON2In(e.target.checked)}
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
													checked={geoJSON3In}
													id='flexCheckDefault'
													onChange={(e) => setGeoJSON3In(e.target.checked)}
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
													checked={geoJSON4In}
													id='flexCheckDefault'
													onChange={(e) => setGeoJSON4In(e.target.checked)}
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
													checked={geoJSON5In}
													id='flexCheckDefault'
													onChange={(e) => setGeoJSON5In(e.target.checked)}
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
			</div>
		</>
	)
}
