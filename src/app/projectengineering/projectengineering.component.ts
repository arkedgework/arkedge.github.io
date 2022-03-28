import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-projectengineering',
  templateUrl: './projectengineering.component.html',
  styleUrls: ['./projectengineering.component.scss']
})
export class ProjectengineeringComponent implements OnInit {

  solution = [
    {
      title: 'Idea',
      info: 'Our idealogy text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
      icon: '#icon_Idea'
    },
    {
      title: 'Concept',
      info: 'Concept text will come, Lorem ipsum dolor sit.',
      icon: '#icon_Concept'
    },
    {
      title: 'Design',
      info: 'Design text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
      icon: '#icon_Design'
    },
    {
      title: 'Develop',
      info: 'Develop text will come, Lorem ipsum dolor.',
      icon: '#icon_Develop'
    },
    {
      title: 'Test',
      info: 'Test text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
      icon: '#icon_Test'
    }
  ];

  keydiff = [
    { list: 'New application development' },
    { list: 'Existing application enhancement' },
    { list: 'Application maintenance' },
    { list: 'Application migration' },
    { list: 'Production and post production support' },
    { list: 'Application testing' }
  ];

  uiUxInfo = [
    {  title: 'Strategy', 
    description: `Stakeholder Discusstions
Product Vision / Goals
Brand Strategy
Measure of Success
Project Priority`,
    color:"purple" 
    },

    { title: 'Discovery', 
    description: `Bysiness Requirements
Analytics Review
Content Interviews
Surveys
User Testing`,
    color:"orange" 
    },

    { title: 'Analysis', 
    description: `Use Cases
Persona Creation
Story Boards
Experience Map
Workflow Diagram`,
    color:"pink"
    },

    { title: 'Design', 
    description: `Mood Board
Sitemap
Sketching
Wireframing
Prototyping
Usertesting`,
    color:"limegreen"
    },

    { title: 'Production', 
    description: `Prototyping
Beta Launch
User Testing
Release / Launch`,
    color:"skyblue"
    }
  ];

  uiUxProcess = [
    {  title: 'Set Design Strategy', 
    description: `Strategy is important from the outset because it articulates the brand, guiding principles, and long-term vision of an organisation. The strategy underpinning a UX project will shape the goals of the project—what the organisation is hoping to achieve with the project, how its success should be measured, and what priority it should have in the grand scheme of things.`,
    color:"purple" ,
    },

    { title: 'Research', 
    description: `Often referred to as the Discovery phase, the Research phase is probably the most variable between projects. Complex projects will comprise significant user and competitor research activities, while small startup websites may skip all research activities other than some informal interviews and a survey. In many people’s eyes, the Research phase is key to creating an informed user experience, however it is also the phase most often skipped—especially by proponents of a “Lean UX” approach.`,
    color:"orange" 
    },

    { title: 'Analysis', 
    description: `The aim of the Analysis phase is to draw insights from data collected during the Research phase. Capturing, organising and making inferences from the “what” can help UX Designers begin to understand the “why”. Communicating the designer’s understanding back to end-users helps to confirm that any assumptions being made are valid.`,
    color:"pink"
    },

    { title: 'Design', 
    description: `The Design phase of a UX project is collaborative (involving input and ideas from different people) and iterative (meaning that it cycles back upon itself to validate ideas and assumptions). Building on the user feedback loop established in previous phases, the premise of the Design phase is to put ideas in front of users, get their feedback, refine them, and repeat. These ideas may be represented by paper prototypes, interactive wireframes, or semi-functioning prototypes, all deliberately created in low-fidelity to delay any conversation relating to graphic identity, branding or visual details.`,
    color:"limegreen"
    },

    { title: 'Production', 
    description: `The Production phase is where the high-fidelity design is fleshed out, content and digital assets are created, and a high-fidelity version of the product is validated with stakeholders and end-users through user testing sessions. The role of the UX Designer shifts from creating and validating ideas to collaborating with developers to guide and champion the vision.`,
    color:"skyblue"
    }
  ];

  dataEngi = [
    {
      icon: '#icon_daycare',
      title: 'Advisory & Architecture Design',
      description: 'Leverage from Scalable Enterprise Data Architecture Models'
    },
    {
      icon: '#icon_iteration',
      title: 'Data Analytics & BI Enablement',
      description: 'Leverage from an enterprise-ready Business Intelligence Platform'
    },
    {
      icon: '#icon_explor',
      title: 'Data Management & Governance',
      description: 'Deploy Effective Data Governance Solutions'
    },
    {
      icon: '#icon_explor',
      title: 'Data Movement & ETL',
      description: 'Collect, Combine and Synthesize your enterprise data at speed'
    },
    {
      icon: '#icon_explor',
      title: 'ML Engineering',
      description: 'Build and Automate a full stack of Machine Learning applications'
    },
    {
      icon: '#icon_explor',
      title: 'ML EngineeringData & Analytics Platforms Support',
      description: 'Configure, Implement, and Support Big Data and Cloud Infrastructure'
    }
  ];


  qaInfo = [
    {
      title: 'Cost of the Quality',
      info: 'For optimal return on investment the rule is fix bugs before the release, not after. Smart technology companies know that instead of focusing on patching defects, they must ensure that defects are taken care of before the consumer finds them. Well planned and executed test engineering not only reduces the risks of defects, but helps to ensure project costs stay within budget and timeframe.'
    },
    {
      title: 'Testing Categories / Types',
      info: 'Arkedge Software Testing Services offerings are based on disciplined test methodologies and processes, state of the art infrastructure and industry leading tools, as well as highly skilled and experienced professional staff.'
    },
  ];

  qafunctionTest = [
          {info: 'Unit Testing'},
          {info: 'Smoke / Sanity Testing'},
          {info: 'ntegration Testing'},
          {info: 'Interface & Usability Testing'},
          {info: 'System testing'},
          {info: 'Regression Testing'},
          {info: 'User Acceptance Testing'}
  ];

qanonfunctionTest = [
    {info: 'Load & Performance Testing'},
    {info: 'Stress & Volume Testing'},
    {info: 'Security Testing'},
    {info: 'Interoperability Testing'},
    {info: 'Reliability / Availability Test'},
    {info: 'Installation Testing'},
    {info: 'Compatibility Testing'}
];

qalabfunctionTest = [
  {info: 'Unit Test'},
  {info: 'Functional Test'},
  {info: 'Regression Test'},
  {info: 'Test Data Creation'},
  {info: 'Load Testing'},
  {info: 'Stress Testing'},
  {info: 'Volume Testing'}
];

tabIndex;
tabName;
constructor(private sharedservice: SharedService) { }
ngOnInit() {
  this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id);
  this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
}

title(i) {
  if (i === 1) {
    this.tabName = 'Product Engineering';
  } else if (i === 2) {
    this.tabName = 'Application Development';
  } else if (i === 3) {
    this.tabName = 'Data Engineering';
  } else if (i === 4) {
    this.tabName = 'UX/UI Development';
  } else if (i === 5) {
    this.tabName = 'Software Testing & QA';
  }
}

}
