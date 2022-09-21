import { Component, OnInit, NgModule } from '@angular/core';
import { SharedService } from '../shared.service';
import { CreateSpace } from '../space.pipe';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss']
})

@NgModule({
  declarations: [
    CreateSpace
  ]
})

export class StaffingComponent implements OnInit {

  closeResult = '';

  ourProcess = [
    {
      title: 'Quality Employee',
      // tslint:disable-next-line: max-line-length
      desc: 'We take the time to listen and understand your business. Our industry-specific recruiters and account teams, combined with our access to the best talent, ensure that we locate, screen and place only the most qualified employees.',
    },
    {
      title: 'Quality Relationship',
      // tslint:disable-next-line: max-line-length
      desc: 'But we don’t stop there. We stay connected with you to ensure our employees are meeting your expectations and we are delivering on our promises.',
    },
    {
      title: 'Strategic Partnership',
      // tslint:disable-next-line: max-line-length
      desc: 'Working together, we develop a strategic partnership to provide workforce consultation to make your staffing process more effective and evolve your business.',
    }
  ];


  training = [
    {
      position: 'right',
      icon: '#icon_project',
      title: 'Project Preparatory Program',
      // tslint:disable-next-line: max-line-length
      desc: `In today's world, there is absolutely no dearth of technological projects to bank one's business on. However, with advancing techs, the demands from IT professionals are also increasing manifold times. It is never possible for one individual to have a complete grasp of every tool and technology. In case the next project of the company requires a certain skillset or proficiency in a particular type of assignment, Arkedge would happily provide a crash course to enable your employees so that they have the relevant skill for the project.`,
    },
    {
      position: 'left',
      icon: '#icon_certificate',
      title: 'Certification Program',
      // tslint:disable-next-line: max-line-length
      desc: `The certification programs offered by Arkedge aims to further hone the skills and aptitudes of your employees and IT professionals so that they can serve your business better. Keeping in mind the growing trends of the digital domain, we impart adequate training in branches lie Artificial Intelligence, Machine Learning, Virtual and Augmented Reality, cloud computing, blockchain and Internet of Things (IoT).`,
    },
    {
      position: 'right',
      icon: '#icon_recruitment',
      title: 'Post-recruitment Orientation Program',
      // tslint:disable-next-line: max-line-length
      desc: `It is the duty of every company to conduct an introductory orientation course for the new recruits to allow them to acclimatize with the kind of work they will be dealing with in their new workplace. While this post-recruitment training program is a necessity for efficiency and work-readiness of the new recruits, it can quite a hassle for your company to arrange for at a constant basis. Arkedge extends its services to cover the program in minute details and turn your fresh members into highly productive resources.`,
    },
    {
      position: 'left',
      icon: '#icon_skillset',
      title: 'Skill Updating Program',
      // tslint:disable-next-line: max-line-length
      desc: `Technology is progressing at an exponential rate and it is required that the manual workforce handling them should also be trained properly to keep up with the speed. Arkedge's skill updating program helps you bridge the gap between what you know and what you are being expected to know. It covers the many nuances of the market-popular, specific technologies, new versions or updates or software and so on.`,
    }
  ];

  keyDiff = [
    {
      title: 'Single Point of Contact with dedicated recruiting team',
     },
     {
      title: 'Tailored Client Engagement Strategy with process standardization, resource optimization and SLA management',
     },
     {
      title: 'Established Talent Retention Program that outlines the candidate’s commitment, key deliverables and expectations to ensure continuous consultant engagement at all phases of project needs',
     },
     {
      title: 'Large, Screened and Qualified Consultant Database that Goes Beyond Job Boards',
     },
     {
      title: 'National Coverage with Presence in 25 cities across 10 States',
     },
  ];

  clients = [
    {
      title: 'Spend their time interviewing the right candidate instead of reviewing resumes.',
     },
     {
      title: 'Save 30% in critical time in their hiring process.',
     },
     {
      title: 'Find the consultants we present, exceed their expectations.',
     },
    ];


  whyTraining = [
    {
      title: 'Flexible Pricing Options',
      // tslint:disable-next-line: max-line-length
      desc: `Working with us for corporate IT training is highly cost-effective. We provide our clients with flexible pricing options which will suit their business requirements and budget.`,
    },
    {
      title: 'Single Point of Contact',
      // tslint:disable-next-line: max-line-length
      desc: `When you choose to outsource corporate IT training services to us, we will assign a dedicated project manager. This manager will be the single point of contact for all your needs and resolve any issues that you may have.`,
    },
    {
      title: '24/7 Support',
      // tslint:disable-next-line: max-line-length
      desc: `We provide our clients with round the clock support. All our team members including the sales team, marketing team, call center executives, and project management team are available at all times to answer your queries via phone or email.`,
    },
    {
      title: 'Customization of training programs',
      // tslint:disable-next-line: max-line-length
      desc: `At Outsource2india, we understand the nature of corporate IT training programs - they are precise and heavily objective-driven. Our training modules are thus up for preferred customization and they come tailor-made as per your requirements.`,
    },
    {
      title: 'Experienced and certified trainers',
      // tslint:disable-next-line: max-line-length
      desc: `Our team of trainers for corporate IT training services comes from experienced backgrounds and hold certification in their respective fields. With the proper guidance of our panel of trainers, your employees, whether new or old, will have a horizon of opportunities opened up for them.`,
    },
    {
      title: 'Comprehensive methodology',
      // tslint:disable-next-line: max-line-length
      desc: `Owing to the extensive nature of corporate IT training syllabus and beyond, a systematic yet flexible training methodology should be in place. The course segmentation for the said purpose is determined based on certain aspects -`,
      list: [
        { title: 'Experience level of the trainee' },
        { title: 'Timing of the training' },
        { title: 'Skill level of the training program' },
        { title: 'Duration of the program' },
        { title: 'Assessment of the training' }
      ]
    },
    {
      title: 'Hands-on and practical training',
      // tslint:disable-next-line: max-line-length
      desc: `Unlike academic pursuits or most other courses, this training program has a more immediate and realistic goal at its end. So the nature of the training program should also be in accordance to that. Our courses include interactive sessions, engaging case studies and result-orientated preparation styles.`,
    },
    {
      title: 'Post-training support',
      // tslint:disable-next-line: max-line-length
      desc: `Employees might still need assistance with IT operations after their program duration is over. Outsource2india does not leave you stranded in the middle post-training and continues to offer support and assistance to the employees.`,
    }
  ];


  servicesProvided = [
   {title: 'EXECUTIVE SEARCH',
desc: `For an organisation to achieve its objectives, it needs high-calibre and committed leaders. For many years, we have successfully placed a large number of senior individuals, including chief executives, divisional heads and functional heads across a broad range of sectors.

We understand that our recruitment services play a crucial role in the development and success of our clients. We therefore place the utmost importance on understanding the needs of the organisation and the requirements of the situation.

Each assignment is unique and we offer a bespoke service based on our client’s needs. Working in specialist teams, we are able to utilise our complementary skills and knowledge base to the full. We use structured processes throughout the whole project, adopting a pragmatic approach. This continues even after the assignment has been completed, with a follow-up review and on-going dialogue with both the candidate and the client to ensure that the placement is a success.

Our executive recruitment offering is personally led by our senior management team who have rich, diverse backgrounds with direct industry experience across various geographical markets. We are therefore able to offer clients a truly unique understanding of their needs inside and out, thus allowing us to place executives with the ideal background, attitude and approach in the most timely and effective manner. For our Executive and Leadership Search services, please reach out to us and let’s explore how we may be of help`,
},
    
    {title: 'MIDDLE MANAGEMENT',
desc: `Middle Management represents the actual backbone of a successful organisation. Get this wrong and organisations face a lifetime trying to react to market changes, thus ultimately dying out. An effective CEO, in order to maximise their or their company’s performance has to creatively, aggressively, and systematically build the capabilities of the company’s middle management team.

This is important for two reasons: First, virtually all major strategic initiatives have to be carried out by the middle managers. Their flexibility and leadership skills will determine how able they are to tailor and adapt initiatives to the company’s changing circumstances. Second, a strong middle management team will produce outstanding operational results, easing the need for top managers to oversee and intervene directly in day-to-day operations. A well-functioning middle management team also will proactively create a constant stream of new initiatives to remedy problems and seize new opportunities. Middle management excellence is the key leverage point for great performance.

Therefore if one looked carefully at the great companies of our day, like GE for example, middle management excellence is in fact one of top management’s very highest priorities. Even after GE managers leave the company, they most often have the “look and feel” of GE’s management team: a focus on systematically teaching their subordinates to analyse and improve the businesses, and on teaching them to pass this skill on to their own management teams.

Winfort has strong expertise in helping clients within our focused sectors in building this layer of strong talent. For more information on our middle management search services, please reach out to us and let’s explore how we may be of help.`,},
    
    {title: 'DIVERSITY HIRING',
      desc: `Diversity hiring is not just a service we’re proficient in, but one of the key factors that our team of professional search experts breathe and apply in all their exceptional talent searches.
Our experts understand the nuances of diversity across geographies, industries, and demographics. We aim to bust the myth of women not getting enough opportunities to work for certain industry sectors and hence, we inordinately support our clients with diversity and inclusion. Research also backs up inclusion of diversity in hiring as a key factor for organizations’ growth path.

Forbes Insights has identified workforce diversity and inclusion as a key driver of internal innovation and business growth. A survey found that 67% of active and passive job seekers said that diversity is an important factor when considering companies and job offers. Hence, Diversity hiring is a crucial aspect of our team culture.

Diversity is at the forefront of our leadership agenda at Winfort, as well as while working on our Client’s mandates. We believe that a more inclusive workforce and leadership team, fosters better governance and decision making and provides organizations with a sustained competitive advantage.
Team Winfort has successfully driven this agenda for over a decade with over 43% of our placements, and a significantly higher proportion of our shortlists, being diversity candidates. We have developed significant databases, particularly of female candidates in leadership roles across industries in India.
We are privileged to have clients who too recognize and support diversity hiring in various industry sectors. Our ‘Returnship Program’ acts as an enabler to mothers looking to return to a fulfilling career, post their maternity, which is appreciated and used on a regular basis by our clients looking to hire diverse talented professionals. Our “Diverse Leadership program” is focused on organizations that want to build a more inclusive team. 

‘We are proud of the fact that we are helping break the stereotype in a category like Technology, which historically has been predominantly a male bastion. As of last year alone, Winfort helped place 43% diversity candidates- an accomplishment which we,Winfortians hold close to our heart.
Hence, If you are a professional, looking for an inclusive career path or a progressive organization, looking to hire talented candidates, devoid of cultural and sexual orientation biases, reach out to us.
We promise to partner with you and help bring diversity in your organization. Let’s connect`,
},
    
    {title: 'MARKET MAPPING',
    desc: `“ The secret of my success is that we have gone to exceptional lengths to hire the best in the world.” – Steve Jobs

    Information is Power and we, at Winfort understand that for every business to grow to its full potential, it needs timely, relevant information. It is particularly useful for businesses entering new markets or ramping up or are willing to hire the best.
    
    Market mapping is the art of using competitive intelligence to understand the size of the talent pool, their skills and background, demographics, salary ranges, organization structures etc.
    
    Often, companies seek to benchmark their own leadership team against the talent base available in a particular geography or industry. As the norm is, business leaders across industries, develop and engage with an external leadership pipeline on an ongoing basis. Gathering targeted market intelligence allows recruitment professionals to build a strategy to hire dynamic talent. We provide assistance through bespoke market and talent mapping, thus enabling our client partners to hire, better.
    
    And hence, corporates seeking deeper insights and analysis with regards to understanding the talent landscape (single role, job family, skillset, compensation, etc) have Winfort as their first port of call. Our team of experts indulge in extensive research on the trends, cultural fit, and competitive strengths analysis within the market landscape and validate those findings to organizations in search of such information.
    
    With over 2 decades of experience, Winfort’s team of talented professionals combines technology, business and market skills to deliver information that is crucial for organizations to build their strategic hiring plans and take advised decisions.
    
    If you are a company that believes in the power of information and market intelligence and prefers a competitive analysis prior to making a hiring decision, Winfort is the one-stop solution for you.`,
},
    
    {title: 'CONTRACT STAFFING',
    desc: `Digital and Transformation – the two buzz words that define today’s business environment.  With companies evolving their strategies and processes on a regular basis, the ability of an organisation to manage it’s processes and resources flexibly becomes critical to stay competitive and succeed.

    At Winfort, we have been supporting our customers for over 20 years with flexible staffing solutions.  Leveraging our strong database and technical capability, we have provided flexible staffing and payroll solutions in diverse areas such as technology, analytics, finance, consulting, recruitment etc.  Our unique business model allows organisations to focus on running their business, while we manage their complete payroll and administration process, including all regulatory compliances.`,
 },

    {title: 'RPO',
    desc: `It is a form of knowledge process outsourcing where an employer outsources or transfers all or part of its recruitment activities to an external service provider like Winfort. The ability to pursue growth opportunities for any organisation requires skilled and motivated talent. Recruitment process outsourcing (RPO) can bring you that talent in a cost effective manner. As a specialised leader in recruitment outsourcing and consulting, Winfort leverages it’s talent hiring expertise to optimize the recruiting process. We are committed to lowering costs, increasing productivity and retention, and delivering a best-in-class hiring manager and candidate experience. We have a full suite of recruitment process outsourcing (RPO) solutions to meet your specific talent acquisition needs.`,
}
  ];

  staffingSolution = [
    {
      title: ' Rapid Staffing Solutions',
      // tslint:disable-next-line: max-line-length
      desc: 'Rapid Staffing Solutions addresses large requirements from clients, particularly at junior and middle management levels. Such requirements cater to start-up organizations, new project manning, plant expansion, scale up of team sizes and geographical expansion of teams.',
      // tslint:disable-next-line: max-line-length
      desc2: 'We can mobilize our vast internal resources to process large volume responses, manage selection of required personnel, including the management of administrative details and logistics. We also help you target specific segments of professionals for specialized roles.'
    },
    {
      title: 'Turnkey Staffing',
      // tslint:disable-next-line: max-line-length
      desc: 'The entire Recruitment Process is taken up as a Turnkey Assignment, whereby we manage the entire logistics i.e. written tests, Organizing Group Discussions, Conduction Technical Tests, and Preliminary Interviews etc. The entire activity from A to Z is taken up as a turnkey project.',
      // tslint:disable-next-line: max-line-length
      desc2: ''
    },
    {
      title: 'Executive Search',
      // tslint:disable-next-line: max-line-length
      desc: 'Our Executive search division focuses on senior level positions like President, CEO, COO, Managing Director, Vice President, General Manager, Project Directors etc. We also identify candidates in key technology and niche areas, people who are specialists in their chosen field of work.',
      // tslint:disable-next-line: max-line-length
      desc2: 'Based on the requirement of the client; we map the industry for the companies and the people who would be best suitable for the job. We, then discuss with the client to chart out a list of candidates who would suit their requirements. After which, we hold discussions with the candidates before the company contacts them. Thus, we act like a catalyst throughout, facilitating the recruitment process while also maintaining strict confidentiality.'
    }
  ];

  industriesSolution = [
    { list: 'IT, telecom and software' },
    { list: 'Telecom' },
    { list: 'ITES - BPO & KPO' },
    { list: 'Engineering & Manufacturing' },
    { list: 'Consumer goods and retail' },
    { list: 'Banking Financial services and insurance' },
    { list: 'Health care & Pharmaceuticals' }
  ];

  // courses = [
  //   {coursetype: 'PDPC', courseDescription: 'Post Degree Programming Course with ONE Live Project', courseDuration: '6 Months'},
  //   {coursetype: 'CC01', courseDescription: '	Object Oriented Principles and Database Fundamentals', courseDuration: '2 Days'},
  //   {coursetype: 'SC01', courseDescription: 'Getting started with.Net, C# and ASP.NET', courseDuration: '1 Day'},
  //   {coursetype: 'SC01', courseDescription: 'Getting started with.Net, C# and ASP.NET', courseDuration: '1 Day'},
  // ];


  courses = [
    {
      coursetype: 'Project Management Professional (PMP)',
      infoCommTech: 'Microsoft Certification Programs',
      mgdev: 'Effective Decision-Making Skills'
    },
    {
      coursetype: 'IT Infrastructure Library (ITIL V3)',
      infoCommTech: 'Java Certification Programs',
      mgdev: 'Presentation Skills'
    },
    {
      coursetype: '',
      infoCommTech: 'Database Trainings',
      mgdev: 'Negotiation Skills'
    },
    {
      coursetype: '',
      infoCommTech: 'Scripting Language',
      mgdev: 'Emotional Intelligence'
    },
    {
      coursetype: '',
      infoCommTech: 'Operating System & Server (Linux/Unix)',
      mgdev: 'Effective Marketing Skills'
    },
    {
      coursetype: '',
      infoCommTech: 'Windows Operating System & Server',
      mgdev: 'Time Management Skills'
    },
    {
      coursetype: '',
      infoCommTech: 'Data warehousing and Business Intelligence',
      mgdev: 'Professional & Business Etiquette'
    },
    {
      coursetype: '',
      infoCommTech: 'Project Management Tools',
      mgdev: 'Email Etiquette'
    },
    {
      coursetype: '',
      infoCommTech: '',
      mgdev: 'Leadership Skills'
    }
  ];

  programCalendar = [
    { courseTitle: 'Post Degree Programming Course with ONE Live Project', location: 'Sr. Business Analyst', targetDate: '04-Aug-23' },
    { courseTitle: 'Getting started with.Net, C# and ASP.NET', location: 'Mumbai, India', targetDate: '04-Jul-23' },
    { courseTitle: 'Architecture (Design Patterns and UML)', location: 'Mumbai, India', targetDate: '28-Jun-23' },
    { courseTitle: 'Load and Performance Testing (by using Load runner)	', location: 'Mumbai, India', targetDate: '	28-Jul-23' },
    { courseTitle: 'MS Excel 2007 for Beginners', location: 'Mumbai, India', targetDate: '20-Jul-23' },
    { courseTitle: 'Ms Excel 2007 for Experienced', location: 'Mumbai, India', targetDate: '15-Aug-23' }
  ];


  tabIndex;
  tabName;
  constructor(private sharedservice: SharedService, config: NgbModalConfig, private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, { windowClass : 'staffing-popup'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id);
    this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
  }

  title(i) {
    if (i === 1) {
      this.tabName = 'Staffing Services';
    } else if (i === 2) {
      this.tabName = 'Staffing Industries';
    } else if (i === 3) {
      this.tabName = 'IT Training';
    } else if (i === 4) {
      this.tabName = 'Program Schedule';
    }
  }

}
