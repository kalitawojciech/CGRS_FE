import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { UsersService } from '../services/users.service'
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private usersService: UsersService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.usersService.currentUserValue;
        const isLogedIn = currentUser && currentUser.token;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLogedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}