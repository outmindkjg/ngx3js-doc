import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AbstractBaseComponent } from '../../abstract.base';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends AbstractBaseComponent implements OnInit, AfterViewInit {

	/**
	 * View child of Layout component
	 */
   @ViewChild('search') private search: ElementRef = null;

  /**
	 * View child of Layout component
	 */
   @ViewChild('top') private top: ElementRef = null;

	/**
	 * View child of Layout component
	 */
   @ViewChild('bottom') private bottom: ElementRef = null;


  constructor(private ele : ElementRef) { 
    super();
  }

  ngOnInit() {
  }

  showSearch : boolean = true;

  toggleSearch() {
    this.showSearch = ! this.showSearch;
    setTimeout(() => {
      this.resizeContents();    
    }, 500);
  }

  ngAfterViewInit() {
    this.resizeContents();  
  }

  dataGridHeight : number = 500;

  @HostListener('window:resize')
  resizeContents() {
    let marginHeight = 0;
    let bottom = 0;
    if (this.bottom.nativeElement.children.length > 0) {
      this.bottom.nativeElement.classList.remove('d-none');
      bottom = this.bottom.nativeElement.offsetHeight;      
    } else {
      this.bottom.nativeElement.classList.add('d-none');
    }
    let top = 0;
    if (this.top.nativeElement.children.length > 0) {
      this.top.nativeElement.classList.remove('d-none');
      top = this.top.nativeElement.offsetHeight + 10;      
    } else {
      this.top.nativeElement.classList.add('d-none');
    }
    let search = 0;
    if (this.search.nativeElement.firstChild.children.length > 0) {
      this.search.nativeElement.classList.remove('d-none');
      search = this.search.nativeElement.offsetHeight + 25;
    } else {
      this.search.nativeElement.classList.add('d-none');
      search = 75;
    }
    marginHeight = bottom + search + top + 10;
    this.dataGridHeight = Math.max(300, this.ele.nativeElement.offsetHeight - marginHeight);
    this.ele.nativeElement.style.setProperty('--margin-height',  marginHeight + 'px');
    this.ele.nativeElement.style.setProperty('--main-height',  this.dataGridHeight + 'px');
  }
}

