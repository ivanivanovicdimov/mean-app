import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { }

  getFighters(){
    return this._http.get('api/allfighters')
  }
  getter(id){
    console.log(id)
    return this._http.get('api/fighter/'+id)
  }
  postFighter(fighter){
    return this._http.post('api/fighter/new', fighter)
  }
  update(id, fighter){
    return this._http.put('api/fighter/'+id, fighter)
  }
  delete(id){
    return this._http.delete('api/fighter/'+id)
  }
}