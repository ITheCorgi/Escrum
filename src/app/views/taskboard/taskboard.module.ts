import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskboardViewComponent } from './taskboard-view.component';
import { fakeProvider } from '../../@core/services/fake.service';

const routes: Routes = [
    {
        path: '',
        component: TaskboardViewComponent,
        children: [
            { path: '', redirectTo: 'taskboard', pathMatch: 'full' },
            { path: 'taskboard', component: TaskboardViewComponent },
            { path: '' }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ TaskboardViewComponent ],
    providers: [ fakeProvider ]
})
export class TaskboardModule {}
