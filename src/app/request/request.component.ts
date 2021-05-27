import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requestList: Object[];

	constructor(private requestService: RequestService) {
		this.getRequestList();
	}

	getRequestList() {
		this.requestService.getRequestList().subscribe(
			res => {
        		this.requestList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
      		},
      		error => console.log(error)
		)
	}	

	confirmRequest(id: number) {
  		this.requestService.confirmRequest(id).subscribe();
  		location.reload();
  	}

  ngOnInit() {
  }

}
