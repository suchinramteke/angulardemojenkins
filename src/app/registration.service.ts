import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }


  getAllUsers() {
    return this.http.get("http://localhost:5000/api/user/")
  }

  saveUserInfo(data) {
    return this.http.post("http://localhost:5000/api/user/", data)
  }


  updateUserInfo(data) {
    return this.http.put("http://localhost:5000/api/user/", data)

  }

  deleteUser(id) {
    return this.http.delete("http://localhost:5000/api/user/" + id)
  }


}
