import { Component } from '@angular/core';
import { GithubCommitsService } from '../shared/services/github-commit-service.service';

@Component({
  selector: 'app-terceiro-exercicio',
  templateUrl: './terceiro-exercicio.component.html',
  styleUrls: ['./terceiro-exercicio.component.css']
})
export class TerceiroExercicioComponent {
  commits: any[] = [];

  constructor(private githubCommitsService: GithubCommitsService) { }

  ngOnInit() {
    this.getCommits();
  }

  getCommits():void{
    this.githubCommitsService.getCommits().subscribe((data) => {
      this.commits = data.map(commit => {
        return {
          author: commit.commit.author.name,
          date: commit.commit.author.date,
          message: commit.commit.message
        };
      });
    });
  }
}
