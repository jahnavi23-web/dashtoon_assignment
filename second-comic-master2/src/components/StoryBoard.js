import React, { useContext } from 'react';
import storyContext from '../context/story/storyContext';
import ImageItem from './ImageItem';
import addImageicon from './images/addImageIcon.png'
import './Story.css'



const StoryBoard = () => {
    const context = useContext(storyContext);
    const { allimages, setresultimg, setGlobalIndex, globalIndex } = context;

    const manupulateHandler = () => {
        setresultimg()
        setGlobalIndex()
        setGlobalIndex()

        // console.log(props.index)
        // console.log('global')
        // console.log('global',  globalIndex)
    }

    return (
        <>
            <div>
                <div className='headBoard'>
                    <p >
                        Story Board
                    </p>
                </div>
                <div className='homeRight'>
                    <div className='storyboardimg' >
                        {allimages.length > 0 && allimages.map((item, index) => {
                            // console.log(item)
                            return (
                                // <img className='boardImage' src={item.resultimg} title={item.inputs} alt='imag' />
                                <ImageItem source={item.resultimg} name={item.inputs} index={index} />
                            )
                        })}

                        <img src={addImageicon} onClick={manupulateHandler} className='boardImage'
                            style={{
                                cursor: 'pointer',
                                border: globalIndex == null ? '2px solid #55897c' : 'none',
                            }}
                            alt=''
                            title='add new image'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoryBoard