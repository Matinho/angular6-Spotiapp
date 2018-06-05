import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: any[] ): string {

    // si no viene imagen muestro imagen por defecto
    if ( !images ){
      return 'assets/img/noimage.png';
    }

    // si viene un arreglo de imagenes muestro el primer elemento, si esta vacio muestro imagen por defecto
    if ( images.length > 0 ){
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
