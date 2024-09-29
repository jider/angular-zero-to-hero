import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  deletedHero?: string;
  heroNames: string[] = ['Spider-man', 'Ironman', 'Hulk', 'Thor']

  get canDeleteHero(): boolean {
    return this.heroNames.length > 0;
  }

  deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
