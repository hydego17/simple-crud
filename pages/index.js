import Link from "next/link"
import Head from "next/head"
import fetch from "isomorphic-unfetch"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1>
            Simple <a href="#">CRUD </a>Demo
          </h1>
          <h3>Using Next.js & MongoDB</h3>
        </div>

        <h3>Database: Arkademy</h3>
      </main>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/product")
  const { data } = await res.json()

  return { getData: data }
}

export default Home
