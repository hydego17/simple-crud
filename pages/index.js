import Link from "next/link"
import Head from "next/head"
import fetch from "isomorphic-unfetch"
import Products from "../components/Products"
import absoluteUrl from "next-absolute-url"

const Home = ({ products }) => {
  return (
    <div className="min-h-screen antialiased bg-gray-200 flex  flex-col items-center ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container max-w-screen-lg px-6">
        <div className="py-8">
          <h1 className="text-3xl font-medium text-gray-800 ">
            Simple CRUD Demo
          </h1>
          <h3 className=" font-medium text-lg text-gray-600">
            Using Next.js & MongoDB
          </h3>
        </div>

        <div className="flex justify-between items-center px-2 ">
          <h3 className="text-xl text-gray-800 font-medium">Arkademy Store</h3>

          <Link href="/new">
            <a className="bg-teal-600 hover:bg-teal-700 text-white hover:text-gray-100 font-bold py-2 px-3 rounded">
              Tambah Produk
            </a>
          </Link>
        </div>

        <Products products={products} />
      </main>

      <footer className=" max-w-screen-lg p-6 bg-gray-200 w-full flex justify-between items-center">
        <p className="font-medium text text-gray-700">
          Made by
          <Link href="https://github.com/hydego17">
            <a className="text-teal-700 " target="_blank">
              {" "}
              Umma Ahimsha
            </a>
          </Link>
        </p>

        <Link href="/api/product">
          <a
            target="_blank"
            className=" text-md text-gray-700 font-medium text-right hover:text-gray-900 "
          >
            View API
          </a>
        </Link>
      </footer>
    </div>
  )
}

Home.getInitialProps = async ({ req, res }) => {
  const { origin } = absoluteUrl(req, "localhost:3000")
  const resp = await fetch(`${origin}/api/product`)
  const { data } = await resp.json()

  return { products: data }
}

export default Home
