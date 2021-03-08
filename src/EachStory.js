// EachStory.js
// Stores the component for each story that is rendered on the page.
import './styles.css';

const EachStory = (props) => {

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

    return (

        <li>
            <article>
                <div className="stats">
                    <div className="star"><span className="starLogo">★</span><span className="likesCount">{props.likesCount}</span></div>
                    <div className="dislikes"><span className="xLogo">x</span><span className="dislikesCount">{props.dislikesCount}</span></div>
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