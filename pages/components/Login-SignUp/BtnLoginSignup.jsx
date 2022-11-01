import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

export default function BtnLoginSignup() {
  const { data: session } = useSession()
  if (session) {

    // <div className="flex flex-row justify-center items-center w-32 h-10 rounded-3xl border  border-[#b4d1fa] hover:bg-[#d1e4ff] cursor-pointer">
    //   <button>
    //     <Link href='/login'><a className="text-sm font-bold text-brand-color">Login/Sign Up</a></Link>
    //   </button>
    // </div >
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}