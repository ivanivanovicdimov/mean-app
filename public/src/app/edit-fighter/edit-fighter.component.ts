import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-fighter',
  templateUrl: './edit-fighter.component.html',
  styleUrls: ['./edit-fighter.component.css']
})
export class EditFighterComponent implements OnInit {
  fighter: any;
  errors: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {this.fighter={name:'', type:'', desc:'', skills:{}}
  this.errors={name:'', type:'', desc:''}
  let observable = this._httpService.getter(this._route.params['value']['id'])
  observable.subscribe(data => {
  this.fighter = data;
})}

update(){
  let observable = this._httpService.update(this.fighter._id,this.fighter)
  observable.subscribe(data => {
    if(data['errors']){
      this.errors = data['errors']
    }else if(data['name'] === 'MongoError'){
      this.errors.name = 'Name already exists'
    }else{
      this.goBack()
    }
})}
goBack() {
  this._router.navigate(['/pets/'+this.fighter._id]);
  }
}