/*
 * Student Name: Scott Green
 * File Name: projects.component.ts
 * Date: April 26, 2025
 * Purpose: Custom 404 page
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
   <div class="error">
     <h1>404</h1>
     <p>Page Not Found</p>
   </div>
  `,
  styles: `
    /* https://codingkite.com/create-a-simplest-custom-404-error-page-using-html/ */
    .error h1 {
      font-size: 150px;
      margin: 0;
      padding: 0;
    }

    .error p {
      font-size: 40px;
      margin: 0;
      padding: 0;
    }

    /* https://stackoverflow.com/questions/31217268/center-div-on-the-middle-of-screen */
    .error {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }
  `
})
export class NotFoundComponent {

}
