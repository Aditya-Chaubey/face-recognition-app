import Tilt from 'react-tilt';
import './Logo.css'
import brain from "./brain.png"
function Logo() {
    return (
        <div>
            <Tilt className="Tilt" options={{ max: 50 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner">
                    <img alt="brain" src={brain} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;