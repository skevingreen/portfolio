/*
 * Student Name: Scott Green
 * File Name: carousel.component.ts
 * Date: April 20, 2025
 * Purpose: Provide a carousel to display pictures
 *
 * Credit for carousel code goes to https://github.com/brampeirs/angular-carousel
 * Pause button adapted from https://css-tricks.com/making-pure-css-playpause-button/
 */

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <!-- carousel -->
    <div class="carousel">
      <ng-container *ngFor="let slide of slides; let i = index">
        <img
          *ngIf="i === currentSlide"
          [src]="slide.src"
          class="slide"
          [alt]="slide.alt"
          (click)="startStopShow()"
        />
      </ng-container>

      <!-- controls -->
      <button class="control prev" (click)="onPreviousClick()">
        <span class="arrow left"></span>
      </button>
      @if(runShow) {
        <button class="control pause" (click)="startStopShow()">
          <span class="pauseButton"></span>
        </button>
      }
      <button class="control next" (click)="onNextClick()">
        <span class="arrow right"></span>
      </button>
    </div>
  `,
  styles: [
    `
    /* Carousel */
    :host {
      flex: 1;
    }

    .carousel {
      position: relative;
      height: 240px;
      width: 320px;
      overflow: hidden;
      border-radius: 0.5em;
      margin-left: auto;
      margin-right: auto;
    }

    /*
    span.pauseButton {
      position: absolute;
      left: 300%;
    }
    */

    @media screen and (min-width: 1162px) {
      .carousel {
        position: relative;
        height: 480px;
        width: 640px;
        overflow: hidden;
        border-radius: 0.5em;
        margin-left: auto;
        margin-right: auto;
      }

      button.control.pause {
        left: 42%;
      }
    }

    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);
      border-radius: 0.5em;
      color: white;
      font: 40px;
    }

    /* Next and Prev buttons */
    .control {
      border: none;
      background-color: transparent;
      outline: 0;
      position: absolute;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0.5em;
      color: white;
      font-weight: bold;
      font-size: 3em;
      user-select: none;
      height: 100%;
      opacity: 80%;
      transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);

      &:hover, &:focus {
        opacity: 1;
      }

      /* Position the buttons */
      &.next {
        right: 0;
      }
      &.pause {
        left: 35%;
      }
      &.prev {
        left: 0;
      }
    }

    .pauseButton {
      width: 74px;
      height: 32px;
      border-color: #white;
      border-style: double;
      border-width: 0px 0px 0px 37px;
    }

    /* style the arrows */
    .arrow {
      display: inline;
      border-left: 0.1em solid white;
      border-bottom: 0.1em solid white;
      width: 0.5em;
      height: 0.5em;

      &.left {
        transform: rotate(45deg);
      }
      &.right {
        transform: rotate(225deg);
      }
    }
    `
  ]
})
export class CarouselComponent {
  @Input() slides: any;
  runShow = true;
  currentSlide = 0;
  intervalID: any;

  constructor() {
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  startStopShow() {
    if(this.runShow) {        //start the show
      this.runShow = false;   //toggle state so next click will stop show
      this.intervalID = setInterval(() => this.onNextClick(), 3000);
    } else {                  //stop the show
      clearInterval(this.intervalID);
      this.runShow = true;    //toggle state so next click will start show
    }
  }

  ngOnInit() {
    this.startStopShow();
  }
}
