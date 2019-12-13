import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'p:layoutContent',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './../resource/css/AdminLTE.css', './../resource/css/all-skins.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit, OnDestroy {

  
  constructor( ) {}

  ngOnInit() {
    
  }

  ngOnDestroy() {

  }

}
