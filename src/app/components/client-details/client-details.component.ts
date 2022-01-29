import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Client } from '../../models/Client';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
})
export class ClientDetailsComponent implements OnInit {
  id!: string;
  client!: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;
  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.clientService.getClient(this.id).subscribe((client) => {
      this.client = client;
      // console.log(this.client);
      if (client !== null) {
        if (client.balance! > 0) {
          this.hasBalance = true;
        }
      }
    });
    // this.client = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.clientService.getClient(params.get('id')!)
    //   )
    // );
  }

  onDeleteClick() {
    if (confirm('Are you sure?')) {
      this.clientService.deleteClient(this.client);
    }
    this.router.navigate(['/']);
  }

  updateBalance() {
    this.clientService.updateClient(this.client);
  }
}
