import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CountryDetails } from './models/country-details';
import { CountryDetailsAdd, AddCountry } from './customer.actions';
import { ClientHttpService } from './services/client-http.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ui-test';
  dataSource : Observable<any[]>;
  countryFullDetailsList:any = {};
  regionList: any = [];
  countryList: any = [];
  countrySelectedList: any ={};
  constructor(private store: Store<{ countryDetails : any[] }>, private service: ClientHttpService) {
    this.dataSource = store.pipe(select('countryDetails'));
    this.dataSource.subscribe((data:any)=>{
      this.regionList =  data.region;
      this.countrySelectedList = data.countryDetails; 
    })
  }
 
  setCountryDetails(countryDetails: any) {
    const countryDet = new CountryDetails();
    countryDet.name = countryDetails.name;
    countryDet.capital = countryDetails.capital;
    countryDet.currencies = countryDetails.currencies;
    countryDet.flag = countryDetails.flag;
    countryDet.population = countryDetails.population;
    this.store.dispatch(new CountryDetailsAdd(countryDet));
  }
  getCountries(val) {
    if(val){
      this.countryFullDetailsList = {};
      this.countryList = [];
    if(this.countrySelectedList[val.value]){
      this.countryFullDetailsList = this.countrySelectedList[val.value]
      this.countryList = Object.keys(this.countryFullDetailsList);
    }else{
    this.service.getCountries(val.value.toLowerCase()).subscribe((data:any)=> {
      if(data){
        data.forEach(element => {
          this.countryFullDetailsList[element.name] = element;
        });
        this.countryList = Object.keys(this.countryFullDetailsList);
        // To Store coutries details Values.
        this.store.dispatch(new AddCountry({...this.countrySelectedList,[val.value]:this.countryFullDetailsList}))
      }
    },err=>{
      console.log(err.message);
    });
  }
  }
}
  selectedCountry(val) {
    this.setCountryDetails(this.countryFullDetailsList[val.value])
  }
}
