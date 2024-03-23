import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponentComponent } from "./component/dashboard-component/dashboard-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DashboardComponentComponent]
})
export class AppComponent {
  title = 'Problem_2';
}
