import { useSession, signIn, signOut } from "next-auth/react"
import { Layout } from "./components/Layout"
import { useFormik } from "formik"
import login_validate from "./lib/validate"
import { useRouter } from "next/router"

export default function Component() {
  const { data: session } = useSession()

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit
  })

  async function onSubmit(values) {
    const status = await signIn("credentials",
      {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/"
      })

    console.log(status)
    
    if (status.ok) {
      router.push(status.url)
    }
  }

  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: "http://localhost:3000" })
  }
  console.log(session)
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )

  }
  return (
    <Layout>
      Not signed in <br />
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <input
            name="email"
            type="email"
            placeholder="Email"
            {...formik.getFieldProps('email')}
          />
        </div>
        {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : <></>}

        <div className="container">
          <input
            name="password"
            type="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}

          />
        </div>
        {formik.errors.password && formik.touched.password ? <span>{formik.errors.password}</span> : <></>}

        <div>
          <button type="submit">
            Sign In
          </button>
        </div>
      </form>
      <button onClick={handleGoogleSignIn}>Sign In With Google</button>
    </Layout>
  )
}