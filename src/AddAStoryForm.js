// AddAStoryForm.js
import reactDom from 'react-dom';
import './styles.css';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';

const AddAStoryForm = (props) => {

    // Create a class object to store the current story and its properties
    class storyObj {
        constructor(title, text) {
            this.title = title;
            this.text = text;
            this.anonAuthor = "";
            this.timeStamp = "";
            this.numLikes = 0;
            this.numDislikes = 0;
            this.bgCol = "";
            this.storyOrder = 0;
            this.storyComments = [];
        };
    }

    // Create a reference to the firebase database
    const dbRef = firebase.database().ref();



    // Initialize useState for story title input
    const [storyTitle, setStoryTitle] = useState("");

    // Initialize useState for story textarea input
    const [storyText, setStoryText] = useState("");

    // Cache the slideOutForm for later use
    const slideOutForm = document.querySelector('.slideOutForm');

    const handleTitleChange = (event) => {
        setStoryTitle(event.target.value);
    }

    const handleTextChange = (event) => {
        setStoryText(event.target.value);
    }


    // Define form handleSubmit handler
    const handleSubmit = (event) => {
        // Prevent default behaviour of the form (page refresh)
        event.preventDefault();


        // slideOutForm.style.opacity = 0;

        // Create a new story using the storyObj class
        const createStory = new storyObj(storyTitle, storyText);
        console.log(createStory);

        console.log(props);
        console.log(storyTitle);
        console.log(storyText);

        // Slide form back to the right and out of view (this should go in App.js)
        // slideOutForm.style.right = "-100%";

        // Push the new story as an object to our firebase database
        dbRef.push(createStory);

        // Reset storyTitle and storyText states (and binded fields) to empty
        setStoryTitle("");
        setStoryText("");





    }

    return (

        <form action="#" method="#" onSubmit={handleSubmit} name="addAStoryForm" className="addAStoryForm wrapper">
            <label htmlFor="storyTitle" className="sr-only">Title</label>
            <input type="text" id="storyTitle" name="storyTitle" placeholder="Your story's title" onChange={handleTitleChange} value={storyTitle}></input>

            <label htmlFor="yourStory" className="sr-only">Tell us your story below</label>
            <textarea name="yourStory" id="yourStory" placeholder="Tell us your story" onChange={handleTextChange} value={storyText}></textarea>

            <button type="submit">Post It!</button>
        </form>

    )

}

export default AddAStoryForm;
