import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients',
  providers: [ClientService],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  // Properties
  clients: Client[] = [];
  totalOwed: number = 0;
  // Inject service in constructor method
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    // Fetch clients
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
      this.getTotalOwed();
    });
  }
  getTotalOwed() {
    this.totalOwed = this.clients.reduce((total, client) => {
      return total + Number(client.balance);
    }, 0);
  }
}
