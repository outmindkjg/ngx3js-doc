import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { CommonService } from "../../services";
import { AbstractModal } from "./../../abstract.common";

/**
 * 모달 얼럿 컨포넌트
 *
 * @export
 * @class ModalAlertComponent
 * @extends {AbstractModal}
 * @implements {OnInit}
 */
@Component({
	selector: "app-modal-alert",
	templateUrl: "./modal-alert.component.html",
	styleUrls: ["./modal-alert.component.scss"]
})
export class ModalAlertComponent extends AbstractModal implements OnInit {
	/**
	 * 메세지
	 *
	 * @type {string}
	 */
	public message: string = "message";

	/**
	 * 서브 메세지
	 *
	 * @type {string}
	 */
	public subMessage: string = "";

	/**
	 * Creates an instance of ModalAlertComponent.
	 *
	 * @constructor
	 * @param {BsModalRef} modalRef
	 */
	constructor(commonService : CommonService,  modalRef: BsModalRef) {
		super(commonService, modalRef);
	}

	/**
	 * Initialize the directive/component
	 */
	ngOnInit() {}
}
