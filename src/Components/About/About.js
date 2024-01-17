import React, { useEffect } from "react";

export default function About({ mode, setMode }) {

    useEffect(() => {
        setMode("dark");
    },[])

    return (
        <h1>This is the about page.</h1>
    )
};
