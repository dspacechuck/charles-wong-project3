// EachStory.js
// Component to store details of each story that is rendered on the page.
import React from 'react';
import './styles.css';
import { useState } from 'react';

const EachStory = (props) => {
    const { updateVote } = props;

    // Initialize useState hook to get and set maximized state of a story
    const [maxStory, setMaxStory] = useState(false);

    // Tracks status of star and x icons (if they have been upvoted or not in the current session, and the associated event object that triggered it)
    const [starUp, setStarUp] = useState([false, null]);
    const [xUp, setXUp] = useState([false, null]);

    // Function to handle adding/removing a like, including toggling between voted/non-voted color styling on the star
    const handleLikeVoteFunction = (e) => {

        console.log(e);
        console.log(e.target.classList.length);

        // If the logo's color is not set, upvote the story
        if (e.target.classList.length === 1) {
            updateVote(props.storyObj.firebaseKey, props.localIndex, "numLikes", props.storyObj.numLikes + 1);
        }
        // If the target's color is already set (only possible from previous clicks), then decrenent the like count
        else {
            updateVote(props.storyObj.firebaseKey, props.localIndex, "numLikes", props.storyObj.numLikes - 1);
        }
        // Toggle the star's color 
        e.target.classList.toggle("starClicked");

        // Toggles upvoted state of star and pass in the event that triggered it
        setStarUp([!starUp[0], e]);

    }

    // Function to handle adding/removing a dislike, including toggling between voted/non-voted color styling on the x
    const handleDislikeVoteFunction = (e) => {

        console.log(props.storyObj);
        console.log(e);

        // If the logo's color is not set, upvote the story
        if (e.target.classList.length === 1) {
            updateVote(props.storyObj.firebaseKey, props.localIndex, "numDislikes", props.storyObj.numDislikes + 1);
        }
        // If the target's color is already set (only possible from previous clicks), then decrenent the like count
        else {
            updateVote(props.storyObj.firebaseKey, props.localIndex, "numDislikes", props.storyObj.numDislikes - 1);
        }

        // Toggle the x's color 
        e.target.classList.toggle("xClicked");

        // Toggles upvoted state of X and pass in the event that triggered it
        setXUp([!xUp[0], e]);

    }

    // Function to maximize each story upon clicking on it, including adding a wrapper and updating the state of the maxStory array (useState)
    const handleMaximizeStory = (e) => {

        setMaxStory(true);

        const selectedStory = e.target.parentNode;
        const selectedStoryInner = e.target.parentNode.childNodes[0];

        selectedStory.classList.toggle("activeLi");
        selectedStoryInner.classList.toggle("altWrapper");

    }

    // Function to minimize each story upon clickin on the minimize button, including removing the wrapper on it and updating the state of the maxStory array (useState)
    const handleMinimizeStory = (e) => {

        setMaxStory(false);

        const selectedStory = e.target.parentNode.parentNode.parentNode;
        const selectedStoryInner = e.target.parentNode.parentNode;

        selectedStory.classList.toggle("activeLi");
        selectedStoryInner.classList.toggle("altWrapper");
    }

    return (

        <li>
            {/* // Only show the "close story button after maximizing any story" */}
            <article>
                {
                    maxStory
                        ? <div className="titleBar">
                            <button className="minimizeBtn" onClick={(event) => { handleMinimizeStory(event) }}>x</button>
                        </div>
                        : null
                }
                <div className="stats">
                    <div className="star">
                        <button className="starLogo" disabled={xUp[0]} onClick={(event) => { handleLikeVoteFunction(event) }}>★</button>
                        <span className="likesCount">{props.storyObj.numLikes}</span>
                    </div>
                    <div className="dislikes">
                        <button className="xLogo" disabled={starUp[0]} onClick={(event) => { handleDislikeVoteFunction(event) }}>x</button>
                        <span className="dislikesCount">{props.storyObj.numDislikes}</span>
                    </div>
                </div>
                <h2>{props.storyObj.title}</h2>
                {/* <h3>Author</h3> */}
                <div className="fullStory">
                    <p>
                        {props.storyObj.text}
                    </p>
                </div>
            </article>

            {
                // Only show the "read more button before maximizing any story"
                maxStory
                    ? null
                    : <button className="readMore" onClick={(event) => { handleMaximizeStory(event) }}>Read More</button>
            }

        </li>

    )

}

export default EachStory;