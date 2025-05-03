/*
 * Student Name: Scott Green
 * File Name: projects.component.ts
 * Date: May 3, 2025
 * Purpose: Provide links to other webdev projects
 */

export interface Project {
  name: string;
  description: string;
  technologyList: string;
  learnings: string;
  repositoryLink: string;
  liveLink: string;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Welcome to my projects page.  Click a link to view the code or site.</h1>
      <ul class="project-container">
        @for (project of projects; track project) {
          <li class="project-item">
            <div class="card">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <h3>Technologies Used</h3>
              <p>{{ project.technologyList }}</p>
              <h3>Lessons Learned</h3>
              <p>{{ project.learnings }}</p>
              <h3>Links</h3>
              <p>Repository: <a href="{{ project.repositoryLink }}" target="_blank">{{ project.repositoryLink }}</a></p>
              <p>Live Link: <a href="{{ project.liveLink }}" target="_blank">{{ project.liveLink }}</a></p>
            </div>
          </li>
        }
      </ul>
    </div>
  `,
  styles: `
    .project-container {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
    }

    .project-container li {
      background-color: white;
    }

    .project-item {
      flex: 0 1 calc(33.33% - 20px);
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card {
      padding: 20px;
      background-color: white;
      color: blue;
    }

    .card p {
      color: blue;
      text-align: left;
      margin-bottom: 0;
      margin-top: 0;
    }

    .card h3 {
      margin-top: 35px;
      margin-bottom: 0;
    }

    .card h3:first-of-type {
      margin-top: 0px;
    }
  `
})
export class ProjectsComponent {
  projects: Project[];

  constructor() {
    this.projects = [
      {
        "name": "Forward Fitness Club",
        "description": "Textbook exercise creating a static website for a fictional gym.",
        "technologyList": "HTML, CSS",
        "learnings": "This exercise was a great way to learn basic web design using nothing more than HTML and CSS.",
        "repositoryLink": "https://github.com/skevingreen/fitness",
        "liveLink": "https://skevingreen.github.io/fitness/"
      },
      {
        "name": "Wild Rescues",
        "description": "Textbook assignment creating a static website for a fictional wildlife rescue.",
        "technologyList": "HTML, CSS",
        "learnings": "This assignment reinforced basic HTML and CSS concepts such as forms and media queries",
        "repositoryLink": "https://github.com/skevingreen/rescue",
        "liveLink": "https://skevingreen.github.io/rescue/"
      },
      {
        "name": "Kelli Green",
        "description": "Assignment to create a personal page for someone we know.",
        "technologyList": "HTML, CSS",
        "learnings": "This project was a chance to design a website from scratch.",
        "repositoryLink": "https://github.com/skevingreen/bioSite",
        "liveLink": "https://skevingreen.github.io/bioSite/"
      },
      {
        "name": "Cookbook",
        "description": "An Express REST API for use in a cookbook app (see app.js for various endpoints)",
        "repositoryLink": "https://github.com/skevingreen/cookbook",
        "liveLink": "https://cookbook-v51x.onrender.com",
        "technologyList": "JavaScript, REST, Express.js, Node.js",
        "learnings": "The cookbook project was a chance to learn how to build a basic website and API using Express.js and Node.js."
      },
      {
        "name": "In-N-Out-Books",
        "description": "Similar to the cookbook app, but with books instead (see app.js for various endpoints)",
        "repositoryLink": "https://github.com/skevingreen/green-in-n-out-books",
        "liveLink": "https://green-in-n-out-books.onrender.com",
        "technologyList": "JavaScript, REST, Express.js, Node.js",
        "learnings": "A reinforcement of REST API concepts utilizing Express.js and Node.js."
      },
      {
        "name": "web-231",
        "description": "GitHub repository for web-231 Enterprise JavaScript I course.",
        "repositoryLink": "https://github.com/skevingreen/web-231",
        "liveLink": "",
        "technologyList": "JavaScript, HTML, CSS",
        "learnings": "A basic introduction to JavaScript"
      },
      {
        "name": "web-330",
        "description": "GitHub repository for web-330 Enterprise JavaScript II course.",
        "repositoryLink": "https://github.com/skevingreen/web-330",
        "liveLink": "",
        "technologyList": "JavaScript, CSS, HTML",
        "learnings": "More advanced JavaScript concepts."
      },
      {
        "name": "web-335",
        "description": "GitHub repository for web-335 NoSQL course.",
        "repositoryLink": "https://github.com/skevingreen/web-335",
        "liveLink": "",
        "technologyList": "Python, JavaScript, MongoDB",
        "learnings": "This course taught us about NoSQL databases in general and MongoDB in particular."
      },
      {
        "name": "web-340",
        "description": "GitHub repository for web-340 Node.js course.",
        "repositoryLink": "https://github.com/skevingreen/web-340",
        "liveLink": "",
        "technologyList": "JavaScript, Node.js",
        "learnings": "A first foray into the world of Node.js and server side scripting with JavaScript."
      },
      {
        "name": "web-420",
        "description": "GitHub repository for web-420 RESTful APIs course.",
        "repositoryLink": "https://github.com/skevingreen/web-420",
        "liveLink": "",
        "technologyList": "JavaScript, Node.js, Express.js",
        "learnings": "Implementing REST APIs using JavaScript with Node.js and Express.js."
      },
      {
        "name": "web-425",
        "description": "GitHub repository for web-425 Angular with TypeScript course.",
        "repositoryLink": "https://github.com/skevingreen/web-425",
        "liveLink": "",
        "technologyList": "TypeScript, JavaScript, HTML, CSS, Angular",
        "learnings": "A focus on front-end development using Angular and TypeScript."
      }
    ]
  }
}
