import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css'

function App() {

  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmFybWFuZGVuIiwiYSI6ImNtMXFoZ2p0YjAwNmYybHNlNTZidWhudXAifQ.VQTIsDgcUe0OKnLfRVX-Lw'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [10.36454, 55.18817],
      zoom: 8.46
    });

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <>
      <div id='map-container' ref={mapContainerRef}/>
    </>
  )
}

export default App