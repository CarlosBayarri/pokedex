import { trigger, transition, query, style, stagger, animate, group } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
  animations: [
    trigger('coverAnimations', [
      transition(':enter', [
        group([
          query('.cover-white', [
            style({transform: 'translateY(60vh)'}),
            stagger(0, [
              animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateY(0vh)' }))
            ])
          ]),
          query('.cover-red, .cover-black', [
            style({transform: 'translateY(-60vh)'}),
            stagger(0, [
              animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateY(0vh)' }))
            ])
          ])
        ])
      ]),
      transition(':leave', [
        group([
          query('.cover-white', [
            style({transform: 'translateY(0)'}),
            stagger(0, [
              animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(60vh)' }))
            ])
          ]),
          query('.cover-red, .cover-black', [
            style({transform: 'translateY(0)'}),
            stagger(0, [
              animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(-60vh)' }))
            ])
          ])
        ])
      ]),
    ]),
  ]
})
export class CoverComponent {

}
