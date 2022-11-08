import { useSession, signOut, getSession } from "next-auth/react"
import Link from "next/link"
export default function Account() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div>
        <p>You are not sign in</p>
        <Link href='/login'><a>Login now!</a></Link>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Wellcome, {session.user.email}</h1>
        <p>Hello {session.user.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if(!session) {
    return {
      redirect: {
        destination: '/login'
      }
    }
  }
  return {
    props: {session}
  }
}