export const ieltsTheoryQuestions = [
  {
    id: "ielts-th-1",
    module: "IELTS",
    category: "Ownership & Test Structure",
    question: "Which three organizations jointly own IELTS, and what is the total duration and structure of the four test sections?",
    options: [
      "Co-owned by British Council, IDP, and Cambridge; 2 hours 45 minutes total: Listening (30m / 40 Qs), Reading (60m / 40 Qs), Writing (60m / 2 Tasks), Speaking (11–14m / 3 Parts with a live human examiner)",
      "Owned solely by ETS; 2 hours total: 100 Listening and 100 Reading questions",
      "Owned by the UK Home Office; 4 hours total with computer-automated AI speaking",
      "Co-owned by Oxford and Pearson; 80 questions in 80 minutes"
    ],
    correctIndex: 0,
    rationale: "Correct! IELTS is jointly owned by the British Council, IDP: IELTS Australia, and Cambridge University Press & Assessment. Total time is ~2h 45m across L (30m/40 Qs), R (60m/40 Qs), W (60m/2 tasks), and S (11–14m/3 parts with a human examiner)."
  },
  {
    id: "ielts-th-2",
    module: "IELTS",
    category: "2026 Delivery Update (5 March 2026 Announcement)",
    question: "What major global delivery change was announced on 5 March 2026 regarding traditional paper-based IELTS testing?",
    options: [
      "Traditional paper-based IELTS is being phased out starting mid-2026 in favor of Computer-delivered IELTS (with a 'Writing on Paper' option offered in select locations).",
      "Computer-based IELTS was permanently cancelled so all tests must be handwritten in pencil.",
      "The Speaking section was removed from IELTS Academic starting mid-2026.",
      "IELTS scores were converted from Bands 1–9 to a 10–990 scale."
    ],
    correctIndex: 0,
    rationale: "Correct! On 5 March 2026, the IELTS partners announced that traditional paper-based IELTS is being phased out from mid-2026 toward computer delivery globally, while providing a 'Writing on Paper' option in select markets where candidates prefer handwriting their essays."
  },
  {
    id: "ielts-th-3",
    module: "IELTS",
    category: "IELTS One Skill Retake (OSR)",
    question: "What are the official eligibility rules for IELTS One Skill Retake (OSR)?",
    options: [
      "It is available after completing a full computer-based IELTS test, must be taken within 60 days of the original test date, and allows a maximum of 1 retake per full test.",
      "Candidates can retake up to three skills on paper up to 2 years after the original test.",
      "It is available without taking a full test first.",
      "It automatically raises a candidate's score by 1.0 band without retesting."
    ],
    correctIndex: 0,
    rationale: "Correct! One Skill Retake (OSR) lets test-takers redo one of the four skills (L, R, W, or S) if they took a full IELTS on Computer test, provided they book and sit the retake within 60 days (maximum one retake per full test)."
  },
  {
    id: "ielts-th-4",
    module: "IELTS",
    category: "IELTS Online vs IELTS Life Skills",
    question: "Which statement accurately contrasts IELTS Online with IELTS Life Skills?",
    options: [
      "IELTS Online is available for IELTS Academic only and is NOT accepted for visa/immigration purposes; IELTS Life Skills assesses Speaking and Listening only at CEFR A1, A2, or B1 and is graded Pass/Fail.",
      "IELTS Online is exclusively for UK spouse visas, whereas IELTS Life Skills tests C2 academic writing.",
      "Both IELTS Online and IELTS Life Skills award Bands 1–9 across all four skills.",
      "IELTS Life Skills is a 3-hour reading and writing exam for medical doctors."
    ],
    correctIndex: 0,
    rationale: "Correct! IELTS Online covers only the Academic module from home and is not accepted by immigration authorities. IELTS Life Skills tests only Speaking & Listening (at A1, A2, or B1 for UKVI family/settlement routes) with a Pass/Fail outcome."
  },
  {
    id: "ielts-th-5",
    module: "IELTS",
    category: "Band Score Rounding & B2 Threshold",
    question: "A candidate achieves Listening 6.5, Reading 6.5, Writing 6.0, and Speaking 6.0 (average = 6.25), while another achieves 6.5, 6.5, 6.0, 5.5 (average = 6.125). How are their Overall Band Scores rounded, and how many raw marks out of 40 typically equal Band 6.5 in Academic Reading/Listening?",
    options: [
      "6.25 rounds UP to 6.5 (.75 rounds up to the next whole band), whereas 6.125 rounds DOWN to 6.0; Band 6.5 in Academic R & L requires roughly 27–29/40.",
      "Both 6.25 and 6.125 round down to 6.0; Band 6.5 requires 39/40.",
      "6.25 rounds up to 7.0, and 6.125 rounds up to 6.5; Band 6.5 requires 15/40.",
      "IELTS reports exact three-decimal averages without rounding."
    ],
    correctIndex: 0,
    rationale: "Correct! In IELTS rounding rules, an average ending in .25 rounds up to the next half band (.5), .75 rounds up to the next whole band, and .125 or .625 rounds down. Achieving Band 6.5 (strong B2) typically requires ~27–29 out of 40 in Academic Reading and Listening."
  }
];

export const ieltsListeningMock = {
  section1: {
    title: "Section 1: Green Valley Community Centre — Evening Class Registration",
    instructions: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer (Questions 1–10).",
    transcript: `Receptionist: Good afternoon, Green Valley Community Centre. How can I help you today?
Caller: Hello! I just moved into the neighborhood last week, and I'd like to register for a couple of your evening workshops and get a membership card.
Receptionist: Wonderful, welcome to Green Valley! I can register you right over the phone. Could I start by taking your full name?
Caller: Yes, it's Clara Henderson. That's H-E-N-D-E-R-S-O-N.
Receptionist: Thank you, Clara. And what is your current residential street address?
Caller: I live at 42 Oakwood Avenue.
Receptionist: 42 Oakwood Avenue, got it. And the postcode there?
Caller: It's GV4 8LP.
Receptionist: Great. Now, which evening course are you most interested in joining this month?
Caller: Well, I saw a poster for the beginner's Pottery class. Does that still have openings?
Receptionist: Yes, the Pottery studio has three spots left! Those sessions run every Thursday evening starting at 6:30 pm.
Caller: Thursday at 6:30 pm works well for me. How much is the course fee for the six-week term?
Receptionist: Normally it's ninety-five pounds, but for local residents it's 85 pounds, which includes all clay and firing materials.
Caller: Oh, 85 pounds is very reasonable. Do I need to bring anything to the first session?
Receptionist: All tools are provided, though the instructor asks everyone to bring an old apron to protect their clothes.
Caller: I'll make sure to pack an apron. Also, I'd like to book the community hall for a small neighborhood book club meeting next month. Which room is best for around fifteen people?
Receptionist: I'd recommend the Cedar Room on the ground floor—it has comfortable armchairs and a tea station.
Caller: Perfect, the Cedar Room. And if I pay today, what payment methods do you accept over the phone?
Receptionist: You can pay by credit card right now, or by bank transfer at the front desk.
Caller: I'll use my credit card. One last question—where is the visitor parking located?
Receptionist: Our main car park is right behind the public library, just a two-minute walk from our main entrance.`,
    items: [
      { id: "ielts-l-1", qNum: 1, label: "Applicant Surname:", promptBefore: "Clara", promptAfter: "", acceptedAnswers: ["henderson"] },
      { id: "ielts-l-2", qNum: 2, label: "Street Address:", promptBefore: "42", promptAfter: "Avenue", acceptedAnswers: ["oakwood"] },
      { id: "ielts-l-3", qNum: 3, label: "Postcode:", promptBefore: "", promptAfter: "", acceptedAnswers: ["gv4 8lp", "gv48lp"] },
      { id: "ielts-l-4", qNum: 4, label: "Evening Workshop Selected:", promptBefore: "Beginner's", promptAfter: "class", acceptedAnswers: ["pottery"] },
      { id: "ielts-l-5", qNum: 5, label: "Day of Weekly Session:", promptBefore: "Every", promptAfter: "at 6:30 pm", acceptedAnswers: ["thursday", "thursdays"] },
      { id: "ielts-l-6", qNum: 6, label: "Discounted Resident Course Fee:", promptBefore: "£", promptAfter: "(includes materials)", acceptedAnswers: ["85", "85 pounds", "eighty-five"] },
      { id: "ielts-l-7", qNum: 7, label: "Item Participant Must Bring:", promptBefore: "An old", promptAfter: "", acceptedAnswers: ["apron"] },
      { id: "ielts-l-8", qNum: 8, label: "Room Recommended for Book Club:", promptBefore: "The", promptAfter: "on the ground floor", acceptedAnswers: ["cedar room", "cedar"] },
      { id: "ielts-l-9", qNum: 9, label: "Selected Phone Payment Method:", promptBefore: "Pay by", promptAfter: "", acceptedAnswers: ["credit card", "card"] },
      { id: "ielts-l-10", qNum: 10, label: "Visitor Car Park Location:", promptBefore: "Directly behind the", promptAfter: "", acceptedAnswers: ["library", "public library"] }
    ]
  },
  section2: {
    title: "Section 2: Riverside Nature Park — Guided Orientation Talk",
    instructions: "Questions 11–15: Choose the correct letter (A, B, or C). Questions 16–20: Complete the notes using ONE WORD ONLY for each answer.",
    transcript: `Park Ranger: Welcome, everyone, to Riverside Nature Park! My name is Marcus, and before you head out on the walking trails today, I'd like to give you a brief overview of the park's history, safety guidelines, and wildlife zones.

Riverside Nature Park officially opened to the public fifteen years ago, but prior to being restored as a wetland sanctuary, this entire valley was used for decades as a commercial gravel quarry. When excavation ended, conservationists reshaped the pits into freshwater lagoons, which now attract over a hundred species of migratory birds.

Please note that while most of the park is open today, the East Suspension Bridge is temporarily closed this week because engineers are replacing the wooden decking after last month's heavy storms. You can easily cross the river using the stone footbridge near the visitor café instead. If you're planning to join our guided botanical tour, it departs from the greenhouse every two hours starting at 10:00 am, and admission is completely free with your park entry wristband.

For families with children, our Discovery Centre features an interactive exhibition on nocturnal mammals—though please remember that flash photography is strictly prohibited inside the dark rooms so we don't startle the animals. Also, if you brought a picnic, please use the designated tables near the orchard and carry all wrappers home with you, as we operate a zero-litter policy without open rubbish bins on the trails.

Now let me highlight five key stops along the Loop Trail so you can fill in your trail notes. First, at Stop A by the northern reed beds, look through the viewing screens to spot river otters hunting for fish in the shallow channels. Second, as you climb the limestone ridge at Stop B, you'll pass our heritage orchard, which is famous for producing organic honey every autumn. Third, right beside the waterfall at Stop C, you can see the restored nineteenth-century watermill that still turns its giant oak wheel. Fourth, hikers walking through the shaded pine forest at Stop D should wear sturdy boots, as the trail surface can become quite muddy after morning rain. Finally, before leaving the park at Stop E, stop by the gift shop to pick up a free seasonal map of our winter birdwatching routes.`,
    mcqs: [
      {
        id: "ielts-l-11",
        qNum: 11,
        question: "11. Before becoming a nature reserve, the Riverside Park site was used as a:",
        options: ["A) commercial gravel quarry", "B) municipal golf course", "C) timber shipping port"],
        correctIndex: 0,
        rationale: "Correct (A)! The ranger explains that prior to wetland restoration, the valley operated for decades as a commercial gravel quarry."
      },
      {
        id: "ielts-l-12",
        qNum: 12,
        question: "12. Why is the East Suspension Bridge closed this week?",
        options: ["A) Flooding has submerged the footpath.", "B) Engineers are replacing the wooden decking.", "C) Rare birds are nesting on the cables."],
        correctIndex: 1,
        rationale: "Correct (B)! The East Suspension Bridge is closed because engineers are replacing the wooden decking."
      },
      {
        id: "ielts-l-13",
        qNum: 13,
        question: "13. What does the ranger say about the guided botanical tour?",
        options: ["A) It requires an extra £10 booking ticket.", "B) It only runs on Sunday afternoons.", "C) It is free of charge for visitors with a park wristband."],
        correctIndex: 2,
        rationale: "Correct (C)! The botanical tour departs from the greenhouse every two hours and is free with the park entry wristband."
      },
      {
        id: "ielts-l-14",
        qNum: 14,
        question: "14. Inside the Discovery Centre, visitors are NOT allowed to:",
        options: ["A) use flash photography", "B) ask questions to staff", "C) bring notebooks"],
        correctIndex: 0,
        rationale: "Correct (A)! Flash photography is strictly prohibited inside the nocturnal mammal rooms."
      },
      {
        id: "ielts-l-15",
        qNum: 15,
        question: "15. What are picnic visitors asked to do with their food wrappers?",
        options: ["A) Leave them on the wooden tables", "B) Carry all litter home with them", "C) Burn them in the barbecue pits"],
        correctIndex: 1,
        rationale: "Correct (B)! Visitors must carry all wrappers home with them under the park's zero-litter policy."
      }
    ],
    notes: [
      { id: "ielts-l-16", qNum: 16, promptBefore: "Stop A (Northern Reed Beds): Watch river", promptAfter: "swimming in the shallow channels.", acceptedAnswers: ["otters", "otter"] },
      { id: "ielts-l-17", qNum: 17, promptBefore: "Stop B (Heritage Orchard): Known for producing organic", promptAfter: "every autumn.", acceptedAnswers: ["honey"] },
      { id: "ielts-l-18", qNum: 18, promptBefore: "Stop C (Waterfall): Visit the restored 19th-century", promptAfter: "with an oak wheel.", acceptedAnswers: ["watermill", "mill"] },
      { id: "ielts-l-19", qNum: 19, promptBefore: "Stop D (Pine Forest): Wear sturdy boots because the path is often", promptAfter: "after rain.", acceptedAnswers: ["muddy"] },
      { id: "ielts-l-20", qNum: 20, promptBefore: "Stop E (Gift Shop): Collect a free seasonal", promptAfter: "of winter birdwatching routes.", acceptedAnswers: ["map"] }
    ]
  },
  section3: {
    title: "Section 3: Academic Tutorial — Renewable Microgrids Project (Speaker Matching)",
    instructions: "Questions 21–25: Who expresses each opinion or takes responsibility for each task? Choose A (Maya), B (Daniel), or C (Professor Lewis).",
    transcript: `Professor Lewis: Come in, Maya and Daniel. Let's review the draft for your seminar presentation on rural renewable microgrids. How have you divided up the preparation?
Maya: Well, Professor Lewis, when we started looking at the case studies from Scottish island communities, I was convinced that battery storage costs are the single biggest barrier preventing small towns from going fully off-grid. So I'm focusing my analysis on lithium-iron battery economics.
Daniel: I actually see it a bit differently from Maya. From the engineering surveys I read, the hardware is already affordable—the real bottleneck is designing smart software that balances sudden spikes in household electricity demand. That's why I volunteered to build the computer simulation model showing how wind and solar loads fluctuate over twenty-four hours.
Professor Lewis: Both perspectives are well supported in the literature, and combining them will make your seminar much stronger. However, looking at your bibliography, I strongly feel you should cut the outdated 2012 policy report—energy tariffs have changed completely since then, so relying on ten-year-old figures will weaken your argument.
Maya: That's a great point, Professor. I'll remove the 2012 report today. Also, since I worked as a graphic design intern last summer, I'll take charge of formatting our visual infographic slides so the charts are clear from the back of the lecture hall.
Daniel: And once Maya finishes the slides, I've arranged to interview the chief municipal engineer from the Highland Microgrid Project over video call this Friday so we can include a two-minute audio clip of real-world operational feedback.
Professor Lewis: Excellent initiative, Daniel. Just make sure that before Tuesday's rehearsal, we also include a brief comparative table on government grid subsidies—I'll email you the latest Ministry of Energy dataset this afternoon so you have verified numbers.`,
    questions: [
      {
        id: "ielts-l-21",
        qNum: 21,
        question: "21. Believes battery storage costs are the primary barrier for rural microgrids:",
        options: ["A) Maya", "B) Daniel", "C) Professor Lewis"],
        correctIndex: 0,
        rationale: "Correct (A - Maya)! Maya explicitly states: 'I was convinced that battery storage costs are the single biggest barrier preventing small towns from going fully off-grid.'"
      },
      {
        id: "ielts-l-22",
        qNum: 22,
        question: "22. Will build the 24-hour computer simulation model of wind and solar demand:",
        options: ["A) Maya", "B) Daniel", "C) Professor Lewis"],
        correctIndex: 1,
        rationale: "Correct (B - Daniel)! Daniel states: 'I volunteered to build the computer simulation model showing how wind and solar loads fluctuate over twenty-four hours.'"
      },
      {
        id: "ielts-l-23",
        qNum: 23,
        question: "23. Recommends removing the outdated 2012 policy report from the bibliography:",
        options: ["A) Maya", "B) Daniel", "C) Professor Lewis"],
        correctIndex: 2,
        rationale: "Correct (C - Professor Lewis)! Professor Lewis advises cutting the 2012 policy report because energy tariffs have changed significantly."
      },
      {
        id: "ielts-l-24",
        qNum: 24,
        question: "24. Will design and format the visual infographic slides for the presentation:",
        options: ["A) Maya", "B) Daniel", "C) Professor Lewis"],
        correctIndex: 0,
        rationale: "Correct (A - Maya)! Drawing on her graphic design internship, Maya takes charge of formatting the visual infographic slides."
      },
      {
        id: "ielts-l-25",
        qNum: 25,
        question: "25. Has arranged to interview the chief municipal engineer on Friday:",
        options: ["A) Maya", "B) Daniel", "C) Professor Lewis"],
        correctIndex: 1,
        rationale: "Correct (B - Daniel)! Daniel arranged the Friday video call interview with the chief municipal engineer from the Highland Microgrid Project."
      }
    ]
  }
};

export const ieltsReadingMock = {
  title: "Academic Reading Passage 1: Urban Trees and the Heat Problem",
  recommendedMinutes: 20,
  paragraphs: [
    "As global urbanization accelerates, metropolitan areas around the world are experiencing higher temperatures than the rural landscapes that surround them—a phenomenon known to climatologists as the urban heat island (UHI) effect. Concrete pavements, asphalt roads, and dark masonry roofs absorb vast quantities of solar energy throughout the day. Rather than reflecting this radiation back into the atmosphere, dense building materials store heat and release it slowly after sunset. Consequently, urban air temperatures often remain several degrees higher than nearby countryside temperatures well into the night, increasing public health risks during summer heatwaves.",
    "One of the most effective nature-based strategies for mitigating the urban heat island effect is expanding the urban tree canopy. Trees moderate city microclimates through two primary biological and physical mechanisms: direct shading and evapotranspiration. First, leafy tree crowns intercept incoming sunlight before it can strike heat-absorbing asphalt and brick surfaces, provides immediate surface cooling for pedestrians. Second, through evapotranspiration, trees draw moisture from the soil through their roots and release water vapor through microscopic pores in their leaves, a process that consumes heat energy and cools the surrounding air.",
    "Despite these clear benefits, planting trees in cities requires far more careful planning than simply putting saplings in the ground. Historically, municipal urban planners often selected tree species primarily for their ornamental appearance or rapid growth rather than their suitability for harsh local environmental conditions. A broadleaf species that thrives in a cool, humid river valley may wither quickly when planted along a sun-baked, drought-prone boulevard in an arid region. Selecting climate-resilient species that tolerate compacted soil, road salt, and seasonal water scarcity is essential for survival.",
    "Strategic placement is equally important. When deciduous trees are planted on the south and west sides of residential and commercial buildings, their summer foliage shades walls and windows, significantly reducing indoor temperatures and lowering the electricity demand for air conditioning. However, planting trees as close together as possible is not always beneficial. In narrow street canyons flanked by tall apartment blocks, overly dense tree canopies can actually restrict street-level airflow, trapping vehicle exhaust pollutants and warm air beneath the branches at night.",
    "Beyond temperature regulation, well-designed urban forests deliver wide-ranging ecological and social advantages. Tree root systems absorb stormwater runoff, reducing the burden on municipal drainage infrastructure during heavy downpours. Furthermore, public health studies have gathered growing evidence connecting regular exposure to urban green spaces with reduced psychological stress, lower blood pressure, and stronger community cohesion. Nevertheless, municipal forestry experts emphasize that planting saplings is only the first step: achieving these benefits requires long-term commitment to irrigation, pruning, and soil maintenance so that young trees survive to maturity."
  ],
  tfngQuestions: [
    {
      id: "ielts-r-1",
      qNum: 1,
      statement: "1. The urban heat island effect occurs only during daylight hours.",
      options: ["TRUE", "FALSE", "NOT GIVEN"],
      correctIndex: 1,
      rationale: "FALSE! Paragraph 1 explicitly states that building materials release stored heat slowly after sunset, so 'urban air temperatures often remain several degrees higher than nearby countryside temperatures well into the night.'"
    },
    {
      id: "ielts-r-2",
      qNum: 2,
      statement: "2. Trees can cool cities through both shade and evapotranspiration.",
      options: ["TRUE", "FALSE", "NOT GIVEN"],
      correctIndex: 0,
      rationale: "TRUE! Paragraph 2 states: 'Trees moderate city microclimates through two primary biological and physical mechanisms: direct shading and evapotranspiration.'"
    },
    {
      id: "ielts-r-3",
      qNum: 3,
      statement: "3. Urban planners traditionally selected trees mainly because they were inexpensive.",
      options: ["TRUE", "FALSE", "NOT GIVEN"],
      correctIndex: 2,
      rationale: "NOT GIVEN! Paragraph 3 mentions that planners historically selected trees for 'their ornamental appearance or rapid growth rather than their suitability for harsh local environmental conditions.' The financial cost/price of the trees is never mentioned."
    },
    {
      id: "ielts-r-4",
      qNum: 4,
      statement: "4. Tree species suitable for one climate may be unsuitable for another.",
      options: ["TRUE", "FALSE", "NOT GIVEN"],
      correctIndex: 0,
      rationale: "TRUE! Paragraph 3 explains that a broadleaf species thriving in a cool, humid valley may wither quickly in a sun-baked, arid region."
    },
    {
      id: "ielts-r-5",
      qNum: 5,
      statement: "5. Trees should always be planted as close together as possible.",
      options: ["TRUE", "FALSE", "NOT GIVEN"],
      correctIndex: 1,
      rationale: "FALSE! Paragraph 4 directly contradicts this: 'However, planting trees as close together as possible is not always beneficial. In narrow street canyons... overly dense tree canopies can actually restrict street-level airflow, trapping vehicle exhaust pollutants and warm air.'"
    },
    {
      id: "ielts-r-6",
      qNum: 6,
      statement: "6. Some evidence connects green spaces with reduced stress.",
      options: ["TRUE", "FALSE", "NOT GIVEN"],
      correctIndex: 0,
      rationale: "TRUE! Paragraph 5 notes that 'public health studies have gathered growing evidence connecting regular exposure to urban green spaces with reduced psychological stress.'"
    }
  ],
  sentenceCompletion: [
    {
      id: "ielts-r-7",
      qNum: 7,
      promptBefore: "7. Concrete and asphalt surfaces in cities absorb large amounts of",
      promptAfter: "during the day and release heat slowly at night.",
      acceptedAnswers: ["solar energy"],
      explanation: "Paragraph 1: 'Concrete pavements, asphalt roads, and dark masonry roofs absorb vast quantities of solar energy throughout the day.'"
    },
    {
      id: "ielts-r-8",
      qNum: 8,
      promptBefore: "8. Tree crowns block incoming sunlight from hitting pavements, offering direct surface",
      promptAfter: "along city streets.",
      acceptedAnswers: ["cooling"],
      explanation: "Paragraph 2: '...intercept incoming sunlight before it can strike heat-absorbing asphalt and brick surfaces, providing immediate surface cooling...'"
    },
    {
      id: "ielts-r-9",
      qNum: 9,
      promptBefore: "9. In the past, planners often ignored whether tree species matched local",
      promptAfter: ", focusing on appearance instead.",
      acceptedAnswers: ["environmental conditions"],
      explanation: "Paragraph 3: '...selected tree species primarily for their ornamental appearance or rapid growth rather than their suitability for harsh local environmental conditions.'"
    },
    {
      id: "ielts-r-10",
      qNum: 10,
      promptBefore: "10. Shading the south and west walls of buildings reduces the need for",
      promptAfter: "during hot months.",
      acceptedAnswers: ["air conditioning"],
      explanation: "Paragraph 4: '...significantly reducing indoor temperatures and lowering the electricity demand for air conditioning.'"
    },
    {
      id: "ielts-r-11",
      qNum: 11,
      promptBefore: "11. In narrow streets surrounded by tall buildings, overly dense foliage can block",
      promptAfter: "and trap heat and pollution.",
      acceptedAnswers: ["airflow", "street-level airflow"],
      explanation: "Paragraph 4: '...overly dense tree canopies can actually restrict street-level airflow, trapping vehicle exhaust pollutants and warm air...'"
    },
    {
      id: "ielts-r-12",
      qNum: 12,
      promptBefore: "12. By absorbing rainwater runoff, tree roots help protect urban drainage",
      promptAfter: "during heavy storms.",
      acceptedAnswers: ["infrastructure"],
      explanation: "Paragraph 5: 'Tree root systems absorb stormwater runoff, reducing the burden on municipal drainage infrastructure during heavy downpours.'"
    },
    {
      id: "ielts-r-13",
      qNum: 13,
      promptBefore: "13. Successfully growing mature urban forests requires",
      promptAfter: "care, including watering and pruning.",
      acceptedAnswers: ["long-term"],
      explanation: "Paragraph 5: '...achieving these benefits requires long-term commitment to irrigation, pruning, and soil maintenance...'"
    }
  ]
};

export const ieltsWritingSpeakingData = {
  writingTask1: {
    title: "IELTS Academic Writing Task 1 (20 Minutes | Minimum 150 Words)",
    prompt: "The table below shows the percentage of commuters in the city of Westford using four different modes of transport in 2000, 2010, and 2025.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    tableTitle: "Modes of Transport Used by Commuters in Westford (%)",
    headers: ["Mode of Transport", "2000", "2010", "2025"],
    rows: [
      ["Private Car", "51%", "58%", "38%"],
      ["Bus", "24%", "22%", "27%"],
      ["Train", "12%", "16%", "22%"],
      ["Bicycle", "8%", "9%", "13%"]
    ],
    rubricChecklist: [
      { criterion: "Task Achievement (TA)", detail: "Includes a clear Overview paragraph summarizing the main trends (drop in car usage after 2010; steady rise in public transport and cycling) supported by accurate figures." },
      { criterion: "Coherence & Cohesion (CC)", detail: "Logically groups data (e.g., Private Car vs. Public Transport & Cycling) using cohesive devices ('In contrast', 'Meanwhile', 'respectively') without mechanical listing." },
      { criterion: "Lexical Resource (LR)", detail: "Uses precise trend & proportion vocabulary ('peaked at 58%', 'declined noticeably to 38%', 'nearly doubled from 12% to 22%', 'accounted for')." },
      { criterion: "Grammatical Range & Accuracy (GRA)", detail: "Combines complex comparative structures, past simple verbs, and participial clauses accurately over 150+ words." }
    ],
    modelResponse: `The table illustrates the proportion of commuters in Westford who traveled to work by private car, bus, train, and bicycle in the years 2000, 2010, and 2025.

Overall, although private cars remained the single most common mode of commuter transport throughout the twenty-five-year period, their popularity declined substantially after peaking in 2010. In contrast, the percentages of commuters relying on public transport (buses and trains) and bicycles all increased between 2000 and 2025.

In 2000, just over half of Westford commuters (51%) drove a private car, and this figure rose to a peak of 58% in 2010. By 2025, however, car usage had fallen sharply by twenty percentage points to 38%. Meanwhile, buses were the second most popular option across all three years; after dipping slightly from 24% in 2000 to 22% in 2010, bus ridership climbed to 27% by 2025.

Train and bicycle commuting both experienced consistent upward growth over the entire period. The share of train commuters nearly doubled, rising steadily from 12% in 2000 to 16% in 2010 and reaching 22% in 2025. Similarly, cycling accounted for the smallest proportion of commuters in 2000 at 8%, edged up to 9% in 2010, and reached 13% by 2025.`
  },
  writingTask2: {
    title: "IELTS Academic Writing Task 2 (40 Minutes | Minimum 250 Words)",
    prompt: "Some people believe that the main purpose of university education is to prepare graduates for employment, while others argue that universities should focus on providing broad academic knowledge for its own sake.\n\nDiscuss both these views and give your own opinion.",
    rubricChecklist: [
      { criterion: "Task Response (TR)", detail: "Addresses both views fully and presents a clear, consistent personal position throughout the essay (250+ words)." },
      { criterion: "Coherence & Cohesion (CC)", detail: "Uses a 4-paragraph structure (Introduction, Body 1: Career preparation, Body 2: Broad intellectual development, Conclusion) with clear topic sentences." },
      { criterion: "Lexical Resource (LR)", detail: "Uses academic collocations ('vocational readiness', 'labor market demands', 'critical inquiry', 'holistic intellectual growth')." },
      { criterion: "Grammatical Range & Accuracy (GRA)", detail: "Demonstrates varied complex sentence structures (conditionals, concessions, relative clauses) with minimal errors." }
    ],
    modelResponse: `Opinions are divided on whether higher education institutions should primarily function as career training centers or as hubs of broad intellectual inquiry. While practical job readiness is undeniably important for graduates entering a competitive economy, I believe universities should balance vocational skills with a broad academic education that fosters adaptable, critical thinkers.

On the one hand, proponents of career-focused university programs point out that most students invest substantial time and tuition fees with the expectation of securing stable employment. Furthermore, modern economies depend on highly trained specialists in fields such as medicine, civil engineering, software development, and education. If universities neglect practical industry competencies, internships, and technical training, graduates may struggle to transition into the workplace, leading to both individual financial hardship and national skill shortages.

On the other hand, reducing higher education to mere job training overlooks the deeper value of broad academic knowledge. Studying philosophy, history, literature, and pure sciences cultivates analytical reasoning, ethical judgment, and creative problem-solving. Because automation and artificial intelligence are transforming the job market at an unprecedented pace, narrow technical skills learned at age twenty may become obsolete within a decade. By contrast, a broad foundational education equips graduates with the intellectual flexibility to adapt to entirely new careers and contribute thoughtfully as informed citizens.

In conclusion, preparing students for employment and cultivating broad academic knowledge are not mutually exclusive goals. In my view, universities serve society best when they integrate practical professional training with rigorous interdisciplinary inquiry, ensuring graduates are both employable today and adaptable tomorrow.`
  },
  speakingSimulator: {
    part1Topics: [
      {
        topic: "Home & Accommodation",
        questions: [
          "Do you live in a house or an apartment?",
          "What is your favorite room in your home, and why?",
          "What changes would you like to make to your home in the future?"
        ]
      },
      {
        topic: "Reading Habits",
        questions: [
          "Do you prefer reading physical paper books or e-books on a screen?",
          "What kinds of books or articles do you enjoy reading most in your free time?",
          "Have your reading habits changed since you were a child?"
        ]
      },
      {
        topic: "Weekends & Leisure",
        questions: [
          "How do you usually spend your weekends?",
          "Do you prefer planning your weekend in advance or being spontaneous?",
          "Is it important for teachers and students to have a complete break from work on weekends?"
        ]
      }
    ],
    part2CueCard: {
      title: "Part 2: Individual Long Turn (Cue Card)",
      prepSeconds: 60,
      speakSeconds: 120,
      topic: "Describe a skill that you would like to learn in the future.",
      bullets: [
        "what the skill is",
        "how and where you would learn it",
        "why you need or want to learn this skill",
        "and explain how learning this skill would benefit your life or career."
      ],
      modelNotes: "Idea: Video editing & digital instructional design → Learn via online workshop + hands-on practice → Useful for creating engaging blended-learning materials for English language learners → Boosts student engagement and professional versatility."
    },
    part3Questions: [
      {
        category: "Part 3: Learning New Skills & Education",
        q: "What do you think are the most important practical skills that young people should learn before leaving secondary school?",
        tip: "Use speculative & generalizing language ('Broadly speaking...', 'One crucial life skill is financial literacy...')."
      },
      {
        category: "Part 3: Age & Skill Acquisition",
        q: "Why do many adults find it more challenging to learn a new skill—such as speaking a foreign language or playing an instrument—than children do?",
        tip: "Connect to SLA/TKT concepts (time constraints, self-consciousness/affective filter, vs. neuroplasticity)."
      },
      {
        category: "Part 3: Technology & Self-Directed Learning",
        q: "Can online video tutorials completely replace learning from a qualified human teacher in a classroom? Why or why not?",
        tip: "Contrast autonomous pacing with personalized scaffolding, immediate/delayed feedback, and social interaction."
      }
    ]
  }
};
