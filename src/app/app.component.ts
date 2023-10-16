import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portifolio';

  constructor() {};

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("ativ-info");
      }


    });

    Array.from(document.querySelectorAll('.desac-info')).forEach(element=>{
      observer.observe(element)
    });



  }


  scrolla() {
    const element = document.getElementById('conteinerinfo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
  scrollb() {
    const element = document.getElementById('h1-pj');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  scrollc() {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  scrolld() {
    const element = document.getElementById('serv');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }












}
