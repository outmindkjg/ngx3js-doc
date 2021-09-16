import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, AfterViewInit, HostListener } from '@angular/core';
import { AbstractBaseDirective } from '../abstract.base';

/**
 * 이미지 다이렉디브
 *
 * @export
 * @class AnimateDirective
 * @implements {OnChanges}
 */
@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective extends AbstractBaseDirective implements OnChanges, AfterViewInit {

  @Input() appAnimate: string = 'none';
  @Input() delay: number = 1000;

  constructor(protected renderer: Renderer2, protected el: ElementRef) {
    super();
  }
  
	/**
	 * See how Angular calls the ngOnChanges() hook with a changes object every time one of the component input properties changes.
	 *
	 * @param {SimpleChanges} changes
	 */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appAnimate']) {
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onScroll();
    }, 500);
  }
	/**
	 * 이미지 로드 여부
	 *
	 * @type {boolean}
	 */
  isLoaded: boolean = false;

	/**
	 * 스크롤 이벤트 발생시 실행
	 */
  @HostListener('window:scroll')
  onScroll() {
    if (!this.isLoaded) {
      if (this.elementInViewport(this.el.nativeElement)) {
        this.isLoaded = true;
        AnimateDirective.AddSchedule(this, 500);
      }
    }
  }

  protected static scheduleAnimate: { obj: AnimateDirective, delay: number }[] = [];

  protected static AddSchedule(obj: AnimateDirective, delay: number = 100) {
    const initLength = this.scheduleAnimate.length;
    this.scheduleAnimate.push({ obj: obj, delay: delay });
    if (initLength === 0) {
      setTimeout(() => {
        this.RunSchedule();
      }, 500);
    }
  }

  protected static RunSchedule() {
    if (this.scheduleAnimate.length > 0) {
      const schedule = this.scheduleAnimate.shift();
      if (schedule !== undefined) {
        schedule.obj.RunAnimate();
        setTimeout(() => {
          this.RunSchedule();
        }, schedule.delay);
      }
    }
  }

  elementInViewport(el : HTMLElement) {
    var rect = el.getBoundingClientRect()
    return (
      rect.top >= 0
      && rect.left >= 0
      && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

  public RunAnimate() {
    const clazzNames = (this.appAnimate + ' animated').split(' ');
    clazzNames.forEach(clazz => {
      if (clazz != '') {
        this.renderer.addClass(this.el.nativeElement, clazz);
      }
    });
    setTimeout(() => {
      clazzNames.forEach(clazz => {
        if (clazz != '') {
          this.renderer.removeClass(this.el.nativeElement, clazz);
        }
      });
    }, this.delay);
  }

}