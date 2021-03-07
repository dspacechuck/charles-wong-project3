// EachStory.js
// Stores the component for each story that is rendered on the page.
import './styles.css';

const EachStory = () => {

    return (

        <li>
            <article>
                <div className="stats">
                    <div className="star"><span className="starLogo">★</span><span className="likesCount">150</span></div>
                    <div className="dislikes"><span className="xLogo">x</span><span className="dislikesCount">3</span></div>
                </div>
                <h2>My Vivid Dream</h2>
                {/* <h3>Author</h3> */}
                <div className="fullStory">
                    <p>
                        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.

                        Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.

                        Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
                </p>
                </div>
            </article>
        </li>

    )

}

export default EachStory;