import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
  githubProjects: any[] = [];

  constructor(private projectsService: ProjectsService) {}

  public ngOnInit() {
    this.projectsService.getApiProjects().subscribe(
      (res) => {
        const manuallyAddedProject = {
          name: 'Coin Advice',
          html_url: 'https://www.coinadvice.info',
          language: 'Java 21, Spring Boot, Thymeleaf',
          description: 'Website giving practical crypto advice.'
        };
        this.githubProjects = res;
        this.githubProjects.unshift(manuallyAddedProject);
      },
      (err) => console.error(err)
    );
  }
}
