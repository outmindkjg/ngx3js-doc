import { Component, EventEmitter, Input, OnInit, Output, ElementRef, HostListener, ViewChild, OnChanges, SimpleChanges, Renderer2, OnDestroy } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { AbstractBaseComponent } from "../../abstract.base";

/**
 * 모달 스킨 컨포넌트
 *
 * @export
 * @class ModalSkinComponent
 * @implements {OnInit}
 */
@Component({
  selector: "app-modal-skin",
  templateUrl: "./modal-skin.component.html",
  styleUrls: ["./modal-skin.component.scss"]
})
export class ModalSkinComponent extends AbstractBaseComponent implements OnInit, OnChanges, OnDestroy {
	/**
	 * 제목
	 *
	 * @type {string}
	 */
  @Input() public headerTitle: string = "TITLE";

	/**
	 * 서브 타이틀
	 *
	 * @type {string}
	 */
  @Input() public subTitle: string = "";

	/**
	 * 완료 버튼 코드
	 *
	 * @type {string}
	 */
  @Input() public doneTxt: string = "BTN_DONE";

	/**
	 * 완료 숫자 표시
	 *
	 * @type {number}
	 */
  @Input() public doneNum: number = 0;

	/**
	 * 완료 사용여부
	 *
	 * @type {boolean}
	 */
  @Input() public useDone: boolean = false;

	/**
	 * 드래그 사용여부
	 *
	 * @type {boolean}
	 */
  @Input() public useDrag: boolean = true;

	/**
	 * 바디 스크롤 사용여부
	 *
	 * @type {boolean}
	 */
  @Input() public useBodyScroll: boolean = false;

  /**
	 * 로딩 중 여부
	 *
	 * @type {boolean}
	 */
  @Input() public isUnderloading: boolean = false;

	/**
	 * 완료 사용여부
	 *
	 * @type {boolean}
	 */
  @Input() public useDoneDisable: boolean = false;

	/**
	 * 취소 버튼 라벨 코드
	 *
	 * @type {string}
	 */
  @Input() public cancelTxt: string = "BTN_CANCEL";

	/**
	 * 취소 사용여부
	 *
	 * @type {boolean}
	 */
  @Input() public useCancel: boolean = false;

	/**
	 * 취소 선택시 발생 이벤트
	 *
	 * @type {EventEmitter<any>}
	 */
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

	/**
	 * 완료시 발생 이벤트
	 *
	 * @type {EventEmitter<any>}
	 */
  @Output() onDone: EventEmitter<any> = new EventEmitter();

	/**
	 * 부트스트랩 REF
	 *
	 * @type {BsModalRef}
	 */
  @Input() public modalRef?: BsModalRef;

	/**
	 * Creates an instance of BoardQnaComponent.
	 *
	 * @constructor
	 */
  constructor(public element: ElementRef, protected renderer: Renderer2) { 
    super();
  }

	/**
	 * Initialize the directive/component
	 */
  ngOnInit() { }

  private modalElement?: HTMLElement;
  private topStart?: number;
  private leftStart?: number;
  private md?: boolean;
  @ViewChild("handler") handleElement?: ElementRef;
  private rootLevel: number = 2;

  ngAfterViewInit() {
    let element = this.element.nativeElement;
    for (let level = this.rootLevel; level > 0; level--) {
      element = element.parentNode;
    }
    this.modalElement = element;
    this.modalElement!.style.position = 'relative';
    this.modalElement!.className += ' cursor-draggable';
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (this.useDrag) {
      if (event.button === 2 || (this.handleElement && event.target !== this.handleElement.nativeElement))
        return;
      this.md = true;
      this.topStart = event.clientY - Number(this.modalElement!.style.top.replace('px', ''));
      this.leftStart = event.clientX - Number(this.modalElement!.style.left.replace('px', ''));
      event.preventDefault();
    } else {
      return;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (this.useDrag) {
      this.md = false;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.useDrag && this.md) {
      this.modalElement!.style.top = (event.clientY - this.topStart!) + 'px';
      this.modalElement!.style.left = (event.clientX - this.leftStart!) + 'px';
    }
  }

  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    if (this.useDrag) {
      this.md = false;
    }
  }

	/**
	 * 모달창 닫기
	 */
  public closeModal(): void {
    this.modalRef!.hide();
  }

	/**
	 * 모달창 닫기
	 */
  public dismissModal(): void {
    this.modalRef!.hide();
  }

	/**
	 * 완료하기
	 */
  public doDone(): void {
    this.onDone.emit();
  }

	/**
	 * 최소하기
	 */
  public doCancel(): void {
    this.onCancel.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.useBodyScroll) {
      if (this.useBodyScroll) {
        this.renderer.addClass(document.body, "modal-open-scrollable");
      } else {
        this.renderer.removeClass(document.body, "modal-open-scrollable");
      }
    }
  }

  ngOnDestroy(): void {
    if (this.useBodyScroll) {
      this.renderer.removeClass(document.body, "modal-open-scrollable");
    }
  }

}
