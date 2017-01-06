
import {
  AfterContentInit,
  AnimationTransitionEvent,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
  QueryList,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { DOCUMENT } from '@angular/platform-browser';
import { CloseSidebar } from './close.directive';

//import CloseSidebar from './close.directive';

export const POS = {
  Left  :'left',
  Right :'right',
  Top   :'top',
  Bottom:'bottom'
};

@Component({
  selector: 'ng2-sidebar',
  styleUrls: [ './sidebar.scss'],
  template: `
    <aside #sidebar
      [@visibleSidebarState]="_visibleSidebarState"
      role="complementary"
      [attr.aria-hidden]="!open"
      [attr.aria-label]="ariaLabel"
      class="s-sidebar s-sidebar--{{position}} s-shadow-1"
      [class.s-sidebar--style]="defaultStyles"
      [ngClass]="sidebarClass">
      <ng-content></ng-content>
    </aside>
    <div *ngIf="showOverlay"
      aria-hidden="true"
      class="s-sidebar__overlay"
      [class.s-sidebar__overlay--style]="open && defaultStyles"
      [ngClass]="overlayClass"></div>
  `,
  animations: [
    trigger('visibleSidebarState', [
      state('expanded', style({ transform: 'none', pointerEvents: 'auto', willChange: 'initial' })),
      state('collapsed--left', style({ transform: 'translateX(-110%)' })),
      state('collapsed--right', style({ transform: 'translateX(110%)' })),
      state('collapsed--top', style({ transform: 'translateY(-110%)' })),
      state('collapsed--bottom', style({ transform: 'translateY(110%)' })),
      transition('* => *', animate('0.3s cubic-bezier(0, 0, 0.3, 1)'))
    ])
  ]
})
export class SidebarComponent implements AfterContentInit, OnChanges, OnDestroy {
  // `openChange` allows for 2-way data binding
  @Input() open: boolean = false;
  @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() position: string = POS.Left;
  @Input() closeOnClickOutside: boolean = false;
  @Input() showOverlay: boolean = true;

  @Input() defaultStyles: boolean = false;

  @Input() sidebarClass: string;
  @Input() overlayClass: string;

  @Input() ariaLabel: string;

  @Output() onOpen: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('sidebar')
  private _elSidebar: ElementRef;

  @ContentChildren(CloseSidebar)
  private _closeDirectives: QueryList<CloseSidebar>;

  private _visibleSidebarState: string;
  private _onClickOutsideAttached: boolean = true;

  private _focusableElementsString: string = 'a[href], area[href], input:not([disabled]), select:not([disabled]), ' +
    'textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
  private _focusableElements: Array<HTMLElement>;
  private _focusedBeforeOpen: HTMLElement;

  constructor(@Inject(DOCUMENT) private _document) {
    this._trapFocus = this._trapFocus.bind(this);
    this._onClickOutside = this._onClickOutside.bind(this);
  }

  ngAfterContentInit() {
    if (this._closeDirectives) {
      this._closeDirectives.forEach((dir: CloseSidebar) => {
        dir.clicked.subscribe(this._manualClose);
      });
    }
  }

  ngOnDestroy() {
    this._destroyCloseOnClickOutside();

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['open']) {
      if (this.open) {
        this._open();
      } else {
        this._close();
      }

      this._setvisibleSidebarState();
    }

    if (changes['closeOnClickOutside']) {
      this._initCloseOnClickOutside();
    }

    if (changes['position']) {
      this._setvisibleSidebarState();
    }
  }

  private _setvisibleSidebarState() {
    this._visibleSidebarState = this.open ? 'expanded' : `collapsed--${this.position}`;
  }

  private _open() {
    this._setFocused(true);
    this._initCloseOnClickOutside();
    this.onOpen.emit(null);
  }

  private _close() {
    this._setFocused(false);
    this._destroyCloseOnClickOutside();
    this.onClose.emit(null);
  }

  private _manualClose() {
    this.open = false;
    this.openChange.emit(false);
    this._close();
  }


  // Focus on open/close
  // ==============================================================================================

  private _getFocusableElements() {
    this._focusableElements = Array.from(
      this._elSidebar.nativeElement.querySelectorAll(this._focusableElementsString)) as Array<HTMLElement>;
  }

  private _setFocusToFirstItem() {
    if (this._focusableElements && this._focusableElements.length) {
      this._focusableElements[0].focus();
    }
  }

  private _trapFocus(e: Event) {
    if (this.open && !this._elSidebar.nativeElement.contains(e.target)) {
      this._setFocusToFirstItem();
    }
  }

  // Handles the ability to focus sidebar elements when it's open/closed'
  private _setFocused(open: boolean) {
    this._getFocusableElements();

    if (open) {
      this._focusedBeforeOpen = this._document.activeElement as HTMLElement;

      // Restore focusability, with previous tabIndex attributes
      for (let el of this._focusableElements) {
        const prevTabIndex = el.getAttribute('__tabindex__');
        if (prevTabIndex !== null) {
          el.setAttribute('tabindex', prevTabIndex);
          el.removeAttribute('__tabindex__');
        } else {
          el.removeAttribute('tabindex');
        }
      }

      this._setFocusToFirstItem();

      this._document.body.addEventListener('focus', this._trapFocus, true);
    } else {
      // Manually make all focusable elements unfocusable, saving existing tabIndex attributes
      for (let el of this._focusableElements) {
        const existingTabIndex = el.getAttribute('tabindex');
        if (existingTabIndex !== null) {
          el.setAttribute('__tabindex__', existingTabIndex);
        }

        el.setAttribute('tabindex', '-1');
      }

      if (this._focusedBeforeOpen) {
        this._focusedBeforeOpen.focus();
      }

      this._document.body.removeEventListener('focus', this._trapFocus, true);
    }
  }


  // On click outside
  // ==============================================================================================

  private _initCloseOnClickOutside() {
    if (this.open && this.closeOnClickOutside && !this._onClickOutsideAttached) {
      // In a timeout so that things render first
      console.log("Attaching CLick outside");
      setTimeout(() => {
        console.log("Attaching CLick outside - in Timeout");
        this._document.body.addEventListener('click', this._onClickOutside);
        this._onClickOutsideAttached = true;
      }, 0);
    }
  }

  private _destroyCloseOnClickOutside() {
    if (this._onClickOutsideAttached) {
      this._document.body.removeEventListener('click', this._onClickOutside);
      this._onClickOutsideAttached = false;
    }
  }

  private _onClickOutside(e: Event) {
    console.log("CLick outside")
    if (this._onClickOutsideAttached && this._elSidebar && !this._elSidebar.nativeElement.contains(e.target)) {
      this._manualClose();
    }
  }
}
