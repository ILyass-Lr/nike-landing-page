import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
    return (_jsxs("section", { id: "products", className: "max-container max-sm:mt-12", children: [_jsxs("div", { className: "flex flex-col justify-start gap-5", children: [_jsxs("h2", { className: "text-4xl font-palanquin font-bold", children: [_jsx("span", { className: "text-coral-red", children: "Popular" }), " Products"] }), _jsx("p", { className: "lg:max-w-lg mt-2 font-montserrat text-slate-gray", children: "Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value" })] }), _jsx("div", { className: "mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14", children: products.map((product) => (_jsx(PopularProductCard, { ...product }, product.name))) })] }));
};
export default PopularProducts;
