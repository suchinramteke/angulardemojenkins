import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  info: any[] = [];
  id: number = 0;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(private registrationServices: RegistrationService) { }

  ngOnInit(): void {

    this.getData()

  }

  SubmitForm() {
    console.log(this.profileForm.value)
    this.registrationServices.saveUserInfo(this.profileForm.value).subscribe(res => {
      console.log(res)
      this.getData()
    })
  }

  getData() {
    this.registrationServices.getAllUsers().subscribe(res => {
      console.log(res['data'])
      this.info = res['data']
      console.log(this.info)
    })
  }

  deleteUser(id) {
    console.log(id)
    this.registrationServices.deleteUser(id).subscribe(res => {
      console.log(res)
      this.getData()
    })
  }

  editUser(item) {
    this.id = item.id
    let editData = {
      "firstName": item.firstName,
      "lastName": item.lastName,
      "email": item.email
    }

    this.profileForm.setValue(editData)
  }

  UpdateForm() {
    let data = {
      "id": this.id,
      "firstName": this.profileForm.value.firstName,
      "lastName": this.profileForm.value.lastName,
      "email": this.profileForm.value.email
    }


    this.registrationServices.updateUserInfo(data).subscribe(res => {
      console.log(res)
      this.getData()
    })
  }

}
