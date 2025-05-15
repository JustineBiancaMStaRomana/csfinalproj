let question = document.getElementById("question");
let toAppend = document.getElementById("option");
let startQ = document.getElementById("start");
let blurb = document.getElementById("blurb");
const newOp = document.createElement("input");

let addPoints = true;

let score = 0;
let count = 0;
var x;

const qna = [
    {
        questions: "1. What is the goal of SDG 4?",
        choice: ["Reduced Inequalities", "Quality Education", "Life on Land", "Zero Hunger"],
        correct: 1,
        blurb: "SDG 4: Quality Education focuses on attaining inclusive and equitable quality education and promote lifelong learning opportunities for all"
    },

    {
        questions: "2. How many more teachers are needed to reach the goal of universal primary and secondary education by 2030?",
        choice: ["69 million", "29 million", "49 million", "12 million"],
        correct: 0,
        blurb: "While the global teacher workforce has increased from 62 million to 94 million teachers between 2000 and 2019, to reach universal primary and secondary education in 2030, 69 million more teachers are needed with 24 million for primary and 44 million for secondary education."
    },

    {
        questions: "3. Which of the following was launched by the United Nations (UN) in 2020 to curtail educational disruption caused by COVID-19?",
        choice: ["WHO Education Campaign", "The Global Education First Initiative", "The UN Children’s Fund", "The COVID-19 Global Education Coalition"],
        correct: 3,
        blurb: "The COVID-19 Global Education Coalition is a multi-sector partnership between the United Nations, civil society organizations, media and IT partners to design and deploy innovative solutions, for protecting the well-being of children and ensuring access to continued learning."
    },

    {
        questions: "4. Which region struggles the most with providing schools with basic resources, such as electricity, internet and hygiene facilities?",
        choice: ["South East Asia", "Eastern Europe", "Sub-saharan Africa", "Latin America and the Caribbean"],
        correct: 2,
        blurb: "Sub-Saharan Africa faces the biggest challenges in providing schools with basic resources, especially at the primary and lower secondary levels, as fewer than half of schools in Sub-Saharan Africa had access to electricity, the internet, computers and basic handwashing facilities, key basic services and facilities necessary to ensure a safe and effective learning environment for all students. In terms of teaching staff, it has the lowest percentage (64%) of primary teachers with the minimum pedagogical training according to national standards. More than half the children that have not enrolled in school live in sub-Saharan Africa, and more than 85% of children in Sub-Saharan Africa are not learning the minimum."
    },

    {
        questions: "5. What percentage of young people worldwide lack basic math and literacy skills?",
        choice: ["40%", "60%", "80%", "90%"],
        correct: 1,
        blurb: "Globally, 6 out of 10 children and adolescents are not achieving minimum proficiency levels in reading and math. The total - 617 million includes more than 387 million children of primary school age (about 6 to 11 years old) and 230 million adolescents of lower secondary school age (about 12 to 14 years old). More than half i.e. 56% of all children cannot read or handle math with proficiency by the time they are of age to complete primary education, and 61% of adolescents are unable to achieve minimum proficiency levels when they should be completing lower secondary school."
    }
]

function start(){
    console.log(count);
    console.log(score);

    blurb.style.display = "none";

    if(count <= 4){
    document.getElementById("option").style.display = "inline";
    startQ.style.display = "none";

    window.scrollTo(0,0);

    toAppend.innerHTML = "";

    addPoints = true;

    questionShow();
    }else{
        question.innerHTML = "Your Final Score Is: " + score;

        startQ.innerHTML = "Reset?";
        startQ.setAttribute("onclick", "reset()");

        toAppend.innerHTML = "";
    }
}

function questionShow(){
    
    question.innerHTML = qna[count].questions;

    for(x=0; x<4; x++){
        newOp.setAttribute("type", "button");
        newOp.setAttribute("class", "sdglink");
        newOp.setAttribute("id", x);
        newOp.setAttribute("value", qna[count].choice[x]);
        newOp.setAttribute("onclick", "checkAnswer("+x+")");

        toAppend.appendChild(newOp.cloneNode());
    }
}

function checkAnswer(id){
    if(id === qna[count].correct){
        startQ.innerHTML = "Next Question";
        startQ.style.display = "inline";

        blurb.style.display = "inline";
        blurb.innerHTML = qna[count].blurb;

        document.getElementById(id).style.backgroundColor = "#006400";

        window.scrollTo(0,document.body.scrollHeight);

        count++;

        if(addPoints){
            score++;
        }
    }else{
        document.getElementById(id).style.backgroundColor = "#8B0000";
        addPoints = false;
    }
}

function reset(){
    score = 0;
    count = 0;

    startQ.setAttribute("onclick", "start()");
    blurb.style.display = "none";

    question.innerHTML = "There are 5 questions all about SDG 4. Can you answer all of them?";
}