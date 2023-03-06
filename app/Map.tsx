'use client'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'

export default function Map({ className }: { className: string }) {
	const [geoJSON1, setGeoJSON1] = useState<any>()
	const [geoJSON2, setGeoJSON2] = useState<any>()
	const [geoJSON3, setGeoJSON3] = useState<any>()
	const [geoJSON4, setGeoJSON4] = useState<any>()
	const [geoJSON5, setGeoJSON5] = useState<any>()

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
		<MapContainer
			className={className}
			zoomControl={false}
			center={[-14.882172564125725, -71.31709941864443]}
			zoom={14}
			style={{ width: '100%', height: '100%' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>

			{geoJSON1 && <GeoJSON data={geoJSON1} style={{ color: 'red' }} />}
			{geoJSON2 && <GeoJSON data={geoJSON2} style={{ color: 'green' }} />}
			{geoJSON3 && <GeoJSON data={geoJSON3} style={{ color: 'yellow' }} />}
			{geoJSON4 && <GeoJSON data={geoJSON4} style={{ color: 'pink' }} />}
			{geoJSON5 && <GeoJSON data={geoJSON5} style={{ color: 'purple' }} />}
		</MapContainer>
	)
}
