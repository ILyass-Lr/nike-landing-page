import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants/index";
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsx("header", { className: "padding-x py-8 absolute z-20 w-full", children: _jsxs("nav", { className: "flex justify-between items-center max-container", children: [_jsx("a", { href: "/", children: _jsx("img", { src: headerLogo, alt: "Nike Logo", width: 130, height: 29 }) }), _jsxs("ul", { className: "flex-1 flex justify-center items-center gap-16 max-middle:hidden", children: [navLinks.map((item) => (_jsx("li", { children: _jsx("a", { href: item.href, className: "font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-900", children: item.label }) }, item.label))), _jsx("li", { className: "font-montserrat leading-normal font-bold text-lg text-slate-600 hover:text-slate-900 hover:cursor-pointer ml-10", children: "Sign in / Explore now" }, "Sign-in")] }), _jsx("div", { className: "middle:hidden max-lg:block", children: _jsx("img", { src: hamburger, alt: "hamburger", width: 25, height: 25, className: "cursor-pointer", onClick: () => setIsOpen((prev) => !prev) }) }), isOpen && (_jsxs("ul", { className: "absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 middle:hidden z-50", children: [navLinks.map((item) => (_jsx("li", { children: _jsx("a", { href: item.href, className: "font-montserrat text-lg text-slate-gray hover:text-slate-900", onClick: () => setIsOpen(false), children: item.label }) }, item.label))), _jsx("li", { className: "font-montserrat leading-normal font-bold text-lg text-slate-600 hover:text-slate-900 hover:cursor-pointer", children: "Sign in / Explore now" }, "Sign-in")] }))] }) }));
};
export default Nav;
