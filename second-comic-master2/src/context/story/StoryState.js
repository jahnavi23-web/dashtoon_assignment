import React, { useState } from 'react'
// import { useContext } from 'react';
import StoryContext from '../story/storyContext';

const StoryState = (props) => {

    
    const [allimages, setAllimages] = useState([]);
    const [loader, setLoader] = useState(false);
    const [resultimg, setresultimg] = useState();
    const [inputs, setInputs] = useState('');
    const [addtoSlide, setaddtoSlide] = useState(false);
    const [globalIndex, setGlobalIndex] = useState();

    
    async function query(e) {
        e.preventDefault()
        setLoader(true)
        setaddtoSlide(false)

        const response = await fetch(
            "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
            {
                headers: {
                    "Accept": "image/png",
                    "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ 'inputs': inputs })
            }
        );
        // console.log(response);
        const result = await response.blob();
        setresultimg(URL.createObjectURL(result));
        setLoader(false)
        setaddtoSlide(true)
    }
    


    return (
        <StoryContext.Provider value={{
            allimages, setAllimages, loader, setLoader, resultimg, setresultimg, inputs, setInputs, query, addtoSlide, globalIndex, setGlobalIndex
        }}>
            {props.children}
        </StoryContext.Provider>
    )
}

export default StoryState;