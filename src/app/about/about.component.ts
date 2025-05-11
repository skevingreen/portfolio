/*
 * Student Name: Scott Green
 * File Name: about.component.ts
 * Date: April 20, 2025
 * Purpose: Provide a a short biography and picture
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="about">
      <h1>A Little About Me</h1>
      <p>
        I am a native Texan from Del Rio that relocated to the Phoenix, Arizona metro in 2018.  I have worked for USAA since
        2004 where a large portion of my career involved administering Windows workstations and writing utilities in support
        of those efforts.  More recently I have been focused on writing backend REST services with Java and Spring Boot.  When
        the opportunity came along to go back to college I decided to round out my experience by pursuing a degree in Web Development.
      </p>
      <p>
        I've been married to my lovely wife, Kelli, since 2022.  Together we enjoy spoiling our two cats, riding bikes, traveling,
        and taking pictures.  I have a number of hobbies including 3D-printing, building remote control cars, and tinkering with
        Raspberry Pi and similar projects.
      </p>

      <img src="assets/scott_and_kelli.jpg" alt="Scott and Kelli Green at the Grand Canyon">
    </div>
  `,
  styles: `
    .about img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }

    .about p {
      text-align: left;
      width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
  `
})
export class AboutComponent {

}
