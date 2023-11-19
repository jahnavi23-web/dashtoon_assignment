import React, { useContext } from 'react';
import storyContext from '../context/story/storyContext';
// import './Home.css'
import './Story.css'

const ImageItem = (props) => {
    const context = useContext(storyContext);
    const { setresultimg, setGlobalIndex, globalIndex } = context;

    const manupulateHandler = () => {
        setresultimg(props.source)
        setGlobalIndex(props.index)
        setGlobalIndex(props.index)

        // console.log(props.index)
        // console.log('global')
        // console.log('global',  globalIndex)
    }



    return (
        <
            img className='boardImage' style={{
                cursor: 'pointer',
                border: props.index === globalIndex ? '2px solid #55897c' : 'none',
            }}
            onClick={manupulateHandler}
            src={props.source}
            title={props.name}
            alt='imag'
        />
    )
}

export default ImageItem