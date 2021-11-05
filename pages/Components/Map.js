import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 
  'pk.eyJ1IjoiZHJpbGV5OTciLCJhIjoiY2t2bHV1ZmR0OWZubjJ2cGd1bzFzcDE5ZSJ9.a_4a7NFyERf8XJxTGiKZsw';

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })
  })

  return <Wrapper id = 'map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
  flex-1
`
