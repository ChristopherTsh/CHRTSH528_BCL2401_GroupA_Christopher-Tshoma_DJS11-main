import React, {useState,useEffect} from "react";

export default function Api({setImages, setTitles, setLoading }){

    // return <h1>Hello world</h1>

    useEffect (() => {

        fetch('https://podcast-api.netlify.app')
        .then(Response => Response.json())
        .then((data) => {
            const images = data.map(item => item.image);
        const titles = data.map(item => item.title);
        setImages(images);
        setTitles(titles);
        setLoading(false);
        })
        .catch((error) => {

            console.error(error);
        setLoading(false);
        });
    },[setImages, setTitles, setLoading]);

    return null;
}

