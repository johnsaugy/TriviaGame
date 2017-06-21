var panel = $('#quizArea');

// Click Events
$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});

// Question Set
var questions = [
 {
   id: 1,
   question: "1. What is the capital of New York?",
   answers: ["Albany", "New York City", "Buffalo", "Montauk"],
   correctAnswer: "Albany"
 },
 {
   id: 2,
   question: "2. How many states are there in the U.S.A?",
   answers: ["49", "50", "51", "52"],
   correctAnswer: "50"
 },
 {
   id: 3,
   question: "3. Who let the dogs out?",
   answers: ["Baha Men", "Outkast", "I don't know", "The pound"],
   correctAnswer: "I don't know"
 },
 {
   id: 4,
   question: "4. What is the name of the newest team in the NHL?",
   answers: ["Sacramento Warriors", "Kansas City Whirlwind", "Jacksonville Jazz", "Las Vegas Knights"],
   correctAnswer: "Las Vegas Knights"
 },
 {
   id: 5,
   question: "5. What is considered the powerhouse of the cell?",
   answers: ["Nucleus", "Ribosome", "Cell Membrane", "Mitochondria"],
   correctAnswer: "Mitochondria"
 },
 {
   id: 6,
   question: "6. Amazon recently acquired which company?",
   answers: ["Trader Joes", "Safeway", "Whole Foods", "Lyft"],
   correctAnswer: "Whole Foods"
 },
 {
   id: 7,
   question: "7. Which one of these ski resorts is located in Colorado?",
   answers: ["Stowe", "Vail", "Gore", "Heavenly"],
   correctAnswer: "Vail"
 },
 {
   id: 8,
   question: "8. What is the name of Jon Snow's direwolf?",
   answers: ["Ghost", "Snow", "Nymeria", "Grey Wind"],
   correctAnswer: "Ghost"
 },
 {
   id: 9,
   question: "9. What's cooler than being cool?",
   answers: ["Ice cold", "Cool", "Nothing", "What??"],
   correctAnswer: "Ice cold"
 },
 {
   id: 10,
   question: "10. In what year was the first iPod released?",
   answers: ["2000", "2001", "2002", "2003"],
   correctAnswer: "2001"
 },
];

var game = {
  correct:0,
  incorrect:0,
  counter:60,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subWrapper').prepend('<h2>You have <span id="counter-number">60</span> seconds remaining!</h2>');
    $('#start').remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Complete</button>');
  },
  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
      });
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
      });
    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() == questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subWrapper h2').remove();
    panel.html('<h2>Finished!</h2>');
    panel.append('<h3>Correct: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }
};
