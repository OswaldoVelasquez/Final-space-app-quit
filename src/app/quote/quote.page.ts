import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage implements OnInit {

  public citas: Array<any>

  constructor(
    private ApiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ApiService.getQuote().then(result => {
      console.log(result)
      this.citas = result
    })
  }

}
