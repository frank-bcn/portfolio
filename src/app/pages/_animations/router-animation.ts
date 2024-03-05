import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
  } from '@angular/animations';

  export const slideInAnimation = trigger('routeAnimation', [
    transition('start => about', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            height:'100%',
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '100%' })], { optional: true }),
        
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        
      ]),
    ]),
    
  
    transition('about => skills', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            height:'100%',
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '100%' })], { optional: true }),
        
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        
      ]),
    ]),
  
    transition('skills => about', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', [style({ left: '0%' })], { optional: true }),
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        query(':leave', [animate('500ms ease-out', style({ left: '100%' }))], {
          optional: true,
        }),
      ]),
    ]),

    transition('skills => projects', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            height:'100%',
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '100%' })], { optional: true }),
        
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        
      ]),
    ]),

    transition('projects => skills', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', [style({ left: '0%' })], { optional: true }),
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        query(':leave', [animate('500ms ease-out', style({ left: '100%' }))], {
          optional: true,
        }),
      ]),
    ]),

    transition('about => projects', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            height:'100%',
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '100%' })], { optional: true }),
        
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        
      ]),
    ]),

    transition('projects => about', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', [style({ left: '0%' })], { optional: true }),
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        query(':leave', [animate('500ms ease-out', style({ left: '100%' }))], {
          optional: true,
        }),
      ]),
    ]),

    transition('about => contact', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            height:'100%',
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '100%' })], { optional: true }),
        
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        
      ]),
    ]),

    transition('skills => contact', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            height:'100%',
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '100%' })], { optional: true }),
        
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        
      ]),
    ]),

    transition('projects => contact', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            height:'100%',
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '100%' })], { optional: true }),
        
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        
      ]),
    ]),

    transition('contact => projects', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', [style({ left: '0%' })], { optional: true }),
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        query(':leave', [animate('500ms ease-out', style({ left: '100%' }))], {
          optional: true,
        }),
      ]),
    ]),

    transition('contact => skills', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', [style({ left: '0%' })], { optional: true }),
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        query(':leave', [animate('500ms ease-out', style({ left: '100%' }))], {
          optional: true,
        }),
      ]),
    ]),

    transition('contact => about', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', [style({ left: '0%' })], { optional: true }),
      ]),
      group([
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
        query(':leave', [animate('500ms ease-out', style({ left: '100%' }))], {
          optional: true,
        }),
      ]),
    ]),

  ]);