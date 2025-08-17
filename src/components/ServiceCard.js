import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ServiceCard = ({ imgURL, label, subtext }) => {
    return (_jsxs("div", { className: "flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 transition-transform duration-300 ease-in-out hover:scale-105", children: [_jsx("div", { className: "w-11 h-11 flex justify-center items-center bg-coral-red rounded-full", children: _jsx("img", { src: imgURL, alt: label, width: 24, height: 24 }) }), _jsx("h3", { className: "mt-5 font-palanquin text-3xl leading-normal font-bold", children: label }), _jsx("p", { className: "mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray", children: subtext })] }));
};
export default ServiceCard;
