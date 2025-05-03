/*
 * Student Name: Scott Green
 * File Name: app.component.ts
 * Date: May 3, 2025
 * Purpose: Provide common site structure
 */

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
      <header>
        <div class="header-container">
          <p>Scott Green</p>
          <nav class="navbar">
            <a routerLink="/">Home</a> |
            <a routerLink="/resume">Resume</a> |
            <a routerLink="/about">About</a> |
            <a routerLink="/projects">Projects</a>
          </nav>
        </div>
      </header>

      <main>
        <section>
          <router-outlet />
        </section>
      </main>

      <footer>
        <p>&copy; 2025 <a href="mailto:scgreen@my365.bellevue.edu">Scott Green</a></p>
      </footer>
  `,
  styles: [
    `
    `
  ]
})
export class AppComponent {
  title = 'portfolio';
}
