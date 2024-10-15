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

function isDayTimeHours() {
	const now = new Date();
	const currentHour = now.getHours();

	// Check if the current time is between 8 AM (8) and 6 PM (18)
	return currentHour >= 8 && currentHour < 18;
}

function getQuestion(skipQuestions) {
	const questionObjects = extractQuestionObjects(jsonData);
	const knowsAllAnswers = skipQuestions.length === questionObjects.length;

	if (knowsAllAnswers) {
		document.getElementById('question-wrapper').classList.add('hidden');
		document.getElementById('answer-wrapper').classList.add('hidden');
		document.getElementById('you-are-prepared').classList.remove('hidden');
	}

	const filteredQuestions = questionObjects.filter(function ({ number }) {
		return skipQuestions.indexOf(number) === -1;
	});

	const index = Math.floor(Math.random() * filteredQuestions.length);
	const chosenOne = filteredQuestions[index];

	return { ...chosenOne, total: questionObjects.length };
}
