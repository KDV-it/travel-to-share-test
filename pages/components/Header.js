import Image from "next/image";
import Link from "next/link";
import BtnLoginSignup from "./BtnLoginSignup";
import BtnProfile from "./BtnProfile";

export default function Header() {
  const srcAvt = '/avatarTest/avatar1.png'
  const isLogined = false;

  if (isLogined) {
    return (
      <>
        <nav className="flex h-16 items-center px-12 justify-between shadow-md">
          {/* logo */}
          <div className="flex items-center">
            <Image src="/logo.svg" width={65} height={65} alt='logo' />
            <div className="flex justify-center flex-col items-center">
              <h1 className=" font-bold font-sansation text-brand-color ">KDV TRAVEL</h1>
            </div>
          </div>

          {/* Login/Profile */}
          <BtnProfile srcAvt={srcAvt} />
        </nav>
      </>
    )
  }

  return (
    <>
      <nav className="flex h-16 items-center px-12 justify-between shadow-md">
        {/* logo */}
        <div className="flex items-center">
          <Image src="/logo.svg" width={65} height={65} alt='logo' />
          <div className="flex justify-center flex-col items-center">
            <h1 className=" font-bold font-sansation text-brand-color ">KDV TRAVEL</h1>
          </div>
        </div>

        {/* Login/Profile */}
        <BtnLoginSignup />
      </nav>
    </>
  )
}