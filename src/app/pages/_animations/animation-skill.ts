import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const animation = trigger('slideAnimation', [

  transition('frontend => backend', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',       
          height:'89.5%',
          width: '92%',
        }),
      ],
      { optional: true }
    ),
    group([
      query(':enter', [style({ left: '-100%' })], { optional: true }),
    ]),
    group([
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('backend => frontend', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'89.5%',
          width: '92%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('backend => extra', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
          width: '92%',
        }),
      ],
      { optional: true }
    ),
    group([
      query(':enter', [style({ left: '-100%' })], { optional: true }),
    ]),
    group([
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('frontend => extra', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
          width: '92%',
        }),
      ],
      { optional: true }
    ),
    group([
      query(':enter', [style({ left: '-100%' })], { optional: true }),
    ]),
    group([
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('extra => backend', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
          width: '92%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('extra => frontend', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
          width: '92%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('frontend => deployment', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
          width: '92%',
        }),
      ],
      { optional: true }
    ),
    group([
      query(':enter', [style({ left: '-100%' })], { optional: true }),
    ]),
    group([
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('deployment => frontend', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
          width: '92%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('backend => deployment', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
          width: '92%',
        }),
      ],
      { optional: true }
    ),
    group([
      query(':enter', [style({ left: '-100%' })], { optional: true }),
    ]),
    group([
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('deployment => backend', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
          width: '92%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('extra => deployment', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
          width: '92%',
        }),
      ],
      { optional: true }
    ),
    group([
      query(':enter', [style({ left: '-100%' })], { optional: true }),
    ]),
    group([
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('deployment => extra', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
          width: '92%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),
]);