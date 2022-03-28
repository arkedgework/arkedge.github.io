import { Component, OnInit, NgModule } from '@angular/core';
import { SharedService } from '../shared.service';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datamgmt',
  templateUrl: './datamgmt.component.html',
  styleUrls: ['./datamgmt.component.scss']
})

export class DatamgmtComponent implements OnInit {

closeResult = '';

sevicesInfo = [
  {icon: '#icon_datastrategy',color: 'yellow',},
  {icon: '#icon_dataEng',color: 'limegreen',},
  {icon: '#data_science', color: 'skyblue',},
  {icon: '#data_cons',color: 'pink',}
]

businessIntel =[
  {icon: '#icon_dataCol',title: `DATA
Collection`,},
  {icon: '#icon_dataModel',title: `Predictive
Modeling`,},
  {icon: '#icon_outCome',title: `Outcome
Analysis`,},
  {icon: '#icon_budgetAll',title: `Budget
Allocation`,},
]

 sevices = [
    {
      title: 'Consulting',
      description: `Scope identification, feasibility assessment, 
      choice of tools and algorithms`,
      icon: '#icon_consulting'
    },
    {
      title: 'Data Preparation',
      description: `Enriching the data set by missing value replacement,
      outlier analysis, categorical variable
      definition`,
      icon: '#icon_dataprep'
    },
    {
      title: 'Model generation',
      color: 'orange',
      description: `Generating the model, testing and refining
      on basis of validity of output`,
      icon: '#icon_Modelgen'
    },
    {
      title: 'Performance Tuning',
      description: `Enhancing model and scripts on ongoing basis,
      over and above model self-learning`,
      icon: '#icon_PerformanceTuning'
    },
    {
      title: 'Migration',
      description: `Migration of algorithms, models from one
      platform to the other, e.g., SAS to R`,
      icon: '#icon_migration'
    },
    {
      title: 'Training',
      description: `Training of business users as well as technical
      teams on SAS, Python and R`,
      icon: '#icon_training2'
    },
  ];

  sevicesArtf = [
  {
      title: 'Data Science & Analytics',
      description: 'Use state-of-the-art machine learning techniques to cut through the noise in the rapidly changing information landscape and find patterns in the data to monitor trends, predict, and gain insights.',
      icon: '#icon_dsa', 
    },
    {
      title: 'Data Strategy',
      description: 'From data ingestion, processing, and the architecture & data engineering requirements to enable big data solutions. SFL Scientific can evaluate and provide the technology roadmap to achieve business goals.',
      icon: '#icon_ds',
      heading:"dataStrategy"
    },
    {
      title: 'Business Intelligence',
      description: 'Ingest, extract, and create powerful predictive visualizations for end users. Transform complex and unstructured data to derive pertinent insights required for growth from text, time-series, customer',
      icon: '#icon_bi',
      heading:"business"
    },
  ];

  dataMigration = [
    {list: 'DBMS / RDBMS'},
    {list: 'ERP'},
    {list: 'File System (TXT, XLS, CSV etc)'},
    {list: 'XML'},
    {list: 'SAP'},
    {list: 'CRM'}
  ];

  espendRequirement  = [
    {list: 'Review / Understand the Client Business and Project Scope.'},
    {list: 'Identification of spends data sources & attributes (Internal & External Sources).'},
    {list: 'Assessment for completeness of data from multiple Sources.'},
    {list: 'Review of additional Information - Frequency, Exchange rates, languages, Profit Centers / Business units Information etc.'},
    {list: 'Finalize data file templates, taxonomy / schema for classification.'},
    {list: 'Review any client / industry specific classification needs / guidelines.'},
    {list: 'Setup of the client domain in the tool with client specific information'}
  ];

  dataCollection  = [
    {list: 'Collect spend data (raw data) from various systems & sources. Coordinate discussions (if necessary) across time zones and languages'},
    {list: 'Review the completeness of data in terms of required fields, formats etc.'},
    {list: 'Work with client to setup semi-automated/automated data collection process'},
    {list: 'Create file based information summary for client review (spend numbers, records, currencies etc.)'},
    {list: 'File acceptance / rejection based on client feedback'},
    {list: 'Consolidate the data files from various templates to standard accepted template.'},
    {list: 'File upload into the tool for further data processing.'}
  ];


  dataCleansing = [
    {list: 'Review raw data files and transform data at attribute level if required.'},
    {list: 'Extract data from files and reconcile based on various data formats.'},
    {list: 'Normalize data for various attributes such as PC/BU, Company, date formats, etc.'},
    {list: 'Normalize currencies and perform currency conversion to normalize spend.'},
    {list: 'Cleanse the records from any noise (junk) characters for further processing.'},
    {list: 'Perform data validation for specific set of business rules.'},
    {list: 'Perform data clustering based on certain data attributes such as supplier name, GL description, material description, material / item group etc.'}
  ];


  classification = [
    {list: 'Memory Lookup for classification of clusters on historic intelligence.'},
    {list: 'AI based engine for supplier / item normalization, classification, and establishing corporate linkage.'},
    {list: 'Generate classification result summary based on regions, business unit, top categories, suppliers and spend amounts for sourcing expert verification.'},
    {list: 'Conduct feedback sessions with sourcing experts to finalize the spend classification.'},
    {list: 'Classifying the data into sourceable categories using the UNSPSC'},
  ];


  advancedData = [
    {list: 'Review the standard analytics report formats (measures and dimensions) and identify need for additional cubes or dimensions.'},
    {list: 'Define the format of additional analytics reports and create the analytics reports based on the OLAP data cubes.'},
    {list: 'Review the analytics reports and provide access to reports for client feedback.'},
    {list: 'Based on client feedback, incorporate any changes so as to enrich the spend data with business specific rules / information.'},
    {list: 'Reporting the analysis and findings to the decision makers within your organization.'},
    {list: 'Finalize the spend analysis reports and publish the "Spend Book"'},
  ];

  spendAnalytics = [
    {list: 'Provides insights on direct and indirect spending and business strategies'},
    {list: 'Data quality improvement & Operational efficiency'},
    {list: 'Converts raw data into knowledge capital'},
    {list: 'Rationalize and standardize products and services'},
    {list: 'Shows company spend across categories, supplier etc'},
    {list: 'Identifies savings opportunities for procurement'},
    {list: 'Consolidate spend across various business units to increase leverage in supplier negotiation'},
    {list: 'Enables strategic sourcing that helps reduce cost and maximize profits'},
    {list: 'Provides actionable insights and recommendations, which impacts the bottom line'},
    {list: 'Obtain visibility into how much money is spent with whom, on what and how'},
  ];

  obtainvisibility = [
    {list: 'Provides insights on direct and indirect spending and business strategies'},
    {list: 'Data quality improvement & Operational efficiency'},
    {list: 'Converts raw data into knowledge capital'},
    {list: 'Rationalize and standardize products and services'},
    {list: 'Shows company spend across categories, supplier etc'},
    {list: 'Identifies savings opportunities for procurement'},
    {list: 'Consolidate spend across various business units to increase leverage in supplier negotiation'},
    {list: 'Enables strategic sourcing that helps reduce cost and maximize profits'},
    {list: 'Provides actionable insights and recommendations, which impacts the bottom line'},
    {list: 'Obtain visibility into how much money is spent with whom, on what and how'}
  ];

  tabIndex;
  tabName;
  constructor(private sharedservice: SharedService, config: NgbModalConfig, private modalService: NgbModal) {
  }
  ngOnInit() {
    this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id);
    this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
  }

  title(i) {
    if (i === 1) {
      this.tabName = 'Data Science';
    } else if (i === 2) {
      this.tabName = 'Information Security';
    } else if (i === 3) {
      this.tabName = 'Performance Optimization';
    } else if (i === 4) {
      this.tabName = 'Cloud Computing';
    } else if (i === 5) {
      this.tabName = 'Data Management';
    }
  }

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };
  solutions = [
    {title: `AntiVirus &
Patch Management`,
    description:'We secure all ‘end points’ and network ‘entry’ points to provide protection.'},
    {title: `Anti-Spam
Policies`,
    description:'Set out in clear terms the policies to combat unsolicited email, also known as spam.'},
    {title: `End Point
Security`,
    description:'Address your critical needs in one integrated package with endpoint protection.'},
    {title: `Firewall Setup,
Monitor and Manage`,
    description:'We help you setup, analyze the usage and effectiveness of the Firewall, and manage for optimal performance.'},
    {title: `Application
Vulnerability Testing`,
    description:'Vulnerability assessments help you find potential weaknesses in your service.'},
    {title: `Security Audit &
Compliance`,
    description:'Our consultants are qualified ISO 27001 Lead Auditors in delivering information security services.'}
  ];

  isOpen = true;
  drowDownToggle() {
    this.isOpen = !this.isOpen;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title_1', size: 'lg', windowClass: 'datamgt-popup'}).result.then((result) => {
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

}
