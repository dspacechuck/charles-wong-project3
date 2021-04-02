// Header.js
// Header component
import { useState } from 'react';
import AddAStoryForm from './AddAStoryForm.js';


const Header = () => {

    const [formBtn, setFormBtn] = useState(false);

    const handleClick = () => {
        const addStoryBtn = document.querySelector('.addAStory');

        if (formBtn === false) {
            addStoryBtn.textContent = '-';
        } else {
            addStoryBtn.textContent = '+';
        }
        setFormBtn(!formBtn);
    }

    return (

        <header>
            <h1>dreamingly</h1>
            <nav>
                <label htmlFor="toggle">
                    <div className="addAStory" onClick={handleClick} value={formBtn}>+</div>
                </label>
                <input type="checkbox" id="toggle" name="toggle" />
                <AddAStoryForm />
            </nav>
        </header>

    )
}

export default Header;