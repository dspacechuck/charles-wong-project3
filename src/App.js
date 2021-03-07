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
  return (
    <main className="App">
      <div className="wrapper">
        <div className="dreamBoard">
          <header>
            <h1>dreamingly</h1>
            <nav>
              <label for="toggle">
                <div className="addAStory">+</div>
              </label>
              <input type="checkbox" id="toggle" name="toggle" />
              <div className="slideOutForm">
                <AddAStoryForm />
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
