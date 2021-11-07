import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../../data/carList'

const RideSelector = ({pickupCoordinates,dropoffCoordinates}) => {
  const [rideDuration, setRideDuration] = useState(0)

  // Get ride duration from MAPBOX API
  // 1. pickupCoordinates
  // 2. dropoffCoordinates
  // Template Literal

  useEffect(() => {
    console.log(pickupCoordinates);
    console.log(dropoffCoordinates);
    rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZHJpbGV5OTciLCJhIjoiY2t2bHV1ZmR0OWZubjJ2cGd1bzFzcDE5ZSJ9.a_4a7NFyERf8XJxTGiKZsw`).then(res => res.json()).then( data => {
      console.log(data)
      if (data.routes.length > 0) {
        setRideDuration(data.routes[0].duration / 100);
      } else{
        setRideDuration(0);
      }
    })
  },[pickupCoordinates, dropoffCoordinates])

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        { carList.map((car, index)=>(
          <Car key={index}>
          <CarImage src={car.imgUrl} />
          <CarDetails>
            <Service>{car.service}</Service>
            <Time>5 minutes away</Time>
          </CarDetails>
          <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
        </Car>
        )) }
      </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
  flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div`
  text-gray-400 text-center text-xsm py-2 border-b
`

const CarList = tw.div`
  overflow-y-scroll
`

const Car = tw.div`
  flex p-4 items-center text-white
`

const CarImage = tw.img`
  h-14 mr-4
`

const CarDetails = tw.div`
  flex-1
`
const Service = tw.div`
  font-medium
`
const Time = tw.div`
  text-xs text-blue-500
`
const Price = tw.div`
  text-sm
`