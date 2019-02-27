import {Component, OnInit} from '@angular/core';
import {Site} from "../site";
import {SITES} from "../mock-sites";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    sites = SITES;


    selectedSite: Site;

    constructor() {
    }

    ngOnInit() {
        this.selectedSite = SITES[0];

    }


    onSelect(site: Site): void {
        this.selectedSite = site;
    }

}
