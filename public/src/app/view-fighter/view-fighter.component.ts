import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-view-fighter',
  templateUrl: './view-fighter.component.html',
  styleUrls: ['./view-fighter.component.css']
})
export class ViewFighterComponent implements OnInit {
  fighter:any;
  clicked:any;
  likes:NumberConstructor;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.fighter = {name: '', type: '', desc: '', skills: {}, likes: 0}
    this.clicked = false;
    let observable = this._httpService.getter(this._route.params['value']['id'])
    observable.subscribe(data => {
      this.fighter = data;
    })}

  like() {
    this.fighter.likes += 1;
    this.clicked = true;
    let observable = this._httpService.update(this.fighter._id, this.fighter)
    observable.subscribe(data => {
      console.log(this.fighter.likes)
    })}

  buy(id){
    let observable = this._httpService.delete(id)
    observable.subscribe(data => {
    this.goHome()
    })}
  
  goHome(){
    this._router.navigate(['/fighters']);
    }

}