import { useState } from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants/index";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="padding-x py-8 absolute z-20 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img src={headerLogo} alt="Nike Logo" width={130} height={29} />
				</a>

				{/* Desktop menu */}
				<ul className="flex-1 flex justify-center items-center gap-16 max-middle:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-900"
							>
								{item.label}
							</a>
						</li>
					))}
					<li key="Sign-in" className="font-montserrat leading-normal font-bold text-lg text-slate-600 hover:text-slate-900 hover:cursor-pointer ml-10">Sign in / Explore now</li>

				</ul>

				{/* Mobile hamburger */}
				<div className="middle:hidden max-lg:block">
					<img
						src={hamburger}
						alt="hamburger"
						width={25}
						height={25}
						className="cursor-pointer"
						onClick={() => setIsOpen((prev) => !prev)}
					/>
				</div>
				{/* Mobile dropdown menu */}
				{isOpen && (
					<ul className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 middle:hidden z-50">
						{navLinks.map((item) => (
							<li key={item.label}>
								<a
									href={item.href}
									className="font-montserrat text-lg text-slate-gray hover:text-slate-900"
									onClick={() => setIsOpen(false)}
								>
									{item.label}
								</a>
							</li>
						))}
						<li key="Sign-in" className="font-montserrat leading-normal font-bold text-lg text-slate-600 hover:text-slate-900 hover:cursor-pointer">Sign in / Explore now</li>
					</ul>
				)}
			</nav>


		</header>
	);
};

export default Nav;
