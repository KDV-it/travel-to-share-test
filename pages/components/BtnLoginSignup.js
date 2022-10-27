import Link from "next/link";

export default function BtnLoginSignup() {
  return (
    <div className="flex flex-row justify-center items-center w-32 h-10 rounded-3xl border  border-[#b4d1fa] hover:bg-[#d1e4ff] cursor-pointer">
      <button>
        <Link href='/loginPage'><a className="text-sm font-bold text-brand-color">Login/Sign Up</a></Link>
      </button>
    </div >
  )
}