import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {
  fighter: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.allFighters()
  }
  allFighters(){
    let observable = this._httpService.getFighters() // fighter(s)??
    observable.subscribe(data => {
    this.fighter = data; // fighter(s)??
  })}
  view(id){
    this._router.navigate(['/fighters/'+id]);
  }
  edit(id){
    this._router.navigate(['/fighters/'+id+'/edit']);
  }
} 
