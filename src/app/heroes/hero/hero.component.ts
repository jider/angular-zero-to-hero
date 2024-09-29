import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name: string = 'ironman';
  age: number = 45;

  get canChangeName(): boolean {
    return this.name === 'ironman';
  }

  get canChangeAge(): boolean {
    return this.age === 45;
  }

  get capitalizedName(): string {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  get canResetHero(): boolean {
    return !(this.canChangeName && this.canChangeAge);
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroName(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetHero(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
