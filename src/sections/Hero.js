import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
    return (_jsxs("section", { id: "home", className: "w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container", children: [_jsxs("div", { className: "relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28", children: [_jsx("p", { className: "text-xl font-montserrat text-coral-red", children: "Our Summer Collections" }), _jsxs("h1", { className: "mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold z-10", children: [_jsx("span", { className: "xl:bg-white xl:whitespace-nowrap relative z-10 pr-10", children: "The New Arrival" }), _jsx("br", {}), _jsx("span", { className: "text-coral-red inline-block mt-3", children: "Nike" }), " Shoes"] }), _jsx("p", { className: "font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm", children: "Discover stylish Nike arrivales, quality comfort, and innovation for your active life." }), _jsx(Button, { label: "Shop now", iconURL: arrowRight }), _jsx("div", { className: "flex justify-start items-start flex-wrap w-full mt-20 gap-16", children: statistics.map((stat) => (_jsxs("div", { children: [_jsx("p", { className: "text-4xl font-palanquin font-bold", children: stat.value }), _jsx("p", { className: "leading-7 font-montserrat text-slate-gray", children: stat.label })] }, stat.label))) })] }), _jsxs("div", { className: "relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center z-0", children: [_jsx("img", { src: bigShoeImg, alt: "shoe collection", width: 610, height: 500, className: "object-contain relative z-10" }), _jsx("div", { className: "flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6", children: shoes.map((shoe) => (_jsx("div", { children: _jsx(ShoeCard, { imgURL: shoe, changeBigShoeImage: () => setBigShoeImg(shoe.bigShoe), bigShoeImg: bigShoeImg }) }, shoe.bigShoe))) })] })] }));
};
export default Hero;
