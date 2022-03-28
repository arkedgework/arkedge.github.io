import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss']
})
export class AiComponent implements OnInit {
  bizPro: any;
  finance: any;
  it:any;
  sm:any;
  operation:any;
  sc:any;
  admin:any;
  cc:any;
  cs:any;
  hr:any;
  vmcl:any;
  bfs:any;
  hp:any;
  tl:any;
  mfg:any;
  insurance:any;
  government:any;
  outsourcing:any;
  retail:any;
  eu:any;
  telecom:any;
  education:any;
  th:any;
  re:any;
  fb:any;


  tab : any = 'tab1';
  tab1 : any
  tab2 : any

  onClick(check){
    //    console.log(check);
        if(check==1){
          this.tab = 'tab1';
        }else{
          this.tab = 'tab2';
        }    
      
    }

 bizProcess = [
    {
      title: 'Repetitive Tasks',
      color: 'skyblue',
      description: `Carried out 50-60 times a day`,
      icon: '#icon_repTasks'
    },
    {
      title: 'Process List',
      color: 'yellow ',
      description: `and Store`,
      icon: '#icon_processList'
    },
    {
      title: 'Data Entry Periodic',
      color: 'orange',
      description: `reporting and data analysis`,
      icon: '#icon_dataEntry'
    },
    {
      title: 'Mass Email Generation',
      color: 'limegreen',
      description: `Archiving and extracting`,
      icon: '#icon_massEmail'
    },
    {
      title: 'Data Conversion',
      color: 'purple',
      description: `Conversion of data format and graphics`,
      icon: '#icon_dataCon'
    },
    {
      title: 'ERP Transactions',
      color: 'blue',
      description: `ERP and other back office transactions`,
      icon: '#icon_ERPtran'
    },
  ];

automationLevel = [{
    title: 'Full Attention Needed',
    despcription: `Simple tasks in existing human workflow are 
automated; human handles all exceptions`,
    infokeys: [
      { infokey: 'Automated chatbot for policy related queries' },
      { infokey: 'OCR engine for digitizing hard copy documents' }
    ]
  },
  {
    title: 'Partially Attended',
    despcription: `Simple exception handling, status 
alert, human still monitors the overall process`,
    infokeys: [
      { infokey: 'Anomaly detection and automated alerts (e.g. for Merchant contracts)' },
      { infokey: 'RPAs for data entry and aggregation across systems (e.g. POs in Ariba)' }
    ]
  },
  {
    title: 'Limited Auto Pilot',
    despcription: `System monitors overall process, 
prompts human to intervene when it can’t handle`,
    infokeys: [
      { infokey: 'Finance budget consolidation and forecasting' },
      { infokey: 'Audit process automation' }
    ]
  },
  {
    title: 'Mostly Auto Pilot',
    despcription: `System operates without human input/ 
oversight except for pre-defined areas`,
    infokeys: [
      { infokey: 'Employee engagement personalization' },
      { infokey: 'Marketing campaign design based on customer 360 information' },
      { infokey: 'Help Desk Ticket Automation' }
    ]
  },
  {
    title: 'Cognitive Automation',
    despcription: `System handles multiple fuzzy inputs, fuzzy 
objectives, adaptive optimization`,
    infokeys: [
      { infokey: 'Automating Cinema Showtime Scheduling' },
      { infokey: 'Automated Portfolio Tracking & Valuation Tool' },
      { infokey: 'Automated Data ETL for Card Issuer' }
    ]
  }
  ]

  constructor() {
    this.finance = [
      {
        title: 'Billing/ Invoicing'
      },
      {
        title: 'Statutory Reporting'
      },
      {
        title: 'Account Closing'
      },
      {
        title: 'Credit Management'
      },
      {
        title: 'Statement Distribution'
      },
      {
        title: 'Debt Recovery/ Collections'
      },
      {
        title: 'Financial Report Consolidation'
      },
      {
        title: 'Labour Reconciliation'
      },
      {
        title: 'Cost Allocation'
      },
      {
        title: 'Inventory Reconciliation'
      },
      {
        title: 'Revenue Recognition'
      },
      {
        title: 'Report Aggregation'
      },
      {
        title: 'Funds Transfer (sweep)'
      },
      {
        title: 'Limits Management'
      },
      {
        title: 'Amortisation & Depreciation'
      },
      {
        title: 'Controls Verification'
      },
      {
        title: 'Bank and Credit Card Reconciliation'
      },
      {
        title: 'Journal Entry Creation and Verification'
      },
      {
        title: 'Balance Sheet Account Reconciliation'
      },
      {
        title: 'Variance Analysis'
      }
    ]

    this.it = [
      {
        title: 'FTP and File Management'
      },
      {
        title: 'Incident Management'
      },
      {
        title: 'Communication including Notifications and Alerts'
      },
      {
        title: 'Diagnostics and System Checks'
      },
      {
        title: 'Email Processing and Distribution'
      },
      {
        title: 'Backup and Patch Management'
      },
      {
        title: 'User Experience Monitoring'
      },
      {
        title: 'Legacy Non-API Integration'
      },
      {
        title: 'User Provisioning'
      },
      {
        title: 'Log Analysis'
      },
      {
        title: 'Auto-Resolution of Tickets'
      },
      {
        title: 'Capacity Planning'
      },
      {
        title: 'Server and Application Monitoring'
      },
      {
        title: 'Security Controls'
      },
      {
        title: 'Workflow Monitoring'
      },
      {
        title: 'Single Click Software Installations'
      },
      {
        title: 'Test Case Generation'
      },
      {
        title: 'Credential Verification'
      },
      {
        title: 'Smart Batch Processing'
      },
      {
        title: 'Data and Content Aggregation, Contextualisation and Migration'
      }
    ]

    this.sm = [
      {
        title: 'Pipeline Management including Automated Dashboard'
      },
      {
        title: 'Data Cleansing'
      },
      {
        title: 'Order Management'
      },
      {
        title: 'Credit Checks'
      },
      {
        title: 'Exchange Rate Tracking'
      },
      {
        title: 'Campaign Management'
      },
      {
        title: 'CRM ERP Data Replication'
      },
      {
        title: 'Mobile Application Integration'
      },
      {
        title: 'HRIS CRM Scorecard Management'
      },
      {
        title: 'Payment Handling'
      },
      {
        title: 'Shelf Audits'
      },
      {
        title: 'Lead Management'
      },
      {
        title: 'Merchandizing Optimisation'
      },
      {
        title: 'External Portal Updates'
      },
      {
        title: ' Invoice Creation Distribution'
      },
      {
        title: 'Automate Rewards and Gifts'
      },
      {
        title: 'Social Media Monitoring and Management'
      },
      {
        title: 'Client Personalisation'
      },
      {
        title: 'Data Aggregation for Market Intelligence'
      },
      {
        title: 'Real-time Competitive Pricing, Monitoring Analytics'
      }
    ]

    this.operation = [
      {
        title: 'Budgeting and Planning'
      },
      {
        title: 'Risk Management'
      },
      {
        title: 'Data Migration and Management'
      },
      {
        title: 'Portal Interactions'
      },
      {
        title: 'Store Planning'
      },
      {
        title: 'Facilities Management'
      },
      {
        title: 'Dashboard and Analytics'
      },
      {
        title: 'Vehicle Booking and Administration'
      },
      {
        title: 'Quality Assurance Management'
      },
      {
        title: 'CRM Updates'
      },
      {
        title: 'Outside Affiliations Review'
      },
      {
        title: 'Reports Management and Distribution'
      },
      {
        title: 'Inventory Management'
      },
      {
        title: 'Policy Administration and Servicing'
      },
      {
        title: 'Refund Processing'
      },
      {
        title: 'Gifts and Entertainment Reconciliation'
      },
      {
        title: 'Customer Due Diligence'
      },
      {
        title: 'Service Level Reporting'
      },
      {
        title: 'Fraud Detection'
      },
      {
        title: 'Staff Management'
      }
    ]

    this.sc = [
      {
        title: 'Product Categorisation'
      },
      {
        title: 'Claims and Billing'
      },
      {
        title: 'Proposals, Quotes and Questions'
      },
      {
        title: 'Vendor Selection and Procurement'
      },
      {
        title: 'Shipment Status Communication'
      },
      {
        title: 'Transport Notes'
      },
      {
        title: 'Proof of Delivery'
      },
      {
        title: 'Inventory Management'
      },
      {
        title: 'Custom Declarations'
      },
      {
        title: 'Work Order Management'
      },
      {
        title: 'Monthly Distribution Process'
      },
      {
        title: 'Refunds and Returns Monitoring and Processing'
      },
      {
        title: 'Goods Receipt and Confirmation'
      },
      {
        title: 'E-Auctions'
      },
      {
        title: 'Contract Management'
      },
      {
        title: 'Demand and Supply Forecasting'
      },
      {
        title: 'Freight Management'
      },
      {
        title: 'Bill of Lading'
      },
      {
        title: 'Invoice, Quote and Contract Management'
      },
      {
        title: 'Shipment Scheduling and Tracking'
      }
    ]

    this.admin = [
      {
        title: 'Generating Mass Emails from Multiple Systems and Documents'
      },
      {
        title: 'Call Routing'
      },
      {
        title: 'Data Quality Management'
      },
      {
        title: 'Internal and External Communication'
      },
      {
        title: 'Forms Processing'
      },
      {
        title: 'Data Entry'
      },
      {
        title: 'Data Cleansing and Verification'
      },
      {
        title: 'Travel Arrangements'
      },
      {
        title: 'Report Compilation and Distribution'
      },
      {
        title: 'Data Reconciliation and Management'
      },
      {
        title: 'Internet Application Processing'
      },
      {
        title: 'Web Scraping'
      },
      {
        title: 'Data Updates'
      },
      {
        title: 'File and Records Management'
      },
      {
        title: 'Data Migration'
      },
      {
        title: 'Office Equipment and Inventory Management'
      },
      {
        title: 'Data Extraction (PDFs, scanned documents and other formats)'
      },
      {
        title: 'Meeting, Scheduling and Calendar Management'
      },
      {
        title: 'Periodic Report Preparation and Dissemination'
      },
      {
        title: 'Mail Room Management'
      }
    ]

    this.cc = [
      {
        title: 'Reset Credentials'
      },
      {
        title: 'Customer Data Management'
      },
      {
        title: 'Automated Customer Notifications/ Reminders'
      },
      {
        title: 'Customer Inquiries'
      },
      {
        title: 'Information Verification'
      },
      {
        title: 'Transaction Automation'
      },
      {
        title: 'Ticket Management'
      },
      {
        title: 'Service Requests and Scheduling'
      },
      {
        title: 'Fraud Detection'
      },
      {
        title: 'CRM Updates'
      },
      {
        title: 'Enhanced Phone Support'
      },
      {
        title: 'L1 Support'
      },
      {
        title: 'Feedback and Surveys'
      },
      {
        title: 'Escalation Management'
      },
      {
        title: 'Case Classification and Routing'
      },
      {
        title: 'Progress Chasing'
      },
      {
        title: 'Service Level Management and Reporting'
      },
      {
        title: 'Price Matching'
      },
      {
        title: 'System Synchronisation'
      },
      {
        title: 'Renewal Notices'
      }
    ]

    this.cs = [
      {
        title: 'Customer Records'
      },
      {
        title: 'Dashboard Creation'
      },
      {
        title: 'Query Management'
      },
      {
        title: 'Customer Engagement Communications'
      },
      {
        title: 'Service Level Management'
      },
      {
        title: 'New Customer Welcome Packets'
      },
      {
        title: 'User and Access Management'
      },
      {
        title: 'Online Registrations'
      },
      {
        title: 'Account Administration'
      },
      {
        title: 'Customer Due Diligence'
      },
      {
        title: 'Self-Service'
      },
      {
        title: 'Customer Risk Rating and Monitoring'
      },
      {
        title: 'Complaint Management'
      },
      {
        title: 'Upsell Opportunity Reporting'
      },
      {
        title: 'Progress Chasing'
      },
      {
        title: 'Customer Experience/ Satisfaction Monitoring'
      },
      {
        title: 'Request and Change Management'
      },
      {
        title: 'Service Activation'
      },
      {
        title: 'Customer Personalisation'
      },
      {
        title: 'Customer Onboarding and Offboarding'
      }
    ]

    this.hr = [
      {
        title: 'Open Enrollment including Life Changes'
      },
      {
        title: 'Assessment and Survey Administration'
      },
      {
        title: 'Absence Management including Return To Work'
      },
      {
        title: 'Payroll Review'
      },
      {
        title: 'Legacy Payroll Automation'
      },
      {
        title: 'Salary Administration'
      },
      {
        title: 'Expense Management'
      },
      {
        title: 'Training and Education Administration'
      },
      {
        title: 'Benefits and Stock Administration'
      },
      {
        title: 'Equipment Administration'
      },
      {
        title: 'Compliance Monitoring and Reporting'
      },
      {
        title: 'Requisition Management'
      },
      {
        title: 'Employee Onboarding'
      },
      {
        title: 'Offer Letter Administration'
      },
      {
        title: 'Aggregate Resume Sourcing and Screening'
      },
      {
        title: 'External Portal Updates'
      },
      {
        title: 'Employment History Verification'
      },
      {
        title: 'Unemployment Verification'
      },
      {
        title: `Workman's Compensation Claims Monitoring and Automated Workflow`
      },
      {
        title: 'Automated Job Posting'
      }
    ]

    this.vmcl = [
      {
        title: 'IP/ Fraud Detection'
      },
      {
        title: 'Legal Correspondences'
      },
      {
        title: 'Credential Verifications'
      },
      {
        title: 'Due Diligence'
      },
      {
        title: 'Periodic Disclosures'
      },
      {
        title: 'Legal Analytics'
      },
      {
        title: 'Vendor Master File Management'
      },
      {
        title: 'Patent, Copyright and Trademark Process'
      },
      {
        title: 'Licensing and Registration'
      },
      {
        title: 'Records Digitisation'
      },
      {
        title: 'Outside Affiliations and Private Investments'
      },
      {
        title: 'Case and Data Compilation'
      },
      {
        title: 'Contract Governance'
      },
      {
        title: 'Client Risk Assessment'
      },
      {
        title: 'Vendor Onboarding'
      },
      {
        title: 'E-Discovery'
      },
      {
        title: 'Compliance Auditing and Reporting'
      },
      {
        title: 'Fee Overruns'
      },
      {
        title: `Hours Utilisation`
      },
      {
        title: 'Conflict Checking'
      }
    ]

    this.bfs = [
      {
        title: 'Breach Notification'
      },
      {
        title: 'Account opening and closure'
      },
      {
        title: 'Fraud Prevention'
      },
      {
        title: 'Investment Management'
      },
      {
        title: 'Statement Distribution'
      },
      {
        title: 'Foreign Exchange'
      },
      {
        title: 'Treasury Risk Management'
      },
      {
        title: 'Cash Management and Forecasting'
      },
      {
        title: 'Payment Reminders Follow Up'
      },
      {
        title: 'Know Your Customer (KYC)'
      },
      {
        title: 'Audit Reports'
      },
      {
        title: 'Same Day Funds Transfer'
      },
      {
        title: 'Trade Finance Automation'
      },
      {
        title: 'Compliance Management'
      },
      {
        title: 'Accounts Payable and Receivable'
      },
      {
        title: 'Loan Applications'
      },
      {
        title: 'Vendor Onboarding'
      },
      {
        title: 'Receipt Processing'
      },
      {
        title: `Customer Onboarding`
      },
      {
        title: 'Confirmations and Pre/post Matching'
      }
    ]

    this.hp = [
      {
        title: 'Overpayment Reconciliation'
      },
      {
        title: 'Pre-Authorisation of Services'
      },
      {
        title: 'Member Management'
      },
      {
        title: 'Patient Record Storage'
      },
      {
        title: 'Drug Registration'
      },
      {
        title: 'Patient Surveys'
      },
      {
        title: 'Patient Onboarding'
      },
      {
        title: 'Physician Referral Management'
      },
      {
        title: 'Automated Diagnosis'
      },
      {
        title: 'Prescription Management'
      },
      {
        title: 'E2B Transmission'
      },
      {
        title: 'Clinical Documentation'
      },
      {
        title: 'EOB Reader'
      },
      {
        title: 'Claims Adjudication'
      },
      {
        title: 'Fraud compliance and monitoring'
      },
      {
        title: 'Appeals Processing'
      },
      {
        title: 'Provider License Verification'
      },
      {
        title: 'Revenue Cycle Management'
      },
      {
        title: `Insurance Processing`
      },
      {
        title: 'Billing and Claims Management'
      }
    ]
    
    
    this.tl = [
      {
        title: 'Demand Prediction'
      },
      {
        title: 'Maintenance Logs'
      },
      {
        title: 'Schedule Planning Optimisation'
      },
      {
        title: 'Pricing Administration'
      },
      {
        title: 'Loads Rate Look ups,  Planning, and Optimisation'
      },
      {
        title: 'System Integration with External and Legacy'
      },
      {
        title: 'Shipment Scheduling'
      },
      {
        title: 'Credit Collections'
      },
      {
        title: 'Customer Portal and ERP Integration'
      },
      {
        title: 'Purchase Orders'
      },
      {
        title: 'Order/Inventory Tracking'
      },
      {
        title: 'Forecasting and Logistics Planning'
      },
      {
        title: 'Invoice Management'
      },
      {
        title: 'Supplier Inventory Management'
      },
      {
        title: 'Fare Monitoring'
      },
      {
        title: 'Proof of Delivery'
      },
      {
        title: 'Cargo Management'
      },
      {
        title: 'Custom Declarations'
      },
      {
        title: `Price Forecasting`
      },
      {
        title: 'Driver Logs'
      }
    ]

    this.mfg = [
      {
        title: 'Automated Customer Tracking and Response'
      },
      {
        title: 'Asset Management'
      },
      {
        title: 'Data Monitoring'
      },
      {
        title: 'Inventory Management'
      },
      {
        title: 'Competitive Pricing, Monitoring and Analytics'
      },
      {
        title: 'Bill of Materials'
      },
      {
        title: 'Logistics Management'
      },
      {
        title: 'System Integration'
      },
      {
        title: 'Order Management'
      },
      {
        title: 'Proactive Maintenance'
      },
      {
        title: 'Collections'
      },
      {
        title: 'Multi-vendor Workflows'
      },
      {
        title: 'Research and Development'
      },
      {
        title: 'Proactive Sourcing'
      },
      {
        title: 'Forecasting'
      },
      {
        title: 'Materials and Resource Distributions'
      },
      {
        title: 'Testing and Quality Control'
      },
      {
        title: 'Parts Requests from Customers'
      },
      {
        title: `Production Line Optimisation`
      },
      {
        title: 'Remittance Processing'
      }
    ]

    this.insurance = [
      {
        title: 'Redemptions Processing'
      },
      {
        title: 'Bulk Payments/Bulk Recoveries'
      },
      {
        title: 'Market and Competitive Analysis'
      },
      {
        title: 'Underwriting'
      },
      {
        title: 'Payment Processing'
      },
      {
        title: 'Statement Distribution'
      },
      {
        title: 'Customer Communications including Letters, Alerts and Notifications'
      },
      {
        title: 'Data Aggregation/Migration Across Systems'
      },
      {
        title: 'Mortgage verification and processing'
      },
      {
        title: 'Fraud Detection'
      },
      {
        title: 'Policy Administration'
      },
      {
        title: 'Quotation Validation'
      },
      {
        title: 'New Account Set-up'
      },
      {
        title: 'Claims Data Extraction'
      },
      {
        title: 'Regulatory Compliance'
      },
      {
        title: 'Match to Issued Policy'
      },
      {
        title: 'Adjudication'
      },
      {
        title: 'Claims Management'
      },
      {
        title: `Risk Evaluation`
      },
      {
        title: 'Title Verification'
      }
    ]

    this.government = [
      {
        title: 'Building Inspection Verification and Management'
      },
      {
        title: 'Immigration Applications and Processing'
      },
      {
        title: 'Dynamic Reporting and Dashboards'
      },
      {
        title: 'Passport Verification and Management'
      },
      {
        title: 'Subcontractor Management'
      },
      {
        title: 'Disaster Alerts'
      },
      {
        title: 'Verification Process'
      },
      {
        title: 'Relief Management'
      },
      {
        title: 'Legacy System Enablement'
      },
      {
        title: 'Tax Compliance'
      },
      {
        title: 'Write Offs, Debt Recovery, Debt Management'
      },
      {
        title: 'Contract Governance and Regulatory Review'
      },
      {
        title: 'Application for Services'
      },
      {
        title: 'Vendor Onboarding'
      },
      {
        title: 'Online Services'
      },
      {
        title: ' Call Center Optimisation'
      },
      {
        title: 'Name and Address Changes'
      },
      {
        title: 'Records Management'
      },
      {
        title: `Fraud Protection`
      },
      {
        title: 'Traffic Ticket Management'
      }
    ]

    
    this.outsourcing = [
      {
        title: 'Email Services'
      },
      {
        title: 'Warranty Administration'
      },
      {
        title: 'Webpage and Catalogue Maintenance'
      },
      {
        title: 'Customer Database Management'
      },
      {
        title: 'Record Synchronisation'
      },
      {
        title: 'Direct and Indirect Procurement'
      },
      {
        title: 'Data Conversion and Document Digitisation'
      },
      {
        title: 'Logistics and Dispatch'
      },
      {
        title: 'Claims Processing'
      },
      {
        title: 'Voice of Customer Feedback'
      },
      {
        title: 'Transaction, Order, Invoice Processing'
      },
      {
        title: 'Incident Management'
      },
      {
        title: 'Contract Validation'
      },
      {
        title: 'Application Processing'
      },
      {
        title: 'Document Indexing and Archiving'
      },
      {
        title: 'Data Entry, Data Capture, Data Mining, Data Processing, Data Rectification'
      },
      {
        title: 'Quality Assurance'
      },
      {
        title: 'Shared Services Operations'
      },
      {
        title: `Survey Management`
      },
      {
        title: 'Customer Transition'
      }
    ]


    
    this.retail = [
      {
        title: 'Global Sourcing'
      },
      {
        title: 'Customer Communications including Alerts and Notifications'
      },
      {
        title: 'Catalogue Creation and Amendment'
      },
      {
        title: 'Production Planning'
      },
      {
        title: 'Vendor Master Data Management'
      },
      {
        title: 'Non-compliance Validation'
      },
      {
        title: 'Product/SKU Categorization'
      },
      {
        title: 'Customer dispute resolution'
      },
      {
        title: 'Distributed marketplace'
      },
      {
        title: 'Billing, Order and Invoice Processing'
      },
      {
        title: 'Inventory and Product Control'
      },
      {
        title: 'Credit Reports'
      },
      {
        title: 'Food Safety Audits'
      },
      {
        title: 'Month-End Reporting'
      },
      {
        title: 'Loyalty Programmess'
      },
      {
        title: 'Returns Authorisation'
      },
      {
        title: 'Procurement Optimisation'
      },
      {
        title: 'Customer Management'
      },
      {
        title: `Brand Monitoring and Fraud Prevention`
      },
      {
        title: 'Pricing Administration'
      }
    ]

    this.eu = [
      {
        title: 'Submitting data to regulators'
      },
      {
        title: 'Yield Optimisation'
      },
      {
        title: 'Storage Automation'
      },
      {
        title: 'Complaints Management'
      },
      {
        title: 'Energy Storage'
      },
      {
        title: 'Metering'
      },
      {
        title: 'Load Forecasting'
      },
      {
        title: 'Energy Theft Prevention'
      },
      {
        title: 'Demand Management'
      },
      {
        title: 'Optimised Energy Consumption'
      },
      {
        title: 'Predictive Maintenance'
      },
      {
        title: 'Transactive Energy Solutions'
      },
      {
        title: 'Energy Trading'
      },
      {
        title: 'Invoice Processing, Billing and Settlement'
      },
      {
        title: 'Consumption Insights and Analysis'
      },
      {
        title: 'Systems/Transport Operations'
      },
      {
        title: 'Customer Transfers'
      },
      {
        title: 'Decision Support System for Asset Maintenance'
      },
      {
        title: `Competitive Pricing, Demand Monitoring Analytics`
      },
      {
        title: 'Correcting Misreads'
      }
    ]

    this.telecom = [
      {
        title: 'Porting and verifying customer information'
      },
      {
        title: 'Competitive Pricing, Monitoring and Analytics'
      },
      {
        title: 'Customer account maintenance'
      },
      {
        title: 'Debt Collection'
      },
      {
        title: 'Fraud detection'
      },
      {
        title: 'Data Analysis'
      },
      {
        title: 'Network operations'
      },
      {
        title: 'Customer Service Support'
      },
      {
        title: 'Predictive Maintenance'
      },
      {
        title: 'Internet Application Management'
      },
      {
        title: 'Billing data management'
      },
      {
        title: 'Order configuration and processing'
      },
      {
        title: 'Service provisioning'
      },
      {
        title: 'Credit checks for post paid accounts'
      },
      {
        title: 'Send SMS'
      },
      {
        title: 'SIM Swapping'
      },
      {
        title: 'Proof of Delivery'
      },
      {
        title: 'Customer dispute resolution'
      },
      {
        title: `Backing up Customer Information`
      },
      {
        title: 'Customer Onboarding and Offboarding'
      }
    ]

    this.education = [
      {
        title: 'IT Resets and Restart Services'
      },
      {
        title: 'Engagement Communications such as Notifications and Reminders'
      },
      {
        title: 'Grants Management'
      },
      {
        title: 'Equipment Reservations'
      },
      {
        title: 'Transcript Requests'
      },
      {
        title: 'Document Workflow Optimization'
      },
      {
        title: 'Scholarship Applications'
      },
      {
        title: 'Student and Staff Onboarding and Exit'
      },
      {
        title: 'Approvals: Vendor, Budget, Invoice, Curriculum, Content'
      },
      {
        title: 'Attendance Tracking'
      },
      {
        title: 'Travel Authorisation'
      },
      {
        title: 'Automated Grading and Feedback'
      },
      {
        title: 'Compliance Audits'
      },
      {
        title: 'Inventory Management'
      },
      {
        title: 'Payment Tracking'
      },
      {
        title: 'Calendar Management'
      },
      {
        title: 'Social Media Monitoring'
      },
      {
        title: 'Enrollment, Class Scheduling and Course Registration'
      },
      {
        title: `User and Machine Provisioning`
      },
      {
        title: 'Document/Library Indexing and Processing'
      }
    ]

    this.th = [
      {
        title: 'Cancellations/ Exchanges'
      },
      {
        title: 'Order Processing and Payment Tracking'
      },
      {
        title: 'Check-in and Check Out Process'
      },
      {
        title: 'Compliance Management'
      },
      {
        title: 'Feedback Systems'
      },
      {
        title: 'Voice of Customer'
      },
      {
        title: 'Route Transportation and Confirmation'
      },
      {
        title: 'Ticketing'
      },
      {
        title: 'Rate, Inventory and Discount Monitoring and Management'
      },
      {
        title: 'Schedule Changes'
      },
      {
        title: 'Fare Filing'
      },
      {
        title: 'IROPS Management'
      },
      {
        title: 'Dynamic Resource Management'
      },
      {
        title: 'Refund Processing'
      },
      {
        title: 'Loyalty Processing'
      },
      {
        title: 'Room Reservations, Online Booking Management'
      },
      {
        title: 'Concierge Recommendations'
      },
      {
        title: 'Guest Communications including Notifications, Alerts and Warning'
      },
      {
        title: `Invoice and Payment Processing`
      },
      {
        title: 'Competitive Pricing, Monitoring and Analytics'
      }
    ]

    this.re = [
      {
        title: 'Rent and Mortgage Applications'
      },
      {
        title: 'Lease Management'
      },
      {
        title: 'Facilities Management'
      },
      {
        title: 'Utilities Management'
      },
      {
        title: 'Inventory Management'
      },
      {
        title: 'Planning Applications'
      },
      {
        title: 'Customer Feedback and Surveys'
      },
      {
        title: 'Tenant Onboarding and Offboarding'
      },
      {
        title: 'Accounts Payable and Receivable'
      },
      {
        title: 'Payment and Invoice Processing'
      },
      {
        title: 'Customer Management'
      },
      {
        title: 'Real Estate Listing Automation'
      },
      {
        title: 'Customer Communications including Letters, Alerts and Notifications'
      },
      {
        title: 'Contract Administration'
      },
      {
        title: 'Competitive Pricing, Monitoring and Analytics'
      },
      {
        title: 'Portfolio Management'
      },
      {
        title: 'Data Cleansing'
      },
      {
        title: 'Credit and Background Checks'
      },
      {
        title: `Compliance Management`
      },
      {
        title: 'Rent Accounting'
      }
    ]

    this.fb = [
      {
        title: 'Dashboard and Analytics'
      },
      {
        title: 'Procurement Transactions'
      },
      {
        title: 'Controls System'
      },
      {
        title: 'Equipment Maintenance'
      },
      {
        title: 'Real-time Competitive Pricing, Monitoring Analytics'
      },
      {
        title: 'Advanced Controls, Data Acquisition'
      },
      {
        title: 'Customer Experience/ Satisfaction Monitoring'
      },
      {
        title: 'Regulatory Compliance'
      },
      {
        title: 'Distribution'
      },
      {
        title: 'System Integration with Legacy and ERP'
      },
      {
        title: 'Invoice Management'
      },
      {
        title: 'Vendor Procurement'
      },
      {
        title: 'Shipment Tracking'
      },
      {
        title: 'Inventory and Supply'
      },
      {
        title: 'Contracts Administration'
      },
      {
        title: 'Data Validation'
      },
      {
        title: 'Bill of Materials'
      },
      {
        title: 'Order Management'
      },
      {
        title: `Safety Inspections`
      },
      {
        title: 'Standard Operating Procedures (SOP)'
      }
    ]


    this.bizPro = [
      {
        title: 'Data Management',
        color: 'red',
        list: [
          { name: 'Cleanse Dataset' },
          { name: 'Data Mapping & Conversion' },
          { name: 'Data Migration & Consolidation' },
          { name: 'Spend Analysis' }
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        icon: '#icon_mgmt'
      },
      {
        title: 'Software Engineering',
        color: 'blue',
        list: [
          { name: 'Product Engineering' },
          { name: 'Application Development' },
          { name: 'UX/UI Development' },
          { name: 'Software Testing & QA' }
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        icon: '#icon_softEngg'
      },
      {
        title: 'IT Staffing & Training',
        color: 'green',
        list: [
          { name: 'Staffing Services' },
          { name: 'Industries' },
          { name: 'Courses' },
          { name: 'Program Calendar' }
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        icon: '#icon_training'
      },
    ];

  }

  ngOnInit() {
  }

}
