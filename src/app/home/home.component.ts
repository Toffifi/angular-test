import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppCounterService } from '../services/app-counter.service';
import { LocalCounterService } from '../services/local-counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LocalCounterService]
})
export class HomeComponent {
  title = 'test';
  text = 'My sample text';
  textColor = 'red';
  wrapVisible = true;
  constructor(
    private localCounterService: LocalCounterService,
    private appCounterService: AppCounterService,
    private router: Router
    ) { }

    goTOPostsPage(): void {
      this.router.navigate(['/posts']);
    }

}
