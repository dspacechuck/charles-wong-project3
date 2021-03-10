// import reactDom from 'react-dom';
import './styles.css';
import React from 'react';
import firebase from './firebase.js';
// import LocalStoryStore from './LocalStoryStore.js';
import localStoryCollection from './localStoryCollection.js';
import AddAStoryForm from './AddAStoryForm.js';
import EachStory from './EachStory.js';
import Footer from './Footer.js';
import { useState, useEffect } from 'react';

function App() {
  // const [setLatestNumLikes] = props;

  // Initialize firebase.on() method to obtain latest copy of firebase database of stories.  Also copy all stories into a localized array.
  // LocalStoryStore();

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
      const latestFirebaseData = data.val();
      console.log(latestFirebaseData);


      // // Create a storyCollection variable that will store all stories locally (for processing later)
      // const storyCollection = [];

      // for (let storyKey in storyData) {
      //   storyCollection.push({
      //     firebaseKey: storyKey,
      //     title: storyData[storyKey].title,
      //     text: storyData[storyKey].text,
      //     anonAuthor: storyData[storyKey].anonAuthor,
      //     bgCol: storyData[storyKey].bgCol,
      //     numLikes: storyData[storyKey].numLikes,
      //     numDislikes: storyData[storyKey].numDislikes
      //   });
      // }

      // console.log(localStoryCollection(storyData));


      // // Log out the storyCollection object to see what's in our firebase database
      // console.log(storyCollection);

      // // Push the our story collection obtained from firebase into our local array "storyCollection"

      // Call the localStoryCollection function (outside of App.js) and pass in the current firebase database stories to it.  We then take the return (a localized version of the firebase database) and set it to our useState
      setStoryArray(localStoryCollection(latestFirebaseData));

      // Log out the localized version of the array given to us back from the localStoryCollection() function
      setTimeout(() => {
        console.log(storyArray);
      }, 1000)


    })

  }, []);


  // Copy this below function later----------------------
  // Function to handle likes click
  // const handleLikesDislikesClick = (e, fireBaseKey, uniqueIndex, isLikes = true) => {
  //   console.log("event", e);
  //   console.log("fireBaseKey", fireBaseKey);
  //   console.log("unique Index", uniqueIndex);


  //   // Cache our firebase database reference within a variable
  //   const dbRef = firebase.database().ref();
  //   console.log("likes/dislikes clicked");


  //   // create a copy of the story array while performing operations on it
  //   const copyOfStoryArray = [...storyArray];

  //   // increase the likes or dislikes count on the specific story whose star or x was clicked on accordingly
  //   if (isLikes) {
  //     copyOfStoryArray[uniqueIndex].numLikes++;
  //   } else {
  //     copyOfStoryArray[uniqueIndex].numDislikes++;
  //   }

  //   console.log(copyOfStoryArray[uniqueIndex]);

  //   // Update the storyArray state with this new array where the star was clicked on for the story of interest
  //   setStoryArray(copyOfStoryArray);

  //   // Update only the current index in firebase with the corresponding local index in copyOfStoryArray 
  //   dbRef.child(fireBaseKey).set(copyOfStoryArray[uniqueIndex]);

  //   // Log out the updated index in our firebase database
  //   console.log(dbRef.child(fireBaseKey));




  // }

  // Function to update the upvote or downvote (like or dislike) on a story
  const updateVote = (uniqueKey, localArrIndex, propToUpdate, newValue) => {
    console.log(uniqueKey, propToUpdate, newValue);

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
          <header>
            <h1>dreamingly</h1>
            <nav>
              <label htmlFor="toggle">
                <div className="addAStory">+</div>
              </label>
              <input type="checkbox" id="toggle" name="toggle" />

              <AddAStoryForm />


            </nav>
          </header>
        </div>
        {/* <section className="allStories">
          <ul className="allStoriesSubContainer">
              {storyArray.map((storyObj, storyIndex) => {
              return (
                <EachStory
                  story={storyObj}
                />
              )
            })}
          </ul>
        </section> */}

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

                // increaseDislikesFunction={(event) => {
                //   handleLikesDislikesClick(event, fireBaseKey, uniqueIndex, false)
                // }}

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
