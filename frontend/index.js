const formarea = document.querySelector(".form");
const submit = document.querySelector(".btn");
const score = document.querySelector(".score");

const userAnswers = {};
const questionIds = [];

try{
    fetch("http://localhost:8080/questions")
    .then((res) => {
        return res.json()     
    })
    .then((questions) => {
        questions.map((curr, index) => {
            const contain = document.createElement("div");
            const label = document.createElement("label");
            label.id = curr.id;
            label.textContent = (index+1 + ")   ") + curr.question;
            contain.appendChild(label);
            contain.appendChild(document.createElement("br"));
            contain.appendChild(document.createElement("br"));

            questionIds.push(curr.id);
            
            curr.options.map((option) => {
                const radio = document.createElement("input");
                const optionLabel = document.createElement("label");
                optionLabel.textContent = option.id +". "+ option.text;
                radio.type = "radio";
                radio.id = curr.id + option.id;
                radio.setAttribute("name", curr.id);
                optionLabel.setAttribute("for", curr.id + option.id);
                optionLabel.setAttribute("name", curr.id);
                contain.appendChild(radio);
                contain.appendChild(optionLabel);
                contain.appendChild(document.createElement("br"));

                radio.addEventListener("change", function(event) {
                    if (event.target.checked) {
                        const ans = event.target.id;
                        const id =  ans.substring(0, ans.length-1);
                        const selOption = ans.substring(ans.length - 1, ans.length);          
                        userAnswers[id] = selOption;
                    }
                });
            })
            const div = document.createElement("div");
            div.className = "div" + curr.id;
            contain.appendChild(document.createElement("br"));
            contain.appendChild(div);
            contain.className = "questionCard";
            formarea.appendChild(contain);
        })
    })
}
catch(e){
    console.log(e);
}

function displayResult() {
    const answerArray = [];
    for (const key in userAnswers) {
        answerArray.push({
            id: [key],
            option: userAnswers[key]
        });
    }

    try {
        fetch("http://localhost:8080/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answers: answerArray })
        })
        .then((res) => { return res.json() })
        .then((correctAnswers) => {
            submit.style.display = "none";

            const scoreCardContainer = document.createElement("div");
            scoreCardContainer.className = "score-card-container";

            const scoreCard = document.createElement("div");
            scoreCard.innerHTML = "You got <b>" + correctAnswers.score + "</b> correct out of " + correctAnswers.numberOfQuestions;
            scoreCard.className = "score-card";
            scoreCardContainer.appendChild(scoreCard);

            // Add retry button
            const retryButton = document.createElement("button");
            retryButton.textContent = "Retry";
            retryButton.className = "retry-button";
            retryButton.addEventListener("click", function() {
                location.reload();
            });
            scoreCardContainer.appendChild(retryButton);
            score.appendChild(scoreCardContainer);

            for (const key in userAnswers) {
                const disp = document.querySelector(".div" + key);
                const answer = correctAnswers.correctOptions[key];
                console.log(userAnswers[key]);
                if (userAnswers[key] === answer) {
                    disp.innerHTML += "<b style='color: green'> Correct answer </b>";
                } else if (userAnswers[key] === undefined) {
                    disp.innerHTML += "<b style='color: yellow'> Unattempted </b>";
                } else {
                    disp.innerHTML += "<b style='color: red'> Incorrect answer, </b> <b>Correct answer: " + answer + "</b>";
                }
            }
        });
    }
    catch (e) {
        console.log(e);
    }
}


submit.addEventListener('click', displayResult)

