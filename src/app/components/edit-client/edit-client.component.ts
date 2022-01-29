import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  id!: string;
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0,
  };
  disableBalanceOnAdd: boolean = false;
  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.clientService.getClient(this.id).subscribe((client) => {
      this.client = client;
    });
  }

  onSubmit(data: Client) {
    data.id = this.id
    this.clientService.updateClient(data);
    this.router.navigate([`/client/${this.id}`]);
  }
}
