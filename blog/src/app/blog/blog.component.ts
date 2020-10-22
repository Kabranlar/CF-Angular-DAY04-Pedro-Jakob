import { Component, OnInit } from '@angular/core';
import { doggos } from '../dogs'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
	doggos = doggos;
	
  constructor() { }

  ngOnInit(): void {
  }

}
