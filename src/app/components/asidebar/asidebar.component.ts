import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.scss']
})
export class AsidebarComponent {
  @Input() isOpen: boolean = true;
  @Output() toggleSidebar = new EventEmitter<void>();

  menuItems = [
    { route: '/Inicio', icon: 'fi fi-sr-home', text: 'INICIO' },
    { route: '/Articulos', icon: 'fi fi-rr-edit', text: 'ARTICULOS' },
    { route: '/colaboradores', icon: 'fi fi-sr-user', text: 'COLABORADORES' }
  ];

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
