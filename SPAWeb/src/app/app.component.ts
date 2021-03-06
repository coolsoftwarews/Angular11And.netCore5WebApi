import { Component,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPA';
  data: any[] = [];
  constructor(private _http: HttpClient) { }

  getData()
  {
    return this._http.get<any[]>(environment.webAPIUrl).subscribe(x=>{
        this.data = x;
    });
  }
}
