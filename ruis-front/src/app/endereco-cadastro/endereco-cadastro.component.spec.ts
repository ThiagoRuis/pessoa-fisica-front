import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoCadastroComponent } from './endereco-cadastro.component';

describe('EnderecoCadastroComponent', () => {
  let component: EnderecoCadastroComponent;
  let fixture: ComponentFixture<EnderecoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
