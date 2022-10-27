import Layout from './components/Layout'
import Login from './components/Login'
export default function LoginPage() {
  return (
    <Layout title='Login'>
      <div className='flex justify-center items-center pt-8'>
        <Login />
      </div>
    </Layout>
  )
}