import { Component, EventEmitter, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { CommonService } from "../../services";
import { AbstractModal } from "./../../abstract.common";

/**
 * 모달 컨펌 컨포넌트
 *
 * @export
 * @class ModalConfirmComponent
 * @extends {AbstractModal}
 * @implements {OnInit}
 */
@Component({
	selector: "app-modal-confirm",
	templateUrl: "./modal-confirm.component.html",
	styleUrls: ["./modal-confirm.component.scss"]
})
export class ModalConfirmComponent extends AbstractModal implements OnInit {
	/**
	 * 질문 내용
	 *
	 * @type {string}
	 */
	public question: string = "question";

	/**
	 * 질문 서브 내용
	 *
	 * @type {string}
	 */
	public subQuestion: string | null = null;

	/**
	 * 답변 완료시 발생 이벤트
	 *
	 * @type {EventEmitter<boolean>}
	 */
	public onSelect: EventEmitter<boolean> = new EventEmitter();

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
	 * 답변 하기
	 *
	 * @param {boolean} ans
	 */
	setAnswer(ans: boolean) {
		this.onSelect.emit(ans);
		this.closeModal();
	}

	/**
	 * Initialize the directive/component
	 */
	ngOnInit() {}
}
