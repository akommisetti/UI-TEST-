import {ActionEx, ActionTypes} from './customer.actions';
export const initialState = {
  region:['Europe','Asia'],
  countryDetails:{},
  selectedCountry:{}
};
export function CustomerReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case ActionTypes.Add:
      return {...state, selectedCountry:action.payload};
    case ActionTypes.AddCountryDetails:
      return {...state, countryDetails:action.payload};
    default:
      return state;
  }
}
