import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {IPage} from "../models/IPage";

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private storageName: string = "Settings";
  public storageFill: boolean = false;

  public pageData: Subject<IPage> = new Subject<IPage>()

  constructor() { }

  setSettings(data: any) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
    this.storageFill = true;
  }

  getUserSettings() {
    let data = localStorage.getItem(this.storageName);
    return JSON.parse(data!);
  }

  clearUserSettings() {
    localStorage.removeItem(this.storageName);
  }

  cleanAll() {
    localStorage.clear()
  }
}
