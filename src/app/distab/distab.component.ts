import { Component, OnInit } from '@angular/core';
import { getdat } from '../getdat.module';
import { GetdatService } from '../getdat.service';

@Component({
  selector: 'app-distab',
  templateUrl: './distab.component.html',
  styleUrls: ['./distab.component.css']
})
export class DistabComponent implements OnInit {

  getdat: getdat[];
  displayColumns = ['name','roll'];
  constructor(private gedtdatService: GetdatService) { }

  ngOnInit(): void {
    this.fetchdat();
  }

  fetchdat(){
    this.gedtdatService
    .getdata()
    .subscribe((data: getdat[])=>{
      this.getdat = data;
      console.log('Data requested ... and found this');
      console.log(this.getdat);
    })
  }
}
