import './FaceRecognition.css';
function FaceRecognition({ imagelink, box }) {
    return (
        <div className="imageContainer">
            <div className="finalbox">
                <img id="faceImage" className="finalImg" alt="" src={imagelink} />
                <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>
                </div>
            </div>
        </div>
    );
}
export default FaceRecognition;