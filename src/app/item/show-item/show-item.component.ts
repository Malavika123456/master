import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {

    constructor(private service:SharedService) { }
    ItemList:any=[];
    ModalTitle:string;
     ActivateAddEditItemComp:boolean=false;
     itm:any;

     ngOnInit(): void {
        this.refreshItemList();
      }

      addClick(){
        this.itm={
          ItemId:0,
          ItemName:"",
          Quantity:"",
          Descp:"",
         
        }
        this.ModalTitle="Add Item";
        this.ActivateAddEditItemComp=true;
    }


    editClick(it){
        console.log(it);
        this.itm=it;
        this.ModalTitle="Edit Item";
        this.ActivateAddEditItemComp=true;
      }
      deleteClick(it){
        if(confirm('Are you sure??')){
          this.service.deleteItem(it.ItemId).subscribe(data=>{
            alert(data.toString());
            this.refreshItemList();
          })
        }
      }
      closeClick(){
        this.ActivateAddEditItemComp=false;
        this.refreshItemList();
      }
      refreshItemList(){
        this.service.getItemList().subscribe(data=>{
          this.ItemList=data;
        });
      }
    
    }
      
