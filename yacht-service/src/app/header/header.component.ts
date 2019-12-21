import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onToggleButtonPress(navbar: any): void {
    var classList : DOMTokenList = navbar.classList;

    if (classList.contains("collapse")) {
      classList.remove("collapse");
    }
    else {
      classList.add("collapse");
    }
  }

  onDropDownPress(dropDownContent: any): void {
    if (dropDownContent.style.display === '') {
      dropDownContent.style.display = 'none';
    }
    else {
      dropDownContent.style.display = '';
    }
  }
}
