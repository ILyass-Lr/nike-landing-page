import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
    return (_jsxs("section", { id: "about-us", className: "flex justify-between items-center max-lg:flex-col gap-10 w-full max-container", children: [_jsxs("div", { className: "flex flex-1 flex-col", children: [_jsxs("h2", { className: "font-palanquin text-4xl font-bold capitalize lg:max-w-lg", children: ["We Provide you", _jsx("span", { className: "text-coral-red", children: " Super " }), _jsx("span", { className: "text-coral-red", children: "Quality " }), "Shoes"] }), _jsx("p", { className: "mt-4 lg:max-w-lg info-text", children: "Ensuring premium confort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance." }), _jsx("p", { className: "mt-6 lg:max-w-lg info-text", children: "Our dedication to detail and excellence ensures your satisfaction." }), _jsx("div", { className: "mt-11", children: _jsx(Button, { label: "View Details" }) })] }), _jsx("div", { className: "flex flex-1 justify-center items-center", children: _jsx("img", { src: shoe8, alt: "Elegant shoe", width: 570, height: 522, className: "object-contain" }) })] }));
};
export default SuperQuality;
