import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-cs-reset',
  templateUrl: './cs-reset.component.html',
  styleUrls: ['./cs-reset.component.css']
})
export class CsResetComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
  }

}
