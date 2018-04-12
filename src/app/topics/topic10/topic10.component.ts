import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-topic10',
    templateUrl: 'topic10.component.html',
    styleUrls: ['topic10.component.scss', '../../app.component.css']
})
export class Topic10Component {

    /*modalRef: BsModalRef;

    showNative: boolean;*/

    constructor() {
    }

    /*openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }*/
}
