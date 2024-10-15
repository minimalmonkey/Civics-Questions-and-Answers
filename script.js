const LOCAL_STORAGE_SKIP_QUESTIONS = 'skip-questions';

(function () {
	const skipQuestions = getFromLocalStorage(LOCAL_STORAGE_SKIP_QUESTIONS) || [];
	const chosenOne = getQuestion(skipQuestions);

	console.log('chosenOne:', chosenOne);

	if (chosenOne?.number) {
		document.getElementById('question').textContent = chosenOne.question;
		document.getElementById('answer').textContent = chosenOne.answer.join('\n\n');
	} else {
		document.getElementById('question-wrapper').classList.add('hidden');
		document.getElementById('answer-wrapper').classList.add('hidden');
		document.getElementById('you-are-prepared').classList.remove('hidden');
	}

	window.addEventListener('beforeunload', function () {
		window.scrollTo(0, 0);
	});

	const correctBtn = document.getElementById('correct');
	correctBtn.addEventListener('click', function () {
		saveToLocalStorage(LOCAL_STORAGE_SKIP_QUESTIONS, [...skipQuestions, chosenOne.number]);
		correct.textContent = '🎉';

		setTimeout(() => {
			window.scrollTo(0, 0);
			window.location.reload();
		}, 300);
	});

	const resetBtn = document.getElementById('reset');
	resetBtn.addEventListener('click', function () {
		saveToLocalStorage(LOCAL_STORAGE_SKIP_QUESTIONS, []);
		setTimeout(() => {
			window.location.reload();
		}, 1);
	});

	document.addEventListener(
		'DOMContentLoaded',
		function () {
			const percentCorrect = Math.round((skipQuestions.length / chosenOne.total) * 100);
			document.getElementById('info').textContent = `${percentCorrect}%`;
		},
		false,
	);

	if (isDayTimeHours()) {
		document.body.classList.add('bg-white');
		document.body.classList.add('text-slate-700');
		document.getElementById('footer').classList.add('bg-gray-100');
		document.getElementById('reset').classList.add('bg-gray-300');
	}
})();
