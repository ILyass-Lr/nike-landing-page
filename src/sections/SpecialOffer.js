import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
    return (_jsxs("section", { className: "flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container", children: [_jsx("div", { className: "flex flex-1 justify-center items-center", children: _jsx("img", { src: offer, alt: "Elegant shoe", width: 773, height: 687, className: "object-contain w-full" }) }), _jsxs("div", { className: "flex flex-1 flex-col", children: [_jsxs("h2", { className: "font-palanquin text-4xl font-bold capitalize lg:max-w-lg", children: [_jsx("span", { className: "text-coral-red", children: "Special " }), "Offer"] }), _jsx("p", { className: "mt-4 lg:max-w-lg info-text", children: "Embark on a shopping journey that redefines your experience with unbeatable deals. From prmier selections to incredible saving, we offer unparalleled value that sets us apart." }), _jsx("p", { className: "mt-6 lg:max-w-lg info-text", children: "Navigate a realm of possibilities designed to fulfil your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional." }), _jsxs("div", { className: "mt-11 flex flex-wrap gap-4", children: [_jsx(Button, { label: "Shop now", iconURL: arrowRight }), _jsx(Button, { backgroundColor: "bg-white", borderColor: "border-slate-gray", textColor: "text-slate-gray", label: "Learn more" })] })] })] }));
};
export default SpecialOffer;
