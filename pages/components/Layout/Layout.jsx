import Head from "next/head"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { GoSearch } from "react-icons/go"

export default function Layout({ title, isSignin, children }) {
  const urlBg = "/avatarTest/avatar1.png"
  return (
    <>
      <div >
        <Head>
          <title>{title ? `${title} - K Travel` : 'K Travel'}</title>
          <meta name="description" content="Travel Website" />
          <link rel="icon" href="/logo.svg" />
        </Head>

        <header style={{
          backgroundImage: 'url(/backgroun-header.avif)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
          className="h-96"
        >

          <div className="flex flex-col justify-around w-full ">
            <Header isSignin={isSignin}></Header>
            <div className="flex flex-col justify-center item-center w-full">
              <h2 className="font-bold text-white">FIND CITY</h2>
              <div className="flex flex-row ">
                <span><input type={'text'} placeholder="Type city's name" /></span>
                <span className="flex justify-center items-center ml-2 text-white"><GoSearch /></span>
              </div>
            </div>
          </div>


        </header>

        <main>
          {children}
        </main>

        <footer>
          <Footer>

          </Footer>
        </footer>
      </div>
    </>
  )
}