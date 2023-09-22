import { AuthentivationService } from './../../authentivation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regForm: FormGroup

  constructor(public formBuilder: FormBuilder, public loadingCtlr: LoadingController, public authService: AuthentivationService ) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname:['', [Validators.required]],
      email:['',[
        Validators.required,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
        Validators.email,
      ]],
      password:['',
      Validators.required,
      Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
      ]
    })
  }

  get errorControl(){
    return this.regForm?.controls;
  }

  async signUp(){
    const loading = await this.loadingCtlr.create();
    await loading.present();
    if(this.regForm?.valid){
      // const user = await this.authService.registerUser(email,password)
    }
  }

}
