import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-inside-post',
  templateUrl: './inside-post.component.html',
  styleUrls: ['./inside-post.component.scss']
})
export class InsidePostComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {

    });
  }

}
