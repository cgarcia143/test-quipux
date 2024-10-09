import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {
  contactInfo = {
    direccion: 'Carrera 52 # 91-66\nMedellín Colombia',
    correoElectronico: 'usuarioapellido@hotmail.com',
    sitioWeb: 'www.usuarioapellido.com',
    redSocial: {
      instagram: 'www.instagram.com/usuarioapellido',
      linkedin: 'www.linkedin.com/in/usuarioapellido'
    },
    direccionCorrespondencia: 'Carrera 52 # 91-66\nEnvigado Colombia',
    telefonos: {
      fijo: '+57 (4) 313-70-00',
      celular: '(312) 313-44-77'
    }
  };

  carouselImages = [
    { src: 'https://via.placeholder.com/100', alt: 'Image 1' },
    { src: 'https://via.placeholder.com/100', alt: 'Image 2' },
    { src: 'https://via.placeholder.com/100', alt: 'Image 3' },
  ];

  galleryItems = [
    {
      "id": "1",
      "src": "https://via.placeholder.com/100",
      "name": "Titulo del artículo",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?"
    },
    {
      "id": "2",
      "src": "https://via.placeholder.com/100",
      "name": "Titulo del artículo",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?"
    },
    {
      "id": "3",
      "src": "https://via.placeholder.com/100",
      "name": "Titulo del artículo",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?"
    },
    {
      "id": "4",
      "src": "https://via.placeholder.com/100",
      "name": "Titulo del artículo",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
