import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.scss']
})
export class DebtListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToDetail(id): void {
    console.log(id, typeof id);
    this.router.navigate(['./', id], { relativeTo: this.route });
  }

  onDelete(id): void {
    console.log(id);
  }

  addNewDebt(event): void {
    console.log(event);
    this.router.navigate(['./add'], { relativeTo: this.route });
  }
}
