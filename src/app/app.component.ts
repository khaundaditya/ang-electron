import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-electron';

  constructor(private appservice: AppService) {}
  launchWindow(): void {
    this.appservice.launchWindow();
  }
  ngOnInit(): void {
    console.log('component initialized');
  }

}

