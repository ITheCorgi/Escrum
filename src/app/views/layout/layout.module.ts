import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule} from '@angular/material/toolbar';

import { ToolbarComponent } from './toolbar/toobar.component';

@NgModule({
    imports: [CommonModule, FontAwesomeModule, MatToolbarModule],
    declarations: [ ToolbarComponent ],
    exports: [ ToolbarComponent ]
})
export class LayoutModule {}