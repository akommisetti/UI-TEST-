import {Action} from '@ngrx/store';
export enum ActionTypes {
  Add = '[ CountryDetailsComponent] Add',
  AddCountryDetails = '[ CountryDetailsComponent] AddCountryDetails'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class CountryDetailsAdd implements ActionEx {
  readonly type = ActionTypes.Add;
  constructor(public payload: any) {
  }
}
export class AddCountry implements ActionEx {
  readonly type = ActionTypes.AddCountryDetails;
  constructor(public payload: any) {
  }
}