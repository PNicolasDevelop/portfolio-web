import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TerminalSection} from '../../models/models';
import {AboutMeComponent} from '../aboutme/aboutme.component';
@Component({
  selector: 'app-terminal-container',
  templateUrl: './terminal-container.component.html',
  styleUrls: ['./terminal-container.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    AboutMeComponent
  ]
})
export class TerminalContainerComponent {
  listSections: TerminalSection[] = [
    {
      name: '/about_me',
      link: '/about-me',
      active: true,
    },
    {
      name: '/projects',
      link: '/projects',
      active: false,
    },
    {
      name: '/technologies',
      link: '/technologies',
      active: false,
    },
    {
      name: '/about_me2',
      link: '/about-me2',
      active: false,
    }
  ]

  goToSection(item: TerminalSection) {
    this.listSections.forEach((section: TerminalSection) => {
      section.active = section.link === item.link;
    })
  }
}
