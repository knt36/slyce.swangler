import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {

  @Input() tags: Object;
  Object = null;

  constructor() { }

  ngOnInit() {
    this.Object = Object;
  }

}