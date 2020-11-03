import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss']
})

export class PersonalCardComponent implements OnInit, AfterViewInit {
  @ViewChildren('flagsImages') flagImages!: QueryList<any>;

  public flagsPositionConfig = {
    positionType: 0.5,
    positionRadius: '80px',
    positionStart: 90,
    flagSize: 18
  };

  public flagsArray = [
    {flagImgUrl: './assets/images/flags/Ellipse 15.png', country: ''},
    {flagImgUrl: './assets/images/flags/Ellipse 16.png', country: ''},
    {flagImgUrl: './assets/images/flags/Ellipse 17.png', country: ''},
    {flagImgUrl: './assets/images/flags/Ellipse 18.png', country: ''},
    {flagImgUrl: './assets/images/flags/Ellipse 19.png', country: ''},
    {flagImgUrl: './assets/images/flags/Ellipse 20.png', country: ''},
    {flagImgUrl: './assets/images/flags/Ellipse 21.png', country: ''},
    {flagImgUrl: './assets/images/flags/Ellipse 22.png', country: ''},
    {flagImgUrl: './assets/images/flags/Ellipse 23.png', country: ''}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.placeFlags();
  }

  public placeFlags(): void {
    const flagsCount = this.flagImages.length - 1;
    const freeSpaceBetween = 360 * this.flagsPositionConfig.positionType / flagsCount;

    this.flagImages.toArray().forEach((item, i) => {
      const rotateAngle = (freeSpaceBetween * i) + this.flagsPositionConfig.positionStart;
      const rotateReverseAngle = rotateAngle * -1;

      item.nativeElement.style.transform = `rotate(${rotateAngle}deg) translate(${this.flagsPositionConfig.positionRadius}) rotate(${rotateReverseAngle}deg)`;
    });
  }
}
