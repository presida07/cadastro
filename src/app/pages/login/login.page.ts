import { Component, OnInit } from '@angular/core';
import { AuthentivationService } from './../../authentivation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm : FormGroup

  constructor(public formBuilder: FormBuilder, public loadingCtlr: LoadingController, public authService: AuthentivationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['',[
        Validators.required,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
        Validators.email,
      ]],
      password:['',[
      Validators.required,
      Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
      ]]
    })
  }

  get errorControl(){
    return this.loginForm?.controls;
  }

  async signUp(){
    const loading = await this.loadingCtlr.create();
    await loading.present();
    if(this.loginForm?.valid){
      
      // const user = await this.authService.registerUser(email,password)
    }
  }

}
