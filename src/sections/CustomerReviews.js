import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
    return (_jsxs("section", { className: "max-container", children: [_jsxs("h3", { className: "font-palanquin text-center text-4xl font-bold", children: ["What Our", _jsx("span", { className: "text-coral-red", children: " Customers " }), "Say?"] }), _jsx("p", { className: "info-text m-auto mt-4 max-w-lg text-center", children: "Hear genuine stories from our satisfied customers about their exceptional experiences with us." }), _jsx("div", { className: "mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14", children: reviews.map((review) => (_jsx(ReviewCard, { ...review }, review.customerName))) })] }));
};
export default CustomerReviews;
