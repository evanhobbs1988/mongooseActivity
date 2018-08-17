import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reptiles = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthorsFromService();
  }

  getAllAuthorsFromService(){
    let observable = this._httpService.getReptiles();
    observable.subscribe(data => {
      this.reptiles = data['allReptiles']
    })
  }

}
