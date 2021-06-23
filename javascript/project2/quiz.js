const quizData=[
    {
        question:'Which one of these is floor division?',
        a:'/',
        b:'//',
        c:'%',
        d:'None of the mentioned',
        correct:'b'
    }, {
        question:'What is the answer to this expression, 22 % 3 is?',
        a: '7',
        b: '1',
        c: '0',
        d: '5',
        correct: 'b'
    }, {
        question:'Operators with the same precedence are evaluated in which manner?',
        a:'Left to Right',
        b:'Right to Left',
        c:'Can’t say',
        d:'None of the mentioned',
        correct:'a'
    },{
        question:'What is the output of this expression, 3*1**3?',
        a:'27',
        b:'9',
        c:'3',
        d:'1',
        correct:'c'
    },{
        question:'Which one of the following has the same precedence level?',
        a:'Addition and Subtraction',
        b:'Multiplication, Division and Addition',
        c:'Multiplication, Division, Addition and Subtraction',
        d:'Addition and Multiplication',
        correct:'a'
    },{
        question:'Which one of the following has the highest precedence in the expression?',
        a:'Exponential',
        b:'Addition',
        c:'Multiplication',
        d:'Parentheses',
        correct:'d'
    },{
        question:'Which of these in not a core data type?',
        a:'List',
        b:'Dictionary',
        c:'Tuples',
        d:'Class',
        correct:'d'
    },{
        question:' Given a function that does not return any value, What value is thrown by default when executed in shell.',
        a:'int',
        b:'bool',
        c:'void',
        d:'None',
        correct:'d'
    }
];

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitbtn=document.getElementById('submit')
let currentQuiz=0;

let score= 0

loadQuiz();

function loadQuiz(){
    const currentQuizData= quizData[currentQuiz];
    question.innerHTML= currentQuizData.question;
    
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected(){
    const answersEl= document.querySelectorAll('.answer');
    answersEl.forEach((answerEl)=>{
       if(answer.check){
          return answer=answerEl.id;
       }
    });

    if(!answer){
        return undefined;
    }
}

submitbtn.addEventListener('click',()=>{
    currentQuiz++;

    const answer= getSelected();
    if(answer){
    if(currentQuiz< quizData.length){
        loadQuiz();
    }
        else{
            //TODO:show result
            alert("your response has been submitted!")
        }
}
})