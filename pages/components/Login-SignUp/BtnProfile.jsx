import Link from "next/link"
import Image from "next/image"


//get object avatar after login
export default function BtnProfile({srcAvt}) {
  return (
    <div className="flex flex-row justify-center items-center w-20 h-10 rounded-3xl border  border-[#b4d1fa] hover:bg-[#d1e4ff] cursor-pointer">
      <Link href='/login'>
        <span className="w-8 h-auto">
          <svg className='px-2 to-brand-color' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
        </span>
      </Link>
      <Image src={srcAvt} alt='Avatar' width={30} height={30} className='pl-8 rounded-3xl border-brand-color' />
    </div >
  )
}  