import React, { useState, useEffect } from "react"
import Link from "next/link"
import fetch from "isomorphic-unfetch"
import { useRouter } from "next/router"
import { Button, Form, Loader } from "semantic-ui-react"

const newProduct = () => {
  const [form, setForm] = useState({
    nama_produk: "",
    keterangan: "",
    harga: 0,
    jumlah: 0,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createProduct()
      } else {
        setIsSubmitting(false)
      }
    }
  }, [errors])

  const createProduct = async () => {
    try {
      const res = await fetch("/api/product", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      })
      router.push("/")
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let errs = validate()
    setErrors(errs)
    setIsSubmitting(true)
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    let err = {}
    if (!form.nama_produk) {
      err.nama_produk = "Nama produk diperlukan"
    }
    if (!form.keterangan) {
      err.keterangan = "Keterangan diperlukan"
    }
    if (!form.harga) {
      err.harga = "Harga diperlukan"
    }
    if (!form.jumlah) {
      err.jumlah = "Jumlah diperlukan"
    }
    return err
  }

  return (
    <div className="bg-gray-200 h-screen">
      <div className=" flex flex-col justify-center max-w-screen-md mx-auto py-8 antialiased px-10 ">
        <div className="flex justify-between items-center my-8 ">
          <h1 className="text-3xl font-medium">Create Product</h1>
          <Link href="/">
            <a className=" text-md text-gray-700 font-medium hover:text-gray-900 ">
              Back
            </a>
          </Link>
        </div>
        {isSubmitting ? (
          <Loader active inline="centered" />
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Input
              error={
                errors.nama_produk
                  ? {
                      content: "Harap masukan Nama produk",
                      pointing: "below",
                    }
                  : null
              }
              type="text"
              label="Nama Produk"
              name="nama_produk"
              placeholder="Nama Produk"
              onChange={handleChange}
            />
            <Form.Input
              error={
                errors.keterangan
                  ? { content: "Harap masukan Keterangan", pointing: "below" }
                  : null
              }
              type="text"
              label="keterangan"
              name="keterangan"
              placeholder="Keterangan"
              onChange={handleChange}
            />
            <Form.Input
              error={
                errors.nama_produk
                  ? { content: "Harap masukan harga", pointing: "below" }
                  : null
              }
              type="number"
              label="Harga"
              name="harga"
              placeholder="Harga"
              onChange={handleChange}
            />
            <Form.Input
              error={
                errors.nama_produk
                  ? { content: "Harap masukan jumlah", pointing: "below" }
                  : null
              }
              type="number"
              label="Jumlah"
              name="jumlah"
              placeholder="Jumlah"
              onChange={handleChange}
            />
            <Button type="submit">Tambahkan Produk</Button>
          </Form>
        )}
      </div>
    </div>
  )
}

export default newProduct
