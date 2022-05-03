import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { Router } from '@angular/router';
import { Post } from '@app/_models/post';

@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.scss']  })
export class HomeComponent {
    loading = false;
    currentUser: User | null = null;
    

    constructor(private userService: UserService,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    // constructor(private userService: UserService) { }

    ngOnInit() {
    }
    
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    
}