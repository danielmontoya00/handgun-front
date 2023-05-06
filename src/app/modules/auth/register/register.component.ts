import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { login, registrar } from 'src/app/auth_services/store/auth.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: UntypedFormGroup;
  subs: Subscription[] = [];

  constructor(
    private fb: UntypedFormBuilder,
    private store: Store<AppState>
  ) {
    this.form = this.fb.group({
      correo: new UntypedFormControl(localStorage.getItem('correo'), [Validators.required, Validators.email]),
      password: new UntypedFormControl('', [Validators.required]),
      firstName: new UntypedFormControl('', [Validators.required]),
      lastName: new UntypedFormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // this.subs[0] = this.store.select('auth').pipe(map((x) => x.error)).subscribe(async (x) => {
    //   if (x) {
    //     let errorMensaje;

    //     switch (x.status) {
    //       case 400:
    //         errorMensaje = 'Correo o contraseña incorrectos';
    //         break;
    //       default:
    //         errorMensaje = x.error.message || (x.error.message && x.error.message[0]?.messages[0]?.message);
    //         break;
    //     }
    //     // this.shared.enviarAlerta('error', 'Error', errorMensaje);
    //   }
    // });
  }

  enviar() {
    console.log("ENVIAR")
    if (this.form.invalid) {
      // this.shared.enviarAlerta('warning', 'Error', 'Formulario inválido');
      return;
    }
    localStorage.setItem('correo', this.form.value.correo);
    this.store.dispatch(registrar({
      email: this.form.value.correo,
      password: this.form.value.password,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName
    }));
  }

}
