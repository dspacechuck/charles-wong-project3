// localStoryCollection.js
// stores localized copy of firebase database of stories

const localStoryCollection = (firebaseStoryData) => {
    // Create a storyCollection variable that will store all stories locally (for processing later)
    const storyCollection = [];



    for (let storyKey in firebaseStoryData) {
        storyCollection.push({
            firebaseKey: storyKey,
            title: firebaseStoryData[storyKey].title,
            text: firebaseStoryData[storyKey].text,
            anonAuthor: firebaseStoryData[storyKey].anonAuthor,
            bgCol: firebaseStoryData[storyKey].bgCol,
            numLikes: firebaseStoryData[storyKey].numLikes,
            numDislikes: firebaseStoryData[storyKey].numDislikes
        });
    }

    return storyCollection;






}

export default localStoryCollection;
