import { Component, OnInit } from '@angular/core';


export interface Section {
  name: string;
  updated: Date;
  status: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  folders: Section[] = [
    {
      name: 'Título Push notification',
      updated: new Date('1/1/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/17/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/28/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/1/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/17/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/28/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/1/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/17/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/28/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/1/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/17/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/28/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/1/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/17/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/28/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/1/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/17/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/28/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/1/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/17/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/28/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/1/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/17/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/28/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/1/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/17/16'),
      status: 'completed'
    },
    {
      name: 'Título Push notification',
      updated: new Date('1/28/16'),
      status: 'completed'
    },
  ];

}
