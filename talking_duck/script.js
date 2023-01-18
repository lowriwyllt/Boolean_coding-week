// // BONUS
// // ! NB Chrome retrieves voices asynchronously
// let voices = []
//
// // the speechSynthesis.getVoices() array starts off empty when page is first loaded.
// // The web speech API at some point populates this. When it's updated (async), the event voiceschanged fires.
// // we're hooking it to that event to retrieve list of voices.
// speechSynthesis.onvoiceschanged = function () {
//     voices = speechSynthesis.getVoices()
//     console.log(voices) // toggle this to show available voices.
// }

// query the page for elements
const textArea = document.querySelector('textarea')
const playButton = document.querySelector('button')
const pitchBar = document.querySelector('input')
const swanFigure = document.querySelector('figure')


// Control what happens when button is clicked
// When clicked, check if there is text in the input field
playButton.addEventListener('click', function () {
    console.log(textArea.value.includes("code"))
    const textLength = textArea.value.trim().length
    if (textLength > 0) {
        if(textArea.value.includes("code")==true){
            speak_code()
        } else {
        speak()
        }
    }
})

// Function to make the Swan talk!
function speak() {
    // Retrieve text and audio values
    const text = textArea.value
    const pitch = pitchBar.value

    // Initialiase a new utterance
    const utterance = new SpeechSynthesisUtterance(text)

    // utterance.volume = 1 // 0 - 1
    // utterance.rate = 0.5; // 0.1 - 10

    // set the pitch level
    utterance.pitch = pitch // 0 - 2

    // // BONUS: set the voice
    // const voice = voices.find(item => item.name.includes("CHOOSE ONE!"))
    // console.log(voices, voice)
    //
    // utterance.voice = voice;


    // Make the Swan talk
    speechSynthesis.speak(utterance)

    // When the Swan begins to speak...
    utterance.addEventListener('start', function () {
        textArea.disabled = true
        pitchBar.disabled = true
        playButton.disabled = true
        swanFigure.classList.add('talking')
    })

    // When the swan has finished...
    utterance.addEventListener('end', function () {
        textArea.disabled = false
        pitchBar.disabled = false
        playButton.disabled = false
        swanFigure.classList.remove('talking')
    })
}

function speak_code() {
    // Retrieve text and audio values
    const text = textArea.value
    const pitch = pitchBar.value

    // Initialiase a new utterance
    const utterance = new SpeechSynthesisUtterance(text)

    // utterance.volume = 1 // 0 - 1
    // utterance.rate = 0.5; // 0.1 - 10

    // set the pitch level
    utterance.pitch = pitch // 0 - 2

    // // BONUS: set the voice
    // const voice = voices.find(item => item.name.includes("CHOOSE ONE!"))
    // console.log(voices, voice)
    //
    // utterance.voice = voice;


    // Make the Swan talk
    speechSynthesis.speak(utterance)

    // When the Swan begins to speak...
    utterance.addEventListener('start', function () {
        textArea.disabled = true
        pitchBar.disabled = true
        playButton.disabled = true
        swanFigure.classList.add('talking_code')
    })

    // When the Swan has finished...
    utterance.addEventListener('end', function () {
        textArea.disabled = false
        pitchBar.disabled = false
        playButton.disabled = false
        swanFigure.classList.remove('talking_code')
    })
}