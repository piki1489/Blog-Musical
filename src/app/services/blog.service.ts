import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [
      {
        title: 'Metallica Master of Puppets',
        text: 'Master of Puppets es el tercer álbum de estudio del grupo musical de thrash metal estadounidense Metallica',
        author: 'Metallica',
        image: 'https://m.media-amazon.com/images/I/81j7xM-oijL._SY355_.jpg',
        date: 0,
        category: 'metall-hardrock'
      },
      {
        title: 'Iowa',
        text: 'Iowa es el segundo álbum de estudio de la banda estadounidense de metal alternativo Slipknot, lanzado a través de Roadrunner Records.',
        author: 'Slipknot',
        image: 'https://m.media-amazon.com/images/I/71zfiinJ7sL._SX355_.jpg',
        date: 0,
        category: 'metall-hardrock'
      },
      {
        title: 'Origin of Symmetry',
        text: 'Origin of Symmetry —en español: El origen de la simetría— es el segundo álbum de estudio de la banda británica de rock, Muse',
        author: 'Muse',
        image: 'https://m.media-amazon.com/images/I/61kq0FY0ZBL._AC_UY218_.jpg',
        date: 0,
        category: 'rock'
      },
      {
        title: 'Imaginations from the Other Side',
        text: 'Imaginations from the Other Side es el quinto disco del grupo alemán de power metal Blind Guardian, lanzado en 1995',
        author: 'Blind Guardian',
        image: 'https://m.media-amazon.com/images/I/81CnNVpOBiL._AC_UY218_.jpg',
        date: 0,
        category: 'heavy'
      },
      {
        title: 'The Number of the Beast',
        text: 'The Number of the Beast es el tercer álbum de estudio de la banda británica de heavy metal Iron Maiden.',
        author: 'Iron Maiden',
        image: 'https://m.media-amazon.com/images/I/81vfiy9qNiL._AC_UY218_.jpg',
        date: 0,
        category: 'heavy'
      },
      {
        title: 'OK Computer ',
        text: 'OK Computer es el tercer álbum de estudio de la banda británica de rock alternativo Radiohead, lanzado el 21 de mayo de 1997',
        author: 'Radiohead',
        image: 'https://m.media-amazon.com/images/I/51Nc40BMGnL._AC_UY218_.jpg',
        date: 0,
        category: 'rock'
      },
      {
        title: 'Antichrist Superstar',
        text: 'Antichrist Superstar es el segundo álbum de estudio de la banda estadounidense de metal industrial Marilyn Manson.',
        author: 'Marilyn Manson',
        image: 'https://m.media-amazon.com/images/I/51JcOHj46zL._SX355_.jpg',
        date: 0,
        category: 'metall-hardrock'
      },
      {
        title: 'The Colour and the Shape',
        text: 'The Colour and the Shape es el segundo álbum de la banda Foo Fighters. Fue lanzado al mercado el 20 de mayo de 1997',
        author: 'Foo Fighters',
        image: 'https://m.media-amazon.com/images/I/61VZ-Y46h+L._AC_UY218_.jpg',
        date: 0,
        category: 'rock'
      }

    ];
  }

  createPost(form: any) {
    this.arrPost.push(form)
  }

  getAll() {
    return this.arrPost;
  }

  getByCategory(category: string) {
    return this.arrPost.filter(post => post.category === category);
  }
}
