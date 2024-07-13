import { Component } from '@angular/core';
import { SlideShowComponent } from "./slide-show/slide-show.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [SlideShowComponent]
})
export class DashboardComponent {

}
