import React, { useContext } from 'react';
import storyContext from '../context/story/storyContext';
import './Story.css';
import './StoryDownload.css'
import { Link } from 'react-router-dom';

const Story = () => {
    const context = useContext(storyContext);
    const { allimages } = context;

    const handlePrintAndDownload = () => {
        // Trigger the print dialog
        window.print();
    }


    return (
        <><div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>
            <div className='storyNav' >
                <Link to='/' type="button" className=" backbtn1">Back</Link>

                <div className='storyHeading' >Story Board</div>

                <button className="btn btn-secondary download1 " onClick={handlePrintAndDownload}>Download</button>
            </div>

            <div style={{ display: 'flex', width: '90vw', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
                    {allimages.length > 0 && allimages.map((item, index) => {
                        // console.log('tj')
                        return (
                            <div >
                                <img className='sotryimg' src={item.resultimg} title={item.inputs} alt="..." />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Story