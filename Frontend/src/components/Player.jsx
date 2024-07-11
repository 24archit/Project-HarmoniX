import '../assets/styles/Player.css';
import trackLink from '../assets/media/Titanic.mp3'

export default function Player() {
    return (
        <span className="player">
            <audio id="player" controls>
                <source src={trackLink} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </span>
    );
}
