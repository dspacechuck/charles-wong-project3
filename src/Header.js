// Header.js
// Header component
import AddAStoryForm from './AddAStoryForm.js';

const Header = () => {

    return (

        <header>
            <h1>dreamingly</h1>
            <nav>
                <label htmlFor="toggle">
                    <div className="addAStory">+</div>
                </label>
                <input type="checkbox" id="toggle" name="toggle" />
                <AddAStoryForm />
            </nav>
        </header>

    )
}

export default Header;