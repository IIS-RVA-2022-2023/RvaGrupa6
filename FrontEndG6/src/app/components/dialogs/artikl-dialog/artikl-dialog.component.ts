import { Artikl } from './../../../models/artikl';
import { ArtiklService } from './../../../service/artikl.service';
import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-artikl-dialog',
  templateUrl: './artikl-dialog.component.html',
  styleUrls: ['./artikl-dialog.component.css']
})
export class ArtiklDialogComponent {

  flag!: number;

  constructor(public snackBar: MatSnackBar,
              public artiklService: ArtiklService,
              @Inject(MAT_DIALOG_DATA) public data: Artikl,
              public dialogRef: MatDialogRef<Artikl>){

  }

  public add():void{
    this.artiklService.addArtikl(this.data).subscribe(
      () => {
        this.snackBar.open('Artikl sa nazivom: ' + this.data.naziv + ' je uspesno dodat!', 'Ok', {duration:4500})
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska' , 'Ok', {duration:2500})
    }
  }

  public update():void{
    this.artiklService.updateArtikl(this.data).subscribe(
      () => {
        this.snackBar.open('Artikl sa ID: ' + this.data.id + ' je uspesno izmenjen!', 'Ok', {duration:4500})
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska' , 'Ok', {duration:2500})
    }
  }

  public delete():void{
    this.artiklService.deleteArtikl(this.data.id).subscribe(
      () => {
        this.snackBar.open('Artikl je uspesno izbrisan!', 'Ok', {duration:4500})
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska' , 'Ok', {duration:2500})
    }
  }

  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmena', 'Ok', {duration:3000});
  }
}
