// Layout for main page as seen by the user
// Import CSS for main page
import './styles.css';
import EachStory from './EachStory.js';
import Footer from './Footer.js';

const MainSection = () => {

    return (
        <main>

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
                                <form action="#" method="#" name="addAStoryForm" className="addAStoryForm wrapper">
                                    <label for="storyTitle" className="sr-only">Title</label>
                                    <input type="text" id="storyTitle" name="storyTitle" placeholder="Your story's title"></input>

                                    <label for="yourStory" className="sr-only">Tell us your story below</label>
                                    <textarea name="yourStory" id="yourStory" placeholder="Tell us your story"></textarea>
                                    <button type="submit">Post It!</button>
                                </form>
                            </div>
                        </nav>



                    </header>
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
            </div>
            <Footer />

        </main>
    )

}

// Export our MainPage function so that other components can use it
export default MainSection;