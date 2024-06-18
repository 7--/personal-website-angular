import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts = [
    new Contact('/philrego', 'https://www.linkedin.com/in/philrego/', 'linkedin', 'linkedin'),
    new Contact('philip.rego.career@gmail.com', 'mailto:philip.rego.career@gmail.com', 'email', 'envelope'),
    new Contact('/7--', 'https://github.com/7--', 'github', 'github'),
    new Contact('philip-rego', 'https://stackoverflow.com/users/1308453/philip-rego', 'stackoverflow', 'stack-overflow'),
    new Contact('@philrego', 'https://twitter.com/philrego', 'twitter', 'twitter')
  ];
}
