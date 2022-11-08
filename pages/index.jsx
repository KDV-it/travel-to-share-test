
import { Footer, Header, Layout } from './components/Layout'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Fragment } from 'react'
import Card from './components/Card/Card'

export default function Home() {
  const { data: session } = useSession()

  return (
    <>
      {session ? User({ session }) : Guest()}
    </>
  )
}

//Guest 
function Guest() {
  return (
    <Fragment>
      <Header isSignin={false} />

      <Footer />
    </Fragment>
    // <Layout title="Home" isSignin={false}>
    //   <h1>This is Guest Page</h1>
    //   <h3>You must Sign In</h3>
    //   <Link href={"/login"}>Sign In</Link>
    // </Layout>
  )
}
//Authorize User
function User({ session }) {

  console.log(session)
  return (
    <Fragment>
      <section
        className="flex h-[100vh] min-w-full"
        style={{
          backgroundImage: 'url(/bg.JPG)',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
        }}
      >
        <Header isSignin={true} />
      </section>
      <main className='p-8'>
        <div>
          <h2 className='font-bold text-3xl text-brand-color pb-2 '>Top Trending</h2>
          <hr className='text-brand-color border-b-4 w-2/12 mb-4'/>
          <Card
            backgroundUrl='/backgroun-header.avif'
            rating={3}
            isFavorited={true}
            city='Ho Chi Minh'
            country='Viet Nam'
            avatarUrl="/avatarTest/avatar1.png"
            isUserOnline={true}
            detailUrl='/detail'
          />
           <Card
            backgroundUrl='/backgroun-header.avif'
            rating={3}
            isFavorited={true}
            city='Ho Chi Minh'
            country='Viet Nam'
            avatarUrl="/avatarTest/avatar1.png"
            isUserOnline={true}
            detailUrl='/detail'
          />
           <Card
            backgroundUrl='/backgroun-header.avif'
            rating={3}
            isFavorited={true}
            city='Ho Chi Minh'
            country='Viet Nam'
            avatarUrl="/avatarTest/avatar1.png"
            isUserOnline={true}
            detailUrl='/detail'
          />
           <Card
            backgroundUrl='/backgroun-header.avif'
            rating={3}
            isFavorited={true}
            city='Ho Chi Minh'
            country='Viet Nam'
            avatarUrl="/avatarTest/avatar1.png"
            isUserOnline={true}
            detailUrl='/detail'
          />
           <Card
            backgroundUrl='/backgroun-header.avif'
            rating={3}
            isFavorited={true}
            city='Ho Chi Minh'
            country='Viet Nam'
            avatarUrl="/avatarTest/avatar1.png"
            isUserOnline={true}
            detailUrl='/detail'
          />
        </div>
      </main>
      <Footer />
    </Fragment>
    // <Layout title="Home" isSignin={true}>
    //   <h1>this is Authorize User Page</h1>
    //   <h3>Well come</h3>
    //   <h3>{session.user.email}</h3>
    //   <button onClick={() => signOut()}>Sign Out</button>
    // </Layout>

  )
}


