import { Component, OnInit, Inject } from '@angular/core';
import { MenuRoutingService } from '../../services/menu-routing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: any[];
  constructor(private menuRoutingService: MenuRoutingService) { }

  ngOnInit() {
    this.menuItems = this.menuRoutingService.AllMenuItems;
  }

}
