// import './App.css';
// import MainSection from './MainPage.js';
import reactDom from 'react-dom';
import './styles.css';
import firebase from './firebase.js';
import AddAStoryForm from './AddAStoryForm.js';
import EachStory from './EachStory.js';
import Footer from './Footer.js';
import { useState, useEffect } from 'react';

function App() {

  // Temp, storybook array, for testing
  const myStoryArray = [];

  // Initialize useState for our array of stories
  const [storyArray, setStoryArray] = useState([]);

  // Define the useEffect hook.  Run it once when this component renders.
  useEffect(() => {

    // Cache our firebase database reference within a variable
    const dbRef = firebase.database().ref();

    // Turn on firebase event listener using .on() method
    dbRef.on('value', (data) => {

      // cache the firebase object in a variable named storyData
      const storyData = data.val();

      // Create a storyCollection variable that will store all stories locally (for processing later)
      const storyCollection = [];

      for (let storyKey in storyData) {
        storyCollection.push({
          firebaseKey: storyKey,
          title: storyData[storyKey].title,
          text: storyData[storyKey].text,
          anonAuthor: storyData[storyKey].anonAuthor,
          bgCol: storyData[storyKey].bgCol,
          numLikes: storyData[storyKey].numLikes,
          numDislikes: storyData[storyKey].numDislikes
        });
      }

      // Log out the storyCollection object to see what's in our firebase database
      console.log(storyCollection);

      // Push the our story collection obtained from firebase into our local array "storyCollection"
      setStoryArray(storyCollection);

    })

  }, []);


  return (
    <main className="App">
      <div className="wrapper">
        <div className="dreamBoard">
          <header>
            <h1>dreamingly</h1>
            <nav>
              <label htmlFor="toggle">
                <div className="addAStory">+</div>
              </label>
              <input type="checkbox" id="toggle" name="toggle" />


              <div className="slideOutForm">
                <AddAStoryForm />
              </div>


            </nav>
          </header>
        </div>
        <section className="allStories">
          <ul className="allStoriesSubContainer">
            {/* Map through our local storyArray obtained from firebase and render one <EachStory /> component per story on the page */}
            {/*Pass each storyObj's properties as props into the EachStory component before receiving a formatted story to be rendered in our allStoriesSubContainer*/}
            {storyArray.map((storyObj, storyIndex) => {
              return (
                <EachStory key={storyObj.firebaseKey} title={storyObj.title} text={storyObj.text} likesCount={storyObj.numLikes} dislikesCount={storyObj.numDislikes} />
              )
            })}
          </ul>
        </section>
      </div>
      <Footer />

    </main>
  );
}

export default App;
