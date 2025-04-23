import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interface/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Dimitris';

  // Step 1: One way binding of data
  person = {
    givenName: 'Dimitris',
    surName: 'Anagnostopoulos',
    age: '31',
    email: 'dimitris_anagn@hotmail.com'
  }

  // Step 3: Component Input
  person0: Person = {
    givenName: "Christodoulos",
    surName: "Fragkoudakis",
    age: 55,
    email: "chfrag@aueb.gr",
    address: "Athens, Greece"
  }

  person1: Person = {
    givenName: "John",
    surName: "Doe",
    age: 32,
    email: "john@example.com",
    address: "New York, USA"
  }

  users: Person[] = [
    {
    "givenName": "Dalston",
    "surName": "Pursglove",
    "email": "dpursglove0@wordpress.com",
    "age": 1,
    "address": "11th Floor"
  }, {
    "givenName": "Grayce",
    "surName": "Darnell",
    "email": "gdarnell1@washingtonpost.com",
    "age": 2,
    "address": "Suite 87"
  }, {
    "givenName": "Trenton",
    "surName": "Le Brum",
    "email": "tlebrum2@ebay.co.uk",
    "age": 3,
    "address": "Room 1743"
  }, {
    "givenName": "Valentijn",
    "surName": "Fidelli",
    "email": "vfidelli3@ehow.com",
    "age": 4,
    "address": "Room 725"
  }, {
    "givenName": "Carleton",
    "surName": "Vasyunin",
    "email": "cvasyunin4@cnet.com",
    "age": 5,
    "address": "Apt 845"
  }, {
    "givenName": "Ric",
    "surName": "Acutt",
    "email": "racutt5@dot.gov",
    "age": 6,
    "address": "Apt 1374"
  }, {
    "givenName": "Husein",
    "surName": "McDiarmid",
    "email": "hmcdiarmid6@ucla.edu",
    "age": 7,
    "address": "Room 1007"
  }, {
    "givenName": "Ofilia",
    "surName": "Beric",
    "email": "oberic7@jiathis.com",
    "age": 8,
    "address": "Room 166"
  }, {
    "givenName": "Nealon",
    "surName": "Jeynes",
    "email": "njeynes8@naver.com",
    "age": 9,
    "address": "Suite 28"
  }, {
    "givenName": "Dame",
    "surName": "Rotham",
    "email": "drotham9@discuz.net",
    "age": 10,
    "address": "PO Box 8394"
  }, {
    "givenName": "Bogart",
    "surName": "Brito",
    "email": "bbritoa@yelp.com",
    "age": 11,
    "address": "Room 841"
  }, {
    "givenName": "Jenifer",
    "surName": "Barfitt",
    "email": "jbarfittb@e-recht24.de",
    "age": 12,
    "address": "Suite 96"
  }, {
    "givenName": "Erskine",
    "surName": "Abys",
    "email": "eabysc@ca.gov",
    "age": 13,
    "address": "13th Floor"
  }, {
    "givenName": "Bartholemy",
    "surName": "Hugenin",
    "email": "bhugenind@seesaa.net",
    "age": 14,
    "address": "Apt 1167"
  }, {
    "givenName": "Ellynn",
    "surName": "McLise",
    "email": "emclisee@unesco.org",
    "age": 15,
    "address": "Apt 1767"
  }, {
    "givenName": "Cortie",
    "surName": "Ber",
    "email": "cberf@ebay.co.uk",
    "age": 16,
    "address": "16th Floor"
  }, {
    "givenName": "Ainslee",
    "surName": "Gowers",
    "email": "agowersg@psu.edu",
    "age": 17,
    "address": "Suite 15"
  }, {
    "givenName": "Nicolette",
    "surName": "Losemann",
    "email": "nlosemannh@ameblo.jp",
    "age": 18,
    "address": "Apt 1775"
  }, {
    "givenName": "Anderea",
    "surName": "Jatczak",
    "email": "ajatczaki@wunderground.com",
    "age": 19,
    "address": "Suite 83"
  }, {
    "givenName": "Saudra",
    "surName": "Wallbrook",
    "email": "swallbrookj@ehow.com",
    "age": 20,
    "address": "Apt 1802"
  }]  
}