import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Reptile } from '../reptile';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editReptile: Reptile
  response: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  	this._route.params.subscribe( params => {
      this._httpService.editReptile(params['id']).subscribe(reptile => {
        this.editReptile = reptile as Reptile
        console.log("Data from this Reptile", this.editReptile);
      })
  	});
  }

  onEdit(){
    this._httpService.updateReptile(this.editReptile['_id'],this.editReptile).subscribe(data =>{
      if(data['errors']){
        this.response = data['message']
      }
      else {
        this._router.navigate(['/']);
      }
    })
  }

  deleteReptile(id){
    let observable = this._httpService.deleteReptile(id);
    observable.subscribe(data => {
      this.response = data;
      this._router.navigate(['/'])
    }); 
  }
}
