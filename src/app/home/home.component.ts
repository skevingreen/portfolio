/*
 * Student Name: Scott Green
 * File Name: carousel.component.ts
 * Date: April 20, 2025
 * Purpose: Provide a carousel to display pictures
 *
 * Credit for carousel code goes to https://github.com/brampeirs/angular-carousel
 */

interface Slide {
  alt: string;
  src: string;
}

import { Component, ViewChild } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CarouselComponent ],
  template: `
    <br /><br /><br /><br />

    <div class="home-container">
      <div class="intro">
        <h1>
          Greetings, and thank you for visiting my humble website!  My name is Scott, and I am happy to be
          augmenting my B.S. in Computer Science by pursuing a degree in Web Development!
        </h1>
      </div>

      <br /><br />

      <div class="bucketList">
        <h3>My Bucket List</h3>
        <ul>
          <li>Visit all 50 states</li>
          <li>Travel to Europe</li>
          <li>Learn Bass Guitar</li>
          <li>Become Fluent in Spanish</li>
          <li> Go Skydiving</li>
          <li>Try Ice Fishing</li>
          <li>Brew My Own Beer</li>
          <li>Ride a horse</li>
        </ul>
      </div>

      <app-carousel [slides]="slides"></app-carousel>
    </div>
  `,
  styles: [
    `
    `
  ]
})
export class HomeComponent {
  slides: Slide[] = []

  constructor () {
    this.slides = [
      { alt: "map of United States with U.S. flag overlaid on it", src: "/assets/map-with-american-flag-us-national-loyalty-day-celebration.jpg" },
      { alt: "map of Europe as seen from space", src: "/assets/digital-representation-europe-with-network-connections-lights-digital-europe-map.jpg" },
      { alt: "bass guitar", src: "/assets/close-up-bass-guitar-hands-musician-process-playing.jpg" },
      { alt: "laptop with Spanish language learning software on screen", src: "/assets/learn-spanish-language-online-education-concept.jpg" },
      { alt: "two people skydiving", src: "/assets/low-angle-view-people-paragliding-against-sky.jpg" },
      { alt: "two fish caught from hole in ice", src: "/assets/arrangement-fishing-elements-outdoors.jpg" },
      { alt: "two mugs and a bottle of beer surrounded by hops and barley", src: "/assets/flat-lay-beer-mugs-bottle.jpg" },
      { alt: "white horse with saddle in a field", src: "/assets/horses-field.jpg" }
    ]
  }
}
