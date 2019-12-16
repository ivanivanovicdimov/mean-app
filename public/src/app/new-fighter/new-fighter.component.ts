import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-new-fighter',
  templateUrl: './new-fighter.component.html',
  styleUrls: ['./new-fighter.component.css']
})

export class NewFighterComponent implements OnInit {
  errors: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.errors = {name:'', type:'', desc:''}
  }
  create(fighter){
    let observable = this._httpService.postFighter(fighter)
    observable.subscribe(data => {
      if(data['errors']){
        this.errors = data['errors']
      }else if(data['name'] === 'MongoError'){
        this.errors.name = 'Name already exists'
      }else{
        this.goHome()
      }
  })}
  goHome(){
    this._router.navigate(['/fighters']);
  }

}
