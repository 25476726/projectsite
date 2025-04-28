const questions = [
  {
    question: "If someone says 'I'm off the ale', what are they referring to?",
    answers: [
      { text: " Going to the pub ", correct: false },
      { text: " Going on holiday ", correct: false },
      { text: " Not drinking alcohol ", correct: true },
      { text: " They're on a diet ", correct: false }
    ],
    explanation: "‘Off the ale’ means they’re giving up the bevs (booze) for a bit – whether it’s for health, money, or just needing a break from mad nights out."
  },
  {
    question: "What would someone mean if they called you a 'plazzy Scouser'?",
    answers: [
      { text: " You're from a rough area of Liverpool ", correct: false },
      { text: " You're not from Liverpool ", correct: true },
      { text: " You're from a posh part of Liverpool ", correct: false },
      { text: " You live in a plastic house ", correct: false }
    ],
    explanation: "A 'plazzy Scouser' is someone pretending to be Scouse but isn’t actually from Liverpool — usually from nearby places like Wirral, St Helens or even further!"
  },
  {
    question: "If someone says 'I'm made up', what do they mean?",
    answers: [
      { text: " They're angry ", correct: false },
      { text: " They're confused ", correct: false },
      { text: " They're happy ", correct: true },
      { text: " They're tired ", correct: false }
    ],
    explanation: "'Made up' means absolutely buzzing, dead happy about something. Like if you pass your driving test or Everton wins, you’re made up!"
  },
  {
    question: "What is a pan of scouse?",
    answers: [
      { text: " Soup ", correct: false },
      { text: " Curry ", correct: false },
      { text: " Pot Noodles ", correct: false },
      { text: " Stew ", correct: true }
    ],
    explanation: "Scouse is a hearty meat and veg stew, proper working-class scran. It’s so iconic, the people of Liverpool are even nicknamed after it!"
  },
  {
    question: "What does 'Geg in' mean?",
    answers: [
      { text: " To eavesdrop or get involved ", correct: true },
      { text: " To leave a party early ", correct: false },
      { text: " To cause trouble ", correct: false },
      { text: " To apologise ", correct: false }
    ],
    explanation: "'Gegging in' is butting in or getting involved in something that’s none of your business. Like someone earwigging your convo at the bus stop."
  },
  {
    question: "What does it mean if you're 'skint'?",
    answers: [
      { text: " You're rich ", correct: false },
      { text: " You're tired ", correct: false },
      { text: " You're broke ", correct: true },
      { text: " You're drunk ", correct: false }
    ],
    explanation: "'Skint' means you're out of cash, stone cold broke. No chance of a night out unless your mate's buying!"
  },
  {
    question: "What is a 'Manc'?",
    answers: [
      { text: " Someone from the Isle of Man ", correct: false },
      { text: " Someone from a posh part of Liverpool ", correct: false },
      { text: " Someone from Manchester ", correct: true },
      { text: " Someone from America ", correct: false }
    ],
    explanation: "'Manc' is short for someone from Manchester. Dead simple — but don't go mixing up Scousers and Mancs, unless you fancy a lecture (or worse!)."
  },
  {
    question: "Translate this phrase into Scouse: 'I've just bought a boss pair of webs lad!'",
    answers: [
      { text: " I've just bought an expensive pair of shorts ", correct: false },
      { text: " I've just bought a smart pair of trousers ", correct: false },
      { text: " I've just bought a fancy pair of earrings ", correct: false },
      { text: " I've just bought a good pair of shoes ", correct: true }
    ],
    explanation: "'Webs' means shoes or trainers in Scouse slang. So if someone’s buzzing about their new webs, give them a compliment, la!"
  },
  {
    question: "What does 'Scran' refer to?",
    answers: [
      { text: " Bed ", correct: false },
      { text: " Food ", correct: true },
      { text: " An insult ", correct: false },
      { text: " Shampoo ", correct: false }
    ],
    explanation: "'Scran' is food. Could be anything from a chippy tea to a full roast. If a Scouser asks if you want scran, say yes — you’re about to eat well!"
  },
  {
    question: "If someone says 'Ta, la', what are they saying?",
    answers: [
      { text: " Thank you ", correct: true },
      { text: " Hello ", correct: false },
      { text: " Goodbye ", correct: false },
      { text: " Telling you off ", correct: false }
    ],
    explanation: "'Ta' means thanks, and 'la' is like saying 'mate' or 'lad'. 'Ta, la' is a proper casual way to say 'cheers, mate' in Liverpool."
  },
  {
    question: "What does 'Sound, lad!' mean?",
    answers: [
      { text: " The music is too loud ", correct: false },
      { text: " Turn the music up ", correct: false },
      { text: " Good/Alright ", correct: true },
      { text: " Start a fight ", correct: false }
    ],
    explanation: "'Sound' in Scouse chat means 'good', 'grand', or 'no problem'. So if you hear 'Sound, lad!', it’s a thumbs-up — all’s good!"
  },
  {
    question: "What is being referred to when someone says 'Look at his webs'?",
    answers: [
      { text: " His glasses ", correct: false },
      { text: " His shoes ", correct: true },
      { text: " His eyes ", correct: false },
      { text: " His hair ", correct: false }
    ],
    explanation: "'Webs' are shoes. If someone’s pointing them out, either they’re dead smart… or dead scruffy. Depends on the tone!"
  },
  {
    question: "What are you being called if you're a 'meff'?",
    answers: [
      { text: " A posh person ", correct: false },
      { text: " A clever person ", correct: false },
      { text: " A loud person ", correct: false },
      { text: " A scruffy person ", correct: true }
    ],
    explanation: "'Meff' is an insult for someone who’s scruffy, minging, or just a bit of a mess. Not a compliment — you don't want to be called one!"
  }
];
  
  let shuffledQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextButton = document.getElementById("next-btn");
  
  function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const current = shuffledQuestions[currentQuestionIndex];
    questionElement.innerText = current.question;
  
    current.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("answer-btn");
      button.addEventListener("click", () => selectAnswer(button, answer.correct));
      answersElement.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    nextButton.style.backgroundColor = ""; 
    answersElement.innerHTML = "";
  }
  
  function selectAnswer(button, isCorrect) {
    const current = shuffledQuestions[currentQuestionIndex];
  
    if (isCorrect) {
      button.style.backgroundColor = "#4caf50";
      score++;
    } else {
      button.style.backgroundColor = "#f44336";
    }
  
    // Show correct answer
    Array.from(answersElement.children).forEach(btn => {
      btn.disabled = true;
      if (shuffledQuestions[currentQuestionIndex].answers.find(a => a.correct).text === btn.innerText) {
        btn.style.backgroundColor = "#4caf50";
      }
    });
  
    // Show explanation
    const explanation = document.createElement("p");
    explanation.innerText = `💡 ${current.explanation}`;
    explanation.style.marginTop = "20px";
    explanation.style.fontStyle = "italic";
    answersElement.appendChild(explanation);
  
    nextButton.style.display = "block";
    nextButton.style.backgroundColor = "#45a049";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    questionElement.innerText = `You scored ${score} out of ${shuffledQuestions.length}!  You are ${percentage}% Scouse!`;    
    answersElement.innerHTML = "";
    nextButton.innerText = "Restart";
    nextButton.style.display = "block";
    nextButton.removeEventListener("click", startQuiz);
    nextButton.addEventListener("click", startQuiz);
  }
  
  startQuiz();
  