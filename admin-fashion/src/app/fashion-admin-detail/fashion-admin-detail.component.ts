import { Component } from '@angular/core';
import { FashionAdminService } from '../../service/fashion-admin.service';
import { Fashion } from '../../models/Fashion';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-fashion-admin-detail',
  templateUrl: './fashion-admin-detail.component.html',
  styleUrl: './fashion-admin-detail.component.css'
})
export class FashionAdminDetailComponent {
  id: string = ''
  fashion = new Fashion() 
  errMessage: string = ''

  constructor(private _service: FashionAdminService, private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] 
      if (this.id != null){
        this.searchFashion(this.id) // get fashionselected
      } else {
        window.alert('Invalid fashion id to show')
        this._router.navigate(['/fashions'])
      }
    })
  }

  searchFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashion = data },
      error: (err) => { this.errMessage = err },
    })
  }
}
