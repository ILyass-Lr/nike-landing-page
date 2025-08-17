import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (_jsxs("div", { className: "flex justify-center items-center flex-col", children: [_jsx("img", { src: imgURL, alt: "customer", className: "rounded-full object-cover w-[120px] h-[120px]" }), _jsx("p", { className: "mt-6 max-w-sm text-center info-text", children: feedback }), _jsxs("div", { className: "mt-3 flex justify-center items-center gap-2.5", children: [_jsx("img", { src: star, width: 24, height: 24, className: "object-contain m-0" }), _jsxs("p", { className: "text-xl font-montserrat text-slate-gray", children: ["(", rating, ")"] })] }), _jsx("h3", { className: "mt-1 font-palanquin text-3xl text-center font-bold", children: customerName })] }));
};
export default ReviewCard;
