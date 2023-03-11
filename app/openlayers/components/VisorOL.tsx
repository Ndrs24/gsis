'use client'
import { useEffect, useRef } from 'react'

import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import ImageLayer from 'ol/layer/Image'
import XYZ from 'ol/source/XYZ'
import ImageWMS from 'ol/source/ImageWMS'
import Control from 'ol/control/Control'

// import TileWMS from 'ol/source/TileWMS'

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
		ya = true

		if (!mapRef.current) return

		const googleLayer = new TileLayer({
			source: new XYZ({
				url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', // URL del servicio de mapas de Google
				maxZoom: 20, // zoom máximo permitido
				attributions: [
					// atribución del proveedor de capas
					'© Google',
					'<a href="https://www.google.com/intl/en_us/help/terms_maps/">Terms of Use</a>',
				],
			}),
		})

		const topoLayer = new TileLayer({
			visible: true,
			source: new XYZ({
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', // URL del servicio de mapas de Google
				maxZoom: 20, // zoom máximo permitido
			}),
		})

		const mapsPeru = new ImageLayer({
			source: new ImageWMS({
				url: 'https://espacialg.geoperu.gob.pe/geoserver/geoperu/wms?service=WMS',
				params: { LAYERS: 'peru_departamento_' },
				serverType: 'mapserver',
			}),
		})

		class BtnGoogleSatelital extends Control {
			constructor() {
				const element = document.createElement('button')
				element.style.marginTop = '20px'
				element.style.right = '30px'
				element.textContent = 'Google Satelital'
				element.className = 'btn btn-primary position-absolute'

				super({
					element,
				})

				element.addEventListener(
					'click',
					this.handleRotateNorth.bind(this),
					false
				)
			}

			handleRotateNorth() {
				map.removeLayer(mapsPeru)
				map.removeLayer(topoLayer)
				map.addLayer(googleLayer)
				map.addLayer(mapsPeru)
				console.log(map.getLayers())
			}
		}

		class BtnOMS extends Control {
			constructor() {
				const element = document.createElement('button')
				element.style.marginTop = '20px'
				element.style.right = '180px'
				element.textContent = 'OMS Map'
				element.className = 'btn btn-primary position-absolute'

				super({
					element,
				})

				element.addEventListener(
					'click',
					this.handleRotateNorth.bind(this),
					false
				)
			}

			handleRotateNorth() {
				map.removeLayer(mapsPeru)
				map.removeLayer(googleLayer)
				map.addLayer(topoLayer)
				map.addLayer(mapsPeru)
				console.log(map.getLayers())
			}
		}

		// eslint-disable-next-line no-unused-vars
		const map = new Map({
			target: mapRef.current,
			controls: [new BtnGoogleSatelital(), new BtnOMS()],
			layers: [googleLayer, mapsPeru],
			view: new View({
				projection: 'EPSG:4326',
				center: [-74.89209869984634, -9.386223367218786],
				zoom: 5.5,
				minZoom: 5.5,
			}),
		})

		/* // Agregar evento de cambio de capa base
		layerSwitcher.on('change', (event) => {
			// Ocultar la capa anterior de mapa base
			map.getLayers().forEach((layer) => {
				if (layer.get('title') === event.oldValue.get('title')) {
					layer.setVisible(false)
				}
			})

			// Mostrar la nueva capa de mapa base
			map.getLayers().forEach((layer) => {
				if (layer.get('title') === event.layer.get('title')) {
					layer.setVisible(true)
				}
			})
		}) */
	})

	return (
		<>
			<div ref={mapRef} style={{ height: '100%', width: '100%' }} />{' '}
			<div id='layerSwitcher'></div>
		</>
	)
}
