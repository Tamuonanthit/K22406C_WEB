import { Component } from '@angular/core';
import { FashionAdminService } from '../../service/fashion-admin.service';

@Component({
  selector: 'app-fashion-admin-delete',
  templateUrl: './fashion-admin-delete.component.html',
  styleUrl: './fashion-admin-delete.component.css'
})
export class FashionAdminDeleteComponent {
  fashions: any
  fashionId: string = ''
  errMessage: string = ''

  constructor(private _service: FashionAdminService) {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err },
    })
  }

  deleteFashion(fashionId: string) {
    if (this.validate(fashionId)) {
      this._service.deleteFashion(fashionId).subscribe({
        next: (data) => {
          this.fashions = data,
            this.errMessage = 'Delete successfully',
            this.reset(),
            this.getFashions()
        },
        error: (err) => { this.errMessage = err },
      })
    }
  }


  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err },
    })
  }


  reset() {
    this.fashionId = ''
    this.errMessage = ''
  }


  validate(fashionId: string) {
    if (fashionId == '') {
      this.errMessage = 'Please enter fashion id'
      return false
    } else
      if (!/^[0-9a-fA-F]{24}$/.test(fashionId)) {
        this.errMessage = 'Fashion id is not hex string'
        return false
      }
      else {
        this.errMessage = ''
        return true
      }
  }
}
