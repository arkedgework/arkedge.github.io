import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  solution;
  leaders;
  keydiff = [
    { list: 'We provide custom application programming services to end customers.' },
    { list: 'Our competence and experience ensure that we provide excellent services and products to our customers.' },
    { list: 'At every stage of the development process, from conceptual design to product release, the highest quality standards are maintained.' },
    { list: 'Our extensive communication facilities allow us to keep in touch with our customers 24X7.' }
  ];

  bulletPoint = [
    {list: 'Extensive experience and expertise in application development and product engineering for various clients.'},
    {list: 'Expertise in Agile, RUP and Iterative methodologies across Microsoft technologies.'},
    {list: 'Extensive experience in implementation of end to end projects in various business domains and technical platforms.'},
    {list: 'Mature software development quality processes and methodologies. Experience and expertise of consulting in technology and operations.'},
    {list: 'ARKEDGE has a special focus on software test automation using market standard tools'}
  ];
  bulletPoint_2 = [
    {list: 'The Application Development CoE is engaged in designing, developing, maintaining, and testing enterprise scale applications using the lat est Microsoft® technologies and standards.'},
    {list: 'The DLM CoE is the combination of processes, strategies and applied technologies to manage and improve the lifecycle of data / information across an enterprise.'},
    {list: 'The Product Engineering CoE is involved in architecting and building .Net driven business solutions right from inception (by using agile development methodology only).'},
    {list: 'The Software testing CoE independent testing services for each practice area along with third party testing services spanning the entire product development life-cycle.'},
    {list: 'The Resourcing (Recruitment) CoE is engaged to provide wide range of Recruitment Services as well as background screening solutions.'},
    {list: 'The Training CoE further extends our services spectrums with highest quality training in all major areas of information technology and management.'}
  ];


  tabs = [
    {
      title: 'About Us', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.',
      decs_2: 'from different backgrounds and enlarge the creative potential of ARKEDGE. The competence that they offer contains a wide range of custom programming skills including the latest and most effective development in Microsoft technologies.'
    },
    {
      title: 'Why ARKEDGE', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
      decs_2: 'from different backgrounds'
    },
    {
      title: 'Centers of Excellence', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
      decs_2: 'from different backgrounds'
    },
    {
      title: 'Vision & Mission', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
      decs_2: 'from different backgrounds'
    },
    {
      title: 'Values', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
      decs_2: 'from different backgrounds'
    },
    {
      title: 'Leadership', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
      decs_2: 'from different backgrounds'
    },
    {
      title: 'News', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
      decs_2: 'from different backgrounds'
    },
  ];

  news = [
    {img : 'assets/images/news', desc_1: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018.', desc_2: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018... Please click on news and read the details of news section. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {img : 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...'},
    {img : 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...'},
    {img : 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...'},
    {img : 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...'},
  ];

  partnerInfo = [
    {title: 'Mint International', desc: 'HR and Recruitment cell.', url: 'http://www.mintinternational.com/'},
    {title: 'Best Containers', desc: 'One of the biggest manufacturers in bunk and porta cabins, houses etc.', url: 'http://bcc-india.com'},
    {title: 'Dreaming Code', desc: 'The biggest custom application development group in USA.', url: 'http://dreamingcode.com'},
    {title: 'Royal College', desc: 'One of the leading college in Mira Road, Thane.', url: 'http://royalcollegemiraroad.edu.in/'},
    {title: 'Alshariah', desc: 'Arab Institute for Studies and Development Programs', url: 'http://alshariah.com/'},
    {title: 'Miracle Foods', desc: 'The biggest dealer in agro products, rice, basmati rice, spices', url: 'http://miraclefoods.in/'}
  ];
  closeResult = '';

  constructor(config: NgbModalConfig, private modalService: NgbModal, private router: Router, private sharedservice: SharedService) {

    this.solution = [
      {
         title: 'Software Engineering',
         titlelink: 'ProductEngineering',
         color: 'blue',
         list : [
           {name: 'Product Engineering'},
           {name: 'Application Development'},
           {name: 'UX/UI Development'},
           {name: 'Software Testing & QA'}
         ],
         description: 'Software engineering is a concept in and of itself, but to better understand it, you need to know what each part of the term means before you can fully understand how they operate together. It can be difficult to understand, even though it does seem straightforward.',
         icon: '#icon_softEngg'
       },
       {
         title: 'Data Services',
         titlelink: 'DataEngineering',
         color: 'red',
         list : [
           {name: 'Data Engineering'},
           {name: 'Data Management'},
           {name: 'Data Science'},
           {name: 'Cloud Computing'}
         ],
         description: 'Data Services is the practice of collecting, keeping, and using data securely, efficiently, and cost-effectively. The goal of data management is to help people, organizations, and connected things optimize the use of data within the bounds of policy and regulation.',
         icon: '#icon_mgmt'
       },
       {
         title: 'IT Staffing & Training',
         titlelink: 'StaffingServices',
         color: 'green',
         list : [
           {name: 'Staffing Services'},
           {name: 'Industries'},
           {name: 'Courses'},
           {name: 'Program Calendar'}
         ],
         description: `Develop the skills your workforce needs to compete and win. Our curated learning pathways help close knowledge gaps and drive measurable outcomes. Whether you're a team of 5 or 50,000, We offers flexible options to work with your eLearning goals and budgets.`,
         icon: '#icon_training'
       },
     ];

    this.leaders = [
      {name : 'Same Martinez',
      info : 'Chief Executive Officer & Co-Founder',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
     },
     {name : 'Same Martinez',
      info : 'Chief Executive Officer & Co-Founder',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
     },
     {name : 'Same Martinez',
      info : 'Chief Executive Officer & Co-Founder',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
     },
     {name : 'Same Martinez',
      info : 'Chief Executive Officer & Co-Founder',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
     },
     {name : 'Same Martinez',
      info : 'Chief Executive Officer & Co-Founder',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
     },
     {name : 'Same Martinez',
      info : 'Chief Executive Officer & Co-Founder',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
     }
   ];
  }

  getUrl(i, title){
    if(title == 'ProductEngineering'){
      this.router.navigateByUrl('/SoftwareEngineering' , {skipLocationChange: true}); 
      this.sharedservice.nextMessage(i, 'ProductEngineering')
    }
    else if(title == 'DataEngineering'){
      this.router.navigateByUrl('/DataServices' , {skipLocationChange: true}); 
      this.sharedservice.nextMessage(i, 'DataEngineering')
    }
    else if(title == 'StaffingServices'){
      this.router.navigateByUrl('/ItStafingAndServices' , {skipLocationChange: true}); 
      this.sharedservice.nextMessage(i, 'StaffingServices')
    } 
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title_1'}).result.then((result) => {
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
  }

}
