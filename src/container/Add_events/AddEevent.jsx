import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
// import ReactDateInputs from 'react-date-inputs'
import './add_event.css'

const AddEevent = () => {
  const [images, setImages] = useState([])
  const [imageUrls, setImageUrls] = useState([])

  useEffect(()=> {
    if(images.length < 1) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);

  }, [images])

  const onImageChange = (event) => {
    setImages([...event.target.files])

  }

  // Date hook
    // const [value, setValue] = useState(new Date());



  return (
    <div className='App-add_event container'>
      <div className="app-upload_image">
        <input type="file" className='upload_input' multiple accept='images/*' onChange={onImageChange}/>
        <div className="upload-image">
        {imageUrls.map(imageSrc => <img src={imageSrc} alt="pic" />)}

        </div>
        

      </div>

      <div className="app-date">
        <input type="date" />
       


      </div>
      <div className="app-upload_btn">
      <Link to="/event">
            <button className='custom-button'>
            View Event
            </button>
        </Link>

      </div>
    </div>
  )
}

export default AddEevent