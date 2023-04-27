import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PicService } from 'src/app/services/pic.service';
import { Pic } from 'src/app/shared/model/pic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

pics:Pic[]=[]
  constructor(private api:PicService , activateRoute:ActivatedRoute){

    activateRoute.params.subscribe((params)=>{
      if(params.searchTerm)


        this.pics = this.api.getAllPicBySearchTerm(params.searchTerm)

       else
        this.pics = api.getAll()

    })




  }



  ngOnInit(){}
}
