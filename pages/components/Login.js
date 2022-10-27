import Link from "next/link"



export default function Login() {
  return (
    <div className="shadow-2xl flex flex-col justify-center items-center rounded-lg border-2 border-brand-color w-1/4 h-3/5 p-5">
      <h1 className="px-2 text-2xl font-bold text-brand-color ">Login</h1>
      <p className="text-brand-color">Login with Email</p>

      <form className="flex flex-col w-full h-2/5  mt-4">
        <div className='flex flex-col pt-1 pl-1  my-1 border-2 border-brand-color-2 rounded-lg'>
          <label className="text-brand-color font-bold" for='email'>Email adress</label>
          <input id='email' type='email' className="w-full focus:outline-none px-1 mb-1" placeholder="Type your Email..." />
        </div>

        <div className='pt-1 pl-1  my-1 border-2  border-brand-color-2 rounded-lg'>
          <label className="text-brand-color font-bold" for='password'>Password</label>
          <input id='password' type='password' className="w-full focus:outline-none px-2 mb-1" placeholder="Type your password..." />
        </div>
      </form>
      <div className="text-right w-full">
        <p className="text-brand-color-2 hover:cursor-pointer hover:text-brand-color">Forgot password?</p>
      </div>
      <button className="rounded-lg bg-brand-color w-5/6 h-12 mt-2 text-white font-bold uppercase">Login</button>
      <div className="flex justify-center mt-2 w-5/6">
        <p>No account yet?
          <Link href="/"><a className="text-brand-color-2 hover:text-brand-color "> Create account</a></Link>
        </p>
      </div>
      <div className="w-5/6 flex flex-col justify-center items-center">
        <p className="mt-5">or continue with</p>
        <div className="w-full h-10 flex flex-row justify-spacing mt-5">
          <button className="mx-0.5 flex flex-row justify-center items-center w-3/6 rounded-lg border-2 border-brand-color outline-none ">
            <div className=" mt-2 rounded-3xl w-4 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
            </div>
            <p className="mx-2">Google</p>
          </button>
          <button className=" mx-0.5 flex flex-row justify-center items-center  w-3/6 rounded-lg border-2 border-brand-color ">
            <div className="mt-2 rounded-3xl w-4 h-6">
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
            </div>
            <p className="mx-2">Facebook</p>
          </button>
        </div>
      </div>

    </div>
  )
}