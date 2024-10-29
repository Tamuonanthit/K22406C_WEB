import { Component } from '@angular/core';
import { Fashion } from '../models/fashion-client';
import { FashionClientService } from '../../service/fashion-client.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fashion-client-detail',
  templateUrl: './fashion-client-detail.component.html',
  styleUrl: './fashion-client-detail.component.css'
})
export class FashionClientDetailComponent {
  fashion = new Fashion() // fashion data to show
  id: string = '' // fashion id
  errMessage: string = ''

  constructor(private _service: FashionClientService, private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
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
