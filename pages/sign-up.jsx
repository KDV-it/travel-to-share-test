import { Layout } from './components/Layout'
import { Signup } from './components/Login-SignUp'
export default function LoginPage() {
  return (
    <Layout title='Login'>
      <div className='flex justify-center items-center pt-8'>
        <Signup />
      </div>
    </Layout>
  )
}