import React, { useContext} from 'react';
import storyContext from '../context/story/storyContext';


const Preview = () => {
    const context = useContext(storyContext);
    const { allimages} = context;

    return (
        <>
            <div id="carouselExample" style={{ marginTop: '70px', height: '70vh' }} className="carousel slide">
                <div className="carousel-inner">

                    {/* <div className="carousel-item active">
                        <img src={allimages[0]} className="d-block w-70 h-70" alt="..." />
                    </div> */}

                    


                    {/* {allimages.length > 0 && allimages.map((item, index) => {
                        if (index === 0) {
                            return (
                                <div key={index} className="carousel-item active">
                                    <img src={item} className="d-block imgitem " alt="..." />
                                </div>
                            )
                        }

                    })} */}

                    {/* {allimages.length > 0 && allimages.map((item, index) => {
                        if (index > 0) {
                            return (
                                <div key={index} className="carousel-item active">
                                    <img src={item} className="d-block imgitem " alt="..." />
                                </div>
                            )
                        }
                    })} */}

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Preview