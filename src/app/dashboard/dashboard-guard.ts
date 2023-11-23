import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, Router } from "@angular/router";
import { Observable, take, tap } from "rxjs";
import { UserServiceService } from "../user-service.service";
import { Injectable, inject, Injector } from "@angular/core";


export const DashboardGuard = () => 
{
    const _loginService = inject(UserServiceService);
    const _router = inject(Router);

    return _loginService.isLoggedIn().pipe(
        take(1),
        tap((loggedIn) =>
            !loggedIn ? _router.navigate(['']) : true
        )
    );
}
