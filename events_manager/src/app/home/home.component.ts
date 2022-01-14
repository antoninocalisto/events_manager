
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { filter, Subject, take, takeUntil } from 'rxjs';
import {AppComponent} from '../app.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loginValid = true;
  public nome = '';
  public solicitante = '';
  public org_responsavel = '';
  public disp_responsavel = '';

  public tip_publi = '';
  public modalidade_evento = '';
  public tip_comerci = '';
  public data_evento = '';



  private _destroySub$ = new Subject<void>();
  private readonly returnUrl: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _appComponent :AppComponent
  ) {
    
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  public ngOnInit(): void {
    
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public onSubmit(): void {
    this._appComponent.isAuthenticated = true;
    this._router.navigateByUrl('/home');
  }

}
