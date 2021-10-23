import React, { useState } from 'react'
import Sidebar from './Sidebar'
import './assets/css/custom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSignInAlt,
  faHeadphonesAlt,
  faPhotoVideo,
  faDownload
} from '@fortawesome/free-solid-svg-icons'
import { FaGoogleDrive, FaHeadphonesAlt, FaPhotoVideo } from 'react-icons/fa'

const GoogleDrive = () => {
  const [str, setStr] = useState('')
  const [classname, setClassname] = useState({ p: true, a: false, v: false })
  // clear the form
  const clearForm = () => {
    const clearInput = document.getElementById('first-link')
    const clearTEaxtarea = document.getElementById('DirectLink')
    const clearAudio = document.getElementById('embed-audio')
    const clearVideo = document.getElementById('embed-video')
    clearInput.value = ''
    clearTEaxtarea.value = ''
    clearAudio.value = ''
    clearVideo.value = ''
  }
  //copy buttons
  const copyEmbededText = () => {
    var textField = document.getElementById('DirectLink')
    if (textField.value) {
      textField.focus()
      textField.select()
      document.execCommand('copy')
      alert('text is copied!!')
    } else {
      alert('please Enter a Valid Download Link')
    }
  }
  const copyEmbededAudioText = () => {
    var textField = document.getElementById('embed-audio')
    if (textField.value) {
      textField.focus()
      textField.select()
      document.execCommand('copy')
      alert('text is copied!')
    } else {
      alert('Please Enter a Valid Download Link ')
    }
  }
  const copyEmbededVideoText = () => {
    var textField = document.getElementById('embed-video')
    if (textField.value) {
      textField.focus()
      textField.select()
      document.execCommand('copy')
      alert('text is copied!')
    } else {
      alert('Please Enter a Valid Download Link ')
    }
  }
  const onChange = e => {
    setStr(e.target.value)
  }
  const onClick = e => {
    e.preventDefault()
    let finalUrl = ''
    if (str.includes('https://drive.google.com/file/d/')) {
      finalUrl = 'https://drive.google.com/uc?export=download&id='
    }
    function getFileIdFromDriveUrl (url) {
      var match = url.match(/([a-z0-9_-]{25,})[$/&?]/i)
      return match ? match[1] : null
    }
    const dl = document.getElementById('DirectLink')
    const code = (dl.value = finalUrl + getFileIdFromDriveUrl(str))

    // embeded audio
    const audio = document.getElementById('embed-audio')
    const audio1 = '<audio width="300" height="32" controls="controls" src="'
    const audio2 = '" type="audio/mp3"></audio>'
    audio.value = `${audio1}${code}${audio2}`

    //embeded video
    const video = document.getElementById('embed-video')
    const video1 = '<iframe src="'
    const video2 = '/preview" width="560" height="315"></iframe>'
    video.value = `${video1}${'https://drive.google.com/file/d/'}${getFileIdFromDriveUrl(
      str
    )}${video2}`
  }

  const hideVA = () => {
    const el = document.getElementById('videoLink')
    const el2 = document.getElementById('audioLink')
    const ela = document.getElementById('pasteLink')
    el.style.display = 'none'
    el2.style.display = 'none'
    ela.style.display = 'block'
    setClassname({ p: true, a: false, v: false })
  }

  const hideEA = () => {
    const el3 = document.getElementById('pasteLink')
    const el4 = document.getElementById('audioLink')
    const elb = document.getElementById('videoLink')
    el3.style.display = 'none'
    el4.style.display = 'none'
    elb.style.display = 'block'
    setClassname({ p: false, a: false, v: true })
  }

  const hideEV = () => {
    const el5 = document.getElementById('pasteLink')
    const el6 = document.getElementById('videoLink')
    const elc = document.getElementById('audioLink')

    el5.style.display = 'none'
    el6.style.display = 'none'
    elc.style.display = 'block'
    setClassname({ p: false, a: true, v: false })
  }
  return (
    <div>
      <div className='homePage'>
        <Sidebar />
        <div className='main-generator'>
          <h1> Google Direct Download Link Generator</h1>
          <div id='box'>
            <div id='container'>
              <nav className='tabs nav'>
                <span className={'span'} onClick={hideVA}>
                  <label
                    className={`tab-one ${classname.p ? 'active' : ''}`}
                    id='first-tab'
                  >
                    <FontAwesomeIcon icon={faSignInAlt} />
                    Paste Link
                  </label>
                </span>
                <span className={'span'} onClick={hideEV}>
                  <label
                    className={`tab-two ${classname.a ? 'active' : ''}`}
                    id='second-tab'
                  >
                    <FontAwesomeIcon icon={faHeadphonesAlt} />
                    Embed Audio
                  </label>
                </span>
                <span className={'span'} onClick={hideEA}>
                  {' '}
                  <label
                    className={`tab-three ${classname.v ? 'active' : ''}`}
                    id='third-tab'
                  >
                    <FontAwesomeIcon icon={faPhotoVideo} />
                    EmbedVideo/Docs
                  </label>
                </span>
              </nav>
            </div>

            {/* Paste Link Section */}
            <div id='embeded-section'>
              <div className='embed-code' id='pasteLink'>
                <FontAwesomeIcon icon={faDownload} />

                <h2>Google Drive link</h2>
                <p>Paste your Google Drive File link below</p>
                <form>
                  <label>
                    <FaGoogleDrive className='googelDrive' />

                    <input
                      id='first-link'
                      onChange={onChange}
                      placeholder='Google Drive Link'
                    />
                  </label>

                  <button id='btn' onClick={onClick}>
                    {' '}
                    Generate Direct Download Link
                  </button>
                  <h3>Direct download Link</h3>
                  <textarea id='DirectLink' cols='30' rows='10'></textarea>
                  <span onClick={copyEmbededText} className='copy'>
                    Copy
                  </span>
                  <hr />
                  <button onClick={clearForm} className='clear'>
                    Clear Form
                  </button>
                </form>
              </div>

              {/* Audio Section */}
              <div className='embed-code' id='audioLink'>
                <FaHeadphonesAlt className='head-phone' />
                <h2 className='first-head'>Audio Embed Link</h2>
                <p>
                  If your link was an Audio file, use the code snippet to embed
                  it on a web page.
                </p>
                <hr />
                <h2>Audio Embed Link</h2>
                <textarea id='embed-audio' cols='30' rows='10'></textarea>
                <span onClick={copyEmbededAudioText} className='copy-audio'>
                  Copy
                </span>
              </div>
              {/* Video Section */}
              <div className='embed-code' id='videoLink'>
                <FaPhotoVideo className='video-icon' />
                <h2 className='first-head'>Video/Doc Embed Link</h2>
                <p>
                  If your link was an Video or Document, use the code snippet to
                  embed it on a web page.
                </p>
                <hr />
                <h2>Video/Doc Embed Link</h2>
                <textarea id='embed-video' cols='30' rows='10'></textarea>
                <span onClick={copyEmbededVideoText} className='copy-video'>
                  Copy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoogleDrive
