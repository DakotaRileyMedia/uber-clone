import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'

const Login = () => {
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, user=> {
      if(user) {
        router.push('/')
      }
    })
  },[])

  return (
    <Wrapper>
      <UberLogo src= "https://lh3.googleusercontent.com/fzP4gId75vVXhqkgFJDnDjyBtqJc2Y_9dn5iAxCfyWUmlKr_xP7k-5Pi9hyVAexBD3MdexxdAk7ISf0bFcRuTlNoKFVbFwwQ5v_ROYMjR1yfF2Mm0zh1LSVchTMrR-zxXuIaBjtdajQ6XcKOtJb975HIUm14P-gu7c5FexTiI97CsbODu6nqZrCswaY02G-17emOkfqu_KXepr0zDu_I4UfRfdEDol_Y_s4SIKac8sJtOZAimIaI4oP_EcqRg6kr2FFnASHhXAyt4cQQLgg0KKRI-3dFb5oYrdIY35mxXdRfilxe-5hF09NFIxl3aqc_WQXUbqYrY62aPcYeH68dPYjhrxIsnHhGrdvFIs34sgeH2czwj45ZMI4Z27xvwUssbJI0--Lh7-Ms0AnMobQb-C1BysEFr9EuRjMVPl-UYAdJi_ORCMxxSl7XojiJEMZxaQE_iu63zMtJhUvT8OtxvNA6RjExP38pLBQPcw-D4EJrJe5jGgOIs_k3KWyJW3L1RYuo6ZtnPbcBp4KrXNRgBKz5UivhRsdIrTSCbHEjLTLCNscunSQBNXNfCAgns4pdDBbzgei_j5KQeTxr-WtaVkpLhY3iFtY_s9M91-WfI5vDa1x0Ht7gDfPeBc4qiUpZr1cX2dbIYnuT75-LLeWZ752uLjYTEO3uaRmqnoOVAQK_0tLYTQztB3M3Epw78wemFYWmEvXZd-WxMcJllUje9ynjuA=w1048-h372-no?authuser=0" />
      <Title>Log in to access your account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
  flex flex-col h-screen w-screen bg-gray-900 p-4
`

const UberLogo = tw.img`
  h-7 w-auto object-contain self-start
`

const Title = tw.div `
  text-5xl py-4 text-gray-500
`

const HeadImage = tw.img`
  w-full object-contain bg-gray-800 rounded-lg
`

const SignInButton = tw.button`
  bg-black text-white text-center py-4 mt-8 self-center cursor-pointer w-full
`