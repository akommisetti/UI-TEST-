import {Component} from '@angular/core';
import {CountryDetails} from '../models/country-details';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-country-details-view',
  templateUrl: './country-details-view.component.html',
  styleUrls: ['./country-details-view.component.scss']
})
export class CountryDetailsViewComponent {
  dataSource : Observable<any[]>;
  countryDetails:Array<string> = [];
  displayedColumns: string[] = ['name', 'capital', 'population', 'currencies','flag'];
  constructor(private store: Store<{ countryDetails: CountryDetails[] }>) {
    this.dataSource = store.pipe(select('countryDetails'));
    this.dataSource.subscribe((data:any)=>{
      if(data.selectedCountry && Object.keys(data.selectedCountry).length){
        this.countryDetails =  [data.selectedCountry];
      }
    })
  }
}
