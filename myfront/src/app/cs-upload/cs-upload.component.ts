import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-cs-upload',
  templateUrl: './cs-upload.component.html',
  styleUrls: ['./cs-upload.component.css']
})
export class CsUploadComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
  }

}
