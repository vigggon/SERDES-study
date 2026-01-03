export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  basedOn: string;
}

export const questions: Question[] = [
  // --- Barney (1991) ---
  {
    id: 'b1',
    question: 'According to Barney (1991), what is the core argument regarding sustained competitive advantage?',
    options: [
      'It comes from industry structure and positioning.',
      'It comes from valuable firm resources that are rare and inimitable.',
      'It comes from having the lowest prices in the market.',
      'It comes from government regulations.'
    ],
    correctAnswer: 1,
    explanation: 'Barney argues that advantage comes from internal resources (Resource-Based View) rather than just external positioning.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b2',
    question: 'Which of the following describes "Human Capital Resources" in Barney\'s framework?',
    options: [
      'Physical technology and equipment.',
      'Training, experience, judgment, and insights of individual managers and workers.',
      'The firm\'s formal reporting structure.',
      'The firm\'s bank accounts and liquid assets.'
    ],
    correctAnswer: 1,
    explanation: 'Human capital refers to the individual attributes of workers/managers, such as training, experience, and intelligence.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b3',
    question: 'What definition does Barney give for "Organizational Capital Resources"?',
    options: [
      'The building the company owns.',
      'The total value of the company\'s stock.',
      'Formal reporting structures, planning, controlling, and coordinating systems.',
      'The social relationships between the CEO and the board.'
    ],
    correctAnswer: 2,
    explanation: 'Organizational capital includes the formal structures and systems for planning, control, and coordination.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b4',
    question: 'What does the "Valuable" attribute in the VRIN framework imply?',
    options: [
      'The resource is expensive to buy.',
      'The resource enables the firm to exploit opportunities or neutralize threats.',
      'The resource is loved by employees.',
      'The resource has a high book value.'
    ],
    correctAnswer: 1,
    explanation: 'Valuable resources improve efficiency or effectiveness by exploiting opportunities or neutralizing threats.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b5',
    question: 'If a resource is "Rare" but not "Valuable", can it provide competitive advantage?',
    options: [
      'Yes, rarity is the most important factor.',
      'No, it must be valuable to be useful at all.',
      'Yes, but only in the short term.',
      'No, rarity is irrelevant.'
    ],
    correctAnswer: 1,
    explanation: 'A resource must first be valuable (do something useful); rarity adds value only if the resource is already useful.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b6',
    question: 'What is "Causal Ambiguity" in the context of Imperfect Imitability?',
    options: [
      'When competitors don\'t know the cause of a problem.',
      'When it is unclear which resources or actions actually cause the firm\'s success.',
      'When the CEO is ambiguous about the strategy.',
      'When the market demand is uncertain.'
    ],
    correctAnswer: 1,
    explanation: 'Causal ambiguity means the link between resources and competitive advantage is not fully understood, making it hard to copy.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b7',
    question: 'What does "Social Complexity" refer to as a barrier to imitation?',
    options: [
      'Complex laws and regulations.',
      'Resources embedded in complex social relationships, culture, and reputation.',
      'The difficulty of using social media.',
      'The complexity of society at large.'
    ],
    correctAnswer: 1,
    explanation: 'Social complexity involves interpersonal relations, culture, and reputation which are very hard to engineer or duplicate.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b8',
    question: 'What does "Resource Heterogeneity" mean?',
    options: [
      'All firms have the same resources.',
      'Firms possess different bundles of resources.',
      'Resources are evenly distributed.',
      'Resources are homogeneous across the industry.'
    ],
    correctAnswer: 1,
    explanation: 'Heterogeneity means firms are different because they have different resource mixes.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b9',
    question: 'What does "Resource Immobility" mean?',
    options: [
      'Resources cannot easily move between firms.',
      'Resources cannot be improved.',
      'Firms cannot change their location.',
      'Everything is static in the market.'
    ],
    correctAnswer: 0,
    explanation: 'Immobility means resources are stuck to the firm (due to specificity or cost) and don\'t freely flow to competitors.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b10',
    question: 'What is "Path Dependency" as a source of inimitability?',
    options: [
      'Relying on a specific software path.',
      'Unique historical conditions and timing that cannot be recreated.',
      'Following the leader in the market.',
      'Being dependent on a single supplier.'
    ],
    correctAnswer: 1,
    explanation: 'Path dependency refers to unique historical circumstances (timing/sequence) that led to the resource and cannot be re-lived.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b11',
    question: 'Which of the following describes a "Physical Capital Resource"?',
    options: [
      'Ideally located plant and equipment.',
      'Experienced managers.',
      'Reporting structures.',
      'Company reputation.'
    ],
    correctAnswer: 0,
    explanation: 'Physical capital includes physical technology, plant and equipment, geographic location, and access to raw materials.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b12',
    question: 'If a resource is Valuable and Rare but NOT "Imperfectly Imitable", what is the result?',
    options: [
      'Sustained Competitive Advantage.',
      'Temporary Competitive Advantage (competitors will eventually copy it).',
      'Competitive Parity.',
      'Competitive Disadvantage.'
    ],
    correctAnswer: 1,
    explanation: 'If it can be imitated, the advantage is only temporary until competitors copy it.',
    basedOn: 'Barney (1991)'
  },

  // --- Helfat & Peteraf (2003) ---
  {
    id: 'hp1',
    question: 'How do Helfat & Peteraf define "Organizational Capability"?',
    options: [
      'The amount of money a firm has.',
      'The ability to perform a coordinated set of tasks utilizing resources impacting the firm\'s capacity to create value.',
      'A single skilled employee.',
      'The software used by the firm.'
    ],
    correctAnswer: 1,
    explanation: 'It is the ability to perform coordinated tasks using resources to achieve a result.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp2',
    question: 'What are "Operational Capabilities"?',
    options: [
      'Capabilities that build other capabilities.',
      'High-level routines that produce significant outputs (e.g., manufacturing).',
      'The CEO\'s decision making.',
      'The HR department.'
    ],
    correctAnswer: 1,
    explanation: 'Operational capabilities directly produce output (e.g., making a car).',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp3',
    question: 'What are "Dynamic Capabilities"?',
    options: [
      'Capabilities that change every day.',
      'Capabilities that build, integrate, or reconfigure operational capabilities.',
      'Fast-moving physical assets.',
      'Temporary workers.'
    ],
    correctAnswer: 1,
    explanation: 'Dynamic capabilities (like R&D or integration) modify the operational capabilities.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp4',
    question: 'Which stage of the Capability Lifecycle involves "Initial Endowments"?',
    options: [
      'Founding Stage',
      'Development Stage',
      'Maturity Stage',
      'Retirement Stage'
    ],
    correctAnswer: 0,
    explanation: 'The Founding Stage begins with initial endowments like the team\'s human/social capital.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp5',
    question: 'What creates early heterogeneity in the Founding Stage?',
    options: [
      'Luck only.',
      'Initial endowments (human/social capital, cognition, leadership) of the team.',
      'Government grants.',
      'Buying the same software.'
    ],
    correctAnswer: 1,
    explanation: 'The specific mix of people, skills, and social ties (endowments) makes the new capability unique from the start.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp6',
    question: 'During the "Development Stage", capabilities build through which mechanisms?',
    options: [
      'Waiting and hoping.',
      'Search, experience accumulation, and problem-solving.',
      'Buying more computers.',
      'Reducing staff.'
    ],
    correctAnswer: 1,
    explanation: 'Development involves active search for alternatives, learning-by-doing, and process improvement.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp7',
    question: 'What ends the "Development Stage" of a capability?',
    options: [
      'When the budget runs out.',
      'When technical limits are reached or the team "satisfices" (decides it is good enough).',
      'When the CEO retires.',
      'After exactly 1 year.'
    ],
    correctAnswer: 1,
    explanation: 'Development stops when limits are hit or the organization decides the current level of performance is acceptable (satisficing).',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp8',
    question: 'What happens in the "Maturity Stage"?',
    options: [
      'Capability maintenance through regular exercise; routines become tacit.',
      'Rapid improvement and change.',
      'The capability is abandoned.',
      'The team disbands.'
    ],
    correctAnswer: 0,
    explanation: 'Maturity is about maintaining the capability. The routines become ingrained (tacit) and consistent.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp9',
    question: 'What is "Retrenchment" in the Six Rs?',
    options: [
      'Improving the capability.',
      'Reduced utilization leading to gradual degradation.',
      'Selling the capability.',
      'Copying the capability.'
    ],
    correctAnswer: 1,
    explanation: 'Retrenchment happens when the capability is used less (e.g., lower demand), causing it to degrade or waste away.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp10',
    question: 'What is "Renewal" in the Six Rs?',
    options: [
      'Starting over from scratch.',
      'Capability enters a new development stage with improvements/modifications.',
      'Updating the copyright.',
      'Hiring new staff.'
    ],
    correctAnswer: 1,
    explanation: 'Renewal involves refreshing the capability, often in response to a crisis or new technology, restarting development.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp11',
    question: 'What is "Recombination" in the Six Rs?',
    options: [
      'Combining the capability with another to create something new.',
      'Splitting the capability.',
      'Moving the capability to a new location.',
      'Documenting the capability.'
    ],
    correctAnswer: 0,
    explanation: 'Recombination joins the capability with another (e.g., IT + Manufacturing) to form a novel capability.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp12',
    question: 'Do all capabilities generally follow this lifecycle pattern?',
    options: [
      'Only IT capabilities.',
      'Only manufacturing capabilities.',
      'Yes, all capabilities including dynamic ones follow this pattern.',
      'No, it is random.'
    ],
    correctAnswer: 2,
    explanation: 'The authors argue this is a general lifecycle for all organizational capabilities.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp13',
    question: 'What role does "Path Dependency" play in the Development Stage?',
    options: [
      'None.',
      'Teams choose different alternatives based on initial conditions, leading to different trajectories.',
      'It forces everyone to take the same path.',
      'It guarantees success.'
    ],
    correctAnswer: 1,
    explanation: 'Path dependency means past choices (and initial conditions) constrain and guide future development choices.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp14',
    question: 'How do interruptions in the Maturity Stage affect capabilities?',
    options: [
      'They make the capability stronger.',
      'They cause "organizational forgetting".',
      'They have no effect.',
      'They reduce costs.'
    ],
    correctAnswer: 1,
    explanation: 'If a capability is not exercised regularly, the organization "forgets" the routine, leading to degradation.',
    basedOn: 'Helfat & Peteraf (2003)'
  },

  // --- Vargo & Lusch (2004) ---
  {
    id: 'vl1',
    question: 'In Goods-Dominant (G-D) logic, what is the purpose of the firm?',
    options: [
      'To serve customers relationaly.',
      'To make and distribute tangible things (goods) to be sold.',
      'To co-create value.',
      'To share knowledge.'
    ],
    correctAnswer: 1,
    explanation: 'G-D logic focuses on manufacturing and distributing tangible goods for profit.',
    basedOn: 'Vargo & Lusch (2004)'
  },
  {
    id: 'vl2',
    question: 'In G-D logic, value is viewed as:',
    options: [
      'Embedded in the goods during production ("value-added").',
      'Determined by the customer in use.',
      'Co-created.',
      'Phenomenological.'
    ],
    correctAnswer: 0,
    explanation: 'G-D logic sees value as added during the manufacturing process (embedded value).',
    basedOn: 'Vargo & Lusch (2004)'
  },
  {
    id: 'vl3',
    question: 'In Service-Dominant (S-D) logic, "Service" is defined as:',
    options: [
      'A tertiary economic sector.',
      'The application of specialized competences (knowledge and skills) for the benefit of another.',
      'Customer support.',
      'Intangible goods.'
    ],
    correctAnswer: 1,
    explanation: 'Service is the application of resources (skills/knowledge) for another entity\'s benefit.',
    basedOn: 'Vargo & Lusch (2004)'
  },
  {
    id: 'vl4',
    question: 'FP1 states that the application of specialized skills and knowledge is:',
    options: [
      'Optional.',
      'The fundamental unit of exchange.',
      'Only for efficient firms.',
      'Secondary to goods.'
    ],
    correctAnswer: 1,
    explanation: 'Exchange is fundamentally about trading services (skills), even if masked by goods.',
    basedOn: 'Vargo & Lusch (2004)'
  },
  {
    id: 'vl5',
    question: 'FP2 states that "Indirect exchange masks the fundamental unit of exchange". What causes this masking?',
    options: [
      'Lying salespeople.',
      'Money, organizations, and vertical marketing systems (microspecialization).',
      'The internet.',
      'Poor communication.'
    ],
    correctAnswer: 1,
    explanation: 'Complex systems, money, and layers of organization create distance, making it look like we swap goods/money rather than skills.',
    basedOn: 'Vargo & Lusch (2004)'
  },
  {
    id: 'vl6',
    question: 'FP3 states "Goods are distribution mechanisms for service provision". This means goods are:',
    options: [
      'Useless.',
      'Appliances or embodied knowledge.',
      'The main value source.',
      'Waste products.'
    ],
    correctAnswer: 1,
    explanation: 'Goods (like a razor or computer) are "frozen knowledge" or appliances that allow us to self-serve.',
    basedOn: 'Vargo & Lusch (2004)'
  },
  {
    id: 'vl7',
    question: 'FP4 states "Knowledge is the fundamental source of competitive advantage". What type of resource is knowledge?',
    options: [
      'Operand resource.',
      'Operant resource.',
      'Physical resource.',
      'Static resource.'
    ],
    correctAnswer: 1,
    explanation: 'Knowledge is an Operant resource because it is capable of acting and producing effects.',
    basedOn: 'Vargo & Lusch (2004)'
  },
  {
    id: 'vl7b',
    question: 'What is the difference between specific "Propositional knowledge" and "Prescriptive knowledge"?',
    options: [
      'No difference.',
      'Propositional is abstract understanding; Prescriptive is techniques/skills.',
      'Propositional is expensive; Prescriptive is cheap.',
      'Propositional is written; Prescriptive is oral.'
    ],
    correctAnswer: 1,
    explanation: 'Propositional knowledge is about "knowing that" (abstract), while Prescriptive is "knowing how" (skills/techniques).',
    basedOn: 'Vargo & Lusch (2004)'
  },

  // --- Vargo & Lusch (2008) Updates ---
  {
    id: 'vl8',
    question: 'Why did Vargo & Lusch change "Unit of exchange" to "Basis of exchange" in 2008?',
    options: [
      'They liked the word better.',
      '"Unit" implies discrete goods/output; "Basis" better reflects the process of service.',
      'To confuse readers.',
      'Because the unit price changed.'
    ],
    correctAnswer: 1,
    explanation: 'They wanted to avoid the connotation of discrete units (G-D logic) and emphasize the continuous basis of exchange.',
    basedOn: 'Vargo & Lusch (2008)'
  },
  {
    id: 'vl9',
    question: 'How was FP6 "The customer is always a co-producer" modified in 2008?',
    options: [
      'The customer is always a buyer.',
      'The customer is always a co-creator of value.',
      'The customer is sometimes a producer.',
      'The customer is king.'
    ],
    correctAnswer: 1,
    explanation: 'Changed to "Co-creator of value" because "production" is too narrow and implies the manufacturing phase only.',
    basedOn: 'Vargo & Lusch (2008)'
  },
  {
    id: 'vl10',
    question: 'FP7 was changed to "The enterprise cannot deliver value, but only offer value propositions". Why?',
    options: [
      'Firms are lazy.',
      'Value is created by the customer during use; the firm can only propose it.',
      'Delivery costs are too high.',
      'Value is random.'
    ],
    correctAnswer: 1,
    explanation: 'Since value is phenomenological (experienced by the user), the firm cannot unilaterally deliver it—it can only offer the potential.',
    basedOn: 'Vargo & Lusch (2008)'
  },
  {
    id: 'vl11',
    question: 'FP9 "All social and economic actors are resource integrators" implies that:',
    options: [
      'Only firms integrate resources.',
      'Value creation occurs in networks of actors (individuals, families, firms) who all integrate resources.',
      'Resource integration is rare.',
      'Actors should stay isolated.'
    ],
    correctAnswer: 1,
    explanation: 'It expands the view to a network of actors (context), where everyone integrates resources to create value.',
    basedOn: 'Vargo & Lusch (2008)'
  },
  {
    id: 'vl12',
    question: 'FP10 states "Value is always uniquely and phenomenologically determined by the beneficiary". "Phenomenological" means:',
    options: [
      'Based on scientific phenomena.',
      'Experiential, subjective, and context-dependent.',
      'Objective and measurable.',
      'Illusory.'
    ],
    correctAnswer: 1,
    explanation: 'Phenomenological refers to the subjective, lived experience of the beneficiary in their specific context.',
    basedOn: 'Vargo & Lusch (2008)'
  },
  {
    id: 'vl13',
    question: 'Does S-D logic apply only to the "Services Economy"?',
    options: [
      'Yes, it is only for service industries.',
      'No, it argues that ALL economies are service economies.',
      'It applies only to digital goods.',
      'It applies only to consulting.'
    ],
    correctAnswer: 1,
    explanation: 'S-D logic argues service is fundamental to all exchange; the "services economy" is just a classification artifact.',
    basedOn: 'Vargo & Lusch (2008)'
  },
  {
    id: 'vl14',
    question: 'FP8 states "A service-centered view is inherently customer oriented and relational". Why is it "inherently" so?',
    options: [
      'Because customers are nice.',
      'Because value co-creation implies interaction; you cannot extract value without the customer.',
      'Because relationships are profitable.',
      'Because the customer is always right.'
    ],
    correctAnswer: 1,
    explanation: 'It is built into the logic: you cannot co-create value without a relationship (interaction) with the beneficiary.',
    basedOn: 'Vargo & Lusch (2008)'
  },

  // --- Henkel (2004) ---
  {
    id: 'hen1',
    question: 'What is Henkel\'s "Vision" for software services?',
    options: [
      'A global market of well-structured, modular services that are accessible and composable.',
      'A monopoly of software providers.',
      'Proprietary systems for everyone.',
      'Offline software installation.'
    ],
    correctAnswer: 0,
    explanation: 'The vision is a global market of modular resources that can be composed into networked enterprises.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen2',
    question: 'Which of the following is NOT one of the Three Goals in Henkel\'s framework?',
    options: [
      'Modular Resources',
      'Global Interfaces',
      'Dynamic Discovery',
      'Secure Transactions'
    ],
    correctAnswer: 3,
    explanation: 'The explicit three goals are Modular Resources, Global Interfaces, and Dynamic Discovery.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen3',
    question: 'What is a "Vertical Service" in Henkel\'s decomposition?',
    options: [
      'A technical logging service.',
      'A service constructed within a business domain context (e.g., business function).',
      'A service that stacks vertically.',
      'A cloud server.'
    ],
    correctAnswer: 1,
    explanation: 'Vertical services represent business domain functions (e.g., "CalculateTax", "CreateOrder").',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen3b',
    question: 'What is a "Horizontal Service" in Henkel\'s decomposition?',
    options: [
      'A service supporting technical aspects independent of the domain (e.g., security, event handling).',
      'A service for horizontal markets.',
      'A low-level kernel driver.',
      'A database table.'
    ],
    correctAnswer: 0,
    explanation: 'Horizontal services connect technical infrastructure (middleware) rather than specific business logic.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen4',
    question: 'In the Interconnection Stack, what does the "Technical Infrastructure" layer define?',
    options: [
      'Method names and parameters.',
      'Business contracts.',
      'Communication protocols (TCP/IP, SOAP) - the "plumbing".',
      'The price of the service.'
    ],
    correctAnswer: 2,
    explanation: 'It allows the consumer to connect (the plumbing), e.g., via SOAP/HTTP.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen5',
    question: 'In the Interconnection Stack, what does the "Interface Description" layer define?',
    options: [
      'Programmatic interface (IDL/WSDL) - method names, parameters, data types.',
      'Meaning and context.',
      'Network cables.',
      'User interface.'
    ],
    correctAnswer: 0,
    explanation: 'It defines how to call the service programmatically (WSDL).',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen6',
    question: 'In the Interconnection Stack, what does the "Semantic Description" layer define?',
    options: [
      'IP addresses.',
      'Context, meaning, and business contracts (e.g., using OWL).',
      'Function names.',
      'Binary encoding.'
    ],
    correctAnswer: 1,
    explanation: 'Semantics define the meaning and conditions of use, allowing for automated negotiation.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen7',
    question: 'Which Brokering approach is the SIMPLEST, searching only for fixed attribute values (like UDDI)?',
    options: [
      'Frame-based Brokering',
      'Specification-based Brokering',
      'Mediator Schemes',
      'Google Search'
    ],
    correctAnswer: 0,
    explanation: 'Frame-based brokering matches fixed attributes (Name=X, Type=Y).',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen8',
    question: 'What is "Specification-based (Deductive) Brokering"?',
    options: [
      'Brokers that use rules to interpret descriptions and handle generalizations.',
      'Brokers that use agents.',
      'Brokers that are human.',
      'A phone book.'
    ],
    correctAnswer: 0,
    explanation: 'It uses deductive rules to match services, e.g., matching "Global Delivery" when you ask for "Local Delivery".',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen8b',
    question: 'What is "Mediator Schemes" for brokering?',
    options: [
      'A passive registry.',
      'Agents actively participate in brokering to negotiate on behalf of services.',
      'A middle manager.',
      'A hardware firewall.'
    ],
    correctAnswer: 1,
    explanation: 'Mediators (agents) actively negotiate and extend the brokering algorithm.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen9',
    question: 'Which "Binding Time" offers maximum flexibility but high performance overhead?',
    options: [
      'Fixed Time-frame Binding',
      'Session Binding',
      'Just-In-Time (JIT) / Ultra-Late Binding',
      'Compile-time Binding'
    ],
    correctAnswer: 2,
    explanation: 'JIT binding finds a provider at the exact moment of need, offering max flexibility but highest cost.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen9b',
    question: 'What is "Session Binding"?',
    options: [
      'Binding to a provider for the duration of a user session (multiple calls).',
      'Binding forever.',
      'Binding only for one packet.',
      'Binding to a specific server rack.'
    ],
    correctAnswer: 0,
    explanation: 'It reduces the overhead of JIT by keeping the connection for a session while still being dynamic.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen10',
    question: 'Which Category of Service Use is described as "Infrastructure-Internal"?',
    options: [
      'EAI with Services (Category 1)',
      'ESB - Enterprise Service Bus (Category 2)',
      'Static B2B (Category 3)',
      'Dynamic B2B (Category 4)'
    ],
    correctAnswer: 1,
    explanation: 'Category 2 (Infrastructure-Internal) is using services as the main architecture (ESB) within the firm.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen10b',
    question: 'Which Category is "Point-wise-Internal" (Category 1)?',
    options: [
      'Global market access.',
      'Single solutions within an organization (e.g., EAI), often non-standard.',
      'Connecting to a bank.',
      'Using the internet.'
    ],
    correctAnswer: 1,
    explanation: 'Point-wise internal is ad-hoc integration of legacy systems inside the firm, with low goal fulfillment.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen10c',
    question: 'Which Category is "Point-wise-External" (Category 3)?',
    options: [
      'Dynamic open market.',
      'Static B2B: Single application integration between two organizations.',
      'Internal ESB.',
      'Cloud computing.'
    ],
    correctAnswer: 1,
    explanation: 'Static B2B connects two specific companies (e.g., Supplier-Manufacturer) with fixed agreements.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen11',
    question: 'What characterizes "Category 4: Infrastructure-External (Dynamic B2B)"?',
    options: [
      'Simple integration.',
      'High fulfillment of all three goals (Modular, Global, Dynamic) with automatic selection.',
      'Internal use only.',
      'Manual phone calls.'
    ],
    correctAnswer: 1,
    explanation: 'This is the holy grail: dynamic discovery and composition of services across organizational boundaries.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen12',
    question: 'How do Services differ from Components regarding "Provider Role"?',
    options: [
      'Providers deliver the component and are done.',
      'Providers are responsible for the service during runtime availability.',
      'There is no difference.',
      'Service providers are anonymous.'
    ],
    correctAnswer: 1,
    explanation: 'Components are delivered and installed; Services are run by the provider and consumed over the network.',
    basedOn: 'Henkel (2004)'
  },

  // --- Platforms & Ecosystems ---
  {
    id: 'p1',
    question: 'Van Alstyne et al. (2016): Platform businesses focus on "Ecosystem Value". What does this mean?',
    options: [
      'Maximizing lifetime value of individual customers.',
      'Maximizing total ecosystem value through circular, iterative processes.',
      'Protecting the environment.',
      'Saving money.'
    ],
    correctAnswer: 1,
    explanation: 'Platforms focus on the health and value of the whole ecosystem/network, not just single customer extraction.',
    basedOn: 'Van Alstyne et al. (2016)'
  },
  {
    id: 'p2',
    question: 'Van Alstyne et al. (2016): How does the shift to platforms affect "Internal Optimization"?',
    options: [
      'It becomes the only focus.',
      'Emphasizes external interaction over internal optimization.',
      'Internal optimization is banned.',
      'Supply chains become rigid.'
    ],
    correctAnswer: 1,
    explanation: 'The focus shifts from optimizing the internal chain to facilitating external interactions.',
    basedOn: 'Van Alstyne et al. (2016)'
  },
  {
    id: 'p3',
    question: 'De Reuver (2018): "Homogenization of data" is a trait of:',
    options: [
      'Physical platforms.',
      'Digitality (Digital Platforms).',
      'Oil pipelines.',
      'Analog systems.'
    ],
    correctAnswer: 1,
    explanation: 'Homogenization (all data is bits) is a key trait of digitality that enables digital platforms.',
    basedOn: 'De Reuver et al. (2018)'
  },
  {
    id: 'p4',
    question: 'De Reuver (2018): What is the "Ecosystem" in relation to the platform?',
    options: [
      'The hardware.',
      'The collection of complements (apps) or firms contributing to the platform.',
      'The internet.',
      'The users only.'
    ],
    correctAnswer: 1,
    explanation: 'The ecosystem is the community of complementors (app developers) and their contributions.',
    basedOn: 'De Reuver et al. (2018)'
  },
  {
    id: 'p5',
    question: 'Basole (2019): Why is the API economy useful?',
    options: [
      'It allows everything-as-a-service (XaaS) and rapid recombination.',
      'It makes coding harder.',
      'It replaces the internet.',
      'It is cheaper.'
    ],
    correctAnswer: 0,
    explanation: 'It enables XaaS and allows services to be recombined horizontally across boundaries.',
    basedOn: 'Basole (2019)'
  },
  {
    id: 'p6',
    question: 'Mateus & Sarkar (2023): How do DAOs democratize decision making?',
    options: [
      'By letting everyone vote.',
      'Governance is distributed and automated via tokens/smart contracts, not central.',
      'By removing all rules.',
      'By using government servers.'
    ],
    correctAnswer: 1,
    explanation: 'Governance is distributed to stakeholders via machine consensus (blockchain/smart contracts).',
    basedOn: 'Mateus & Sarkar (2023)'
  },
  {
    id: 'p7',
    question: 'Ranerup (2016): In the Swedish healthcare platform, who is the "Value Network" provider?',
    options: [
      'Google.',
      'A regional authority (SALAR/Centre for E-health).',
      'Private doctors.',
      'The EU.'
    ],
    correctAnswer: 1,
    explanation: 'The platform is operated by the public regional authority (SALAR).',
    basedOn: 'Ranerup et al. (2016)'
  },
  {
    id: 'q8',
    question: 'What is "Editability" in the context of Digital Platforms (De Reuver)?',
    options: [
      'You can edit text.',
      'Software can be easily modified and updated after deployment.',
      'Users can change the code.',
      'Nothing effectively changes.'
    ],
    correctAnswer: 1,
    explanation: 'Editability means the platform can be changed/updated easily, unlike physical platforms (like a car chassis).',
    basedOn: 'De Reuver et al. (2018)'
  },
  {
    id: 'q9',
    question: 'What is "Distributedness" in digital platforms?',
    options: [
      'Servers are in one room.',
      'Access and control are not centralized; resources can be spread across the network.',
      'Everyone gets a share.',
      'Distributed flyers.'
    ],
    correctAnswer: 1,
    explanation: 'Digital platforms do not have a single point of control or resource location in the same way physical ones do.',
    basedOn: 'De Reuver et al. (2018)'
  },
  {
    id: 'q10',
    question: 'What is the "Value Proposition" of the Swedish healthcare platform (Ranerup)?',
    options: [
      'Cheapest doctors.',
      'Information about primary care centers enabling comparison and informed choice.',
      'Free medicine.',
      'Online surgery.'
    ],
    correctAnswer: 1,
    explanation: 'The value prop is providing information to allow citizens to validly compare and choose.',
    basedOn: 'Ranerup et al. (2016)'
  },
  // --- Additional Granular Questions (Expansion Set 2) ---
  {
    id: 'b13',
    question: 'Barney (1991): What is the relationship between "First-mover advantages" and resources?',
    options: [
      'First movers always win.',
      'To be a first mover, a firm must already have unique resources (e.g., insight, access).',
      'First moving is a bad strategy.',
      'Resources are irrelevant for first movers.'
    ],
    correctAnswer: 1,
    explanation: 'Barney argues that even getting to be a first mover requires underlying resource heterogeneity (e.g., better information).',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b14',
    question: 'Barney (1991): Why does he argue that "strategic planning" itself is rarely a source of competitive advantage?',
    options: [
      'Because it is easy to do.',
      'Because formal planning systems are highly socially complex.',
      'Because most planning systems are movable and imitable (can be bought/copied).',
      'Because CEOs don\'t like planning.'
    ],
    correctAnswer: 2,
    explanation: 'Formal planning systems are generally purchasable or copyable. It is the informal, socially complex implementation that matters.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b15',
    question: 'Barney (1991): How does "Information Processing Systems" fit into his framework?',
    options: [
      'As a Human Capital Resource.',
      'As a Physical Capital Resource.',
      'As an Organizational Capital Resource.',
      'It is not a resource.'
    ],
    correctAnswer: 1,
    explanation: 'Wait, typically IT is physical, but the *system* of reporting is Organizational. Actually, Barney lists "reporting structure, planning, controlling, and coordinating systems" as Organizational Capital.',
    basedOn: 'Barney (1991)'
  },
  {
    id: 'b16',
    question: 'Barney (1991): If a firm buys a valuable resource that everyone else can also buy, what happens?',
    options: [
      'It gains a competitive advantage.',
      'It achieves Competitive Parity.',
      'It goes bankrupt.',
      'It loses money.'
    ],
    correctAnswer: 1,
    explanation: 'If a resource is not rare (everyone can buy it), it can at best provide competitive parity (equality), not advantage.',
    basedOn: 'Barney (1991)'
  },

  // --- Helfat & Peteraf (2003) Additions ---
  {
    id: 'hp15',
    question: 'Helfat & Peteraf: "Satisficing" in the Development Stage means:',
    options: [
      'The team is fully satisfied.',
      'The team settles for a solution that "good enough" rather than optimal.',
      'The team fails.',
      'The customer is satisfied.'
    ],
    correctAnswer: 1,
    explanation: 'Satisficing (Simon) means stopping the search for improvement when a threshold of acceptability is met.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp16',
    question: 'Helfat & Peteraf: Why creates "Resource Connectivity"?',
    options: [
      'Touching resources together.',
      'When capabilities share common resources (e.g., using the same brand for two products).',
      'Internet connection.',
      'Networking cables.'
    ],
    correctAnswer: 1,
    explanation: 'Connectivity occurs when capabilities rely on the same underlying resources (like a brand or distribution channel).',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp17',
    question: 'Helfat & Peteraf: What is the risk of "Retrenchment"?',
    options: [
      'It might save too much money.',
      'It can be a prelude to Retirement (death of the capability).',
      'It makes the capability too fast.',
      'It increases complexity.'
    ],
    correctAnswer: 1,
    explanation: 'Retrenchment (reduction) often leads to degradation, which may eventually force the retirement of the capability.',
    basedOn: 'Helfat & Peteraf (2003)'
  },
  {
    id: 'hp18',
    question: 'Helfat & Peteraf: "Replication" vs "Redeployment" - Key difference?',
    options: [
      'Replication is same market/product; Redeployment is different market/product.',
      'Replication is harder.',
      'Redeployment is faster.',
      'There is no difference.'
    ],
    correctAnswer: 0,
    explanation: 'Replication = doing the same thing in a new place (geographic). Redeployment = using the capability for a new product/service.',
    basedOn: 'Helfat & Peteraf (2003)'
  },

  // --- Vargo & Lusch Additions ---
  {
    id: 'vl15',
    question: 'S-D Logic: What is "Value-in-context"?',
    options: [
      'Value written in a contract.',
      'Value determined by the unique combination of time, place, and other resources available to the beneficiary.',
      'The price on the tag.',
      'The value of the context.'
    ],
    correctAnswer: 1,
    explanation: 'Value-in-context extends Value-in-use by acknowledging that value depends on the specific situation and other resources available.',
    basedOn: 'Vargo & Lusch (2008)'
  },
  {
    id: 'vl16',
    question: 'S-D Logic: Why are "Employees" considered Operant Resources?',
    options: [
      'Because they are tangible.',
      'Because they act on other resources using their skills and knowledge.',
      'Because they are expensive.',
      'Because they are human.'
    ],
    correctAnswer: 1,
    explanation: 'Operant resources are those that ACT. Employees use skills to act on operand resources.',
    basedOn: 'Vargo & Lusch (2004)'
  },
  {
    id: 'vl17',
    question: 'S-D Logic: If goods are "appliances", what is the customer doing when using a car?',
    options: [
      'Driving.',
      'Servicing themselves (self-service) using the appliance to transport themselves.',
      'Destroying value.',
      'Manufacturing travel.'
    ],
    correctAnswer: 1,
    explanation: 'The good (car) allows the customer to provide the service (transport) to themselves.',
    basedOn: 'Vargo & Lusch (2004)'
  },
  {
    id: 'vl18',
    question: 'S-D Logic: "Customer Orientation" vs "Service Orientation" - S-D logic argues:',
    options: [
      'Customer orientation is better.',
      'Service orientation (serving the customer) IS customer orientation.',
      'They are opposites.',
      'Product orientation is best.'
    ],
    correctAnswer: 1,
    explanation: 'A service-centered view is inherently customer oriented because it focuses on the beneficiary\'s well-being.',
    basedOn: 'Vargo & Lusch (2008)'
  },

  // --- Henkel Details ---
  {
    id: 'hen13',
    question: 'Henkel: "Frame-based Brokering" - What is a "Frame"?',
    options: [
      'A picture frame.',
      'A set of attribute-value pairs (e.g., Price < 100, Location = NY).',
      'An HTML frame.',
      'A time frame.'
    ],
    correctAnswer: 1,
    explanation: 'A frame is a simple structure of attributes and values used for matching.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen14',
    question: 'Henkel: What limits "Frame-based Brokering"?',
    options: [
      'It is too fast.',
      'Exact matching is brittle; it fails if the request is slightly different (e.g., "NY" vs "New York").',
      'It is too expensive.',
      'It uses too much memory.'
    ],
    correctAnswer: 1,
    explanation: 'It relies on exact syntactic matching of attributes, which is inflexible.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen15',
    question: 'Henkel: How does "Specification-based Brokering" solve the exact match problem?',
    options: [
      'It guesses.',
      'It uses deductive logic/inference (e.g., A is a subclass of B) to find matches.',
      'It asks the user.',
      'It ignores the problem.'
    ],
    correctAnswer: 1,
    explanation: 'It uses logic (ontologies) to infer matches, e.g., knowing that "Truck" is a subtype of "Vehicle".',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen16',
    question: 'Henkel: "Ultra-Late Binding" (JIT) happens when?',
    options: [
      'When the code is written.',
      'When the code is compiled.',
      'When the service call is actually made (runtime).',
      'When the server boots up.'
    ],
    correctAnswer: 2,
    explanation: 'It happens at the very last moment, when the service is invoked.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen17',
    question: 'Henkel: What is the main downside of "Ultra-Late Binding"?',
    options: [
      'It is not flexible.',
      'Performance overhead (searching every time).',
      'It is too easy.',
      'No downsides.'
    ],
    correctAnswer: 1,
    explanation: 'Discovery and negotiation at every single call introduce significant latency.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen18',
    question: 'Henkel: "Managed Interaction" in Category 3 (Static B2B) means:',
    options: [
      'No management.',
      'Interactions are pre-negotiated and governed by fixed contracts/SLAs.',
      'Managers talk on the phone.',
      'Interactions are random.'
    ],
    correctAnswer: 1,
    explanation: 'Static B2B relies on "Managed Interaction" where everything is agreed upon before runtime.',
    basedOn: 'Henkel (2004)'
  },
  {
    id: 'hen19',
    question: 'Henkel: Why is "Dynamic Discovery" difficult in B2B?',
    options: [
      'Businesses don\'t have internet.',
      'Trust, semantics, and contractual complexity make automated selection risky.',
      'Services are too cheap.',
      'No one wants it.'
    ],
    correctAnswer: 1,
    explanation: 'Automating the selection of a business partner (Dynamic B2B) is hard due to trust and complex contract terms.',
    basedOn: 'Henkel (2004)'
  },

  // --- Platform Nuances ---
  {
    id: 'p8',
    question: 'Digital Platforms: What is "De-coupling" in the context of layers?',
    options: [
      'Breaking the platform.',
      'Separating the service content from the device/network (e.g., Netflix on any screen).',
      'Unplugging the server.',
      'Firing employees.'
    ],
    correctAnswer: 1,
    explanation: 'De-coupling allows the service to run on any device/network, fueling the platform economy.',
    basedOn: 'De Reuver et al. (2018)'
  },
  {
    id: 'p9',
    question: 'Platform Economy: What is a "Generative" platform?',
    options: [
      'One that generates electricity.',
      'One that allows third parties to create unlimited new outputs/innovations without permission.',
      'One that is closed.',
      'One that is expensive.'
    ],
    correctAnswer: 1,
    explanation: 'Generativity is the platform\'s capacity to produce unprompted change driven by large, varied, and uncoordinated audiences.',
    basedOn: 'De Reuver et al. (2018)'
  },
  {
    id: 'p10',
    question: 'DAO: What replaces the "Management" layer in a DAO?',
    options: [
      'Robots.',
      'Smart Contracts (code rules) and Token Holder Voting.',
      'The CEO.',
      'Government regulators.'
    ],
    correctAnswer: 1,
    explanation: 'The management function is automated by smart contracts and directed by community voting.',
    basedOn: 'Mateus & Sarkar (2023)'
  },
  {
    id: 'p11',
    question: 'Platform Ownership: What is the "Platform Owner\'s" primary role?',
    options: [
      'To make all the apps.',
      'To govern the ecosystem (set rules) and maintain the core infrastructure.',
      'To sell hardware.',
      'To ignore users.'
    ],
    correctAnswer: 1,
    explanation: 'The owner governs the rules of engagement and maintains the core, attracting complementors.',
    basedOn: 'Van Alstyne et al. (2016)'
  },
  {
    id: 'p12',
    question: 'Network Effects: What is a "Negative Network Effect"?',
    options: [
      'When the network is down.',
      'When more users make the platform LESS valuable (e.g., congestion, noise).',
      'When users leave.',
      'When the platform loses money.'
    ],
    correctAnswer: 1,
    explanation: 'Negative comparison (congestion) happens when too many users reduce the quality of service (e.g., traffic).',
    basedOn: 'Van Alstyne et al. (2016)'
  },

  // --- Expanded Platform & Ecosystem Analysis (New Batch) ---

  // Van Alstyne et al. (2016)
  {
    id: 'va1',
    question: 'Van Alstyne (2016): What is the core architectural transformation described?',
    options: [
      'From Linear Value Chain (Pipeline) to Platform.',
      'From Hardware to Software.',
      'From Local to Global.',
      'From Manual to Automated.'
    ],
    correctAnswer: 0,
    explanation: 'The shift is from pipelines (linear resource control) to platforms (orchestrating external networks).',
    basedOn: 'Van Alstyne et al. (2016)'
  },
  {
    id: 'va2',
    question: 'Van Alstyne (2016): Strategic Shift 1 - "Resource Control" moves to:',
    options: [
      'Resource Ownership.',
      'Resource Deletion.',
      'Resource Orchestration.',
      'Resource Mining.'
    ],
    correctAnswer: 2,
    explanation: 'Firms no longer own the primary value-creating assets; they orchestrate a network of external participants.',
    basedOn: 'Van Alstyne et al. (2016)'
  },
  {
    id: 'va3',
    question: 'Van Alstyne (2016): Strategic Shift 2 - "Internal Optimization" moves to:',
    options: [
      'External Interaction.',
      'Internal Chaos.',
      'Cost Reduction.',
      'Employee Training.'
    ],
    correctAnswer: 0,
    explanation: 'Value comes from facilitating interaction between external producers/consumers, not just optimizing internal processes.',
    basedOn: 'Van Alstyne et al. (2016)'
  },
  {
    id: 'va4',
    question: 'Van Alstyne (2016): "Supply-side economies" (Pipelines) vs "Demand-side economies" (Platforms). Demand-side value is created by:',
    options: [
      'Massive production scale.',
      'Participation scale (Network Effects).',
      'Lowering raw material costs.',
      'Efficient logistics.'
    ],
    correctAnswer: 1,
    explanation: 'Demand-side economies mean value grows as more people participate (network effects), not just by making things cheaper.',
    basedOn: 'Van Alstyne et al. (2016)'
  },
  {
    id: 'va5',
    question: 'Van Alstyne (2016): What is the "Integration Failure Rate"?',
    options: [
      'When the server crashes.',
      'When supply and demand fail to match (e.g., calling an Uber and getting "No cars").',
      'When API integration fails.',
      'When payment is rejected.'
    ],
    correctAnswer: 1,
    explanation: 'It is a key metric; if matching fails often, network effects weaken and users abandon the platform.',
    basedOn: 'Van Alstyne et al. (2016)'
  },
  {
    id: 'va6',
    question: 'Van Alstyne (2016): What is "Permissionless Innovation" (e.g., Apple)?',
    options: [
      'Anyone can develop apps without prior approval (within rules), enabling rapid scaling.',
      'No one can innovate.',
      'You need a permit to use the phone.',
      'Innovation is banned.'
    ],
    correctAnswer: 0,
    explanation: 'It allows developers to create value without asking the platform owner for permission every time, fostering generativity.',
    basedOn: 'Van Alstyne et al. (2016)'
  },

  // De Reuver et al. (2018)
  {
    id: 'dr1',
    question: 'De Reuver (2018): "Reprogrammability" means:',
    options: [
      'You can reset the password.',
      'A digital artifacts function can be changed after it is created/deployed.',
      'You need to buy a new device for new features.',
      'Code is written largely by AI.'
    ],
    correctAnswer: 1,
    explanation: 'Unlike a hammer, a smartphone can become a level, a map, or a game console via software updates.',
    basedOn: 'De Reuver et al. (2018)'
  },
  {
    id: 'dr2',
    question: 'De Reuver (2018): "Self-referentiality" in digital platforms means:',
    options: [
      'Platforms talk to themselves.',
      'Digital tools are used to build digital artifacts (e.g., using an IDE on an OS to build an App for that OS).',
      'It is a selfish design.',
      'References are circular.'
    ],
    correctAnswer: 1,
    explanation: 'Innovation feeds on itself; the platform provides the tools to build new things for the platform.',
    basedOn: 'De Reuver et al. (2018)'
  },
  {
    id: 'dr3',
    question: 'De Reuver (2018): "Layered Modularity" allows:',
    options: [
      'Nothing.',
      'Separation of form and function (e.g., a software keyboard can change layout instantly).',
      'Rigid hardware constraints.',
      'Thick devices.'
    ],
    correctAnswer: 1,
    explanation: 'It removes the fixed constraint of physical modularity, allowing dynamic adaptation.',
    basedOn: 'De Reuver et al. (2018)'
  },
  {
    id: 'dr4',
    question: 'De Reuver (2018): What are "Boundary Resources"?',
    options: [
      'Fences around the office.',
      'Software tools (APIs, SDKs) and regulations that facilitate the relationship with complementors.',
      'The limit of the network.',
      'External hard drives.'
    ],
    correctAnswer: 1,
    explanation: 'These resources (like Apple\'s iOS SDK) are how the platform owner exposes capabilities to outside developers.',
    basedOn: 'De Reuver et al. (2018)'
  },

  // Ranerup et al. (2016) - Public Service Platforms
  {
    id: 'ran1',
    question: 'Ranerup (2016): What is the "Value Proposition" spectrum in PSPs?',
    options: [
      'Always just simple text.',
      'Ranges from basic information -> comparison tools -> decision support -> predictive modeling.',
      'It only includes payment.',
      'There is no value.'
    ],
    correctAnswer: 1,
    explanation: 'Platforms vary from simple informational sites to complex decision engines (like pension forecasts).',
    basedOn: 'Ranerup et al. (2016)'
  },
  {
    id: 'ran2',
    question: 'Ranerup (2016): Which sector has the "Most Traditional" (least digital) platform model?',
    options: [
      'Education.',
      'Elder Care.',
      'Pensions.',
      'Healthcare.'
    ],
    correctAnswer: 1,
    explanation: 'Elder care platforms usually offer minimal info and no interaction, requiring professional assessment instead.',
    basedOn: 'Ranerup et al. (2016)'
  },
  {
    id: 'ran3',
    question: 'Ranerup (2016): Which sector has the "Most Sophisticated" decision support?',
    options: [
      'Education.',
      'Elder Care.',
      'Pensions.',
      'Healthcare.'
    ],
    correctAnswer: 2,
    explanation: 'Pensions require long-term investment modeling and consequence analysis, leading to advanced tools.',
    basedOn: 'Ranerup et al. (2016)'
  },
  {
    id: 'ran4',
    question: 'Ranerup (2016): "Internal Resource Model" for Value Architecture means:',
    options: [
      'The agency uses its own data and infrastructure.',
      'The agency buys data from Google.',
      'Citizens build the platform.',
      'It is a PPP.'
    ],
    correctAnswer: 0,
    explanation: 'The public agency owns and operates everything internally.',
    basedOn: 'Ranerup et al. (2016)'
  },
  {
    id: 'ran5',
    question: 'Ranerup (2016): "User-as-resource Model" means:',
    options: [
      'Users pay fees.',
      'Citizens contribute content (reviews, ratings) -> Web 2.0.',
      'Users are employees.',
      'Users are resources to be mined.'
    ],
    correctAnswer: 1,
    explanation: 'Citizens are active contributors (co-creators) of value through reviews and data.',
    basedOn: 'Ranerup et al. (2016)'
  },

  // Basole (2019) - API Economy
  {
    id: 'bas1',
    question: 'Basole (2019): "Linear Value Chain" vs "Value Network" vs "Ecosystem". Ecosystems are:',
    options: [
      'Simple and static.',
      'Complex, emerging, dynamic structures where members co-evolve.',
      'Controlled by one dictator.',
      'Closed systems.'
    ],
    correctAnswer: 1,
    explanation: 'Ecosystems are characterized by co-evolution and dynamic non-linear relationships.',
    basedOn: 'Basole (2019)'
  },
  {
    id: 'bas2',
    question: 'Basole (2019): APIs serve as "Digital Control Points". What 4 functions do they perform?',
    options: [
      'Stop, Drop, Roll, Run.',
      'Abstraction, Standardization, Control, Extensibility.',
      'Billing, Marketing, HR, IT.',
      'Routing, Switching, Firewalling, VPN.'
    ],
    correctAnswer: 1,
    explanation: 'They abstract complexity, standardize access, allow control (auth/limits), and enable extension by third parties.',
    basedOn: 'Basole (2019)'
  },
  {
    id: 'bas3',
    question: 'Basole (2019): What does the metric "Clustering Coefficient" measure?',
    options: [
      'How fast the API is.',
      'Collaboration density (how connected neighbors are to each other).',
      'The price of the API.',
      'The number of servers.'
    ],
    correctAnswer: 1,
    explanation: 'High clustering indicates tight communities or "small worlds" of related services.',
    basedOn: 'Basole (2019)'
  },
  {
    id: 'bas4',
    question: 'Basole (2019): "Mashups" growing faster than "APIs" suggests:',
    options: [
      'We ran out of APIs.',
      'Innovation is occurring primarily through Recombination of existing services.',
      'APIs are dead.',
      'Mashups are cheaper.'
    ],
    correctAnswer: 1,
    explanation: 'The value comes from combining existing blocks in new ways (combinatorial innovation) rather than making new blocks.',
    basedOn: 'Basole (2019)'
  },
  {
    id: 'bas5',
    question: 'Basole (2019): XaaS (Everything as a Service) architecture is:',
    options: [
      'Vertical silos.',
      'Horizontal services composable across boundaries.',
      'Hardware based.',
      'Manual labor.'
    ],
    correctAnswer: 1,
    explanation: 'XaaS exposes business capabilities as horizontal, composable APIs (e.g., "stripe" for payments + "twilio" for SMS).',
    basedOn: 'Basole (2019)'
  },

  // Mateus & Sarkar (2023) - DAOs
  {
    id: 'ms1',
    question: 'Mateus (2023): How do DAOs trigger insurance claim settlements?',
    options: [
      'A board meeting.',
      'Automated Smart Contracts trigger when conditions are met.',
      'A phone call.',
      'Fax.'
    ],
    correctAnswer: 1,
    explanation: 'Smart contracts automatically execute the payout when the codified conditions (e.g., flight delay) are verified.',
    basedOn: 'Mateus & Sarkar (2023)'
  },
  {
    id: 'ms2',
    question: 'Mateus (2023): What is the "Democratic" advantage of a DAO in healthcare?',
    options: [
      'Doctors vote.',
      'All token holders (patients, researchers, etc.) vote on decisions/funding, removing centralized agency.',
      'Government control.',
      'Free healthcare.'
    ],
    correctAnswer: 1,
    explanation: 'It removes the "black box" of executive boards, allowing the community to vote transparently.',
    basedOn: 'Mateus & Sarkar (2023)'
  },
  {
    id: 'ms3',
    question: 'Mateus (2023): How does Blockchain improve "Data Sovereignty"?',
    options: [
      'It doesn\'t.',
      'Patients can own their data keys and grant/revoke access to researchers (Health Records Democratization).',
      'It stores data on a USB stick.',
      'Only doctors can see data.'
    ],
    correctAnswer: 1,
    explanation: 'The blockchain allows granular, patient-controlled access to records without a central intermediary owning the data.',
    basedOn: 'Mateus & Sarkar (2023)'
  },

  // --- Even More Platform Nuances (User Request Expansion 2) ---

  // Basole (2019) Methodology & Metrics
  {
    id: 'bas6',
    question: 'Basole (2019): What is "Betweenness Centrality" in an API ecosystem?',
    options: [
      'Being in the middle of a conflict.',
      'A measure of how often a node acts as a bridge along the shortest path between two other nodes.',
      'The average price of the API.',
      'How central the server is located.'
    ],
    correctAnswer: 1,
    explanation: 'It measures the influence of a node as a bridge or gatekeeper in the network.',
    basedOn: 'Basole (2019)'
  },
  {
    id: 'bas7',
    question: 'Basole (2019): Step 1 of the Ecosystem Analysis Methodology is:',
    options: [
      'Draw a picture.',
      'Boundary Specification (Define who is in, who is out, roles, timeframe).',
      'Calculate metrics.',
      'Write a report.'
    ],
    correctAnswer: 1,
    explanation: 'First you must define the scope: nodes (APIs, firms), types, and relationships.',
    basedOn: 'Basole (2019)'
  },
  {
    id: 'bas8',
    question: 'Basole (2019): "Force-directed layouts" are used for:',
    options: [
      'Physics simulation.',
      'Visualizing the graph structure where node position reflects connectivity (central vs peripheral).',
      'Forcing users to use the API.',
      'Marketing materials.'
    ],
    correctAnswer: 1,
    explanation: 'It helps make sense of the complex network by clustering connected nodes together.',
    basedOn: 'Basole (2019)'
  },
  {
    id: 'bas9',
    question: 'Basole (2019): What is "Persistent Dominance" in the API economy?',
    options: [
      'APIs always crash.',
      'Core infrastructure APIs (Google Maps, Facebook) maintain their central positions over time due to network effects.',
      'The government dominates.',
      'Dominance is temporary.'
    ],
    correctAnswer: 1,
    explanation: 'Network effects reinforce the early leaders (keystones), making it hard to displace them.',
    basedOn: 'Basole (2019)'
  },

  // Ranerup (2016) Deep Dives
  {
    id: 'ran6',
    question: 'Ranerup (2016): What is the "Hybrid Model" of Value Architecture?',
    options: [
      'A hybrid car.',
      'Public data combined with Private infrastructure.',
      'Public infrastructure with private data.',
      'No data.'
    ],
    correctAnswer: 1,
    explanation: 'The agency provides the data (fuel), but private firms build/host the platform infrastructure.',
    basedOn: 'Ranerup (2016)'
  },
  {
    id: 'ran7',
    question: 'Ranerup (2016): Which sector has the "Most Traditional" (least digital) platform model?',
    options: [
      'Education.',
      'Elder Care.',
      'This question is duplicate.',
      'Healthcare.'
    ],
    correctAnswer: 1,
    explanation: 'Elder care platforms usually offer minimal info due to professional assessment requirements.',
    basedOn: 'Ranerup (2016)'
  },
  {
    id: 'ran8',
    question: 'Ranerup (2016): "Value Finance" - what is a sustainability challenge for Public Platforms?',
    options: [
      'They have too much money.',
      'Balancing "Public Good" (free access) with commercial sustainability models (ads/fees) in PPPs.',
      'Printing cash.',
      'Paying taxes.'
    ],
    correctAnswer: 1,
    explanation: 'Public platforms need funding, but commercial models (ads) might conflict with the public service mission.',
    basedOn: 'Ranerup (2016)'
  },
  {
    id: 'ran9',
    question: 'Ranerup (2016): In the "Education" sector, what complicates the platform ecosystem?',
    options: [
      'Too few schools.',
      'Multiple competing platforms at national, regional, and private levels.',
      'No internet in schools.',
      'Students don\'t use computers.'
    ],
    correctAnswer: 1,
    explanation: 'Education has the most diverse and overlapping ecosystem, causing navigation challenges for citizens.',
    basedOn: 'Ranerup (2016)'
  },

  // De Reuver (2018) Paradoxes
  {
    id: 'dr5',
    question: 'De Reuver (2018): "Paradox of Change" refers to:',
    options: [
      'Change is impossible.',
      'Platforms must remain stable (as a foundation) yet be flexible enough to evolve.',
      'Users hate change.',
      'Software never changes.'
    ],
    correctAnswer: 1,
    explanation: 'The platform must be a stable rock for developers, but also adapt to new tech.',
    basedOn: 'De Reuver (2018)'
  },
  {
    id: 'dr6',
    question: 'De Reuver (2018): "Paradox of Control" refers to:',
    options: [
      'No one is in control.',
      'Simultaneous centralized control (of the core) and distributed generative control (by the ecosystem).',
      'Control is an illusion.',
      'Government control vs Corporate control.'
    ],
    correctAnswer: 1,
    explanation: 'Success requires letting go (distributed innovation) while holding on (governing the core).',
    basedOn: 'De Reuver (2018)'
  },
  {
    id: 'dr7',
    question: 'De Reuver (2018): "Platform vs Infrastructure" - Digital Infrastructures are:',
    options: [
      'Less complex than platforms.',
      'More complex, distributed, and lack a single centralized controller (e.g., the Internet).',
      'The same as platforms.',
      'Only hardware.'
    ],
    correctAnswer: 1,
    explanation: 'Infrastructures are unbounded and distributed with emergent governance, unlike identified platform owners.',
    basedOn: 'De Reuver (2018)'
  },

  // Van Alstyne (2016) Function Inversion
  {
    id: 'va7',
    question: 'Van Alstyne (2016): How does "Marketing" invert in a platform?',
    options: [
      'It stops.',
      'From outbound messaging to orchestrating User Generated Content (WOM).',
      'It becomes sales.',
      'It becomes AI.'
    ],
    correctAnswer: 1,
    explanation: 'Instead of creating the message, the firm orchestrates users spreading the message.',
    basedOn: 'Van Alstyne (2016)'
  },
  {
    id: 'va8',
    question: 'Van Alstyne (2016): How does "Operations" invert?',
    options: [
      'Inventory is owned by the firm.',
      'From managing owned inventory to managing "Not-even-mine" inventory (e.g., Airbnb rooms).',
      'Operations becomes Finance.',
      'No operations needed.'
    ],
    correctAnswer: 1,
    explanation: 'The firm manages assets it does not own (Uber cars, Airbnb rooms).',
    basedOn: 'Van Alstyne (2016)'
  },
  {
    id: 'va9',
    question: 'Van Alstyne (2016): "Spillover Effects" are:',
    options: [
      'Spilling coffee.',
      'Positive side-effects where activity in one area increases value in another (e.g., book data improving pricing algorithms).',
      'Data leaks.',
      'Pollution.'
    ],
    correctAnswer: 1,
    explanation: 'Data or value spills over from one interaction to benefit the whole system.',
    basedOn: 'Van Alstyne (2016)'
  },
  {
    id: 'va10',
    question: 'Van Alstyne (2016): "Governance Openness" vs "Technical Openness". Governance refers to:',
    options: [
      'Who can access the APIs.',
      'Who gets to shape the rules and rewards of the platform.',
      'The government.',
      'Open source code.'
    ],
    correctAnswer: 1,
    explanation: 'Technical is about API access; Governance is about rule-making participation.',
    basedOn: 'Van Alstyne (2016)'
  },
  {
    id: 'va11',
    question: 'Van Alstyne (2016): Platform Launch Strategy - "Marquee Strategy" means:',
    options: [
      'Buying a marquee tent.',
      'Attracting a key participant (e.g., Halo game for Xbox) to induce network effects.',
      'Launching everywhere at once.',
      'Giving it away for free.'
    ],
    correctAnswer: 1,
    explanation: 'Securing a high-value participant to kickstart the network.',
    basedOn: 'Van Alstyne (2016)'
  }
];
