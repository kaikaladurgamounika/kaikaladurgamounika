import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import {SharedserviceService} from '../sharedservice.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {

  public articles:any;
  public friends: any;
  public output_type: string;

  constructor(private apiService: ApiService, private shared_var: SharedserviceService) { }

  ngOnInit() {

    console.log(this.shared_var.shared_variable);
    this.shared_var.shared_variable='news';
  
      this.apiService.getNews().subscribe((data)=>{
      console.log(data);
        this.articles = data['articles'];
    });
    /*this.apiService.getFriends('json').subscribe((data) => {
      // this.friends = data;
    }, (error)=>{
      console.log('i am error');
    });*/
  }  
  

}
