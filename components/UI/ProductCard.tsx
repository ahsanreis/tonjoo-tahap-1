import React from "react";
import { Star } from "lucide-react";

interface ProductCardProps {
  image: string;
  tags: string;
  title: string;
  rating: number;
  price: number;
  discount?: number | null;
}

// Main Card Component
export const ProductCard = ({ image, tags, title, rating, price, discount }: ProductCardProps) => {
  // Simple utility to generate star icons based on the rating prop (0-5)
  const renderStars = () => {
    const maxStars = 5;
    const filledStars = Math.round(rating);
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      stars.push(<Star key={i} className={`w-4 h-4 transition-colors duration-150 ${i <= filledStars ? "text-pink-500 fill-pink-500" : "text-gray-300"}`} />);
    }
    return <div className="flex space-x-1">{stars}</div>;
  };

  // Format currency (assuming IDR based on the image, but making it general)
  const formatPrice = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  // Calculate final price after discount
  const finalPrice = discount ? price - price * (discount / 100) : price;

  return (
    // Card Container: Borderless, clean white background
    <div className="max-w-xs bg-white rounded-xl shadow-none transition-transform duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer p-0">
      {/* Product Image Area */}
      <div className="p-2 aspect-[4/5] bg-gray-50 flex items-center justify-center rounded-t-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
          // Placeholder fallback in case the image URL is bad or missing
          onError={(e) => {
            e.target.onerror = null; // prevents infinite loop
            e.target.src = "https://placehold.co/400x500/F3F4F6/9CA3AF?text=No+Image";
          }}
        />
      </div>

      {/* Content Area */}
      <div className="p-4 space-y-2">
        {/* Tags */}
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{tags}</p>

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2">{title}</h3>

        {/* Rating */}
        {renderStars()}

        {/* Price & Discount */}
        <div className="flex items-center space-x-2 pt-1">
          {discount && <p className="text-sm font-normal text-gray-400 line-through">{formatPrice(price)}</p>}
          <p className="text-lg font-bold text-gray-900">{formatPrice(finalPrice)}</p>
        </div>

        {/* Add to Cart Button (styled like the reference image) */}
        <button className="w-full mt-4 px-4 py-2 text-sm font-semibold text-white bg-slate-700 rounded-lg shadow-md hover:bg-slate-800 transition-colors duration-200 uppercase tracking-widest active:scale-[0.99]">Add to Cart</button>
      </div>
    </div>
  );
};

// Example data for demonstration
const productData = [
  {
    id: 1,
    image: "https://placehold.co/400x500/f87a84/ffffff?text=Product+Shoe",
    tags: "SEPATU WANITA, KASUAL",
    title: "Le Modiste - Sepatu Kasual Wanita Cokelat Edisi Terbatas",
    rating: 4,
    price: 319000,
    discount: null,
  },
  {
    id: 2,
    image: "https://placehold.co/400x500/2563EB/ffffff?text=Product+Shirt",
    tags: "PAKAIAN PRIA, ATASAN",
    title: "Comfort Fit Cotton T-Shirt - Summer Edition",
    rating: 4.8,
    price: 450000,
    discount: 15, // 15% discount
  },
  {
    id: 3,
    image: "https://placehold.co/400x500/65A30D/ffffff?text=Product+Bag",
    tags: "TAS WANITA, PREMIUM",
    title: "The Essential Leather Crossbody Bag - Forest Green",
    rating: 3.5,
    price: 1250000,
    discount: 30,
  },
];

// Main App Component for demonstration
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">E-commerce Product Listing</h1>
      <p className="text-center text-gray-600 mb-12">(Component is fully responsive and borderless)</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {productData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
