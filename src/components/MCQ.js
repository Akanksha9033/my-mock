import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuizPage() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "1.	A project manager has noticed that the team members have engaged in a verbal disagreement and some of the team members are not very comfortable talking to other team members. The project manager is worried this might lead to a situation that affects the team’s working relationship. What is the Project Manager’s best course of action in this scenario?",
      options: [
        "A.	Ask few of the team members to work from home to avoid further conflicts.",
        "B.	Observe the team member's interactions actively and note the findings. ",
        "C.	Discuss the problem with Project sponsor for solution. ",
        "D.	Ask the team to update their ground rules. ",
      ],
    },
    {
      question: "2.	A supplier that’s supporting the part of the project tends to regularly have conflicts with the project team members. The Project Manager is worried that these conflicts could impact the project work and other suppliers as well.Which of the following is the most appropriate action for the Project Manager to take?",
      options: [
        "A.	Facilitate a meeting between the team members and suppliers",
        "B.	Re-arrange the team members with different responsibilities	",
        "C.	Do nothing, the conflicts are good for the project",
        "D.	Identify an alternate supplier to work with the team",
      ],
    },
    
    {
      question: "3.	A software development project is being initiated in an organization. The investors investing in the project want to take advantage of revenue through early adopters by delivering incrementally. The team, however, is opposed to the idea as they believe it will lead to bad quality product in many of the releases. Which conflict management/resolution technique can help the project manager the best?",
      options: [
        'A.	Direct/Force',
        'B.	Smooth/Accommodate',
        'C.	Withdraw/Avoid',
        'D.	Compromise/Reconcile'
      ]
    },
    {
      question: "4.	Two group of members of the team working on a new Agile project disagree on selecting a software system to run the project. They have not been able to select the system despite multiple meetings among themselves. The disagreement is leading to tense environment between the members.What should the Project Manager do?	 ",
      
      options: [
        'A.	Offer a compromise that is acceptable to both the team members	',
        'B.	Select that software system which poses least risk to the project',
        'C.	Help the team members arrive at the best solution',
        'D.	Ask the team to decide or a strict action might be taken'
      ]
    },
    {
      question: "5.	A project to develop a software application that will help various departments in the organization is in its’ initiating stages. Training the team is one of the project deliverables and the department heads want to create a detailed training program for their team members on the system usage. The project team has never worked on a similar software and wants to quickly start to execution to deliver components of the product incrementally and use shorter development cycles to gain early feedback and adapt. What is the best way for the project manager to decide the project management approach?",
      options: [
        'A.	Satisfy functional heads by asking the team to apply traditional approach.',
        'B.	Let the team manage project using adaptive approaches.',
        'C.	Facilitate a compromise by adopting a hybrid approach. 	',
        'D.	Suggest discussing the approach a day before execution starts. '
      ]
    },
    {
      question: "6.	The team members of a recently completed successful project complain that although the project was completed within time and budget, they faced an issue of lack of direction while executing the project. A project manager about to start a project is worried of the same issue repeating in this new project.Which of the following actions would help the Project Manager the most?",
      options: [
        'A.	Organize a team building activity to help team members learn about one another',
        'B.	Conduct a vision workshop and ensure that all the team members attend the workshop',
        'C.	Engage stakeholders and regularly gather detailed requirements from them',
        'D.	Inform the vision statement to the team members to understand the direction'
      ]
    },
    {
      question: "7.	A Project Manager working on a traditional approach project is discussing the responses to the risks identified by the team members. Considering the diversity of team and complexity of the tasks, it was decided that if a response gets more than 80% votes from the team members, then that response will be selected. The project manager doesn’t agree to the very first response that received 90% vote from the team members. What is the best action for the Project Manager to take?",
      options: [
        'A Ask the team members to conduct another round of voting',
        'B.	Discuss with the team members for alternate responses',
        'C.	Let the team select the response ',
        'D.	Ask the team to gather more information and finalize the response later'
      ]
    },
    {
      question: "8.	During the iteration planning of a hybrid project, the development team members disagree on the story points that can be assigned to a particular user story. Some of the team members have a concern whether the user story would fit into the next iteration. How should the project manager help the team in this scenario?",
      options: [
        'A.	By facilitating a discussion with the team members to reach a consensus',
        'B.	By assigning an agile coach to help the team with estimation',
        'C.	By estimating the number of story points of the user story in concern',
        'D.	By asking the team to remove the user story and focus on next '
      ]
    },
    {
      question: "9.	An agile project to develop a software application has just been chartered and the team is about to start the work via iteration-based scheduling. The team has decided to run the project in 2-weeks iteration cycles. The Project manager, while going through the product backlog, realized that the team members do not have all the skillsets necessary to complete the project work. What should the project manager do?",
      options: [
        'A.	Discuss the skill gaps with the project sponsor',
        'B.	Get involved in development work to support the team',
        'C.	Hire extra members with required skillsets',
        'D.	Help the team work collectively in the iterations'
      ]
    },
    {
      question: "10.	While reviewing the product roadmap with the project sponsor, the project manager informs the sponsor that one of the key features in the roadmap isn’t aligned to their organization’s vision. The feature will hamper the chief strategy officer’s plan. The sponsor informs that since the Chief strategy officer is not a part of the project, there is no need to worry about that at this moment. What should the project manager do?",
      options: [
        'A.	Inform the Chief Strategy Officer about the sponsor’s position',
        'B.	Influence the Sponsor to consider the engagement needs of the Chief Strategy Officer',
        'C.	Continue working on the project as per the advice from the Sponsor',
        'D.	Check the organizational process assets (OPAs) for suggestion'
      ]
    },
    {
      question: "11.	An agile team constantly complain of lack of understanding the priority of items in the product backlog. What should the Project Manager do?",
      options: [
        'A.	Ask the team members to pick the highest business value item first',
        'B.	Review the product backlog with the team during next daily standup',
        'C.	Work with the product owner to ensure prioritization ',
        'D.	Suggest the team to work on most complex story first'
      ]
    },
    {
      question: "12.	One of the high performing team leads have recently started to behave aggressively with other team members. The suppliers have also complained of the changes in behavior of this lead. The Project manager is surprised to note all these complaints as the lead was one of the best-behaved members in the project. What should the Project Manager do?"
,
      options: [
        'A.	Discuss this issue with the lead’s functional manager ',
        'B.	Discuss with the team to understand the reason for lead’s behavior change',
        'C.	Reassign a different lead to work with the complaining suppliers',
        'D.	Discuss with the team lead to determine the cause of behavior change'
      ]
    },
    {
      question: "13.	As per the norms in their project, the project manager and the team members are discussing the project’s progress in front of an information radiator. They interpret that the team’s velocity has gone down in the last few sprints. Which charts are the project manager and team likely looking at? (Choose two.) ",
      options: [
        'A.	Work breakdown structure.',
        'B.	Burndown chart.',
        'C.	Burnup chart.',
        'D.	Product backlog.',
        'E.	Control chart..'
      ]
    },
    {
      question: "14.	One of the project team members discussed with project manager that there could be a delay in completing the deliverable assigned to that member because of lack of understanding of the activities involved in completing the deliverables. What should the project manager do?",
      options: [
        'A.	Ask the team to help the member learn on-the-job',
        'B.	Discuss extending the timelines of deliverables assigned to the member.',
        'C.	Report the issue to the Human Resource department.',
        'D.	Share the information with the member as soon as possible.'
      ]
    },
    {
      question: "15.	A project sponsor complains that the project manager has not planned to spend time with the team members evaluating their performances and guiding them to improve their results. This could lead to issues in the project that cannot be proactively handled. Sponsor suggests the project manager to develop the plan on priority. The Project Manager agrees with the concern.What should the project manager do next? ",
      options: [
        'A.	Develop a project escalation matrix.',
        'B.	Evaluate demonstration of task accountability. ',
        'C.	Determine an appropriate feedback approach.',
        'D.	Determine training options based on training needs.(CPM)'
      ]
    }
  ];

  const handleNavigate = (section) => {
    if (section === 'section-2') {
      navigate('/fill-blank');
    } else if (section === 'section-3') {
      navigate('/drag-drop');
    } else if (section === 'section-4') {
      navigate('/hotspot');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    }
  };

  const handleAnswerSelection = (option) => {
    setSelectedOption(option);
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Edzest Education Services</div>
        <div className="space-x-4">
          <button
            onClick={() => handleNavigate('section-2')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Section 2: Fill in the Blanks
          </button>
          <button
            onClick={() => handleNavigate('section-3')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Section 3: Drag and Drop
          </button>
          <button
            onClick={() => handleNavigate('section-4')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Section 4: Hotspot
          </button>
        </div>
      </header>

      <div className="container mx-auto py-6 px-4 flex">
        {/* Quiz Section */}
        <div className="flex-1 bg-white rounded shadow p-6 mr-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">Quiz 1</h2>
            <h3 className="text-lg font-medium mb-2">Q. {currentQuestionIndex + 1} of {questions.length}</h3>
            <p className="text-gray-700 mb-4">{questions[currentQuestionIndex].question}</p>

            <div className="space-y-2">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    name="option"
                    id={`option-${index}`}
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleAnswerSelection(option)}
                    className="mr-2"
                  />
                  <label htmlFor={`option-${index}`} className="text-gray-800">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Mark for Review
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
              Clear
            </button>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handleNextQuestion}
              className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${currentQuestionIndex === questions.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              {currentQuestionIndex === questions.length - 1 ? 'End Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
        
        


        {/* Question Navigation Panel */}
        <div className="w-1/4 bg-white rounded shadow p-4">
          <h4 className="text-lg font-semibold mb-4">Question Navigation</h4>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: questions.length }, (_, i) => (
              <button
                key={i}
                className={`w-8 h-8 rounded-full border text-sm font-medium ${
                  answeredQuestions.includes(i)
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}
                onClick={() => setCurrentQuestionIndex(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
