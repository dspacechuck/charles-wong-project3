// EachStory.js
// Stores the component for each story that is rendered on the page.
import reactDom from 'react-dom';
import React from 'react';
import './styles.css';

import { useState, useEffect } from 'react';

const EachStory = (props) => {
    const { updateVote } = props;
    // const selectedStory = document.querySelector('li');
    // const selectedStory = document.querySelector('li');
    // const selectedStoryInner = document.querySelector('article');

    // Initialize useState hook to get and set maximized state of a story
    const [maxStory, setMaxStory] = useState(false);
    // const [latestNumLikes, setLatestNumLikes] = useState(0);


    useEffect(() => {
        // setMaxStory(true);
        // Accurately tracks the current state of maxStory useState so its state can be printed
        console.log(maxStory);

    }, [maxStory]);

    // Function to handle adding/removing a like
    const handleLikeVoteFunction = (e) => {

        console.log(e);

        console.log(e.target.classList.length);

        // If the logo's color is not set, upvote the story
        if (e.target.classList.length === 1) {
            console.log("This logo's color was not set");
            // Set color to mustard
            // elColor = "var(--mustard)";
            // Vote = numLikes++
            // updatedValue = props.storyObj.numLikes + 1;
            updateVote(props.storyObj.firebaseKey, props.localIndex, "numLikes", props.storyObj.numLikes + 1);
        }
        // If the target's color is already set (only possible from previous clicks), then decrenent the like count
        else {
            console.log("This logo's color was previously set");
            // Set color to var(--white)
            // elColor = "var(--white)"
            // Vote = numLikes--
            updateVote(props.storyObj.firebaseKey, props.localIndex, "numLikes", props.storyObj.numLikes - 1);
        }

        // Toggle the star's color 
        e.target.classList.toggle("starClicked");
        // setLatestNumLikes(props.storyObj.numLikes - 1);

    }

    // Function to handle adding/removing a dislike
    const handleDislikeVoteFunction = (e) => {

        console.log(props.storyObj);

        console.log(e);



        // If the logo's color is not set, upvote the story
        if (e.target.classList.length === 1) {
            console.log("This logo's color was not set");
            updateVote(props.storyObj.firebaseKey, props.localIndex, "numDislikes", props.storyObj.numDislikes + 1);
        }
        // If the target's color is already set (only possible from previous clicks), then decrenent the like count
        else {
            console.log("This logo's color was previously set");
            updateVote(props.storyObj.firebaseKey, props.localIndex, "numDislikes", props.storyObj.numDislikes - 1);
        }

        // Toggle the x's color 
        e.target.classList.toggle("xClicked");


    }



    // Function to maximize each story upon clicking on it
    const handleMaximizeStory = (e) => {
        // setMaxStory(true);
        console.log("maximized Story clicked");
        setMaxStory(true);

        const selectedStory = e.target.parentNode;
        const selectedStoryInner = e.target.parentNode.childNodes[0];

        console.log(e.target);

        selectedStory.classList.toggle("activeLi");
        selectedStoryInner.classList.toggle("wrapper");


    }

    // Function to minimize each story upon clickin on the minimize button
    const handleMinimizeStory = (e) => {
        console.log("minimze Story clicked");
        setMaxStory(false);
        console.log(e.target);
        e.target.parentNode.parentNode.parentNode.classList.toggle("activeLi");
        e.target.parentNode.parentNode.classList.toggle("wrapper");
    }

    // const handleLikesDislikesClick = (e, fireBaseKey, uniqueIndex, isLikes = true) => {





    //   }




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
                        <span className="starLogo" onClick={(event) => { handleLikeVoteFunction(event) }}>★</span>
                        <span className="likesCount">{props.storyObj.numLikes}</span>
                    </div>
                    <div className="dislikes">
                        <span className="xLogo" onClick={(event) => { handleDislikeVoteFunction(event) }}>x</span>
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