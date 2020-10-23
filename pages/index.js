import Link from "next/link"
import Head from "next/head"
import fetch from "isomorphic-unfetch"

const Home = ({ products }) => {
  return (
    <div className="antialiased bg-gray-200 flex  flex-col items-center ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container max-w-screen-lg  h-screen  px-6">
        <div className="py-8">
          <h1 className="text-3xl font-medium text-gray-700 ">
            Simple CRUD Demo
          </h1>
          <h3 className=" text-lg text-gray-700">Using Next.js & MongoDB</h3>
        </div>

        <h3 className=" px-2 text-xl text-gray-800 font-medium ">
          Arkademy Store
        </h3>
        <div className=" overflow-x-auto shadow rounded-lg product my-6 border lg:p-4 bg-white ">
          <table className="table-auto w-full ">
            <thead>
              <tr>
                <th className="rounded px-4 py-5 text-gray-800 ticky top-0  border border-gray-200 bg-gray-100  ">
                  Produk
                </th>
                <th className="rounded px-4 py-5 text-gray-800 ticky top-0  border border-gray-200 bg-gray-100">
                  Keterangan
                </th>
                <th className="rounded px-4 py-5 text-gray-800 ticky top-0  border border-gray-200 bg-gray-100 ">
                  Harga
                </th>
                <th className="rounded px-4 py-5 text-gray-800 ticky top-0  border border-gray-200 bg-gray-100">
                  Jumlah
                </th>
                <th className="rounded px-4 py-5 text-gray-800 ticky top-0  border  border-gray-200 bg-gray-100">
                  Option
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td class="rounded border px-4 py-2">
                    {product.nama_produk}
                  </td>
                  <td class="rounded border px-4 py-2">{product.keterangan}</td>
                  <td class="rounded border px-4 py-2">{product.harga}</td>
                  <td class="rounded border px-4 py-2">{product.jumlah}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/product")
  const { data } = await res.json()

  return { products: data }
}

export default Home
