const express  = require('express');
const cors = require('cors');
const { questions, correctOptions } = require('./questions.js');

const app = express();
app.use(cors());

app.use(express.json());

app.get('/questions', (req, res) => {
    res.json(questions);
})

app.post('/submit', (req, res) => {
    const answers = req.body.answers;
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].option === correctOptions[answers[i].id])   score++;
    }
    res.json({
                "score" : score,
                "correctOptions" : correctOptions,
                "numberOfQuestions" : 10
            });
})

app.listen(8080, ()=>{
    console.log("listening to port 8080");
});