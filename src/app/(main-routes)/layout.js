import Navbar from "@/components/shared/navbar/Navbar";


export default function MainRouteLayout({ children }) {
    return (
        <>
        <Navbar/>
            {children}
        </> 
    );
}

