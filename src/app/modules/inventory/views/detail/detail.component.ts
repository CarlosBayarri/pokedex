import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public pokemon$: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.pokemon$ = this.store.select('inventory').pipe(pluck('pokemon'));
  }

}
