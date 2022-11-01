import Head from "next/head"
import { Header } from "../Header"
import { Footer } from "../Footer"

export default function Layout({ title, children }) {
  return (
    <>
      <div>
        <Head>
          <title>{title ? `${title} - KDV Travel` : 'KDV Travel'}</title>
          <meta name="description" content="Travel Website" />
          <link rel="icon" href="/logo.svg" />
        </Head>

        <header>
          <Header></Header>
        </header>

        <main>
          {children}
        </main>

        <footer>
          {/* <Footer>

          </Footer> */}
        </footer>
      </div>
    </>
  )
}