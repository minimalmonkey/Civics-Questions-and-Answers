
const sections = [{
    section: 'Principles of American Democracy',
    questionsAndAnswers: [{
        q: 'What is the supreme law of the land?',
        a: 'the Constitution',
    },{
        q: 'What does the Constitution do?',
        a: '• sets up the government\n\n• defines the government\n\n• protects basic rights of Americans',
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
        a: '• speech\n\n• religion\n\n• assembly\n\n• press\n\n• petition  the government'
    },{
        q:'How many amendments does the Constitution have?',
        a:'twenty-seven (27)',
    },{
        q:'What did the Declaration of Independence do?',
        a:'• announced our independence (from Great Britain)\n\n• declared our independence (from Great Britain)\n\n• said that the United States is free (from Great Britain)',
    },{
        q:'What are two rights in the Declaration of Independence?',
        a:'• life\n\n• liberty\n\n• pursuit of happiness'
    },{
        q:'What is freedom of religion?',
        a:'You can practice any religion, or not practice a religion.',
    },{
        q:'What is the economic system in the United States?',
        a:'capitalist economy / market economy',
    },{
        q:'What is the “rule of law”?',
        a:'• Everyone must follow the law.\n\n• Leaders must obey the law.\n\n• Government must obey the law.\n\n• No one is above the law.'}]
},{
    section: 'System of Government',
    questionsAndAnswers: [{
        q:'Name one branch or part of the government.*',
        a: '• Congress\n\n• legislative\n\n• President\n\n• executive\n\n• the courts\n\n• judicial',
    }, {
        q: 'What stops one branch of government from becoming too powerful?',
        a: '• checks and balances\n\n• separation of powers',
    }, {
        q: 'Who is in charge of the executive branch?',
        a: 'the President',
    }, {
        q: 'Who makes federal laws?',
        a: '• Congress\n\n• Senate and House (of Representatives)\n\n• (U.S. or national) legislature',
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
// • Secretary of Agriculture
// • Secretary of Commerce
// • Secretary of Defense
// • Secretary of Education
// • Secretary of Energy
// • Secretary of Health and Human Services
// • Secretary of Homeland Security
// • Secretary of Housing and Urban Development
// • Secretary of the Interior
// • Secretary of Labor
// • Secretary of State
// • Secretary of Transportation
// • Secretary of the Treasury
// • Secretary of Veterans Affairs
a:'• Attorney General\n\n• Vice President',

},{

q:'What does the judicial branch do?',
a:'• reviews laws\n\n• explains laws\n\n• resolves disputes (disagreements)\n\n• decides if a law goes against the Constitution',

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
a:'• to print money 🤑\n\n• to declare war 🔫'

},{

q:'Under our Constitution, some powers belong to the states. What is one power of the states?',
a:'• provide schooling and education 🎓\n\n• provide protection (police) 🚔'

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
 * FULL 100 QUESTIONS
 * 
 */


const jsonData = {
    "AMERICAN_GOVERNMENT": {
      "A: Principles of American Democracy": [
        {
          "number": 1,
          "question": "What is the supreme law of the land?",
          "answer": ["the Constitution"]
        },
        {
          "number": 2,
          "question": "What does the Constitution do?",
          "answer": [
            "sets up the government",
            "defines the government",
            "protects basic rights of Americans"
          ]
        },
        {
          "number": 3,
          "question": "The idea of self-government is in the first three words of the Constitution. What are these words?",
          "answer": ["We the People"]
        },
        {
          "number": 4,
          "question": "What is an amendment?",
          "answer": ["a change (to the Constitution)", "an addition (to the Constitution)"]
        },
        {
          "number": 5,
          "question": "What do we call the first ten amendments to the Constitution?",
          "answer": ["the Bill of Rights"]
        },
        {
          "number": 6,
          "question": "What is one right or freedom from the First Amendment?",
          "answer": ["speech", "religion", "assembly", "press", "petition the government"]
        },
        {
          "number": 7,
          "question": "How many amendments does the Constitution have?",
          "answer": ["twenty-seven (27)"]
        },
        {
          "number": 8,
          "question": "What did the Declaration of Independence do?",
          "answer": [
            "announced our independence (from Great Britain)",
            "declared our independence (from Great Britain)",
            "said that the United States is free (from Great Britain)"
          ]
        },
        {
          "number": 9,
          "question": "What are two rights in the Declaration of Independence?",
          "answer": ["life", "liberty", "pursuit of happiness"]
        },
        {
          "number": 10,
          "question": "What is freedom of religion?",
          "answer": ["You can practice any religion, or not practice a religion."]
        },
        {
          "number": 11,
          "question": "What is the economic system in the United States?",
          "answer": ["capitalist economy", "market economy"]
        },
        {
          "number": 12,
          "question": "What is the 'rule of law'?",
          "answer": [
            "Everyone must follow the law.",
            "Leaders must obey the law.",
            "Government must obey the law.",
            "No one is above the law."
          ]
        }
      ],
      "B: System of Government": [
        {
          "number": 13,
          "question": "Name one branch or part of the government.",
          "answer": ["Congress", "legislative", "President", "executive", "the courts", "judicial"]
        },
        {
          "number": 14,
          "question": "What stops one branch of government from becoming too powerful?",
          "answer": ["checks and balances", "separation of powers"]
        },
        {
          "number": 15,
          "question": "Who is in charge of the executive branch?",
          "answer": ["the President"]
        },
        {
          "number": 16,
          "question": "Who makes federal laws?",
          "answer": ["Congress", "Senate and House (of Representatives)", "(U.S. or national) legislature"]
        },
        {
          "number": 17,
          "question": "What are the two parts of the U.S. Congress?",
          "answer": ["the Senate and House (of Representatives)"]
        },
        {
          "number": 18,
          "question": "How many U.S. Senators are there?",
          "answer": ["one hundred (100)"]
        },
        {
          "number": 19,
          "question": "We elect a U.S. Senator for how many years?",
          "answer": ["six (6)"]
        },
        {
          "number": 20,
          "question": "Who is one of your state’s U.S. Senators now?",
          "answer": ["Answers will vary."]
        },
        {
          "number": 21,
          "question": "The House of Representatives has how many voting members?",
          "answer": ["four hundred thirty-five (435)"]
        },
        {
          "number": 22,
          "question": "We elect a U.S. Representative for how many years?",
          "answer": ["two (2)"]
        },
        {
          "number": 23,
          "question": "Name your U.S. Representative.",
          "answer": ["Answers will vary."]
        },
        {
          "number": 24,
          "question": "Who does a U.S. Senator represent?",
          "answer": ["all people of the state"]
        },
        {
          "number": 25,
          "question": "Why do some states have more Representatives than other states?",
          "answer": ["because of the state's population", "because they have more people"]
        },
        {
          "number": 26,
          "question": "We elect a President for how many years?",
          "answer": ["four (4)"]
        },
        {
          "number": 27,
          "question": "In what month do we vote for President?",
          "answer": ["November"]
        },
        {
          "number": 28,
          "question": "What is the name of the President of the United States now?",
          "answer": ["Visit uscis.gov/citizenship/testupdates"]
        },
        {
          "number": 29,
          "question": "What is the name of the Vice President of the United States now?",
          "answer": ["Visit uscis.gov/citizenship/testupdates"]
        },
        {
          "number": 30,
          "question": "If the President can no longer serve, who becomes President?",
          "answer": ["the Vice President"]
        },
        {
          "number": 31,
          "question": "If both the President and the Vice President can no longer serve, who becomes President?",
          "answer": ["the Speaker of the House"]
        },
        {
          "number": 32,
          "question": "Who is the Commander in Chief of the military?",
          "answer": ["the President"]
        },
        {
          "number": 33,
          "question": "Who signs bills to become laws?",
          "answer": ["the President"]
        },
        {
          "number": 34,
          "question": "Who vetoes bills?",
          "answer": ["the President"]
        },
        {
          "number": 35,
          "question": "What does the President’s Cabinet do?",
          "answer": ["advises the President"]
        },
        {
          "number": 36,
          "question": "What are two Cabinet-level positions?",
          "answer": [
            "Secretary of Agriculture",
            "Secretary of Commerce",
            "Secretary of Defense",
            "Secretary of Education",
            "Secretary of Energy",
            "Secretary of Health and Human Services",
            "Secretary of Homeland Security",
            "Secretary of Housing and Urban Development",
            "Secretary of the Interior",
            "Secretary of Labor",
            "Secretary of State",
            "Secretary of Transportation",
            "Secretary of the Treasury",
            "Secretary of Veterans Affairs",
            "Attorney General",
            "Vice President"
          ]
        },
        {
          "number": 37,
          "question": "What does the judicial branch do?",
          "answer": [
            "reviews laws",
            "explains laws",
            "resolves disputes (disagreements)",
            "decides if a law goes against the Constitution"
          ]
        },
        {
          "number": 38,
          "question": "What is the highest court in the United States?",
          "answer": ["the Supreme Court"]
        },
        {
          "number": 39,
          "question": "How many justices are on the Supreme Court?",
          "answer": ["Visit uscis.gov/citizenship/testupdates"]
        },
        {
          "number": 40,
          "question": "Who is the Chief Justice of the United States now?",
          "answer": ["Visit uscis.gov/citizenship/testupdates"]
        },
        {
          "number": 41,
          "question": "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
          "answer": ["to print money", "to declare war", "to create an army", "to make treaties"]
        },
        {
          "number": 42,
          "question": "Under our Constitution, some powers belong to the states. What is one power of the states?",
          "answer": [
            "provide schooling and education",
            "provide protection (police)",
            "provide safety (fire departments)",
            "give a driver’s license",
            "approve zoning and land use"
          ]
        },
        {
          "number": 43,
          "question": "Who is the Governor of your state now?",
          "answer": ["Answers will vary."]
        },
        {
          "number": 44,
          "question": "What is the capital of your state?",
          "answer": ["Answers will vary."]
        },
        {
          "number": 45,
          "question": "What are the two major political parties in the United States?",
          "answer": ["Democratic", "Republican"]
        },
        {
          "number": 46,
          "question": "What is the political party of the President now?",
          "answer": ["Visit uscis.gov/citizenship/testupdates"]
        },
        {
          "number": 47,
          "question": "What is the name of the Speaker of the House of Representatives now?",
          "answer": ["Visit uscis.gov/citizenship/testupdates"]
        }
      ],
      "C: Rights and Responsibilities": [
        {
          "number": 48,
          "question": "There are four amendments to the Constitution about who can vote. Describe one of them.",
          "answer": [
            "Citizens eighteen (18) and older (can vote)",
            "You don’t have to pay (a poll tax) to vote",
            "Any citizen can vote. (Women and men can vote.)",
            "A male citizen of any race (can vote)"
          ]
        },
        {
          "number": 49,
          "question": "What is one responsibility that is only for United States citizens?",
          "answer": ["serve on a jury", "vote in a federal election"]
        },
        {
          "number": 50,
          "question": "Name one right only for United States citizens.",
          "answer": ["vote in a federal election", "run for federal office"]
        },
        {
          "number": 51,
          "question": "What are two rights of everyone living in the United States?",
          "answer": [
            "freedom of expression",
            "freedom of speech",
            "freedom of assembly",
            "freedom to petition the government",
            "freedom of religion",
            "the right to bear arms"
          ]
        },
        {
          "number": 52,
          "question": "What do we show loyalty to when we say the Pledge of Allegiance?",
          "answer": ["the United States", "the flag"]
        },
        {
          "number": 53,
          "question": "What is one promise you make when you become a United States citizen?",
          "answer": [
            "give up loyalty to other countries",
            "defend the Constitution and laws of the United States",
            "obey the laws of the United States",
            "serve in the U.S. military (if needed)",
            "serve (do important work for) the nation (if needed)",
            "be loyal to the United States"
          ]
        },
        {
          "number": 54,
          "question": "How old do citizens have to be to vote for President?",
          "answer": ["eighteen (18) and older"]
        },
        {
          "number": 55,
          "question": "What are two ways that Americans can participate in their democracy?",
          "answer": [
            "vote",
            "join a political party",
            "help with a campaign",
            "join a civic group",
            "join a community group",
            "give an elected official your opinion on an issue",
            "call Senators and Representatives",
            "publicly support or oppose an issue or policy",
            "run for office",
            "write to a newspaper"
          ]
        },
        {
          "number": 56,
          "question": "When is the last day you can send in federal income tax forms?",
          "answer": ["April 15"]
        },
        {
          "number": 57,
          "question": "When must all men register for the Selective Service?",
          "answer": ["at age eighteen (18)", "between eighteen (18) and twenty-six (26)"]
        }
      ]
    },
    "AMERICAN_HISTORY": {
      "A: Colonial Period and Independence": [
        {
          "number": 58,
          "question": "What is one reason colonists came to America?",
          "answer": [
            "freedom",
            "political liberty",
            "religious freedom",
            "economic opportunity",
            "practice their religion",
            "escape persecution"
          ]
        },
        {
          "number": 59,
          "question": "Who lived in America before the Europeans arrived?",
          "answer": ["American Indians", "Native Americans"]
        },
        {
          "number": 60,
          "question": "What group of people was taken to America and sold as slaves?",
          "answer": ["Africans", "people from Africa"]
        },
        {
          "number": 61,
          "question": "Why did the colonists fight the British?",
          "answer": [
            "because of high taxes (taxation without representation)",
            "because the British army stayed in their houses (boarding, quartering)",
            "because they didn’t have self-government"
          ]
        },
        {
          "number": 62,
          "question": "Who wrote the Declaration of Independence?",
          "answer": ["(Thomas) Jefferson"]
        },
        {
          "number": 63,
          "question": "When was the Declaration of Independence adopted?",
          "answer": ["July 4, 1776"]
        },
        {
          "number": 64,
          "question": "There were 13 original states. Name three.",
          "answer": [
            "New Hampshire",
            "Massachusetts",
            "Rhode Island",
            "Connecticut",
            "New York",
            "New Jersey",
            "Pennsylvania",
            "Delaware",
            "Maryland",
            "Virginia",
            "North Carolina",
            "South Carolina",
            "Georgia"
          ]
        },
        {
          "number": 65,
          "question": "What happened at the Constitutional Convention?",
          "answer": ["The Constitution was written.", "The Founding Fathers wrote the Constitution."]
        },
        {
          "number": 66,
          "question": "When was the Constitution written?",
          "answer": ["1787"]
        },
        {
          "number": 67,
          "question": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
          "answer": ["(James) Madison", "(Alexander) Hamilton", "(John) Jay", "Publius"]
        },
        {
          "number": 68,
          "question": "What is one thing Benjamin Franklin is famous for?",
          "answer": [
            "U.S. diplomat",
            "oldest member of the Constitutional Convention",
            "first Postmaster General of the United States",
            "writer of 'Poor Richard's Almanac'",
            "started the first free libraries"
          ]
        },
        {
          "number": 69,
          "question": "Who is the 'Father of Our Country'?",
          "answer": ["(George) Washington"]
        },
        {
          "number": 70,
          "question": "Who was the first President?",
          "answer": ["(George) Washington"]
        }
      ],
      "B: 1800s": [
        {
          "number": 71,
          "question": "What territory did the United States buy from France in 1803?",
          "answer": ["the Louisiana Territory", "Louisiana"]
        },
        {
          "number": 72,
          "question": "Name one war fought by the United States in the 1800s.",
          "answer": [
            "War of 1812",
            "Mexican-American War",
            "Civil War",
            "Spanish-American War"
          ]
        },
        {
          "number": 73,
          "question": "Name the U.S. war between the North and the South.",
          "answer": ["the Civil War", "the War between the States"]
        },
        {
          "number": 74,
          "question": "Name one problem that led to the Civil War.",
          "answer": ["slavery", "economic reasons", "states’ rights"]
        },
        {
          "number": 75,
          "question": "What was one important thing that Abraham Lincoln did?",
          "answer": [
            "freed the slaves (Emancipation Proclamation)",
            "saved (or preserved) the Union",
            "led the United States during the Civil War"
          ]
        },
        {
          "number": 76,
          "question": "What did the Emancipation Proclamation do?",
          "answer": [
            "freed the slaves",
            "freed slaves in the Confederacy",
            "freed slaves in the Confederate states",
            "freed slaves in most Southern states"
          ]
        },
        {
          "number": 77,
          "question": "What did Susan B. Anthony do?",
          "answer": ["fought for women’s rights", "fought for civil rights"]
        }
      ],
      "C: Recent American History and Other Important Historical Information": [
        {
          "number": 78,
          "question": "Name one war fought by the United States in the 1900s.",
          "answer": [
            "World War I",
            "World War II",
            "Korean War",
            "Vietnam War",
            "(Persian) Gulf War"
          ]
        },
        {
          "number": 79,
          "question": "Who was President during World War I?",
          "answer": ["(Woodrow) Wilson"]
        },
        {
          "number": 80,
          "question": "Who was President during the Great Depression and World War II?",
          "answer": ["(Franklin) Roosevelt"]
        },
        {
          "number": 81,
          "question": "Who did the United States fight in World War II?",
          "answer": ["Japan", "Germany", "Italy"]
        },
        {
          "number": 82,
          "question": "Before he was President, Eisenhower was a general. What war was he in?",
          "answer": ["World War II"]
        },
        {
          "number": 83,
          "question": "During the Cold War, what was the main concern of the United States?",
          "answer": ["Communism"]
        },
        {
          "number": 84,
          "question": "What movement tried to end racial discrimination?",
          "answer": ["civil rights (movement)"]
        },
        {
          "number": 85,
          "question": "What did Martin Luther King, Jr. do?",
          "answer": ["fought for civil rights", "worked for equality for all Americans"]
        },
        {
          "number": 86,
          "question": "What major event happened on September 11, 2001, in the United States?",
          "answer": ["Terrorists attacked the United States."]
        },
        {
          "number": 87,
          "question": "Name one American Indian tribe in the United States.",
          "answer": [
            "Cherokee",
            "Navajo",
            "Sioux"
          ]
        }
      ]
    },
    "INTEGRATED_CIVICS": {
      "A: Geography": [
        {
          "number": 88,
          "question": "Name one of the two longest rivers in the United States.",
          "answer": ["Missouri (River)", "Mississippi (River)"]
        },
        {
          "number": 89,
          "question": "What ocean is on the West Coast of the United States?",
          "answer": ["Pacific (Ocean)"]
        },
        {
          "number": 90,
          "question": "What ocean is on the East Coast of the United States?",
          "answer": ["Atlantic (Ocean)"]
        },
        {
          "number": 91,
          "question": "Name one U.S. territory.",
          "answer": [
            "Puerto Rico",
            "U.S. Virgin Islands",
            "American Samoa",
            "Northern Mariana Islands",
            "Guam"
          ]
        },
        {
          "number": 92,
          "question": "Name one state that borders Canada.",
          "answer": [
            "New York",
            "Washington",
            "Alaska"
          ]
        },
        {
          "number": 93,
          "question": "Name one state that borders Mexico.",
          "answer": ["California", "Arizona", "New Mexico", "Texas"]
        },
        {
          "number": 94,
          "question": "What is the capital of the United States?",
          "answer": ["Washington, D.C."]
        },
        {
          "number": 95,
          "question": "Where is the Statue of Liberty?",
          "answer": ["New York (Harbor)", "Liberty Island"]
        }
      ],
      "B: Symbols": [
        {
          "number": 96,
          "question": "Why does the flag have 13 stripes?",
          "answer": ["because there were 13 original colonies", "because the stripes represent the original colonies"]
        },
        {
          "number": 97,
          "question": "Why does the flag have 50 stars?",
          "answer": ["because there is one star for each state", "because each star represents a state", "because there are 50 states"]
        },
        {
          "number": 98,
          "question": "What is the name of the national anthem?",
          "answer": ["The Star-Spangled Banner"]
        }
      ],
      "C: Holidays": [
        {
          "number": 99,
          "question": "When do we celebrate Independence Day?",
          "answer": ["July 4"]
        },
        {
          "number": 100,
          "question": "Name two national U.S. holidays.",
          "answer": [
            "New Year’s Day",
            "Martin Luther King, Jr. Day",
            "Presidents’ Day",
            "Memorial Day",
            "Juneteenth",
            "Independence Day",
            "Labor Day",
            "Columbus Day",
            "Veterans Day",
            "Thanksgiving",
            "Christmas"
          ]
        }
      ]
    }
  };
  

  console.log('jsonData:', jsonData);


  function extractQuestionObjects(data) {
    const questionsArray = [];
  
    // Recursive function to handle nested categories
    function getQuestions(obj) {
      if (Array.isArray(obj)) {
        // Loop through array of questions
        obj.forEach(item => {
          if (item.question && item.answer) {
            questionsArray.push({ question: item.question, answer: item.answer });
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
  
  // Example usage with the provided JSON data
//   const jsonData = {
//     // your JSON data here
//   };
  
  const questionObjects = extractQuestionObjects(jsonData);
  console.log(questionObjects);

  const chosenOne =  questionObjects[Math.floor(Math.random() * questionObjects.length)];

  console.log('chosenOne:',chosenOne);



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

document.getElementById('question').textContent = chosenOne.question;
document.getElementById('answer').textContent = chosenOne.answer.join('\n\n');


window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});


function isDayTimeHours() {
    const now = new Date();
    const currentHour = now.getHours();
    
    // Check if the current time is between 8 AM (8) and 6 PM (18)
    return currentHour >= 8 && currentHour < 18;
  }

if (isDayTimeHours()) {
    document.body.classList.add('bg-white');
    document.body.classList.add('text-slate-700');
}
