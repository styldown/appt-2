import { Component } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-credentiel',
  templateUrl: './credentiel.component.html',
  styleUrls: ['./credentiel.component.scss']
})
export class CredentielComponent {
  user=User;

}
