import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [AppService]
})
export class AppComponent implements OnInit {
  user: any;
  error: string;
  constructor(private appService: AppService) {
    this.appService = appService;
  }
  ngOnInit() {
      this.getUser();
      console.log('subscribe', this.user);
  }
  getUser(): void {
      this.appService.getUser().subscribe(
          data => {
              this.user = data;
          },
          error => {
              this.error = error;
          }
      );
  }
}
