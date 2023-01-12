import './write.css'
import {GrAdd} from 'react-icons/gr'

const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg' src={"https://source.unsplash.com/random/1400x750?sig=1"} alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <GrAdd className='writeIcon'/>
                </label>
                <input type="file" id='fileInput' style={{display: "none"}}/>
                <input type="text"  placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='tell your story' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write