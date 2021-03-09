import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';

import { ToolbarComponent } from './toolbar/toobar.component';

@NgModule({
    imports: [ CommonModule, FontAwesomeModule, MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule ],
    declarations: [ ToolbarComponent ],
    exports: [ ToolbarComponent ]
})
export class LayoutModule {}