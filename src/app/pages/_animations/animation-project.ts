import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const animation = trigger('slideAnimation', [

transition('project1 => project2', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
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

  transition('project2 => project1', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('project2 => project3', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
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

  transition('project1 => project3', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
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

  transition('project3 => project2', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('project3 => project1', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('project4 => project1', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('project4 => project2', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('project4 => project3', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('project1 => project4', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
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

  transition('project2 => project4', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
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

  transition('project3 => project4', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
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

  transition('project1 => project5', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
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

  transition('project2 => project5', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
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

  transition('project3 => project5', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
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

  transition('project4 => project5', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
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

  transition('project5 => project1', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('project5 => project2', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('project5 => project3', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),

  transition('project5 => project4', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height: '100%',
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
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
    ]),
  ]),
]);