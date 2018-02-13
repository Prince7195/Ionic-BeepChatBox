import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { LoginFormComponent } from './login-form/login-form.components';
import { RegisterFormComponent } from "./register-form/register-form.component";
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

@NgModule({
  declarations: [LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent],
  imports: [IonicModule],
  exports: [LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent]
})
export class ComponentsModule {}
