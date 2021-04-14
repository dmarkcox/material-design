import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})

export class CustomerNewComponent implements OnInit {
  emailFormControl: FormControl;
  matcher: ErrorStateMatcher;

  constructor(public dialog: MatDialog, public snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

  // tslint:disable-next-line: typedef
  openUndoSnackBar() {
    const snackbarRef = this.snackbar.open('Customer saved', 'UNDO', {
      horizontalPosition: 'end'
    });

    snackbarRef.onAction().subscribe(() => {
      alert('Undo that save!');
    });
  }

  // tslint:disable-next-line: typedef
  openRepDialog() {
    const dialogRef = this.dialog.open(RepDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(`User chose ${result}`);
    });
  }
}
