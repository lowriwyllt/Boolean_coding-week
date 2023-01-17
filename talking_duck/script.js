const textArea = document.querySelector('textarea')
const playButton = document.querySelector('button')
cosnt pitchBar = document.querySelector('input')
const duckFigure = document.querySelector('figure')
//console.log(textarea) //to test out look at chrome

//get text from he text area user entered
//make the duck say those wordds when play is clicked

function onButtonClick() {
  //console.log("test")
  //console.log(textArea.value)
  //console.log(textArea.value.length)
  if (textArea.value.length > 0) {
    speak()
  }  
}

function speak() {
  const text = textArea.value
  
  const utterance = new SpeechSynthesisUtterance(text)
  
  //must be between 0 and 2 ncheck mdn
  utterance.pitch = pitchBar.value
  
  speechSynthesis.speak(utterance)
  
  utterance.addEventListener('start', function() {
    playButton.disabled = true
    textArea.disabled = true
    pitchBar.disabled =true
    duckFigure.classlist.add('talking')
  }
  
  utterance.addEventListener('end', function() {
    playButton.disabled = false
    textArea.disabled = false
    pitchBar.disabled = false
    duckFigure.classlist.remove('talking')
  }
                             
                             
}

playButton.addEventListener('click', onButtonClick)
