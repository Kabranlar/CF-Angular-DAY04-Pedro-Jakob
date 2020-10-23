import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { DoggoDetailsComponent } from './doggo-details/doggo-details.component';

const routes: Routes = [
	{
		path : "", component : BlogComponent
	},{
		path : "about", component : AboutComponent
	},{
		path : "contact", component : ContactComponent
	},{
		path : "services", component : ServicesComponent
	},{
		path : "doggos/:doggoId", component : DoggoDetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
