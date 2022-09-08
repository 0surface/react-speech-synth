# React Speach Synth

React Hook & Components Suite for integrating the SpeechSynthesis interface of the Web Speech API.

Currently using tailwindcss classes for styling. If you are using tailwindcss in your app make sure to add the package in your `tailwind.config.js` file:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ...
    "./node_modules/@derpyvision/react-speech-synth/**/*.{js,ts,jsx,tsx}",
  ],
}
```

### Usage in your app:

```
<SpeechSynth text={'Text to read'} />
```

### TODO:
[ ] Add Voice Selection

run example:
`sh example/run.sh`
