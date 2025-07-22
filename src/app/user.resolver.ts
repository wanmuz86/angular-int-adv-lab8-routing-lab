import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';

// userResolver of type ResolveFn going to be created
// route - activated route [ route the resolver is attached to ]
// state - router state [ current router state ]
export const userResolver: ResolveFn<any> = (route, state) => {
  
  
  // get the id from the route parameters/url
  const id = route.paramMap.get('id'); 
  // simulate an API call to retrieve the users
  return of({name:"User " + id, id: id}); // Replace with actual API call
  
};
