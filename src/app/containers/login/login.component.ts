import {Component, OnInit} from '@angular/core';
import {AuthService, IUser} from 'app/services/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private user: IUser = {
        email: 'test@test',
        nickname: 'test'
    };

    constructor(private auth: AuthService,
                private router: Router) {
    }

    ngOnInit() {
    }

    login(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.auth.loginAsUser(this.user)
            .then(() => {
                this.router.navigate(['home']);
            });
    }

}
