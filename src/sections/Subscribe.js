import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "../components/Button";
const Subscribe = () => {
    return (_jsxs("section", { className: "max-container flex justify-between items-center max-lg:flex-col gap-10", id: "contact-us", children: [_jsxs("h3", { className: "text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold", children: ["Sign up for", _jsx("span", { className: "text-coral-red", children: " Updates" }), " & Newsletter"] }), _jsxs("div", { className: "lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full", children: [_jsx("input", { type: "text", placeholder: "subscribe@nike.com", className: "input" }), _jsx("div", { className: "flex max-sm:justify-end items-center max-sm:w-full", children: _jsx(Button, { label: "Sign Up", fullWidth: true }) })] })] }));
};
export default Subscribe;
