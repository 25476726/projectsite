const questions = [
    {
      question: "If someone says 'I'm off the ale', what are they referring to?",
      answers: [
        { text: "Going to the pub ", correct: false },
        { text: "Going on holiday ", correct: false },
        { text: "Not drinking alcohol ", correct: true },
        { text: "They're on a diet ", correct: false }
      ],
      explanation: ""
    },
    {
        question: "What would someone mean if they called you a 'plazzy Scouser'?",
        answers: [
          { text: "You're from a rough area of Liverpool ", correct: false },
          { text: "You're not from Liverpool ", correct: true },
          { text: "You're from a posh part of Liverpool ", correct: false },
          { text: "You live in a plastic house ", correct: false }
        ],
        explanation: ""
      },
    {
      question: "What does 'Scran' refer to?",
      answers: [
        { text: "Bed ", correct: false },
        { text: "Food ", correct: true },
        { text: "An insult ", correct: false },
        { text: "Shampoo ", correct: false }
      ],
      explanation: ""
    },
    {
        question: "If someone says 'Ta, la', what are they saying?",
        answers: [
          { text: "Thank you ", correct: true },
          { text: "Hello ", correct: false },
          { text: "Goodbye ", correct: false },
          { text: "Telling you off ", correct: false }
        ],
        explanation: ""
      },
    {
        question: "What does 'Sound, lad!' mean?",
        answers: [
          { text: "The music is too loud ", correct: false },
          { text: "Turn the music up ", correct: false },
          { text: "Good/Alright ", correct: true },
          { text: "Start a fight ", correct: false }
        ],
        explanation: ""
      },
      {
        question: "What is being referred to when someone says 'Look at his webs'?",
        answers: [
          { text: "His glasses ", correct: false },
          { text: "His shoes ", correct: true },
          { text: "His eyes ", correct: false },
          { text: "His hair ", correct: false }
        ],
        explanation: ""
      },
    {
      question: "What are you being called if you're a 'meff'?",
      answers: [
        { text: "A posh person ", correct: false },
        { text: "Clever ", correct: false },
        { text: "Loud ", correct: false },
        { text: "Dirty ", correct: true }
      ],
      explanation: ""
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
  
    nextButton.style.display = "inline-block";
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
    questionElement.innerText = `🎉 You scored ${score} out of ${shuffledQuestions.length}!`;
    answersElement.innerHTML = "";
    nextButton.innerText = "Restart";
    nextButton.style.display = "inline-block";
    nextButton.removeEventListener("click", startQuiz);
    nextButton.addEventListener("click", startQuiz);
  }
  
  startQuiz();
  