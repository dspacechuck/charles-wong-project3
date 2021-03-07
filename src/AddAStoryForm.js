// AddAStoryForm.js
import './styles.css';

const AddAStoryForm = () => {

    return (

        <form action="#" method="#" name="addAStoryForm" className="addAStoryForm wrapper">
            <label for="storyTitle" className="sr-only">Title</label>
            <input type="text" id="storyTitle" name="storyTitle" placeholder="Your story's title"></input>

            <label for="yourStory" className="sr-only">Tell us your story below</label>
            <textarea name="yourStory" id="yourStory" placeholder="Tell us your story"></textarea>

            <button type="submit">Post It!</button>
        </form>

    )

}

export default AddAStoryForm;