import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PicService } from 'src/app/services/pic.service';
import { Pic } from 'src/app/shared/model/pic';

@Component({
  selector: 'app-pic-page',
  templateUrl: './pic-page.component.html',
  styleUrls: ['./pic-page.component.css']
})
export class PicPageComponent implements OnInit{
pic!:any;
  constructor(activatedRoute:ActivatedRoute,private api:PicService){
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.pic= api.getPicById(params.id)
      else
      this.pic = api.getAll().filter((pic)=>pic.caption)
     })
  }

  ngOnInit(): void {

  }

}
