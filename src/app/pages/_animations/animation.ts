import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const animation = trigger('slideAnimation', [

  transition('frontend => backend', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',       
          height:'90%',
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

  transition('backend => frontend', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
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

  transition('backend => extra', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
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

  transition('frontend => extra', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
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

  transition('extra => backend', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
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

  transition('extra => frontend', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          height:'90%',
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

  transition('project1 => project2', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          height:'90%',
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
          height:'90%',
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
          height:'100%',
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
          height:'100%',
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
          height:'100%',
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
          height:'100%',
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