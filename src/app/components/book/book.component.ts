import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/moduls/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService:BookService) { }
  book:Book[];
  ngOnInit(): void {
  }
  GetBooks()
  {
    this.bookService.GetBook().subscribe(data=>{
      this.book =data;})
  }
}
