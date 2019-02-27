import {Component, Input, OnInit} from '@angular/core';
import {Site} from "../site";
import * as $ from 'jquery';

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.scss']
})
export class SiteDetailComponent implements OnInit {
  @Input() site: Site;


  constructor() { }

  ngOnInit() {
      $('.modal-site').hide()
  }

  showSiteDemo():void {
      $('.modal-site').show();
  }


}
