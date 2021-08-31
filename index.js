var readlinesync= require('readline-sync');
//Welcome message with username
var username= readlinesync.question('Please enter your name= ');
console.log("Hello, "+ username+ "!  "+ "Let's check how well you know me😉");
console.log('---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*')

var score=0;

function play(question,answer){
var userAnswer= readlinesync.question(question);
if(userAnswer.toUpperCase()===answer.toUpperCase()){
  console.log('Hooray! you are right!');
  score=score+1
}else{
  console.log('Oops! wrong answer!');
}
console.log('---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*')
}

//questions and answers 
var questionSet=[
  {question:'Que 01 What is the name of my home town? ',
  answer:'Begampur'
  },
   {question:'Que 02 How many sisters do I have? ',
   answer:'1'
  },
    {question:'Que 03 What is my date of birth(dd-mm-year)? ',
   answer:'13-06-1996'
  },
    {question:'Que 04 Which sport do I like the most ',
   answer:'cricket'
  },
    {question:'Que 05 Which is my most favourite romantic movie? ',
  answer:'la la land'
  },
  {question:'Que 06 Who is my favourite musician? ',
  answer:'a.r.rehman'
  },
    {question:'Que 07 Who is my favourite cricketer? ',
  answer:'Virat Kohli'
  },
      {question:'Que 08 What is my current relationship status? ',
  answer:'single'
  },
      {question:'Que 09 How many percentage of marks have I got in tenth class ',
  answer:'90'
  },
      {question:'Que 10 Who is my mentor in my life?  ',
  answer:'tanay pratap'
  }
];


for(i = 0; i < questionSet.length; i++){
  var currentQuestion = questionSet[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log('You scored '+score+ ' out of 10.');
console.log('Send me screenshot of your score😊')
console.log('Thanks!')

