import './styles.css';
import React from 'react';
import firebase from './firebase.js';
import Header from './Header.js';
import localStoryCollection from './localStoryCollection.js';
import EachStory from './EachStory.js';
import Footer from './Footer.js';
import { useState, useEffect } from 'react';

function App() {

  // Initialize useState for our array of stories
  const [storyArray, setStoryArray] = useState([]);

  // Define the useEffect hook.  Run it once when this component renders.
  useEffect(() => {
    // Cache our firebase database reference within a variable
    const dbRef = firebase.database().ref();

    // Turn on firebase event listener using .on() method
    dbRef.on('value', (data) => {

      const latestFirebaseData = data.val();
      // Call the localStoryCollection function (outside of App.js) and pass in the current firebase database stories to it.  We then take the return (a localized version of the firebase database) and set it to our useState
      setStoryArray(localStoryCollection(latestFirebaseData));

    }, (error) => {
      alert("Error fetching stories. Please try again later.");
    })

  }, []);

  // Function to update the upvote or downvote (like or dislike) on a story, including making a copy of the current storyArray in useState first
  const updateVote = (uniqueKey, localArrIndex, propToUpdate, newValue) => {

    const dbRef = firebase.database().ref();
    const copyOfStoryArray = [...storyArray];

    if (propToUpdate === "numLikes") {
      copyOfStoryArray[localArrIndex].numLikes = newValue;
    } else {
      copyOfStoryArray[localArrIndex].numDislikes = newValue;
    }

    setStoryArray(copyOfStoryArray);
    // Update only the current index in firebase with the corresponding local index in copyOfStoryArray 
    dbRef.child(uniqueKey).set(copyOfStoryArray[localArrIndex]);
  }

  return (
    <main className="App">
      <div className="wrapper">
        <div className="dreamBoard">
          <Header />
        </div>
        {/* Map through our local storyArray obtained from firebase and render one <EachStory /> component per story on the page */}
        {/*Pass each storyObj's properties as props into the EachStory component before receiving a formatted story to be rendered in our allStoriesSubContainer*/}
        <section className="allStories">
          <ul className="allStoriesSubContainer">
            {storyArray.map((storyObj, storyIndex) => {
              return (
                <EachStory
                  key={storyObj.firebaseKey}
                  localIndex={storyIndex}
                  storyObj={storyObj}
                  updateVote={updateVote}
                />
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
