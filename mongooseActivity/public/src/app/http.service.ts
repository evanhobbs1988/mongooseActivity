import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {}
  getReptiles(){
    return this._http.get('/reptiles');
  }
  createReptile(reptile){
    return this._http.post('/reptiles', reptile);
  }
  editReptile(id){
    return this._http.get('/reptiles/edit/' + id);
  }
  updateReptile(id, reptile){
		return this._http.put('/reptiles/update/'+ id, reptile); 
	}
  deleteReptile(id){
    return this._http.delete('/reptiles/' + id);
  }
}