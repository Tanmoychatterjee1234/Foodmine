import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../../services/search-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(
    private searchService: SearchService
  ) { }

  search(term: string): void {

    this.searchService.setSearchTerm(term);

  }
}
