import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit {


  // Subject: tipo especial de observable
  private debouncer: Subject<string> = new Subject<string>();

  @Input("InputSearchBox")
  public placeholder: string = "";

  @Output("OutputSearchbox-term")
  public onSearchTerm: EventEmitter<string> = new EventEmitter();

  @Output("OutputSearchbox-debounce")
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(500) // Esperamos 1 segundo entre cada emisión
    )
    .subscribe(value => {
      this.onDebounce.emit(value)
    })
  }

  public emitTerm(term: string): void {

    if (term.length === 0) return;

    this.onSearchTerm.emit(term);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

}
