import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logos_1 = ['assets/icons/icons8-html-5.svg', 'assets/icons/icons8-css3.svg', 'assets/icons/icons8-javascript.svg'];
  logos_2 = ['assets/icons/icons8-bootstrap.svg', 'assets/icons/icons8-react-native.svg', 'assets/icons/icons8-git.svg'];
  social_icons = [
    { name:'assets/icons/icons8-twitter-circled.gif', value_alt:'Twitter',}, 
    { name:'assets/icons/icons8-instagram.gif', value_alt:'Instagram',},
    { name:'assets/icons/icons8-linkedin-circled.gif', value_alt:'Linkedin',},
    { name:'assets/icons/icons8-github.gif', value_alt:'Github',}
  ];
  nav_text = ['Nosotros','Habilidades','Proyectos','Contacto'];
  projects_data = [
    {
      name: 'Adidas Sports',
      value_alt:'adidas-sports',
      path: 'assets/images/adidas.JPG'
    },
    {
      name: 'Nike Experience',
      value_alt:'nike-expeience',
      path: 'assets/images/nike.JPG'
    },
    {
      name: 'Puma Runners',
      value_alt:'puma-runners',
      path: 'assets/images/puma.JPG'
    }
  ];
}
