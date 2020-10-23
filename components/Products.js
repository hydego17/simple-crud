import Link from "next/link"

export default function Products({ products }) {
  return (
    <div className=" overflow-x-auto shadow rounded-lg product my-6 border lg:p-4 bg-white ">
      <table className="table-auto w-full ">
        <thead>
          <tr>
            <th className="rounded px-4 py-4 text-gray-800 ticky top-0  border border-gray-200 bg-gray-100  ">
              Produk
            </th>
            <th className="rounded px-4 py-4 text-gray-800 ticky top-0  border border-gray-200 bg-gray-100">
              Keterangan
            </th>
            <th className="rounded px-4 py-4 text-gray-800 ticky top-0  border border-gray-200 bg-gray-100 ">
              Harga
            </th>
            <th className="rounded px-4 py-4 text-gray-800 ticky top-0  border border-gray-200 bg-gray-100">
              Jumlah
            </th>
            <th className="rounded px-4 py-4 text-gray-800 ticky top-0  border  border-gray-200 bg-gray-100">
              Option
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="lg:text-center">
              <td className="rounded border px-4 py-2">
                <Link href={`/${product._id}`}>
                  <a className=" text-blue-700 hover:underline font-medium">
                    {product.nama_produk}
                  </a>
                </Link>
              </td>
              <td className="rounded border px-4 py-2">{product.keterangan}</td>
              <td className="rounded border px-4 py-2">{product.harga}</td>
              <td className="rounded border px-4 py-2">{product.jumlah}</td>
              <td className="rounded border px-2 py-2  ">
                <Link href={`/${product._id}/edit`}>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 lg:px-6 rounded">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
