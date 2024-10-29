import { Component } from '@angular/core';
import { Fashion } from '../models/fashion-client';
import { FashionClientService } from '../../service/fashion-client.service'; 
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-fashion-client',
  templateUrl: './fashion-client.component.html',
  styleUrl: './fashion-client.component.css'
})
export class FashionClientComponent {
  style: string = ''
  styles: string[] = [] 
  fashions: any
  selectedStyleFashions: Fashion[] = [] 
  fashion: any 
  errMessage: string = ''

  constructor(private _service: FashionClientService, private _router: Router, private _activeRoute: ActivatedRoute) {
    this.getFashions() 
    this._activeRoute.params.subscribe(params => {
      this.style = params['style'] 
      if (this.style != null) {
        this.getFashionsByStyle(this.style) 
      }
    })
  }

  // get all fashions
  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data, this.getStyles() },
      error: (err) => { this.errMessage = err }
    })
  }

  // get distinct styles from fashions and store in styles
  getStyles() {
    this.styles = []
    for (let fashion of this.fashions) {
      if (!this.styles.includes(fashion.style)) {
        this.styles.push(fashion.style)
      }
    }
  }

  // get fashions by style
  getFashionsByStyle(style: string) {
    this._service.getFashionsByStyle(style).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  tempFashionsByStyle(style: string) {
    var tempFashions: Fashion[] = []
    for (let fashion of this.fashions) {
      if (fashion.style == style) {
        tempFashions.push(fashion)
      }
    }
    return tempFashions
  }

  // get fashions by id
  getFashionsById(id: string) {
    this._service.getFashion(id).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  // route to fashion detail page
  detailFashion(fashionId: string) {
    this._router.navigate(['/fashions/detail', fashionId])
  }

  // route to fashions by style page
  fashionsByStyle(style: string) {
    this._router.navigate(['/fashions/style', style])
  }
}
