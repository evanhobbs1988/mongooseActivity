import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newReptile: any;
  response: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newReptile = { name: '', species: '', personality: '', age: undefined }
  }

  onSubmit(event){
    event.preventDefault();
    let observable = this._httpService.createReptile(this.newReptile);
    observable.subscribe(data => {
      this.response = data;
      this._router.navigate(['/'])
    })
  }

}
