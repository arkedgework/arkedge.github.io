import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ClientComponent implements OnInit {

  clientInfo = [
    {title: 'B2B Purchase', desc: `B2BPurchase.com — the voice of project procurement community – gives project procurement professionals worldwide profound insight into the construction and infrastructure market. It is a platform presenting the thoughts of key industry leaders and executives on the industry’s latest initiatives, innovations, technologies and trends.`, url:'https://b2bpurchase.com/'},
    {title: 'The Royal College of Arts, Science & Commerce', desc: `The Royal College of Arts, Science & Commerce  – a dream project  of the Founder, Asgar  E. Lakdawala, was established in June 1989 and governed by Royal Higher Education Society.`, url:'https://royalcollegemiraroad.edu.in/#'},
    {title: 'I- Tech Media Pvt Ltd', desc: `I-Tech Media is a publishing group in India engaged in the publication of magazines catering to different industry verticals. The magazines published by I-Tech Media are market leaders in India with excellent reach in their respective industry segments.`, url:'https://itmgroupmedia.com/'},
    {title: 'InfoSys', desc: `Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation.`, url:'https://www.infosys.com/'},
    {title: 'Mint International', desc: `Mint International is a global HR outsourcing & consulting firm delivering a comprehensive assortment of Human Resource Management services to companies across the globe.`, url:'http://www.mintinternational.com/'},
    {title: 'DreamingCode', desc: `DreamingCode implements commerce across mobile, web & retail in the cloud. We enable companies to gain marketshare and mindshare through powerful eCommerce technology and creative solutions that deliver bankable results backed by Radical Support from our Boston, MA headquarters!`, url:'https://www.dreamingcode.com/'},
    {title: 'Canon India', desc: `Canon India Pvt. Ltd. is the sales and marketing subsidiary of Canon Inc., a world leader in imaging technologies. Having started its operations in 1997, Canon India markets a comprehensive range of sophisticated contemporary digital imaging products and solutions in India. `, url:'https://in.canon/'},
    {title: 'Cisco Systems Inc.', desc: `Cisco helps seize the opportunities of tomorrow by proving that amazing things can happen when you connect the unconnected.`, url:'https://www.cisco.com/'},
    {title: 'Hurix Digital', desc: `At Hurix, we help organizations from across industries to achieve their business goals with our future-ready e-learning content solutions, cloud platforms, content transformation and technology services.`, url:'https://www.hurix.com/'},
    {title: 'Electronic Arts', desc: `Headquartered in Redwood City in Northern California, we develop and deliver games, content, and online services for Internet-connected consoles, mobile devices, and personal computers.`, url:'https://www.ea.com/'},
    {title: ' Tata Consultancy Services Limited', desc: `Helping Clients Create the Future,TCS combines tech expertise and business intelligence to catalyze change and deliver results.`, url:'https://www.tcs.com'},
    {title: 'Edelweiss Asset Management Ltd.', desc: `Investing is about finding someone you trust to solve your problems. We exist to find solutions for you.`, url:'https://www.edelweissmf.com/'},
    {title: 'Wipro Limited', desc: `Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services.`, url:'https://www.wipro.com'},
    {title: 'Indicsoft Technologies Private Limited', desc: `A global provider of full-spectrum software services, Indicsoft is known the world over for delivering forward-looking, scalable, robust and cost-efficient solutions to its clients.`, url:'http://www.indicsoft.com/'},
    {title: 'https://www.indoqubix.com/#/', desc: `Indoqubix was started in 2022 with a vision of being a Digital First company that specializes in providing cost-effective innovative technological solutions`, url:'https://www.indoqubix.com'},
    {title: 'Intertek India Pvt. Ltd.', desc: `We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.`, url:'https://www.intertek.com/'},
    {title: 'Fugro', desc: `Fugro is the world’s leading Geo-data specialist. We unlock insights from Geo-data. Through integrated data acquisition, analysis and advice, Fugro supports clients in mitigating risks during design, construction and operation of their assets, both on land and at sea.`, url:'https://www.fugro.com/'},
    {title: 'Lionbridge', desc: `We’re bridge-builders. Barrier-breakers. Linguistic experts and cultural translators. We build deep relationships with the biggest brands in the world, so they can build deeper relationships with their customers.`, url:'https://www.lionbridge.com/'},
    {title: ' Pentaknot Solutions Pvt. Ltd ', desc: `We make softwares, that enrich Human Experience.`, url: 'https://pentaknot.com/'},
    {title: 'Praxis Technologies', desc: `We, at Praxis, provide a range of solutions in the areas of software application development and maintenance, e-learning content development and analytics`, url:'https://www.praxistechnologies.net'},
    {title: 'https://www.adobe.com/', desc: `Creativity is in our DNA. Our game-changing innovations are redefining the possibilities of digital experiences. We connect content and data and introduce new technologies that democratize creativity, shape the next generation of storytelling, and inspire entirely new categories of business.`, url:'https://www.adobe.com/'},
    {title: 'Muzna Group', desc: `We are a privately owned multi-discipline organization comprised of a group of departments since its inspection in 2018. The Group is growing from strength to strength to achieve excellence across many industries and sectors that we operate in.`, url:'https://muznagroup.com/'},
    {title: 'Team Liquid', desc: `Team Liquid is a world renowned professional gaming organization established in 2000. Since our grassroots beginnings as a Battle.`, url:'https://www.teamliquid.com/'},
    {title: 'Web All Solution', desc: `We are specialized in designing and creating elegant, clean and beautiful websites more than 11+ year of experience`, url:'https://weballsolution.com'},
    {title: 'Best Containers Corporation', desc: `Best containers corporation (BCC) is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs.`, url:'https://www.bcc-india.com/'},
    {title: 'Spryance India Pvt. Ltd.', desc: `Spryance India PVT LTD Andheri E in Nanganallur, Mumbai, Chennai is known to satisfactorily cater to the demands of its customer base.`, url:'http://www.spryance.com/'},
    ];
  closeResult = '';
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
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
