import { Injectable } from '@angular/core';
import { ActionEditComponent } from '@modules/users/components/action-edit/action-edit.component';


import { Type } from '@angular/core';
export class ComponentItem {
  constructor(public component: Type<any>, public data: any) {}
}



@Injectable({ providedIn: 'root' })
export class DynamicLoadService {
    constructor() { }
    getComponent() {
        return [
             new ComponentItem(ActionEditComponent, {name: 'Bombasto', bio: 'Brave as they come'}),
      
            // new ComponentItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),
      
            // new ComponentItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
            //                                   body: 'Submit your resume today!'}),
      
            // new ComponentItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
            //                                   body: 'Apply today'}),
          ];
    }
}