import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './Components/Map'
import { useRouter } from 'next/dist/client/router'
import RideSelector from './Components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
  const router = useRouter()
  const { pickup, dropoff } = router.query

  console.log("Pickup", pickup)
  console.log("Dropoff", dropoff)

  const [ pickupCoordinates, setPickupCoordinates ] = useState()
  const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

  const getPickupCoordinates = (pickup)=> {
    fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiZHJpbGV5OTciLCJhIjoiY2t2bHV1ZmR0OWZubjJ2cGd1bzFzcDE5ZSJ9.a_4a7NFyERf8XJxTGiKZsw",
        limit: 1
      })  
    )
    .then(response => response.json())
    .then(data => {
      console.log("Pickup")
      setPickupCoordinates(data.features[0].center)
    })

  }

  const getDropoffCoordinates= (dropoff)=> {
    fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiZHJpbGV5OTciLCJhIjoiY2t2bHV1ZmR0OWZubjJ2cGd1bzFzcDE5ZSJ9.a_4a7NFyERf8XJxTGiKZsw",
        limit: 1
      })  
    )
    .then(response => response.json())
    .then(data => {
      console.log("Dropoff")
      setDropoffCoordinates(data.features[0].center)
    })
  }

  useEffect(()=>{
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff])

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton id='back' src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>
            Confirm Uber X
          </ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const ButtonContainer = tw.div`
  bg-white cursor-pointer rounded-full fixed top-4 left-4 z-50
`

const BackButton = tw.img`
  h-12
`

const ConfirmButton = tw.div`
  bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtonContainer = tw.div`
  border-t-2
`

const Wrapper = tw.div`
  flex h-screen flex-col
`

const RideContainer = tw.div`
  flex flex-col flex-1 h-1/2
`
