import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment18_4Demo';

  bookArray = [
    new Book(1,"abc",20),
    new Book(2,"abc1",20),
    new Book(3,"abc123",20)
  ]

}

class Book{
  bookId:number;
  bookName:string;
  bookPrice:number;
  constructor(bookId:number, bookName:string, bookPrice:number){
    this.bookId = bookId;
    this.bookName = bookName;
    this.bookPrice = bookPrice; 
  }


}