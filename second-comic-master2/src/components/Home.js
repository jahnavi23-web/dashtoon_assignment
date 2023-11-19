import React, { useContext } from 'react';
import storyContext from '../context/story/storyContext';
import './Home.css';
import './Loader.css'
import StoryBoard from './StoryBoard';
import { Link } from 'react-router-dom';
import ImageItem from './ImageItem';
import addImageicon from './images/addImageIcon.png'

const Home = () => {
    const context = useContext(storyContext);
    const { allimages, setAllimages, loader, resultimg, inputs, setInputs, addtoSlide, query, setGlobalIndex, globalIndex, setresultimg } = context;

    const onChangeHandler = (e) => {
        setInputs(e.target.value);
    }

    const slidesHandler = () => {
        // console.log('global', globalIndex)
        if (globalIndex === 0) {
            allimages[0] = { resultimg, inputs };
            setAllimages([...allimages]);
            setInputs(null);
            // setresultimg()
            // setGlobalIndex()
            // setGlobalIndex()

        } else if (globalIndex > 0) {
            allimages[globalIndex] = { resultimg, inputs };
            setAllimages([...allimages]);
            setInputs(null);
            // setresultimg()
            // setGlobalIndex()
            // setGlobalIndex()

        } else {
            setAllimages([...allimages, { resultimg, inputs }]);
            setresultimg()
            setGlobalIndex()
            setGlobalIndex()
            setInputs(null);
        }
    }

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
            <div className='home'>

                <div className='mobileStoryboard'>

                    {allimages.length > 0 && allimages.map((item, index) => {
                        // console.log(item)
                        return (
                            // <img className='boardImage' src={item.resultimg} title={item.inputs} alt='imag' />
                            <ImageItem source={item.resultimg} name={item.inputs} index={index} />
                        )
                    })}

                    <img src={addImageicon} onClick={manupulateHandler} className='boardImage1'
                        style={{
                            cursor: 'pointer',
                            border: globalIndex == null ? '2px solid #55897c' : 'none',
                        }}
                        alt=''
                        title='add new image'
                    />

                </div>



                <div className='homeLeft'>
                    {!loader && resultimg && <img className='genImg' src={resultimg} alt='genImg' title={inputs} />}

                    {resultimg && addtoSlide &&

                        <button type="button" className="addbutton" onClick={slidesHandler}>
                            <span className="button__text">Add to Story</span>
                            <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                        </button>
                    }

                    {!loader &&
                        <form className="searchBox" onSubmit={query}>

                            <input className="searchInput" type="text" onChange={onChangeHandler} name="genImage" placeholder="Write your prompt here..." />
                            <button className="btn1" type='submit'
                                disabled={inputs == null ? 'true' : ''}
                            >

<svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">

  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-4h2v4h-2v-4zm0-6h2v4h-2V7z"></path>
</svg>


                                <span className="text">Generate</span>
                            </button>

                        </form>
                    }

                    {loader &&
                        <div className='loaderh' style={{ width: '60%', height: '160px', background: '#312e2e', borderRadius: '6px', display: 'flex', alignItems: 'center', }}>
                            <div style={{ marginLeft: '20px' }}>
                                <div className="loader"></div>
                            </div>

                            <div style={{ paddingLeft: '40px', paddingRight: '8px' }}>
                                <p style={{ color: 'white' }}>
                                    Hold up. We are generating your image
                                </p>
                            </div>
                        </div>
                    }

                </div>


                <div className='homeright'>
                    <StoryBoard />
                    {/* <Link to='/preview'>Preview</Link> */}
                    {allimages.length > 0 && <Link to='/story' className='btn previwbtn'>Preview</Link>}

                </div>

                {allimages.length > 0 && <Link to='/story' className='btn  mobilepreview1'>Preview</Link>}

            </div>
        </>
    )
}

export default Home