// pages/api/products/[id].js
import { printfulClient } from '../../../lib/printful'; // Adjust the path based on your project structure

export default async (req, res) => {
  const { id } = req.query;
  
  try {
    const response = await printfulClient.get(`store/products/${id}`);
    const product = response.result;
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product data' });
  }
};
