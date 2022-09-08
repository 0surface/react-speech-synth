import ReactDOM from 'react-dom'
import React from 'react'
import { SpeechSynth } from '../src'

ReactDOM.render(<SpeechSynth text={'Text to read'} />, document.getElementById('main'))
