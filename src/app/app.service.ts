import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public baseURL = "https://github.com/pawangtm2419";
  public searchResults: any;

  public searchEntry(term): Observable<any> {
    if(term === "") {
      console.log("input Empty.");
    } else {
      let parems = {q:term};
      return this.http.get(this.baseURL, {parems}).pipe(map(res => {
        console.log(res);
        return this.searchResults = res["item"];
      })
      );
    }
  }

  public _searchEntry(term: any) {
    return this.searchEntry(term);
  }
}
