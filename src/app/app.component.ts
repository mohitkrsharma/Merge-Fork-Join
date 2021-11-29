import { Component, OnInit } from '@angular/core';
import { forkJoin, merge, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    /* Code for Merge Join */
    let list1 = of(1, 2, 3, 4, 5);
    let list2 = of(6, 7, 8, 9, 10);
    let list3 = merge(list1, list2);
    list3.subscribe((data: any) => console.log(data));

    /* Code for Fork Join */
    let list4 = of(11, 12, 13, 14, 15);
    let list5 = of(16, 17, 18, 19, 20);
    let list6 = forkJoin(list4, list5);
    list6.subscribe((data: any) => console.log(data));
  }
  title = 'Merge-Fork-Join';
}
