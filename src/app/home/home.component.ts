import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <br><br><br><br>

    <div class="home-container">
      <div class="intro">
        <h1>
          Greetings, and thank you for visiting my humble website!  My name is Scott, and I am happy to be
          augmenting my B.S. in Computer Science by pursuing a degree in Web Development!
        </h1>
      </div>

      <br><br><br><br>

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
    </div>
  `,
  styles: [
    `
    `
  ]
})
export class HomeComponent {

}
