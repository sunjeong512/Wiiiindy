import React from "react";
import World from "./world";

// http://localhost:3000/hello
export default function Hello() {
    return (
        <>
            <h1>
                Hello,
                <World name="Kitty" />!
                </h1>
                
                <img src="cat.jpeg" alt="cat" />
        </>
    );
}

