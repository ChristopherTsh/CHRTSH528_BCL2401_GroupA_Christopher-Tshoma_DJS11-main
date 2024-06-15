import React, {useEffect} from "react";

export default function Api({setPosts, setError}){

    // return <h1>Hello world</h1>

    useEffect (() => {

        fetch('https://podcast-api.netlify.app')
        .then((Response) => {

        if(!Response.ok) {
            throw new Error(`HTTP error! status: ${Response.status}`);
        } else {
            return Response.json();
        }
        })
        .then((data) => {
            setPosts(data);
        })
        .catch((error) => {

            setError("Data fetch failed");
        });
    },[setPosts, setError]);

    return null;
}

