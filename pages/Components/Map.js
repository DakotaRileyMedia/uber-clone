import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 
  'pk.eyJ1IjoiZHJpbGV5OTciLCJhIjoiY2t2bHV1ZmR0OWZubjJ2cGd1bzFzcDE5ZSJ9.a_4a7NFyERf8XJxTGiKZsw';

const Map = (props) => {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/navigation-night-v1',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates)
    }

    if (props.dropoffCoordinates){
      addToMap(map, props.dropoffCoordinates)
    }

    if (props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
        props.dropoffCoordinates, 
        props.pickupCoordinates
      ], {
        padding: 60
      })
    }

  }, [props.pickupCoordinates, props.dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  }

  return <Wrapper id = 'map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
  flex-1 h-1/2
`
