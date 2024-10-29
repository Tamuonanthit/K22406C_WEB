import { Component } from '@angular/core';
import { FashionAdminService } from '../../service/fashion-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashion-admin',
  templateUrl: './fashion-admin.component.html',
  styleUrl: './fashion-admin.component.css'
})
export class FashionAdminComponent {
  fashions: any;
  errMessage: string = ''
  constructor(public _service: FashionAdminService, private _router: Router) {
    this.getFashions()
  }

  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  createFashion() {
    this._router.navigate(['/fashions/new'])
  }

  updateFashion(fashionId: string) {
    this._router.navigate(['/fashions/edit', fashionId])
  }

  detailFashion(fashionId: string) {
    this._router.navigate(['/fashions/detail', fashionId])
  }

  

  deleteFashion(fashionId: string) {
    // confirm delete
    if (confirm("Are you sure to delete this fashion?")) {
      this._service.deleteFashion(fashionId).subscribe({
        next: (data) => { this.fashions = data },
        error: (err) => { this.errMessage = err }
      })

      this.getFashions()
    }
  }
}
