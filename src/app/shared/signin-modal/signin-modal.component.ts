import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.scss']
})
export class SigninModalComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('staticTabs', { static: true }) staticTabs: TabsetComponent;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

 
  selectTab(tabId: number) {
    console.log(tabId);
    console.dir(this.staticTabs);
    this.staticTabs.tabs[tabId].active = true;
  }

}
