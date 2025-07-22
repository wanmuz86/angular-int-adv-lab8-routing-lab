import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {

  user: any;
  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['user']
    })
  }

}
