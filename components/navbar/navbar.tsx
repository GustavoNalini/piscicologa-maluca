import { background, color } from "@chakra-ui/react"

export const Navbar = () => {
    return (
        <>
            <nav
                style={{
                    margin: "0",
                    padding: "0",
                    overflow: "hidden",
                    backgroundColor: "black",


                }}
            >
                <ul
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "white",
                        textAlign: "center",
                        padding: "14px 16px",
                        textDecoration: "none",


                    }}

                >
                    <li><a href="#home">Home</a></li>
                    <li><a href="#/Users/mclovinn/code/piscicologa-maluca/pages/reservations.tsx">reserve sua consulta</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </>
    )
}




