import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-carousel',
  imports: [CommonModule],
  templateUrl: './event-carousel.component.html',
  styleUrl: './event-carousel.component.css'
})
export class EventCarouselComponent {
  @Input() type='';
  photoList =[''];
  id='CarouselControl';
  ngOnInit(){
    this.id=this.id+this.type
    if(this.type=='mutt'){
      //muttstrut
      this.photoList=[
        'mutt_strut/AKH5182.png',
        'mutt_strut/AKH5208.png',
        'mutt_strut/AKH5238-1.png',
        'mutt_strut/AKH5311.png',
        'mutt_strut/TWP_1549-scaled.png',
        'mutt_strut/TWP_1566-scaled.png',
        'mutt_strut/TWP_1579-scaled.png',
        'mutt_strut/TWP_1637-scaled.png',
        'mutt_strut/TWP_1658-scaled.png',
        'mutt_strut/TWP_1717-scaled.png',
        'mutt_strut/TWP_1729-scaled.png',
        'mutt_strut/TWP_1749-scaled.png',
        'mutt_strut/TWP_1786-scaled.png',
        'mutt_strut/TWP_1829-scaled.png'
      ]
    }else if(this.type=='poo'){
      this.photoList=[
        "TWP_1924-scaled.png",
        "TWP_1936-scaled.png",
        "TWP_1876-scaled.png"
      ]
      this.addDir('poo_toss/')
    }else if(this.type=='saint'){
      this.photoList=[
        "TWP_2082-scaled.png",
        "TWP_2078-scaled.png",
        "TWP_20378-scaled.png",
        "TWP_2026-scaled.png",
        "TWP_2003.png"
      ]
      this.addDir('sinners/');
    }else if(this.type=='q'){
      this.photoList=[
        "cropped-MightyCause_Logo.png"
      ]
      this.addDir('jepawdy/');
    }else if (this.type=='under'){
      this.photoList=[
        "DSC07102-1-scaled.png",
        "DSC07096-scaled.png",
        "DSC071302-1-scaled.png",
        "TWP_2381-scaled.png",
        "TWP_2300-scaled.png",
        "TWP_2312.png",
        "TWP_2410.png",
        "TWP_2316.png",
        "TWP_2003-1.png",
      ]
      this.addDir('underdog/');
    }else if(this.type=='story'){
      this.photoList=[
          "AKH5785.png",
          "AKH5739.png",
          "TWP_2510-scaled.png",
          "AKH5752.png",
          "TWP_2500-scaled.png"

      ];
      this.addDir('story/');
    }
  }
  addDir(dir:string){
    for(var i = 0;i<this.photoList.length;i++){
      this.photoList[i]=dir+this.photoList[i];
    }
    console.log(this.photoList)
  }
}
