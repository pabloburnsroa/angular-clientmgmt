import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

import { SettingsService } from 'src/app/services/settings.service';
import { Client } from 'src/app/models/Client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  // Client property
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0,
  };

  // Disable balance add
  disableBalanceOnAdd: boolean =
    this.settingsService.getSettings().disableBalanceOnAdd;
  // Submitted form
  submitted = false;
  constructor(
    private clientService: ClientService,
    private router: Router,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {}

  onSubmit(data: Client) {
    this.clientService.newClient(data);
    this.router.navigate(['/']);
  }
}
