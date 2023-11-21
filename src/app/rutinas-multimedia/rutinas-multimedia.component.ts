import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-rutinas-multimedia',
  templateUrl: './rutinas-multimedia.component.html',
  styleUrls: ['./rutinas-multimedia.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RutinasMultimediaComponent {

  constructor(private SanaURL: DomSanitizer){}

  //lista de videos Full Body
  videos_Full_body = [
    { title: 'Rutina Full Body (A)', url: 'https://www.youtube.com/embed/VFqTAgyXbYI?si=1iiiqWu1ZGzuntn9' },
    { title: 'Rutina Full Body (B)', url: 'https://www.youtube.com/embed/ULkxwUCdC1Y?si=HTR94jFk869r9rwT' },
  ];

  seleccionado: any = this.SanaURL.bypassSecurityTrustResourceUrl("https://static.vecteezy.com/system/resources/thumbnails/017/504/043/small/bodybuilding-emblem-and-gym-logo-design-template-vector.jpg"); // Video predeterminado

  //Metodo para seleccionar el video en la lista
  selectVideo(video: any) {
    console.log('video selecionado: ', video);
    this.seleccionado = this.SanaURL.bypassSecurityTrustResourceUrl(video.url);
  }

  //Otras listas de videos
  videos_Torso = [
    { title: 'Rutina Torso/Pierna (A)', url: 'https://www.youtube.com/embed/wFWL3ZXvPP4?si=Q6BjvuT6yTHjfp0e' },
    { title: 'Rutina Torso/Pierna (B)', url: 'https://www.youtube.com/embed/LFR7BPbLmTc?si=1WB-DSq7rL-xr1zn' },
  ];

  videos_Empujones_Tracciones = [
    { title: 'Rutina Empujones/Tracciones (A)', url: 'https://www.youtube.com/embed/zMhokEIfZBc?si=I-Ly8bhCMG4TWzS9' },
    { title: 'Rutina Tracciones ', url: 'https://www.youtube.com/embed/5hpNoyT3Bic?si=4sER9Fi7udGx1sNB' },
  ];

  videos_Push_Pull_Legs = [
    { title: 'Rutina Push/Pull/legs (A)', url: 'https://www.youtube.com/embed/iCFfBQNFyPE?si=QL4v7RqjcIPPQnkW' },
    { title: 'Rutina Push/Pull/legs (B)', url: 'https://www.youtube.com/embed/TxvnslZiw90?si=n9tQj8239TdXkI4Z' },
  ];

}
