import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input("InputSearchBox")
  public placeholder: string = "";

  @Output("OutputSearchbox-term")
  public onSearchTerm: EventEmitter<string> = new EventEmitter();

  public emitTerm(term: string): void {

    if(term.length === 0) return;

    this.onSearchTerm.emit(term);
  }

}
