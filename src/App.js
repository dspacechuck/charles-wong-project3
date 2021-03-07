// import './App.css';
// import MainSection from './MainPage.js';
import reactDom from 'react-dom';
import './styles.css';
import firebase from './firebase.js';
import AddAStoryForm from './AddAStoryForm.js';
import EachStory from './EachStory.js';
import Footer from './Footer.js';
import { useState, useEffect } from 'react';

function App() {

  // Temp, storybook array, for testing
  const myStoryArray = [];

  // Initialize useState for our array of stories
  const [storyArray, setStoryArray] = useState([]);

  // // Initialize useState for story title input
  // const [storyTitle, setStoryTitle] = useState("");

  // // Initialize useState for story textarea input
  // const [storyText, setStoryText] = useState("");

  // // Event handler to handle submit form click
  // const handleSubmitClick = (event) => {

  //   event.preventDefault();

  //   console.log(event.target.value);

  // }

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


              <div className="slideOutForm">
                <AddAStoryForm
                // storyTitle={title}
                // key={uniqueIndex}
                // addNewStory={() => { handleSubmitClick(uniqueIndex) }}
                />
              </div>


            </nav>
          </header>
        </div>
        <section className="allStories">
          <ul className="allStoriesSubContainer">
            <EachStory />
            <EachStory />
            <EachStory />
            <EachStory />
            <EachStory />
            <EachStory />
            <EachStory />
            <EachStory />
            <EachStory />
            <EachStory />
            <EachStory />
            <EachStory />
            <EachStory />
            <EachStory />
            <EachStory />
          </ul>
        </section>
      </div>
      <Footer />

    </main>
  );
}

export default App;
