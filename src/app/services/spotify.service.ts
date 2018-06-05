import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
   }

   getQuery( query: string ){
      const url = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQDxPmmicYPJwRgMka7OXcyFY2EM0_SDOq0z3xDJWtlktg7B-8tI3z2d1ZgDJwaQ72FgJ2mRvaA4mFgloaBhOF5ckSuAqnMbHSGM_1igBXk_-uIeiBiNo2dk7RPuaa61CKC9Gt1cXHwU3wn2'
      });

      return this.http.get(url, { headers });
   }

   getNewReleases() {
     return this.getQuery('browse/new-releases?limit=20')
                            .pipe( map( data => data['albums'].items ));
   }

   getArtistas( termino: string ){
     return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                            .pipe( map( data => data['artists'].items ));
   }

   getArtista( id: string ){
    return this.getQuery(`artists/${ id }`);
                           //.pipe( map( data => data['artists'].items ));
  }

  getTopTracks( id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=ar`)
                            .pipe( map( data => data['tracks'] ));
  }
}
