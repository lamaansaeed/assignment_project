import { Injectable } from '@angular/core';
import { Pic } from '../shared/model/pic';
import { sample_pics } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class PicService {

  constructor() { }
  getAll():Pic[]{
    return sample_pics
  }
  //search pic
  getAllPicBySearchTerm(searchTerm:string){
    return this.getAll().filter(pic=>pic.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  //get pic by id

  getPicById(picid:string){
    return this.getAll().find(pic=>pic.id == picid)?? new Pic();
  }
}
