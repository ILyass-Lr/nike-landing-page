import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (_jsxs("button", { className: `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}  hover:bg-gray-100` : 'bg-coral-red text-white border-coral-red hover:bg-linear-to-r from-coral-red to-[#d72812]'} rounded-full ${fullWidth && 'w-full'}`, children: [label, iconURL && (_jsx("img", { src: iconURL, alt: "Arrow right icon", className: "ml-2 rounded-full w-5 h-5" }))] }));
};
export default Button;
