import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { AuthGuard } from './auth/auth.guard';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
  { path: '', component: TemplateComponent , pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
