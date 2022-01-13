import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'Gestão de eventos';
  public isAuthenticated = false;
  private _destroySub$ = new Subject<void>();

  constructor(private _authService: AuthService) { }

  public ngOnInit(): void {
   
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public logout(): void {
    this._authService.logout('/').pipe(take(1));
  }
}