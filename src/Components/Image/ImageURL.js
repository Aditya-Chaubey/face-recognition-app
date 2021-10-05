import './ImageURL.css'

function ImageURL({ onInputchange, onButtonSubmit }) {
    return (
        <div className="Image">
            < p >
                {"Find the faces in a picture"}
            </p >
            <div className="imageSearch">
                <input className="url" type="text" placeholder="Enter image URL here" onChange={onInputchange} />
                <button className='detect' onClick={onButtonSubmit}>detect</button>
            </div>
        </div >
    );
}


export default ImageURL;