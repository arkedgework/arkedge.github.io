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
    {title: 'Mint International', desc: 'HR and Recruitment cell.', url: 'http://www.mintinternational.com/'},
    {title: 'Best Containers', desc: 'One of the biggest manufacturers in bunk and porta cabins, houses etc.', url: 'http://bcc-india.com'},
    {title: 'Dreaming Code', desc: 'The biggest custom application development group in USA.', url: 'http://dreamingcode.com'},
    {title: 'Royal College', desc: 'One of the leading college in Mira Road, Thane.', url: 'http://royalcollegemiraroad.edu.in/'},
    {title: 'Alshariah', desc: 'Arab Institute for Studies and Development Programs', url: 'http://alshariah.com/'},
    {title: 'Miracle Foods', desc: 'The biggest dealer in agro products, rice, basmati rice, spices', url: 'http://miraclefoods.in/'}
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
