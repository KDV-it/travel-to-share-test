import { Layout } from './components/Layout'
import { Login } from './components/Login-SignUp'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function login() {
  const { data: session } = useSession();
  if(session) {
    return (
      <Layout title='Profile'>
        <div>Wellcome, {session.user.email}</div>
        <button onClick={signOut}>Sign Out</button>
      </Layout>
    )
  }else {
    return (
      <Layout title='Login'>
        <div>You are not Sign in</div>
        <button onClick={signIn}>Sign In</button>
      </Layout>
    )
  }

  return (
    <Layout title='Login'>
      <div className='flex justify-center items-center pt-8'>\
        {(session) ? <div>Welcome you</div> : <div>You must sign in</div>}
        <Login />
      </div>
    </Layout>
  )
}