const LOCAL_STORAGE_SKIP_QUESTIONS = 'skip-questions';

(function () {
	/**
	 * Adjust colors depending on the time of the day
	 */
	if (isDayTimeHours()) {
		document.body.classList.add('bg-white');
		document.body.classList.add('text-slate-700');
		document.getElementById('footer').classList.add('bg-gray-100');
		document.getElementById('reset').classList.add('bg-gray-300');
	}

	/**
	 * Get the questions filtered by the ones you know
	 */
	const skipQuestions = getFromLocalStorage(LOCAL_STORAGE_SKIP_QUESTIONS) || [];
	const chosenOne = getQuestion(skipQuestions);

	if (chosenOne?.number) {
		document.getElementById('question').textContent = chosenOne.question;
		document.getElementById('answer').textContent = chosenOne.answer.join('\n\n');
	} else {
		document.getElementById('question-wrapper').classList.add('hidden');
		document.getElementById('answer-wrapper').classList.add('hidden');
		document.getElementById('you-are-prepared').classList.remove('hidden');
	}

	/**
	 * Handler for when correct 👍 button pressed so we can throw the Q in skip questions array & refresh
	 */
	const correctBtn = document.getElementById('correct');
	correctBtn.addEventListener('click', function () {
		saveToLocalStorage(LOCAL_STORAGE_SKIP_QUESTIONS, [...skipQuestions, chosenOne.number]);
		correct.textContent = '🎉';

		setTimeout(() => {
			window.scrollTo(0, 0);
			window.location.reload();
		}, 300);
	});

	/**
	 * Handler for the reset button so we can clear skip Qs array and refresh
	 */
	const resetBtn = document.getElementById('reset');
	resetBtn.addEventListener('click', function () {
		saveToLocalStorage(LOCAL_STORAGE_SKIP_QUESTIONS, []);
		setTimeout(() => {
			window.location.reload();
		}, 1);
	});

	/**
	 * Once DOM is loaded full we can set the info text
	 */
	document.addEventListener(
		'DOMContentLoaded',
		function () {
			const percentCorrect = Math.round((skipQuestions.length / chosenOne.total) * 100);
			document.getElementById('info').textContent = `You know ${percentCorrect}% of ${chosenOne.total} Qs`;
		},
		false,
	);

	/**
	 * When page reloads always scroll to the top to prevent seeing answers of next question
	 */
	window.addEventListener('beforeunload', function () {
		window.scrollTo(0, 0);
	});
})();
