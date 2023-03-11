'use client'
import React, { useEffect, useRef } from 'react'
import 'ol/ol.css'
import Map from 'ol/Map'
import XYZ from 'ol/source/XYZ'
import TileLayer from 'ol/layer/Tile'
import View from 'ol/View'
// import TileWMS from 'ol/source/TileWMS'
import ImageLayer from 'ol/layer/Image'
import ImageWMS from 'ol/source/ImageWMS'

/* import Projection from 'ol/proj/Projection'
import proj4 from 'proj4'
import { register } from 'ol/proj/proj4'
proj4.defs(
	'EPSG:32719',
	'+proj=utm +zone=19 +south +datum=WGS84 +units=m +no_defs'
)
const epsg32719 = new Projection({
	code: 'EPSG:32719',
	extent: [-8000000, 0, -712631, 9329000],
	units: 'm',
})
register(proj4) */

let ya = false

export default function Mapxd() {
	const mapRef = useRef(null)

	useEffect(() => {
		if (ya) return
		if (!mapRef.current) return

		ya = true
		// eslint-disable-next-line no-unused-vars
		const map = new Map({
			target: mapRef.current,
			controls: [],
			layers: [
				new TileLayer({
					source: new XYZ({
						url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', // URL del servicio de mapas de Google
						maxZoom: 20, // zoom máximo permitido
						attributions: [
							// atribución del proveedor de capas
							'© Google',
							'<a href="https://www.google.com/intl/en_us/help/terms_maps/">Terms of Use</a>',
						],
					}),
				}),
				new TileLayer({
					visible: false,
					source: new XYZ({
						url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', // URL del servicio de mapas de Google
						maxZoom: 20, // zoom máximo permitido
						attributions: [
							// atribución del proveedor de capas
							'© Google',
							'<a href="https://www.google.com/intl/en_us/help/terms_maps/">Terms of Use</a>',
						],
					}),
				}),
				new ImageLayer({
					source: new ImageWMS({
						url: 'https://espacialg.geoperu.gob.pe/geoserver/geoperu/wms?service=WMS',
						params: { LAYERS: 'peru_departamento_' },
						serverType: 'mapserver',
					}),
				}),
			],
			view: new View({
				projection: 'EPSG:4326',
				center: [-74.89209869984634, -9.386223367218786],
				zoom: 5.5,
				minZoom: 5.5,
			}),
		})
	}, [])

	return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
}
