import { Component, OnInit } from '@angular/core';
declare var $: any;





@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss']
})
export class TestimonialSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.owl-carousel').owlCarousel({
          loop:true,
          margin:50,
          responsiveClass:true,
          responsive:{
              0:{
                  items:1,
                  nav:true
              },
              600:{
                  items:2,
                  nav:false
              },
              1000:{
                  items:2,
                  nav:true,
                  loop:false
              }
          }
      })

  }

}
