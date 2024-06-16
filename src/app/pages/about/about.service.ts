import { InfoField } from '../../models/infoField.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  private works: InfoField[] = [
    new InfoField('Technical Lead - Full Stack Java Developer', 'Tata Consultancy Services, Citi Bank & MetLife', 'Aug 2020 - Present', null),
    new InfoField('Full Stack Java Developer', 'Mphasis, Chase Wilmington DE', 'September 2018 - March 2020', null),
    new InfoField('Junior C# and Java developer', 'Revature, Walmart ISD Bentonville AR & Revature Reston VA', ' July 2016 - April 2018', null),
  ];

  private education: InfoField[] = [
    new InfoField(
      'Bachelors of Science in Computer Science',
      'Rutgers, The State University of New Jersey - New Brunswick Campus',
      'Jan 2016',
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
