import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent {
  navigation__home!: HTMLElement;
  navigation__search!: HTMLElement;
  navigation__library!: HTMLElement;

  navigationFirstItem() {
    let navigation__home = document.querySelector('.navigation__home-wrapper')!;
    let navigation__search = document.querySelector('.navigation__search-wrapper')!;
    let navigation__library = document.querySelector('.navigation__library-wrapper')!;
    navigation__home.classList.add('navActive');
    if(navigation__search.classList.contains('navActive')) {
      navigation__search.classList.remove('navActive');
    }
    if(navigation__library.classList.contains('navActive')) {
      navigation__library.classList.remove('navActive');
    }
  }

  navigationSecondItem() {
    let navigation__home = document.querySelector('.navigation__home-wrapper')!;
    let navigation__search = document.querySelector('.navigation__search-wrapper')!;
    let navigation__library = document.querySelector('.navigation__library-wrapper')!;
    navigation__search.classList.add('navActive');
    if(navigation__home.classList.contains('navActive')) {
      navigation__home.classList.remove('navActive');
    }
    if(navigation__library.classList.contains('navActive')) {
      navigation__library.classList.remove('navActive');
    }
  }

  navigationThirdItem() {
    let navigation__home = document.querySelector('.navigation__home-wrapper')!;
    let navigation__search = document.querySelector('.navigation__search-wrapper')!;
    let navigation__library = document.querySelector('.navigation__library-wrapper')!;
    navigation__library.classList.add('navActive');
    if(navigation__home.classList.contains('navActive')) {
      navigation__home.classList.remove('navActive');
    }
    if(navigation__search.classList.contains('navActive')) {
      navigation__search.classList.remove('navActive');
    }
  }
}
