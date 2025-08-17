import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price }) => {
    return (_jsxs("div", { className: "flex flex-1 flex-col w-full max-sm:w-full", children: [_jsx("img", { src: imgURL, alt: name, className: "w-[280px] h-[280px] transition-transform duration-300 ease-in-out hover:scale-110" }), _jsxs("div", { className: "mt-8 flex justify-start gap-2.5", children: [_jsx("img", { src: star, alt: "rating", width: 24, height: 24 }), _jsx("p", { className: "font-montserrat text-xl leading-normal text-slate-gray", children: "(4.5)" })] }), _jsx("h3", { className: "mt-2 text-2xl leading-normal font-semibold font-palanquin", children: name }), _jsx("p", { className: "mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal", children: price })] }));
};
export default PopularProductCard;
