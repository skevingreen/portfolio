/*
 * Student Name: Scott Green
 * File Name: resume.component.ts
 * Date: April 20, 2025
 * Purpose: Provide content for resume
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div class="resume-container">
      <div class="resume-header">
        <h1>Scott Green</h1>
        <p>E-mail: scgreen&#64;my365.bellevue.edu</p>
        <a href="/assets/portfolio_resume.pdf" target="_blank">Download Resume</a>
      </div>

      <hr />

      <h2>Professional Objective</h2>
      <p>Leverage diverse technical background to provide innovative solutions to challenging problems.</p>

      <h2>Career Summary</h2>
      <p>Systems administrator/developer with knowledge of a wide range of programming languages, system APIs, and enterprise software suites.</p>

      <h2>Skills Summary</h2>
      <ul>
        <li>C++/C#/VB.NET</li>
        <li>Active Directory/SCCM</li>
        <li>PowerShell/BASH</li>
        <li>Windows/macOS/iOS/Android</li>
        <li>Angular/JavaScript</li>
        <li>Express/Node.js</li>
        <li>Java/Spring Boot</li>
        <li>IBM DB2 (LUW)/MS SQL/MongoDB</li>
      </ul>

      <h2>Professional Experience (USAA 01/2004-Present)</h2>
      <h3><em>Developer</em>: Member Data Services (2018-Present)</h3>
      <ul>
        <li>Developing and maintaining Service Level Objectives to support Site Reliability Engineering</li>
        <li>Writing Spring Boot REST APIs to support retrieval/storage/update of USAA member information</li>
        <li>Keeping knowledge base and wiki articles up to date</li>
        <li>Participating in SAFe Scrum ceremonies</li>
      </ul>

      <h3><em>Developer</em>: Database Service (2017-2018)</h3>
      <ul>
        <li>Automated DB2 (LUW) and MS SQL sandbox creation/deletion</li>
        <li>Resolved problems with DB2 (LUW) and MS SQL clients</li>
        <li>Collaborated with teammates across the database domain to make improvements in billing automation and other utilities</li>
      </ul>

      <h3><em>Developer/Administrator</em>: Client Computing (2006-2017)</h3>
      <ul>
        <li>Wrote code that leveraged Microsoft System Center Configuration Manger APIs to accelerate the rollout of Windows 7 64-bit to member service representatives (MSRs), which gave them tools needed to improve members’ experience.</li>
        <li>Developed code to enforce BitLocker disk encryption to secure VM/laptop solution that provides mobility to the IT workforce.</li>
        <li>Maintained base Windows 7 32-bit and 64-bit operating system profiles to keep device drivers, security patches, certificates, and group policies up to date for numerous desktop, laptop, thin client and virtual machine platforms.</li>
        <li>Implemented new preboot execution environment (PXE) to deliver operating systems in all major USAA offices and worked with virtual infrastructure and network teams to prevent conflict with Citrix Provisioning Service (PVS) for streamed virtual machines.</li>
        <li>Resolved issues for remote MSRs on their virtual machines, thin clients, and routers.</li>
        <li>Performed license compliance, packaging, installation, and troubleshooting for a variety of software including Flash Player, Acrobat Reader, RealPlayer, Hummingbird Exceed, IBM Personal Communications, Java Runtime Environment, Microsoft .NET Framework, Microsoft Office, Cisco AnyConnect, Skype, and others.
        </li>
        <li>Designed a utility to scan users’ home drives to identify files to be analyzed by document retention team.</li>
        <li>Installed/troubleshot printer drivers</li>
        <li>Worked with network team to resolve 802.1x security certificate issues</li>
        <li>Utilized Eracent to assist with asset management</li>
      </ul>

      <h2>Education</h2>
      <ul>
        <li><em>Bellevue University</em> / B.S. in Web Development (Expected 07/2025)</li>
        <li><em>Angelo State University</em> / B.S. in Computer Science (12/2003)</li>
      </ul>
    </div>
  `,
  styles: `
    .resume-container h2, h3, p, li {
      color: white;
      text-align: left;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      font-family: "Tuffy", sans-serif;
    }

    .resume-header p, h1 {
      text-align: center;
      color: white;
      font-family: "Tuffy", sans-serif;
    }

    a {
      color: white;
      text-align: center;
      display: block;
    }
  `
})
export class ResumeComponent {

}
