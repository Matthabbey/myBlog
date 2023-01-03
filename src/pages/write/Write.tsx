import './write.css'
import {GrAdd} from 'react-icons/gr'

const Write = () => {
  return (
    <div className='write'>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <GrAdd />
                </label>
                <input type="file" className='fileInput'/>
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