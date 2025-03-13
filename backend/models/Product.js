import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    articleNo: { type: String, required: true, unique: true },
    imageUrl: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
