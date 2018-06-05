import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
   }

   getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBNUj0YgL6-3VdWGHfu17di61AwszVuSMxdSeqAefolkSwDemoXloeR9GVbK5kwqlxoiV4M22bl3bE-H4T7KVHMPbLrW_-TCv8MrYNdcuQdMXSc-brhTNFhHlwZX-extbMFtsMEN7LfCv0v'
    });
     return this.http.get( 'https://api.spotify.com/v1/browse/new-releases?limit=20', { headers } );
   }

   getArtista( termino: string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBNUj0YgL6-3VdWGHfu17di61AwszVuSMxdSeqAefolkSwDemoXloeR9GVbK5kwqlxoiV4M22bl3bE-H4T7KVHMPbLrW_-TCv8MrYNdcuQdMXSc-brhTNFhHlwZX-extbMFtsMEN7LfCv0v'
    });
     return this.http.get( `https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers } );
   }
}
