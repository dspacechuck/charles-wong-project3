// EachStory.js
// Stores the component for each story that is rendered on the page.
import './styles.css';
import React from 'react';
import { useState, useEffect } from 'react';

const EachStory = (props) => {

    // const selectedStory = document.querySelector('li');
    const selectedStory = document.querySelector('li');
    const selectedStoryInner = document.querySelector('article');

    // Initialize useState hook to get and set maximized state of a story
    const [maxStory, setMaxStory] = useState(false);



    // console.log(maxStory);

    useEffect(() => {
    }, [maxStory]);

    // Function to handle increasing likes 
    const handleVoteUpFunction = () => {



    }

    // Function to maximize each story upon clicking on it
    const handleMaximizeStory = () => {
        // setMaxStory(true);
        console.log(maxStory);
        setMaxStory(!maxStory);
        console.log(selectedStory);

        // selectedStory.style.width = "1000px";
        // selectedStory.style.height = "1000px";

        selectedStory.classList.toggle("activeLi");

        selectedStoryInner.classList.add("wrapper");
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

        <li onClick={handleMaximizeStory}>
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
        </li>



    )

}

export default EachStory;