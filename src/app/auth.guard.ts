import { CanActivateFn } from '@angular/router';

import { inject } from '@angular/core';
// In Angular 19+, the guard is by default a function
// and does not require a class implementation.

export const authGuard: CanActivateFn = (route, state) => {
  // Injecting a Service inside a function
  // const authService = inject(AuthService)
  // if (!authService.isLoggedIn()) {
    // }

  const loggedIn = confirm("Are you logged in?"); // Replace with actual authentication logic
  return loggedIn; // true if logged in, false otherwise
};

// If you want to try, can add CanDeactivate guar to check are you sure to exit?
