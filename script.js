(function() {

function saveToLocalStorage(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
      console.log(`Saved ${key} to localStorage`);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }


  function getFromLocalStorage(key) {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        console.log(`${key} not found in localStorage`);
        return null;
      }
      return JSON.parse(serializedValue);
    } catch (error) {
      console.error('Error retrieving from localStorage:', error);
      return null;
    }
  }

  function extractQuestionObjects(data) {
    const questionsArray = [];
  
    // Recursive function to handle nested categories
    function getQuestions(obj) {
      if (Array.isArray(obj)) {
        // Loop through array of questions
        obj.forEach(item => {
          if (item.question && item.answer) {
            questionsArray.push({ question: item.question, answer: item.answer, number: item.number });
          }
        });
      } else if (typeof obj === 'object') {
        // Recursively go through object properties
        for (let key in obj) {
          getQuestions(obj[key]);
        }
      }
    }
  
    // Start extracting questions from the root object
    getQuestions(data);
  
    return questionsArray;
  }


const skipQuestions = getFromLocalStorage('skip-questions') || [];

console.log('skipQuestions:', skipQuestions);
  
const questionObjects = extractQuestionObjects(jsonData);


if (skipQuestions.length === questionObjects.length) {
    // saveToLocalStorage('skip-questions', []);
    document.getElementById('question-wrapper').classList.add('hidden');
    document.getElementById('answer-wrapper').classList.add('hidden');
    document.getElementById('you-are-prepared').classList.remove('hidden');
}

const filteredQuestions = questionObjects.filter(function({ number }) {
    return skipQuestions.indexOf(number) === -1;
});

console.log('how many questions?', filteredQuestions.length);

// console.log(questionObjects);


const index = Math.floor(Math.random() * filteredQuestions.length);
// let index = getFromLocalStorage('index') || 0;
// if (index >= filteredQuestions.length) index = 0;

console.log('index:', index);

saveToLocalStorage('index', index + 1);


const chosenOne = filteredQuestions[index];

console.log('chosenOne:',chosenOne);

if (chosenOne) {
    // document.getElementById('question-title').textContent = `Question ${chosenOne.number}`;
    document.getElementById('question').textContent = chosenOne.question;
    document.getElementById('answer').textContent = chosenOne.answer.join('\n\n');
}


window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

const correctBtn = document.getElementById('correct');
correctBtn.addEventListener('click', function() {
    saveToLocalStorage('skip-questions', [...skipQuestions, chosenOne.number]);
    correct.textContent = '🎉';

    setTimeout(() => {
        window.scrollTo(0, 0);
        window.location.reload();
    }, 300);
});

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function() {
    saveToLocalStorage('skip-questions', []);
    saveToLocalStorage('index', 0);
    setTimeout(() => {
        window.location.reload();
    }, 1);
});


document.addEventListener('DOMContentLoaded', function() {
    // document.getElementById('info').textContent = `Showing ${filteredQuestions.length} of ${questionObjects.length} questions`;
    const percentCorrect = Math.round(skipQuestions.length / questionObjects.length * 100);
    document.getElementById('info').textContent = `${percentCorrect}%`;
}, false);


function isDayTimeHours() {
    const now = new Date();
    const currentHour = now.getHours();
    
    // Check if the current time is between 8 AM (8) and 6 PM (18)
    return currentHour >= 8 && currentHour < 18;
  }

if (isDayTimeHours()) {
    document.body.classList.add('bg-white');
    document.body.classList.add('text-slate-700');  
    document.getElementById('footer').classList.add('bg-gray-100');
    document.getElementById('reset').classList.add('bg-gray-300');
}

})();
