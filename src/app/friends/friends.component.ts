import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {SharedserviceService} from '../sharedservice.service';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  public friends: any;
  public output_type: string;


  constructor(private apiService: ApiService, private shared_var: SharedserviceService) { }

  ngOnInit(): void {

    this.show_shared_value();
  
  }

  show_shared_value(){
  
    console.log(this.shared_var.shared_variable);
    this.shared_var.shared_variable='friends';
  }

  getfriends(){
    this.friends = [];
    console.log(this.output_type);
    this.apiService.getFriends(this.output_type).subscribe((myfriends) => {
      this.friends = myfriends;
    }, (error)=>{
      alert('error');
      this.output_type = '';
    });
  }

}
