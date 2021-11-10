import { Component, OnInit } from '@angular/core';
import { PricesService } from '../../services/prices.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public records: any[] = [];

  constructor( private pricesService: PricesService ) { }

  ngOnInit(): void {}

  buscar(termino: string): void {
    console.log('termino', termino);
    this.pricesService.getPriceforASymbol(termino).subscribe(resp => {
      console.log('respuesta', resp.bookTickers);
    });

  }

}
