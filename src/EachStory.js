// EachStory.js
// Stores the component for each story that is rendered on the page.
import reactDom from 'react-dom';
import React from 'react';
import './styles.css';

import { useState, useEffect } from 'react';

const EachStory = (props) => {

    // const selectedStory = document.querySelector('li');
    // const selectedStory = document.querySelector('li');
    // const selectedStoryInner = document.querySelector('article');

    // Initialize useState hook to get and set maximized state of a story
    const [maxStory, setMaxStory] = useState(false);



    // console.log(maxStory);

    useEffect(() => {
    }, [maxStory]);

    // Function to handle increasing likes 
    const handleVoteUpFunction = () => {



    }

    // Function to maximize each story upon clicking on it
    const handleMaximizeStory = (e) => {
        // setMaxStory(true);
        console.log("maximized Story clicked");


        // console.log(selectedStory);

        const selectedStory = e.target.parentNode;
        const selectedStoryInner = e.target.parentNode.childNodes[0];


        console.log(e.target);

        // console.log(e);

        // console.log(e.target.parentNode.parentNode);

        // selectedStory.style.width = "1000px";
        // selectedStory.style.height = "1000px";

        selectedStory.classList.toggle("activeLi");
        selectedStoryInner.classList.toggle("wrapper");

        setMaxStory(!maxStory);
        console.log(maxStory);
    }

    // Function to hide "read more" button on story maximize
    const readMoreBtn = () => {

    }

    // let props = tempVar;
    // // Event handler to handle adding a star to a story
    // const handleStarUp = () => {
    //     console.log(tempVar);
    //     props.likesCount++;
    //     console.log(tempVar.likesCount);
    // }

    // // Event handler to handle adding a dislike to a story
    // const handleDislikeUp = () => {
    //     console.log(tempVar);
    //     props.dislikesCount++;
    //     console.log(tempVar.dislikesCount);
    // }

    // onClick={handleStarUp}
    // onClick={handleDislikeUp}

    // Helper function to disable the clicked icon
    // const disableIcon = (props) => {
    //     console.log(props);
    //     // if (isLikes) {
    //     //     props.target.style.color = "var(--mustard)";
    //     // } else {
    //     //     props.target.style.color = "var(--dreamPink)";
    //     // }

    // }

    return (

        <li>
            <article>
                <div className="stats">
                    {/* <div className="star">
                        <span className="starLogo" onClick={handleVoteUpFunction}>★</span>
                        <span className="likesCount">{props.likesCount}</span>
                    </div>
                    <div className="dislikes">
                        <span className="xLogo" onClick={props.increaseDislikesFunction}>x</span>
                        <span className="dislikesCount">{props.dislikesCount}</span>
                    </div> */}
                    <div className="star">
                        <span className="starLogo" onClick={props.increaseLikesFunction}>★</span>
                        <span className="likesCount">{props.likesCount}</span>
                    </div>
                    <div className="dislikes">
                        <span className="xLogo" onClick={props.increaseDislikesFunction}>x</span>
                        <span className="dislikesCount">{props.dislikesCount}</span>
                    </div>
                </div>
                <h2>{props.title}</h2>
                {/* <h3>Author</h3> */}
                <div className="fullStory">
                    <p>
                        {props.text}
                    </p>
                </div>
            </article>
            {/* <button onClick={(event) => { handleMaximizeStory(event) }}>Read More</button> */}
            <button onClick={(event) => { handleMaximizeStory(event) }}>Read More</button>
        </li>



    )

}

export default EachStory;