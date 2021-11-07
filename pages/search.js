import { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Search = () => {

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton id='back' src="https://lh3.googleusercontent.com/PhojwMaaroZ9bg20mbgRjQTNu3IVHGb_D1nfY4oy7-X-CpfcYojd_upozJz-Gz71LxpBaQFqqsORthofn4CNucDFIr5e08CUBZ6M758DUpxFBKDGaAqnOs299sWXumgznHUjqz1N_jmXh_I8zC4YyYKsbGPMA6YlYenGiLMuC_v4VmJndd3Bxty95By5S275Hu2kQMHdQl9N5HeNKimDiTXoVPAxoBcdDXza66cyU0N4xMkQLPsZM3fFYBoUHCsRPjAjwU-3Gg1rjY3o6L0SYI19CuN4zl178BDaSkAfeYyICcG4OQLrINRArv3hJdDx27SOEb8B7S_XwOX2YJR8iNd9JjtwfiDYWy_81cWONg5uDGvakf9PUF32rpaXupba-fDfVvCjQ5ncmfcfJReN-xgrqexx_Ogi8EJdHXzqpkvS9cE94i4U1OrYlyoeZ_haGPqR4CYNksGJQIQ997MUwO7MM9Bey2dQzMwx9bWZDtvjFFyLk4OCkFvPBKdMZfRWCMsGE9Vlsgp5zW7h3eBJ8s75HBquBht5HnYcRDHicO84r4Mqda-mFVzVVkDM33ajXf-ok2_htKpNwf4rjf9nSlAS96r5OXlYL53GEba-ScE_brH_-gpUIVWrOztIvAUk9dN75lJh1PF0yCG5rYTRAlAcDpFjQdcSEPMaOfcCX3QTWjo9CQ6Ow8lMQ8LhDMOVVNy-dEX7GNoA2I6ZArGlt_iLYQ=s50-no?authuser=0" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://lh3.googleusercontent.com/a55L1XQmRXG2cb2F121U7nIdqEIwi2uBRNL1pxfNlGEGFrVBY11GXGC7Z_QgglKagu-2ON5yRfJlFX-Hfb7dfHByKM4CpZjbBRQTaqELCpTIOCEO-NfdbJLplw7E1fUkTOfuTuaSac_K6r-4VjySq5crLuF9aRr9l1V5JV_-Z0wYjxGQmSFau8I_RHbh2o_LS3df4EFNqvJLCSZG9DBADBxbMpZwyv-ElZ3iXTRoTyoCIj8OVFZwK_Wy_IHfUV4mt7EwdO9hfBS206996QbkQp_RurG3d2qCLKXHgTIakx28ZKuCDERkTroMd9FeHVjF2VPqSI9-4KdYYPDDoue5TUTPsp6aZge-DDYwE0eGWjeU0-8YDCNbJQt8kMwpUgSrY0rhmCLh-0ZEX6terNmAJfkKhbNmVQ8HimRvyqCic_HEiEBKJwUynEPwP-wxtw_3C_xiSR59BoSzsgmjmnftGKnQgyXknGy7nvp2GggJEgfKcRZGupPYpDRkMXNf8AHqPwx2sy6fDc-LlInIznBl6XdbvKNa_aYGfdG6s3sgI2HbCMjudqQWl8oF4-AOPBNXJnTCHYW_nTv21CikCj5cUQHBtLVq9ORpPj_SWQ8LHfzfVMwxgzr1VKzp8zGJ4rXfVfZekuUR5SHwVec9JWY2sUwxnZ0PQfyrS0XeJbWLuHLNevR009Du682eQ08HwjiGkBTCmTumqlCqvowZ4dmLba-Pyg=s50-no?authuser=0" />
        </FromToIcons>
        <InputBoxes>
          <Input 
            placeholder='Enter pickup location' 
            value={pickup}
            onChange={(e)=> setPickup(e.target.value)}
            />
          <Input 
            placeholder='Where to?'
            value={dropoff}
            onChange={(e)=> setDropoff(e.target.value)}
            />
        </InputBoxes>
        <PlusIcon src="https://lh3.googleusercontent.com/wXKgx8c2je-BpfsN329syo4Lb2WBc-TowpWekqbC7ncsfZNurEJChjha3aOAYLG8IxbJVSQmqafBjnRwIIuZxdoIi7uX8ugDCLuUqO1VS6lrXTQ6MSXMVDv3Tt86CUUOLJYCZwHwHFAMg75Go7UXaoYHzeWJBJj6Bb07p2XU6IyG4Euxl_lIjvAyvLnuKISSYmxJHior8pon1iToxqjohcCm6eLMQTBufwXWFHvCZ41obTSNHWg7XWb878sceMF2oe-QXv0iGdRG6kHUA_LmDXfulgv2aswWd-CUk7Obonsx7jfQ2H1l2LQnNmTWIE7smPyq1aSlOnX9mMPJGaI9vU3rwSPge_4cjGvVkJvX5-cp171ivYEOMwUZb28eXiu4aE7PkN2p5hW39G4HC7mflC5x1KcfoENYVRm_-eaBn78q2yJmIIfypt_gTvghvK69Z-3pbmmOCCCxS-nQvwUEcoaUybuqrkWpGeYqPBfYqQaP4zHOtaJwiS1RVxRDcGrxPokvfAwFJsSG3F1kx7b1FoS5AmStVhB3B-nuxuuSEjFhCi-HqUiklftd2xLxAJu1hj8pu6ZDF2DQ4IsPM6fEykPF_pHuz4D0Xar6P2YUBCHWqQS2tV9rQMlewvsMh0Hbord7bjh2oA2tB9XcxpESa6GlRsW1OvWtNCIAJ9rkIOIYcPYN4Ox9gI3LbTi4fEjW5JfeoNMUt0Y6EWGBw6x_DbtNwA=s50-no?authuser=0" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Save Places
      </SavedPlaces>
      <Link href={{
        pathname: "/confirm",
        query: {
          pickup: pickup,
          dropoff: dropoff
        }
      }}>
        <ConfirmButtonContainer>
          Confirm Locations
        </ConfirmButtonContainer>
      </Link>
    </Wrapper>
  )
}

export default Search

const ButtonContainer = tw.div`
  bg-gray-800 px-4 cursor-pointer
`
const Wrapper = tw.div`
  bg-gray-900 h-screen
`

const BackButton = tw.img`
  h-12
`

const InputContainer = tw.div`
 bg-gray-800 flex items-center px-4 mb-2

`

const FromToIcons = tw.div`
  w-10 flex flex-col mr-2 items-center
`

const Circle = tw.img`
  h-2.5
`

const Line = tw.img`
  h-10
`

const Square = tw.img`
  h-3
`

const InputBoxes = tw.div`
 flex flex-col flex-1 
`

const Input = tw.input`
  h-10 bg-gray-700 my-2 rounded-2 p-2 outline-none border-none text-white rounded-lg
`
const PlusIcon = tw.img`
  w-10  h-10 bg-gray-700 rounded-full ml-3
`

const SavedPlaces = tw.div`
  flex items-center bg-gray-800 px-4 py-2 text-white
`

const StarIcon = tw.img`
  bg-gray-700 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmButtonContainer = tw.div`
  bg-gray-700 text-xl text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer rounded-lg
`
