import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settings: Settings = {
    allowRegistration: false,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
  };
  constructor() {}

  getSettings() {
    return this.settings;
  }
}
