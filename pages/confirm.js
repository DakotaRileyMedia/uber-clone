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

  const [ pickupCoordinates, setPickupCoordinates ] = useState([0,0])
  const [ dropoffCoordinates, setDropoffCoordinates ] = useState([0,0])

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
          <BackButton id='back' src="https://lh3.googleusercontent.com/PhojwMaaroZ9bg20mbgRjQTNu3IVHGb_D1nfY4oy7-X-CpfcYojd_upozJz-Gz71LxpBaQFqqsORthofn4CNucDFIr5e08CUBZ6M758DUpxFBKDGaAqnOs299sWXumgznHUjqz1N_jmXh_I8zC4YyYKsbGPMA6YlYenGiLMuC_v4VmJndd3Bxty95By5S275Hu2kQMHdQl9N5HeNKimDiTXoVPAxoBcdDXza66cyU0N4xMkQLPsZM3fFYBoUHCsRPjAjwU-3Gg1rjY3o6L0SYI19CuN4zl178BDaSkAfeYyICcG4OQLrINRArv3hJdDx27SOEb8B7S_XwOX2YJR8iNd9JjtwfiDYWy_81cWONg5uDGvakf9PUF32rpaXupba-fDfVvCjQ5ncmfcfJReN-xgrqexx_Ogi8EJdHXzqpkvS9cE94i4U1OrYlyoeZ_haGPqR4CYNksGJQIQ997MUwO7MM9Bey2dQzMwx9bWZDtvjFFyLk4OCkFvPBKdMZfRWCMsGE9Vlsgp5zW7h3eBJ8s75HBquBht5HnYcRDHicO84r4Mqda-mFVzVVkDM33ajXf-ok2_htKpNwf4rjf9nSlAS96r5OXlYL53GEba-ScE_brH_-gpUIVWrOztIvAUk9dN75lJh1PF0yCG5rYTRAlAcDpFjQdcSEPMaOfcCX3QTWjo9CQ6Ow8lMQ8LhDMOVVNy-dEX7GNoA2I6ZArGlt_iLYQ=s50-no?authuser=0" />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector 
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
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
  bg-gray-800 cursor-pointer rounded-full fixed top-4 left-4 z-50
`

const BackButton = tw.img`
  h-12
`

const ConfirmButton = tw.div`
  bg-gray-800 text-white my-4 mx-4 py-4 text-center text-xl rounded-lg
`

const ConfirmButtonContainer = tw.div`
  border-t-2
`

const Wrapper = tw.div`
  flex h-screen flex-col bg-gray-900
`

const RideContainer = tw.div`
  flex flex-col flex-1 h-1/2
`
