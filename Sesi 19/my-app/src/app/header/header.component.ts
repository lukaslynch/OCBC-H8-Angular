import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() message = '';

  constructor() { }

  ngOnInit(): void {
  }

}
