import { Component } from '@angular/core';

@Component({
  selector: 'app-cont-component',
  templateUrl: './cont-component.component.html',
  styleUrls: ['./cont-component.component.css']
})
export class ContComponentComponent {



/*   atvdisplay(){
    const divalt = document.getElementById('info-contato');
    if(divalt){
      divalt.style.display='flex';
    }
  } */



 /*   desadisplay(){
    const dvalt = document.getElementById('info-contato');
    if(dvalt){
      dvalt.style.display='flex';
    }
  } */
  onstructor() {};

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("info-contato-on");

      }
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("contato-on");

      }
    });

    Array.from(document.querySelectorAll('.info-contato')).forEach(element=>{
      observer.observe(element)
    });
    Array.from(document.querySelectorAll('.contato')).forEach(element=>{
      observer.observe(element)
    });

    }

  
  }




