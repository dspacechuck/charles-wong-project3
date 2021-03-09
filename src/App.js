// import reactDom from 'react-dom';
import './styles.css';
import React from 'react';
import firebase from './firebase.js';
import AddAStoryForm from './AddAStoryForm.js';
import EachStory from './EachStory.js';
import Footer from './Footer.js';
import { useState, useEffect } from 'react';

function App() {

  // retrieve stories from firebase and save them locally for processing
  // updates our local stories array when there are any changes to the firebase database
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

  // Function to handle likes click
  const handleLikesDislikesClick = (e, fireBaseKey, uniqueIndex, isLikes = true) => {
    // console.log("event", event);

    // Cache our firebase database reference within a variable
    const dbRef = firebase.database().ref();
    console.log("likes/dislikes clicked");

    // create a copy of the story array while performing operations on it
    const copyOfStoryArray = [...storyArray];

    // increase the likes or dislikes count on the specific story whose star or x was clicked on accordingly
    if (isLikes) {
      copyOfStoryArray[uniqueIndex].numLikes++;
    } else {
      copyOfStoryArray[uniqueIndex].numDislikes++;
    }

    console.log(copyOfStoryArray[uniqueIndex]);

    // Update the storyArray state with this new array where the star was clicked on for the story of interest
    setStoryArray(copyOfStoryArray);

    // Update only the current index in firebase with the corresponding local index in copyOfStoryArray 
    dbRef.child(fireBaseKey).set(copyOfStoryArray[uniqueIndex]);

    // Log out the updated index in our firebase database
    console.log(dbRef.child(fireBaseKey));

    // EachStory.disableIcon(e);

    // // Helper function to disable clicked icon for currrent session (prevents multiple up or downvotes)
    // const disableIcon = () => {
    //   console.log(e.target);
    //   if (isLikes) {
    //     e.target.style.color = "var(--mustard)";
    //   } else {
    //     e.target.style.color = "var(--dreamPink)";
    //   }   
    // }

    // // Invoke the helper function to disable the clicked-on icon
    // disableIcon();

  }

  // const handleFormSubmitted = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted", e);
  // }

  // Function to disable the current likes or dislikes icon after clicking on them
  // const handleIconClick = (e) => {
  //   console.log("event", e);
  //   console.log("icon click");
  // }

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

              {/* <div className="slideOutForm"> */}
              <AddAStoryForm />

              {/* </div> */}

            </nav>
          </header>
        </div>
        <section className="allStories">
          <ul className="allStoriesSubContainer">
            {/* Map through our local storyArray obtained from firebase and render one <EachStory /> component per story on the page */}
            {/*Pass each storyObj's properties as props into the EachStory component before receiving a formatted story to be rendered in our allStoriesSubContainer*/}
            {storyArray.map((storyObj, storyIndex) => {
              return (
                <EachStory
                  key={storyObj.firebaseKey}
                  title={storyObj.title}
                  text={storyObj.text}
                  likesCount={storyObj.numLikes}
                  dislikesCount={storyObj.numDislikes}
                  increaseLikesFunction={(event) => {
                    handleLikesDislikesClick(event, storyObj.firebaseKey, storyIndex, true)

                  }}
                  increaseDislikesFunction={(event) => {
                    handleLikesDislikesClick(event, storyObj.firebaseKey, storyIndex, false)

                  }
                  } />
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
