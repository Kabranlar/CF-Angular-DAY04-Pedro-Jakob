import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { doggos } from '../dogs'

@Component({
  selector: 'app-doggo-details',
  templateUrl: './doggo-details.component.html',
  styleUrls: ['./doggo-details.component.css']
})
export class DoggoDetailsComponent implements OnInit {
	doggo;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
  		this.doggo = doggos[+params.get('doggoId')];
  	})
  }

}
