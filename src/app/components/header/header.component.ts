import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="position-absolute" id="overlay"></div>
    <video autoplay loop src="https://videos.ctfassets.net/oqn5qhpsy9i3/4LypTYVmrxLn9Vb9STV3Dk/25ca5ef44ed32fdf87fd8670b160eb03/desktop4.mp4" 
           id="video-bg" class="position-relative" preload></video>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }

}
