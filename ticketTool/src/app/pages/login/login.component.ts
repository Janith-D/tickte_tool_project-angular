import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MasterService} from '../../services/master.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj : any ={
    "emailId": "",
    "password": ""
  }
  masterService =inject(MasterService);
  router = inject(Router);

  onLogin(){
    return this.masterService.login(this.loginObj).subscribe((res:any) =>{
      if(res.result){
        localStorage.setItem("ticketuser",JSON.stringify(res.data));
        this.router.navigateByUrl("dashboard");
      }else {
        alert(res.message);
      }
    })
  }
}

