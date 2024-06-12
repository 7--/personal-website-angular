import { InfoField } from '../../models/infoField.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  private works: InfoField[] = [
    new InfoField('Junior Engineer (SA)', 'Everis', 'Oct. 2019 - Present', 'https://www.everis.com/spain/es/'),
    new InfoField('Unity Programmer internship', 'Everis', 'Feb. 2019 - Jul. 2019', 'https://www.everis.com/spain/es/'),
    new InfoField('Multimedia Programmer', 'Rücker Lypsa', 'Oct. 2017 - Dec. 2017', 'https://www.rueckerlypsa.es/'),
    new InfoField('Helpdesk IT', 'Wanup', 'July 2017 - Sept. 2017', 'https://www.rueckerlypsa.es/'),
    new InfoField('Animation internship', 'Campus La Salle', 'Sept. 2016 - May 2017', 'https://www.salleurl.edu/ca'),
    new InfoField('Sound Technician', 'Casa Orlandai', 'Sept. 2012 - May 2013', 'https://casaorlandai.cat')
  ];

  private education: InfoField[] = [
    new InfoField(
      'Bachelors of Science in Computer Science',
      'Rutgers, The State University of New Jersey - New Brunswick Campus',
      'Sep 2013 - Jan 2016',
      'https://www.cs.rutgers.edu/'
    )
  ];

  getEducation(): InfoField[] {
    return this.education;
  }

  getWorks(): InfoField[] {
    return this.works;
  }

}
