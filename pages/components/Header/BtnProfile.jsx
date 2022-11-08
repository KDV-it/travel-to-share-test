import Image from "next/image"
import Link from "next/link"
import { FcMenu } from "react-icons/fc"
import {GoSignOut, GoGrabber} from "react-icons/go"
import { useSession, signOut } from 'next-auth/react'

export default function BtnProfile({ urlImg }) {
  function handlerSignOut() {
    signOut();
  }
  return (
    <div className="flex flex-row justify-center">
      <div className="border-2 border-white rounded-3xl container flex flex-row justify-center items-center h-10 w-20 hover:cursor-pointer hover:bg-opacity-70 bg-white bg-opacity-50">
        <span className="h-full w-2/6 flex justify-center items-center hover:cursor-pointer text-brand-color text-2xl hover:font-bold "><GoGrabber /></span>
        <span className="w-8 h-8 ">
          <Image src={urlImg} width="100%" height="100%" alt="avatar" object-fit="cover" className="rounded-full border-1" />
        </span>
      </div>
      <div onClick={handlerSignOut}className="flex justify-center items-center border-white border-l-2 ml-4 pl-4 cursor-pointer "><span className="text-2xl text-white hover:text-brand-color-2 hover:text-opacity-50"><GoSignOut/></span></div>
    </div>
  )
}