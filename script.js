let messageInput = document.querySelector("#message").value
let sendBtn = document.querySelector("#send")
let chatBody = document.querySelector("main")
let profileName = document.querySelector(".user-name")
let profileBox = document.querySelector(".ab")
let botMessage1 = document.createElement("div")
let steph = document.querySelector(".steph")
let sendNameBtn = document.querySelector(".send-name")
let appBody = document.querySelector('.app-body')
let formBody = document.querySelector(".form-body")
let registerForm = document.querySelector(".register-form")
let welcomePage = document.querySelector('.welcome-page')
let enterPage = document.querySelector('.enter-app')

function enter() {
    welcomePage.style.display = 'none'
    registerForm.style.visibility = 'visible'
    formBody.style.visibility = 'visible'
}

enterPage.onclick = enter
function displayName() {
    let nameInput = document.querySelector("#name").value
    if (nameInput) {
        appBody.style.display = 'block'
        formBody.style.display = 'none'
        registerForm.style.display = 'none'
        let botMessage2 = document.createElement("div")
   
        chatBody.append(botMessage2)
        profileBox.style.visibility = "visible"
        profileName.innerHTML = nameInput
        steph.style.display = "none"
        botMessage2.innerHTML = `HELLO ${nameInput.toUpperCase()}. How are you today?`
        botMessage2.classList.add("bot-chat")

        botMessage2.style.animation = `botMessageSlide 2s`
    }
        

}
sendNameBtn.onclick = displayName

function createChatDivs() {
    messageInput = document.querySelector("#message").value
    

    let botMessage2 = document.createElement("div")

    let userMessage = document.createElement("div")
    chatBody.append(userMessage)
    userMessage.innerHTML = messageInput
    userMessage.classList.add("user-chat")
    
    if (messageInput.match("fine") || messageInput.match("Fine") || messageInput.match("great") || messageInput.match("Great") || messageInput.match("good") || messageInput.match("Good")) {


setTimeout(() => {
    let botMessage3 = document.createElement("div")
        chatBody.append(botMessage3)

        botMessage3.innerHTML = `That's great. I'm happy you are fine... Just kidding, I can't process emotions.`
        botMessage3.classList.add("bot-chat")

        botMessage3.style.animation = `botMessageSlide 2s`
     
},400);
        
        setTimeout(() => {
            let botMessage4 = document.createElement("div")
            chatBody.append(botMessage4)
    
            botMessage4.innerHTML = `Below are the list of my services for now. Movie Recommendation, Music Recommendation, Update Profile Picture, Flirt with Stephanie. Use any of the above keyword to activate me.`
            botMessage4.classList.add("bot-chat")
    
            botMessage4.style.animation = `botMessageSlide 2s`
         
        }, 600);

        setTimeout(() => {
            let botMessage5 = document.createElement("div")
            chatBody.append(botMessage5)
    
            botMessage5.innerHTML = `So which of the above services should I offer you.`
            botMessage5.classList.add("bot-chat")
    
            botMessage5.style.animation = `botMessageSlide 2s`
         
        }, 1000);

    }

    else if (messageInput.match("Movie") || messageInput.match("movie")) {
        
    
        let botMessage6 = document.createElement("div")
        chatBody.append(botMessage6)
    
        botMessage6.innerHTML = `That's great. What's your preferred genre`
        botMessage6.classList.add("bot-chat")
    
        botMessage6.style.animation = `botMessageSlide 2s`
         
    }
       else if (messageInput.match("action") || messageInput.match("Action")){
            setTimeout(() => {
                let botMessage7 = document.createElement("div")
                chatBody.append(botMessage7)
        
                botMessage7.innerHTML = `Cool. I love action movies too. So below are lists of action movie recommendations I think you would love...`
                botMessage7.classList.add("bot-chat")
        
                botMessage7.style.animation = `botMessageSlide 2s`
             
            }, 1000);
        
            setTimeout(() => {
                let botMessage7 = document.createElement("div")
                chatBody.append(botMessage7)
        
                botMessage7.innerHTML = `<ul><li>Black Panther:Wakanda Forever</li>
                <li>Shazam: Fury of the gods/li>
                <li>Shadow and Bone</li>
                <li>Antman and the Wasp</li>
                <li>Don't Look Up</li>
                <li>Jexi</li>
                <li>Superman and Lois</li>
                <li>Lucifer</li>
                <li>Bad Comments</li>
                <li>Transformers</li>
                <li>Jung_E</li>
                <li>Somebody I used to know</li>
                <li>Unlocked</li>
                <li>We have a Ghost</li>
                <li>You People</li>
                <li>Aquaman and the Lost Kingdom</li>
                <li>The Wandering Earth 2</li>
                <li>Bright</li>
                <li style="margin-bottom:1rem;">Super Me</li></ul>
                
                Oops!... I've ran out of possible ideas`
                botMessage7.classList.add("bot-chat")
        
                botMessage7.style.animation = `botMessageSlide 2s`
             
            }, 2500);
        
        
            setTimeout(() => {
                let botMessage4 = document.createElement("div")
                chatBody.append(botMessage4)
        
                botMessage4.innerHTML = `Below are the list of my services for now. Movie Recommendation, Music Recommendation, Update Profile Picture, Flirt with Stephanie. Use any of the above keyword to activate me.`
                botMessage4.classList.add("bot-chat")
        
                botMessage4.style.animation = `botMessageSlide 2s`
             
            }, 3000);
    }
    else if (messageInput.match("Romance") || messageInput.match("romance")){
        setTimeout(() => {
            let botMessage7 = document.createElement("div")
            chatBody.append(botMessage7)
    
            botMessage7.innerHTML = `My favorite!. Always gives me the chills. So below are lists of romance movie recommendations I think you would love...`
            botMessage7.classList.add("bot-chat")
    
            botMessage7.style.animation = `botMessageSlide 2s`
         
        }, 1000);
    
        setTimeout(() => {
            let botMessage7 = document.createElement("div")
            chatBody.append(botMessage7)
    
            botMessage7.innerHTML = `<ul><li>Heartbreak High</li>
            <li>Set it Up</li>
            <li>Through My Window</li>
            <li>Love at First Kiss</li>
            <li>Dangerous Laisons</li>
            <li>The Kissing Booth 1,2 & 3</li>
            <li>Life in a Year</li>
            <li>Friends with Benefits</li>
            <li>No Strings Attached</li>
            <li>Your Place or Mine</li>
            <li>The half of it</li>
            <li>Somebody I used to know</li>
            <li>Tall Girl 1 & 2</li>
            <li>After</li>
            <li>Purple Hearts</li>
            <li>All the Bright Places</li>
            <li>Plan a Plan b</li>
            <li>The in Between</li>
            <li>Look Both Ways</li>
            <li style="margin-bottom:1rem;">Dinner at my Place</li>
            </ul>
                
            Oops!... I've ran out of possible ideas`
            botMessage7.classList.add("bot-chat")
    
            botMessage7.style.animation = `botMessageSlide 2s`
         
        }, 2500);
    }

    else if (messageInput.match("adventure") || messageInput.match("Adventure")){
        setTimeout(() => {
            let botMessage7 = document.createElement("div")
            chatBody.append(botMessage7)
    
            botMessage7.innerHTML = `Beats my taste. So below are lists of adventure movie recommendations I think you would love...`
            botMessage7.classList.add("bot-chat")
    
            botMessage7.style.animation = `botMessageSlide 2s`
         
        }, 1000);
    
        setTimeout(() => {
            let botMessage7 = document.createElement("div")
            chatBody.append(botMessage7)
    
            botMessage7.innerHTML = `<ul><li>A Million Ways to Die</li>
            <li>Army of the Dead</li>
            <li>Chapppie</li>
            <li>Doctor Strange:Multiverse of Madness</li>
            <li>Escape Room 1 & 2</li>
            <li>Fast and Furious 9</li>
            <li>Fear Street 1,2 & 3</li>
            <li>Focus</li>
            <li>Godzilla 1 & 2</li>
            <li>Shazam 1 & 2</li>
            <li>Monster Run</li>
            <li>Mulan</li>
            <li>No Escape/li>
            <li>Pacifim Rim 1,2 & 3</li>
            <li>Sonic the Hedgehog 1 & 2</li>
            <li>The Batman</li>
            <li>Uncharted</li>
            <li>Wrong Turns</li>
            <li>Look Both Ways</li>
            <li style="margin-bottom:1rem;">Dinner at my Place</li>
            </ul>
                
            Oops!... I've ran out of possible ideas`
            botMessage7.classList.add("bot-chat")
    
            botMessage7.style.animation = `botMessageSlide 2s`
         
        }, 2500);
    }

    else {
        setTimeout(() => {
            let botMessage7 = document.createElement("div")
            chatBody.append(botMessage7)
    
            botMessage7.innerHTML = `I'm sorry. My code does not accept the keyword given`
            botMessage7.classList.add("bot-chat")
    
            botMessage7.style.animation = `botMessageSlide 2s`
        }, 1000)
        
        setTimeout(() => {
        let botMessage7 = document.createElement("div")
        chatBody.append(botMessage7)

        botMessage7.innerHTML = `Below are the list of my services for now. Movie Recommendation, Music Recommendation, Update Profile Picture, Flirt with Stephanie. Use any of the above keyword to activate me.`
        botMessage7.classList.add("bot-chat")

            botMessage7.style.animation = `botMessageSlide 2s`
        },2500)
    }


}


sendBtn.onclick = createChatDivs