import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [UserListComponent, UserComponent, UserAddComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [UserListComponent, UserComponent, UserAddComponent]
})
export class UsersModule { }
