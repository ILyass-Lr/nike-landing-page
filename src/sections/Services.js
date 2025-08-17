import { jsx as _jsx } from "react/jsx-runtime";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
const Services = () => {
    return (_jsx("section", { className: "max-container flex justify-center flex-wrap gap-9", children: services.map((service) => (_jsx(ServiceCard, { ...service }, service.label))) }));
};
export default Services;
