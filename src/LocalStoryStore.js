// localStoryStore.js
// Retrieves and stores latest copy of firebase database of stories
import React from 'react';
import firebase from 'firebase';
import { useState, useEffect } from 'react';


const LocalStoryStore = () => {

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
            console.log(storyData);
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







}

export default LocalStoryStore;