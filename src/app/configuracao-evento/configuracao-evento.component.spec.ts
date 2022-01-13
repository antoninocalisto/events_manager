import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoEventoComponent } from './configuracao-evento.component';

describe('ConfiguracaoEventoComponent', () => {
  let component: ConfiguracaoEventoComponent;
  let fixture: ComponentFixture<ConfiguracaoEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracaoEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
