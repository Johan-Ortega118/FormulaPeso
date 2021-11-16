import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Si mando un valor de 20 en masa, al darle click al boton de calcular, debería mostrar un valor de 196', () => {
    let result = 0;
    component.value = 20;
    component.calcular();
    result = component.resultado;
    expect(result).toBe(196);
  });
  it('Si mando un valor de 30 en el text Box de masa, masa debe valer 30', () => {
    let result = 0;
    result = component.value = 30;
    expect(result).toBe(30);
  });
});
