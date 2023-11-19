import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import StoryState from './context/story/StoryState';
import Preview from './components/Preview';
import Story from './components/Story';

function App() {

  return (
    <>
      <StoryState>
        <BrowserRouter>
          <Navbar />
          {/* <Home /> */}
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/preview" element={<Preview />} />
              <Route exact path="/story" element={<Story />} />
            </Routes>
          </div>
        </BrowserRouter>
      </StoryState>
    </>
  );
}

export default App;
