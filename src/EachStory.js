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

    // useEffect(() => {
    //     setMaxStory(true);
    //     console.log(maxStory);

    // }, [!maxStory]);

    useEffect(() => {
        // setMaxStory(true);
        console.log(maxStory);

    }, [maxStory]);

    // Function to handle increasing likes 
    const handleVoteUpFunction = () => {



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



    return (

        <li>
            <article>
                {
                    // Only show the "close story button after maximizing any story"
                    maxStory
                        ? <div className="titleBar">
                            <button className="minimizeBtn" onClick={(event) => { handleMinimizeStory(event) }}>x</button>
                        </div>

                        : null
                }
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