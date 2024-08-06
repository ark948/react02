import profilePic from './assets/profile.png'

function Card() {
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>Bro Code</h2>
            <p>I make Youtube videos and play video games</p>
        </div>
    );
}

export default Card