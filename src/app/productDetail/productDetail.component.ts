import { Component, OnInit, NgModule } from '@angular/core';
import { SharedService } from '../shared.service';
import { CreateSpace } from '../space.pipe';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.scss']
})

@NgModule({
  declarations: [
    CreateSpace
  ]
})

export class ProductDetailComponent implements OnInit {

  closeResult = '';

  tabIndex;
  tabName;
  constructor(private sharedservice: SharedService, config: NgbModalConfig, private modalService: NgbModal,private router: Router,) { }

  revenueMaximizer = [
    {
      title: 'Flexible subscription offering to bundle just the right plan for your organization budget ',
    },
    {
      title: 'Responsive web application platform with rich feature modules to efficiently work on missing predictions',
    },
    {
      title: 'Powerful recommendation engine built on top of AI models assisted with rule engine to accurately identify anomalies',
    },
    {
      title: 'Inbuilt knowledge repository for data exploration and view lineages of past accounts and take quick decisions',
    },
    {
      title: 'Configurable modules to manage features efficiently by the administrator through web interface',
    },
    {
      title: 'Rich set of reports and dashboard for admin and supervisors to have holistic view of system performance',
    },
    {
      title: 'A flexible notification module to setup and manage business communication in the system',
    }
  ];

  studioedge = [
    {
      title: 'Highly scalable set of product modules to design, deploy and extract business insights in single integrated ecosystem',
    },
    {
      title: 'Rich set of data enrichment modules to identify data pattern, design parallel workflows for various use cases and develop end to end solution',
    },
    {
      title: 'Flexibility to build custom solutions from scratch or leverage existing AI enabled models to expedite development cycle',
    },
    {
      title: 'Version supported rich module repository to create a curated solution bundle aligned with your organizational needs',
    },
    {
      title: 'Rich dashboard to monitor solution insights in real-time and notify stakeholders for any alert when system identifies a threshold breach',
    },
    {
      title: 'Fully scaled integration capability with downstream systems to cater for business reporting consumptions or prepare further analytical models',
    }
  ];

  dataflow = [
    {
      title: 'Configurable feature options to build custom data pipeline relevant for business needs',
    },
    {
      title: 'A rich set of connectors integrating with various system to ingest and work on data',
    },
    {
      title: 'Provides elastic AI capability to toggle ML models as per need of your data pipeline',
    },
    {
      title: 'Powerful monitoring tool to view, analyse and act on data in real time',
    },
    {
      title: 'A rich dashboard to view data flow performance and recommendation for the optimization',
    }
  ];

  inquery = function() {
    this.router.navigateByUrl('/Contactus', {skipLocationChange: true});
  };
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
      this.tabName = 'Revenue Maximizer';
    } else if (i === 2) {
      this.tabName = 'Studio Edge';
    } else if (i === 3) {
      this.tabName = 'Data Flow';
    }
  }

  slideConfig = {
    slidesToShow: 3,
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
  revenuemaximizerProd = [
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
  ];
  studioedgeProd = [
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
  ];
  dataflowProd = [
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
  ];
}
