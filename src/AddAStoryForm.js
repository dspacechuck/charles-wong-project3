// UserStoryForm.js
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

    // Initialize useState to track the form's state (submitted or not)
    const [formSubmitState, setFormSubmitState] = useState(false);

    // Cache html elements on page
    const slideOutForm = document.querySelector('.slideOutForm');
    const navCheckBox = document.querySelector('nav input[type="checkbox"]');
    const input = document.querySelector('input');
    const textArea = document.querySelector('textarea');
    const submitBtn = document.querySelector('button[type=submit]');
    // const textAreaBorColor = document.querySelector('textarea').style.borderColor;

    // Initialize useEffect hook to track all changes to myForm useState
    useEffect(() => {

    }, [formSubmitState]);

    const handleTitleChange = (event) => {
        setStoryTitle(event.target.value);
    }

    const handleTextChange = (event) => {
        setStoryText(event.target.value);
    }

    // Toggles slideOut Menu on screen or off-screen
    const toggleMenu = () => {
        navCheckBox.checked = !navCheckBox.checked;
    }

    // Define form handleSubmit handler
    const handleSubmit = (event) => {
        // Prevent default behaviour of the form (page refresh)
        event.preventDefault();
        console.log("submit click detected");

        // Set the form's submitted state to true
        setFormSubmitState(true);

        console.log(document.querySelector('form'));

        // Create a new story using the storyObj class
        const createStory = new storyObj(storyTitle, storyText);
        console.log(createStory);

        console.log(props);
        console.log(storyTitle);
        console.log(storyTitle.length);

        console.log(storyText);
        console.log(storyText.length);

        // // Push the new story as an storyObj to our firebase database
        dbRef.push(createStory);

        // Reset storyTitle and storyText states (and binded fields) to empty
        setStoryTitle("");
        setStoryText("");

        setTimeout(() => {
            // Toggles the slideOutMenu on/off 
            toggleMenu();
        }, 1500)

        setTimeout(() => {
            setFormSubmitState(false);
        }, 2000);

    }

    return (
        <div className="slideOutForm">
            {
                // If the form has just been submitted (formSubmitState = true), show the user a Thank you message instead of a form
                formSubmitState
                    ? <h2 className="submitSuccessful">Thank you for submitting your story!</h2>
                    : <form action="#" method="#"
                        onSubmit={handleSubmit} name="addAStoryForm" className="addAStoryForm wrapper">
                        <label htmlFor="storyTitle" className="sr-only">Title</label>
                        <input type="text" id="storyTitle" name="storyTitle" placeholder="Your story's title" required={true} onChange={handleTitleChange} value={storyTitle}></input>

                        <label htmlFor="yourStory" className="sr-only">Tell us your story below</label>
                        <textarea name="yourStory" id="yourStory" placeholder="Tell us your story" required={true} onChange={handleTextChange} value={storyText} minLength="10"></textarea>

                        <button type="submit">Post It!</button>
                    </form>



            }

        </div>
    )

}

export default AddAStoryForm;

