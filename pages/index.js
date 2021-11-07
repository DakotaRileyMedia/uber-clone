import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './Components/Map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from '@firebase/auth'
import { useRouter } from 'next/router'
import login from './login'


export default function Home() {

const [user, setUser] = useState(null)
const router =useRouter()

useEffect(() => {
  return onAuthStateChanged(auth, user => {
    if (user) {
      setUser({
        name: user.displayName,
        photoUrl: user.photoURL,
      })
    } else {
      setUser(null)
      router.push('/login')
    }
  })
},[])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://lh3.googleusercontent.com/tiDQiuEWP1o-7-rv_98dsmwrcy8fgeSa-8VNqz9cj9MQrGGoE0aKOt2tR84zPDBAkQ2uXrXmsnS_kVoWSdgSDlvQDlBblA2VJPqab2vyNv57ZSSotDJF72KkwoimP_LH43uknAb81qoYXOAjcYypIyPpbkMCT1vCegMZjT8fQHLniau--6e_Pmm_SZT0Rz9z9TH4REqRQ6LXwiRz5S_VpHgt_eon4OL-WEMuoMUlnJiJgKpQAL3yK3ADIGMogAOKvncNWTqbDPamVCNcIRBO3OlblBi9Xf1lTgEGJrnGtOEcu2U5bZmJh7r27H90ieVzbZJVD8vKAMZtJUnHLO83xo8lYtWvUHfIgdjK8oP30U_ktWJeWfLjR8IVfAKrOpq_y5h3MASbWVcx00N-FRMMKjwa55ZKCDRmT7J0q-tQjrpsZonmBwcUZDEWoyKbSLrzFo_5Hau7HLqQg6wyO5DHtILfum0hrl5OGxkzDVQpSkCj3CebN_0kJstlVgBnOaG2mTveiLr_OkpVSe8sJM3ZARZ4oQ2MQVMm-dh4y0a5WiQxLvswhK9UHNK14HVQ63FPdyRIHYLngWrhC06qskkXGGthCRPLLao7HzSI-n7X1XGm_NKraeoHZWmF34Yhr3M7aVHhgM9WpWiTmXZ7q_f8H5f5wtNWX-tnELwjNtvfG_REdH7IkgywkKDbOR577GSX6atR7Mkmr0BmDCarwRfPnJeiUw=w866-h650-no?authuser=0" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src= {user && user.photoUrl} onClick={() => signOut(auth)}/>
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
              2-Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
          
        </ActionButtons>
        <InputButton>
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen bg-gray-900
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center
`


const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 w-20 text-sm text-white
`

const UserImage = tw.img`
  h-12 w-12 rounded-full border-grey-200 p-px cursor-pointer
`

const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.div`
  flex bg-gray-800 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl cursor-pointer text-white
`

const ActionButtonImage = tw.img`
  h-3/5
`

const InputButton = tw.div`
  h-20 bg-gray-800 text-2xl p-4 flex items-center mt-8 text-white rounded-lg
`
