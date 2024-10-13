
const sections = [{
    section: 'Principles of American Democracy',
    questionsAndAnswers: [{
        q: 'What is the supreme law of the land?',
        a: 'the Constitution',
    },{
        q: 'What does the Constitution do?',
        a: '▪ sets up the government\n\n▪ defines the government\n\n▪ protects basic rights of Americans',
    },{
        q: 'The idea of self-government is in the first three words of the Constitution. What are these words?',
        a: 'We the People',
    },{
        q: 'What is an amendment?',
        a: 'a change or an addition (to the Constitution)',
    },{
        q:'What do we call the first ten amendments to the Constitution?',
        a:'the Bill of Rights'
    },{
        q:'What is one right or freedom from the First Amendment?',
        a: '▪ speech\n\n▪ religion\n\n▪ assembly\n\n▪ press\n\n▪ petition  the government'
    },{
        q:'How many amendments does the Constitution have?',
        a:'twenty-seven (27)',
    },{
        q:'What did the Declaration of Independence do?',
        a:'▪ announced our independence (from Great Britain)\n\n▪ declared our independence (from Great Britain)\n\n▪ said that the United States is free (from Great Britain)',
    },{
        q:'What are two rights in the Declaration of Independence?',
        a:'▪ life\n\n▪ liberty\n\n▪ pursuit of happiness'
    },{
        q:'What is freedom of religion?',
        a:'You can practice any religion, or not practice a religion.',
    },{
        q:'What is the economic system in the United States?',
        a:'capitalist economy / market economy',
    },{
        q:'What is the “rule of law”?',
        a:'▪ Everyone must follow the law.\n\n▪ Leaders must obey the law.\n\n▪ Government must obey the law.\n\n▪ No one is above the law.'}]
},{
    section: 'System of Government',
    questionsAndAnswers: [{
        q:'Name one branch or part of the government.*',
        a: '▪ Congress\n\n▪ legislative\n\n▪ President\n\n▪ executive\n\n▪ the courts\n\n▪ judicial',
    }, {
        q: 'What stops one branch of government from becoming too powerful?',
        a: '▪ checks and balances\n\n▪ separation of powers',
    }, {
        q: 'Who is in charge of the executive branch?',
        a: 'the President',
    }, {
        q: 'Who makes federal laws?',
        a: '▪ Congress\n\n▪ Senate and House (of Representatives)\n\n▪ (U.S. or national) legislature',
    }, {
        q: 'What are the two parts of the U.S. Congress?*',
        a: 'the Senate and House (of Representatives)',
    }, {
        q: 'How many U.S. Senators are there?',
        a: 'one hundred (100)',
    }, {
        q: 'We elect a U.S. Senator for how many years?',
        a: 'six (6)',
    }, {
        q: 'Who is one of your state’s U.S. Senators now?*',
        a: 'Alex Padilla (California)',
    }, {
        q: 'The House of Representatives has how many voting members?',
        a:'four hundred thirty-five (435)',
    }, {
        q:'We elect a U.S. Representative for how many years?',
        a: 'two (2)',
    }, {
        q:'Name your U.S. Representative.',
        a: 'Nancy Pelosi',
    }, {
        q: 'Who does a U.S. Senator represent?',
        a: 'all people of the state',
    }, {
        q:'Why do some states have more Representatives than other states?',
        a: '(because of) the state’s population',
    }, {
        q: 'We elect a President for how many years?',
        a: 'four (4)',
    },{

q:'In what month do we vote for President?*',
a:'November'},{

q:'What is the name of the President of the United States now?*',
a:'President Joe Biden',

},{

q:'What is the name of the Vice President of the United States now?',
a:'Kamala Harris',

},{

q:'If the President can no longer serve, who becomes President?',
a:'the Vice President'

},{

q:'If both the President and the Vice President can no longer serve, who becomes President?',
a:'the Speaker of the House'

},{

q:'Who is the Commander in Chief of the military?',
a:'the President'

},{

q:'Who signs bills to become laws?',
a:'the President'

},{

q:'Who vetoes bills?',
a:'the President'

},{

q:'What does the President’s Cabinet do?',
a:'advises the President'

},{


q:'What are two Cabinet-level positions?',
// ▪ Secretary of Agriculture
// ▪ Secretary of Commerce
// ▪ Secretary of Defense
// ▪ Secretary of Education
// ▪ Secretary of Energy
// ▪ Secretary of Health and Human Services
// ▪ Secretary of Homeland Security
// ▪ Secretary of Housing and Urban Development
// ▪ Secretary of the Interior
// ▪ Secretary of Labor
// ▪ Secretary of State
// ▪ Secretary of Transportation
// ▪ Secretary of the Treasury
// ▪ Secretary of Veterans Affairs
a:'▪ Attorney General\n\n▪ Vice President',

},{

q:'What does the judicial branch do?',
a:'▪ reviews laws\n\n▪ explains laws\n\n▪ resolves disputes (disagreements)\n\n▪ decides if a law goes against the Constitution',

},{

q:'What is the highest court in the United States?',
a:'the Supreme Court'

},{

q:'How many justices are on the Supreme Court?',
a:'nine (9)',

},{

q: 'Who is the Chief Justice of the United States now?',
a:'John Roberts '

},{

q:'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',
a:'▪ to print money 🤑\n\n▪ to declare war 🔫'

},{

q:'Under our Constitution, some powers belong to the states. What is one power of the states?',
a:'▪ provide schooling and education 🎓\n\n▪ provide protection (police) 🚔'

},{

q:'Who is the Governor of your state now?',
a:'Gavin Newsom',

},{

q:'What is the capital of your state?',
a:'Sacramento',

},{

q:'What are the two major political parties in the United States?',
a:'Democratic and Republican',

},{

q:'What is the political party of the President now?',
a:'Democratic Party',

},{

q:'What is the name of the Speaker of the House of Representatives now?',
a:'Mike Johnson'}


    ]}];


/**
 * 
 * CODE STARTS HERE, ABOVE IS JUST THE DATA
 * 
 */

const filterBy = undefined;
// const filterBy = 'What is one right or freedom from the First Amendment?';
// const filterBy = 'Under our Constitution, some powers belong to the states. What is one power of the states?';

const questionsAndAnswers = sections.map(({ questionsAndAnswers }) => {
    return questionsAndAnswers;
}).flat()
.filter(({ q }) => !filterBy ? true : q === filterBy);

const questionsAndAnswer = questionsAndAnswers[Math.floor(Math.random() * questionsAndAnswers.length)];
// console.log(questionsAndAnswer);

window.scrollTo(0, 0);

document.getElementById('q').textContent = questionsAndAnswer.q;
document.getElementById('a').textContent = questionsAndAnswer.a;
