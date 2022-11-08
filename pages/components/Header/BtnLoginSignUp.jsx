import Link from "next/link";

export default function BtnLoginSignup() {
  return (
    <div className="border-2 rounded-3xl container flex flex-row justify-center items-center h-10 w-20 hover:cursor-pointer">
      <Link href={'/login'} ><a>Login/SignUp</a></Link>
    </div>
  )
}