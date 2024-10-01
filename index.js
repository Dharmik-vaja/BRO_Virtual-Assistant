let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");

//assistent bolse, atle BRO bolse👍
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    window.speechSynthesis.speak(text_speak); 
}

// wish karse , jyare apde open karye tyare BRO, je time a open karsu te wish karse

function wishMe(){
    let day = new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning BRO")
    }
    else if(hours>=12 && hours>16){
        speak("Good Afternoon BRO");
    }
    else{
        speak("Good Evening BRO");
    }
}

// window.addEventListener('load', ()=> {
//     wishMe();
// })

//speech recognize
 
let speechRecognition = window.SpeechRecognitionResult || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript; // je kae pan bolsu te button ma lakhay jse 👍
 
    takeCommand(transcript)  //when we talk anything so, lowercase ma avse. jemke me youtube small lakhyu chhe ane hu bolu tyare capital lakhay jay to command run thay nae atle lowercase use karyu 👍
}

btn.addEventListener("click", ()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display="block";
})

function takeCommand(message){
    btn.style.display="flex";
    voice.style.display="none";

    if(message.includes("hello") || message.includes("hey") || message.includes("hi")){
        speak("Hii BRO, what can i help you?");
    }
    //for chrome
    if(message.includes("Hello") || message.includes("Hey") || message.includes("Hi")){
        speak("Hii BRO, what can i help you?");
    }

    //NAme section
    else if(message.includes("Who are you?") || message.includes("What is your name?")){
        speak("My name is BRO, I'm Virtual Assistant, created by Dharmik vaaja...");
    }
    else if(message.includes("who are you") || message.includes("what is your name")){
        speak("My name is BRO, I'm Virtual Assistant, created by Dharmik vaaja...");
    }

    //youtube section

    //for edge
    else if(message.includes("Open YouTube.") || message.includes("Open YT.")){
        speak("opening Youtube..");
        window.open("https://www.youtube.com/");
    }
    //for chrome
    else if(message.includes("open YouTube") || message.includes("open yt")){ 
        speak("opening Youtube..");
        window.open("https://www.youtube.com/");
    }


    //chatGPT section
    else if(message.includes("Open ChatGPT.") || message.includes("Open GPT.")){
        speak("opening ChatGPT..");
        window.open("https://chatgpt.com/");
    }
    //for chrome
    else if(message.includes("open chat GPT") || message.includes("open GPT")){
        speak("opening ChatGPT..");
        window.open("https://chatgpt.com/");
    }


    //for typing master
    else if(message.includes("Open TM") || message.includes("Open typing")){
        speak("opening monkey typing Daily morning routine..");
        window.open("https://monkeytype.com/");
    }
    else if(message.includes("open TM") || message.includes("open typing")){
        speak("opening monkey typing Daily morning routine..");
        window.open("https://monkeytype.com/");
    }

    //laptop ni application(software)
    else if(message.includes("open calculator")){
        speak("opening calculator...");
        window.open("calculator://");
    }
    else {
        speak(`This is what i found on intenet regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }

}
