import fetch from "isomorphic-unfetch"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Confirm, Button, Loader, Card, Image } from "semantic-ui-react"
import absoluteUrl from "next-absolute-url"
import { route } from "next/dist/next-server/server/router"
import Link from "next/link"

const Product = ({ product }) => {
  const [confirm, setConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const open = () => setConfirm(true)
  const close = () => setConfirm(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    close()
  }

  const deleteProduct = async () => {
    const productId = router.query.id
    try {
      const deleted = await fetch(`/api/product/${productId}`, {
        method: "DELETE",
      })
      router.push("/")
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    if (isDeleting) {
      deleteProduct()
    }
  }, [isDeleting])

  return (
    <div className="min-h-screen antialiased bg-gray-200 flex py-8 flex-col items-center justify-center">
      {isDeleting ? (
        <Loader active />
      ) : (
        <div className="bg-gray-200 h-screen">
          <div className="flex justify-between items-center ">
            <h1 className="text-3xl font-medium ">View Product</h1>
            <Link href="/">
              <a className=" text-md text-gray-700 font-medium hover:text-gray-900 ">
                Back
              </a>
            </Link>
          </div>

          <Card>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/white-image.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{product.nama_produk}</Card.Header>

              <Card.Description>
                <p>{product.keterangan}</p>
                <p> Harga: {product.harga}</p>
                <p>Jumlah: {product.jumlah} </p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>Arkademy Store</Card.Content>
          </Card>
          <Button color="red" onClick={open}>
            Delete
          </Button>
        </div>
      )}
      <Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
    </div>
  )
}

Product.getInitialProps = async ({ req, query: { id } }) => {
  const { origin } = absoluteUrl(req, "localhost:3000")

  const resp = await fetch(`${origin}/api/product/${id}`)
  const { data } = await resp.json()

  return { product: data }
}

export default Product
