import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractBaseComponent } from '../../abstract.base';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent extends AbstractBaseComponent implements OnInit, AfterViewInit {

  /**
   * 제목
   */
  @Input() title : string = "";

  /**
   * 보기폼 여부 
   */
  @Input() isView : boolean = false;

  /**
   * 수정폼 여부
   */
  @Input() isModify : boolean = false;
  
  /**
	 * View child of Layout component
	 */
   @ViewChild('top') private top: ElementRef = null;

	/**
	 * View child of Layout component
	 */
   @ViewChild('bottom') private bottom: ElementRef = null;

  /**
   * Creates an instance of card view component.
   * 
   * @param ele 
   */
  constructor(private ele : ElementRef) { 
    super();
  }
  
  /**
   * on init
   */
  ngOnInit() {
  }

  /**
   * after view init
   * 
   */
  ngAfterViewInit() {
    this.resizeContents();  
  }

  /**
   * Determines whether open is
   */
  isOpen : boolean = true;

  /**
   * Toggles open
   * 
   * @returns  
   */
  toggleOpen() {
    this.isOpen = !this.isOpen;
    return false;
  }

  dataGridHeight : number = 500;

  resizeContents() {
    let marginHeight = 0;
    let bottom = 0;
    let top = 0;
    if (this.top.nativeElement.children.length > 0) {
      this.top.nativeElement.classList.remove('d-none');
      top = this.top.nativeElement.offsetHeight;      
    } else {
      this.top.nativeElement.classList.add('d-none');
    }
    if (this.bottom.nativeElement.children.length > 0) {
      this.bottom.nativeElement.classList.remove('d-none');
      bottom = this.bottom.nativeElement.offsetHeight - 5;      
    } else {
      this.bottom.nativeElement.classList.add('d-none');
    }
    marginHeight = bottom + top ;
    this.dataGridHeight = Math.max(100, this.ele.nativeElement.offsetHeight - marginHeight);
    this.ele.nativeElement.style.setProperty('--margin-height',  marginHeight + 'px');
  }
}

