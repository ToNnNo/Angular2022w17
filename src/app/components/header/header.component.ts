import { Component, OnInit } from '@angular/core';
import {PageTitleService} from "../../services/page-title.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title?: string;

  constructor(private pageTitle: PageTitleService) { }

  ngOnInit(): void {
    this.pageTitle.getTitle().subscribe({
      next: title => this.title = title
    });
  }

}
