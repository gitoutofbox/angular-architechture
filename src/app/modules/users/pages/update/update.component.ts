import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit {
    private id: number;
    private submitted: boolean;
    private duplicateEmailDbounce;
    private userForm = this.fb.group({
        id: [''],
        username: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.email]), this.isEmailUnique.bind(this)],
        password: ['', Validators.compose([Validators.required])]
    });
    constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
      this.route.params.subscribe( params  => {
          this.id = params['id'];
      } );
    }
    isEmailUnique(control: FormControl) {
      clearTimeout(this.duplicateEmailDbounce);
      const q = new Promise((resolve, reject) => {
        this.duplicateEmailDbounce = setTimeout(() => {
          console.log('sss')
          resolve({ 'isEmailUnique': true });
          //resolve(null);
          // this.userService.isEmailRegisterd(control.value).subscribe(() => {
          //   resolve(null);
          // }, () => { resolve({ 'isEmailUnique': true }); });
        }, 1000);
      });
      return q;
    }
    ngOnInit() {
      
    }
    // setupEditData(editDataObj: Email) {
    //     this.editData = {id:editDataObj.id, name: editDataObj.name, email: editDataObj.email};
    //     this.userForm.setValue(this.editData);
    // }

    
    onSubmit(){
    //     this.submitted = true;
    //     if(this.userForm.valid) {
    //         let postData = {
    //             id      : this.userForm.value.id,
    //             name    : this.userForm.value.name,
    //             email   : this.userForm.value.email
    //         }
    //         if(this.userForm.value.id != '') {
    //             this.apiService.put('http://localhost:3003/email', postData).subscribe(data => {
                    
    //                 this.messageService.setMessage(1);
    //                 this.router.navigate(['/emails']);
    //             });
    //         } else {
    //             this.apiService.post('http://localhost:3003/email', postData).subscribe(data => {
    //                 this.router.navigate(['/emails']);
    //             });
    //         }
    //     }
        
     };
    

}
