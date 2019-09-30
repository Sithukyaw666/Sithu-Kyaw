const BtnInput = document.querySelector(".btnInput");
const displayText = document.querySelector(".displayText");

//greetings

const greetings = ["Hello Sir I am Jarvis stands for just a rather very intelligent system and now I can't do nothing", "Welcome Sir Nice to meet you"];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  displayText.textContent = "now say something";
};
recognition.onresult = function (event) {
  const current = event.resultIndex;

  const text = event.results[current][0].transcript;
  displayText.textContent = text;
  readIt(text);
};

//addlistenter to btn

BtnInput.addEventListener("click", () => {
  recognition.start();
});

function readIt(message) {
  const speech = new SpeechSynthesisUtterance();
  speechSynthesis.getVoices().forEach(function (voice) {
    console.log(voice.name, voice.default ? voice.default : "");
  });
  speech.text = "Please say HI";
  if (message.includes("hi")) {
    const greetingText =
      greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = greetingText;
  }
  speech.voice = speechSynthesis.getVoices().filter(function (voice) {
    return voice.name == "Google UK English Female";
  })[0];
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}