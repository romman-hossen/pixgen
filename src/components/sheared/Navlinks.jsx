import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = ({href,children,className}) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link className={`${isActive? 'border-b-2 border-pink-200' : ''} ${className}`} href={href}>{children}</Link>
    );
};

export default Navlinks;
// const Navlinks = () => {
//     return (
//         <>
//         <ul className="hidden md:flex items-center gap-5 text-sm">
//   <li><Navlink href="/">Home</Navlink></li>
//   <li><NavLink href="/all-photos">All Photos</NavLink></li>
//   <li><NavLink href="/pricing">Pricing</NavLink></li>
//   <li><NavLink href="/profile">Profile</NavLink></li>
// </ul>

// "use client";
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';


// const NavLink = ({href,children,className}) => {
//     const pathname = usePathname();
//     const isActive = pathname === href;
//     console.log(isActive,href);
//     return (
//         <Link className={`${isActive? 'border-b-2 border-pink-700' : ''} ${className}`} href={href} >{children}</Link>
//     );
// };

// export default NavLink;
//         </>
//     );
// };

// export default Navlinks;