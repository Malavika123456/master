import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.css']
})
export class AddEditItemComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() itm:any;
  ItemId:string;
  ItemName:string;
  Quantity:string;
  Descp: string;

  ngOnInit(): void {
    this.ItemId=this.itm.ItemId;
    this.ItemName=this.itm.ItemName;
    this.Quantity=this.itm.Quantity;
    this.Descp=this.itm.Descp
   
  }
  addItem()
  {
    var val={ItemId:this.ItemId,
             ItemName:this.ItemName,
             Quantity:this.Quantity,
             Descp:this.Descp
    };
    this.service. addItem(val).subscribe(res=>{
      alert(res.toString());
      console.log(res);
    });
  }
    updateItem(){
      var val = {ItemId:this.ItemId,
        ItemName:this.ItemName,
        Quantity:this.Quantity,
        Descp:this.Descp
     };
      this.service.updateItem(val).subscribe(res=>{
      alert(res.toString());
      });
    }

    }
  
  
    
    
  

