import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("card-on");

      }

      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("card-hab-on");
      }


    });

    Array.from(document.querySelectorAll('.card')).forEach(element=>{
      observer.observe(element)
    });
    Array.from(document.querySelectorAll('.card-hab')).forEach(element=>{
      observer.observe(element)
    });











  }

}
