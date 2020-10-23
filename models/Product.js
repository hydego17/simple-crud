const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
  nama_produk: {
    type: String,
    required: true,
  },
  keterangan: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
  jumlah: {
    type: Number,
    required: true,
  },
})

module.exports =
  mongoose.models.Product || mongoose.model("Product", productSchema)
