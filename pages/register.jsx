import Head from "next/head";
import { useFormik } from "formik";
import { registerValidation } from "./lib/validate";
import { useRouter } from "next/router";


export default function Register() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: ''
    },
    validate: registerValidation,
    onSubmit
  })

  async function onSubmit(values) {
    const option = {
      method: "POST",
      header: { 'Content-type': 'application/json' },
      body: JSON.stringify(values),
    }
    await fetch('http://locahost:3000/api/auth/signup',option)
      .thhen(res => res.json())
      .then((data) => {
        if(data.ok) router.push('http://localhost:3000')
      })
  }

  return (
    <div>
      <Head></Head>
      <form onSubmit={formik.handleSubmit}>
        <div className={`${formik.errors.username && formik.touched.username ? 'border-2 border-brand-color' : 'border-none'}`}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            {...formik.getFieldProps('username')}
          />
        </div>


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

        <div className="container">
          <input
            name="cpassword"
            type="password"
            placeholder="Confirm Password"
            {...formik.getFieldProps('cpassword')}
          />
        </div>
        {formik.errors.cpassword && formik.touched.cpassword ? <span>{formik.errors.cpassword}</span> : <></>}

        <div>
          <button type="submit">
            Sign In
          </button>
        </div>
      </form>
      {/* <button onClick={handleGoogleSignIn}>Sign In With Google</button> */}
    </div>
  )
}