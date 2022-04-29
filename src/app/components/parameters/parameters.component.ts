import { Component, OnInit } from '@angular/core';
import {PageTitleService} from "../../services/page-title.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  name?: string;
  page = 1; // number

  constructor(
    private title: PageTitleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Les Paramètres d'url");

    // paramètre d'url
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.has('name')) {
        this.name = params.get('name')!;
      }
    })

    // paramètre de requête
    this.route.queryParamMap.subscribe( (params: ParamMap) => {
      if(params.has('page')) {
        this.page = +params.get('page')!; // + = Number()
      }
    });
  }

  public goBack(): void {
    this.router.navigateByUrl('/parameters');
  }

}
