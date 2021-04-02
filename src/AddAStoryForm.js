// UserStoryForm.js
// Component for "Add a new story" form and all relevant functions
import './styles.css';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';

const AddAStoryForm = () => {

    // Create a class object to store the current story and its properties
    // Additional properties specified for future scaling
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

    // Initialize useState to track the form's state (submitted or not)
    const [formSubmitState, setFormSubmitState] = useState(false);

    // Cache nav checkbox element on page
    const navCheckBox = document.querySelector('nav input[type="checkbox"]');

    // Initialize useEffect hook to track all changes to myForm useState
    useEffect(() => {

    }, [formSubmitState]);

    // Event handler for tracking change in story title
    const handleTitleChange = (event) => {
        setStoryTitle(event.target.value);
    }

    // Event handler for change in textarea content
    const handleTextChange = (event) => {
        setStoryText(event.target.value);
    }

    // Toggles slideOut Menu on screen or off-screen
    const toggleMenu = () => {
        navCheckBox.checked = !navCheckBox.checked;
    }

    // Define form handleSubmit handler
    const handleSubmit = (event) => {
        event.preventDefault();

        // Set the form's submitted state to true
        setFormSubmitState(true);

        // Create a new story using the storyObj class
        const createStory = new storyObj(storyTitle, storyText);

        // Push the new story as an storyObj to our firebase database
        dbRef.push(createStory);

        // Reset storyTitle and storyText states (and binded fields) to empty
        setStoryTitle("");
        setStoryText("");

        setTimeout(() => {
            // Toggles the slideOutMenu on/off 
            toggleMenu();
        }, 1500)

        setTimeout(() => {
            // Set the form's submit state to false
            setFormSubmitState(false);
        }, 2000);
    }

    return (
        <div className="slideOutForm">
            {
                // If the form has just been submitted (formSubmitState = true), show the user a Thank You message instead of a form
                formSubmitState
                    ? <h2 className="submitSuccessful">Thank you for submitting your story!</h2>
                    : <form action="#" method="#"
                        onSubmit={handleSubmit} name="addAStoryForm" className="addAStoryForm altWrapper">
                        <label htmlFor="storyTitle" className="sr-only">Title</label>
                        <input type="text" id="storyTitle" name="storyTitle" placeholder="Your story's title" required={true} onChange={handleTitleChange} value={storyTitle} minLength="1" maxLength="70"></input>

                        <label htmlFor="yourStory" className="sr-only">Tell us your story below</label>
                        <textarea name="yourStory" id="yourStory" placeholder="Tell us your story" required={true} onChange={handleTextChange} value={storyText} minLength="10" maxLength="10000"></textarea>

                        <button type="submit">Post It!</button>
                    </form>
            }
        </div>
    )
}

export default AddAStoryForm;

