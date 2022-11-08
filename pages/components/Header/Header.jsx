import Image from "next/image";
import Link from "next/link";
import BtnProfile from "./BtnProfile";
import BtnLoginSignup from "./BtnLoginSignUp";
import { useRouter } from "next/router";

export default function Header({ props, isSignin }) {
  const srcAvt = '/avatarTest/avatar1.png'
  const router = useRouter();


  const handlerProfile = () => {
    router.push("/profile");
  }

  // if (isLogined) {
  return (
    <>
      <nav className="flex w-screen h-16 items-center px-5 justify-around shadow-md bg-[#ffffff12] fixed">
        {/* logo */}
        <div className="flex items-center hover:cursor-pointer">
          <Link href="/">
            <a>
              <Image src="/logo.svg" width={65} height={65} alt='logo' />
            </a>
          </Link>
          <div className="flex justify-center flex-col items-center">
            <h1 className=" font-bold font-sansation text-brand-color ">K TRAVEL</h1>
          </div>
        </div>

        <div className="w-2/5 flex flex-row justify-around text-white font-bold">
          <Link href={'/'}><a className="px-8 py-2 rounded-2xl hover:shadow-lg hover:bg-[#e9f3fa67]">Home</a></Link>
          <Link href={'/place'}><a className="px-8 py-2 rounded-2xl hover:shadow-lg hover:bg-[#e9f3fa67]">Place</a></Link>
          <Link href={'/about'}><a className="px-8 py-2 rounded-2xl hover:shadow-lg hover:bg-[#e9f3fa67]">About</a></Link>

        </div>

        {/* Login/Profile */}
        {isSignin ? <BtnProfile urlImg={srcAvt} onClick={handlerProfile} /> : <BtnLoginSignup />}
      </nav>
    </>
  )

}