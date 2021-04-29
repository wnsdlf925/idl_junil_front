import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-idea-push',
  templateUrl: './idea-push.component.html',
  styleUrls: ['./idea-push.component.css']
})
export class IdeaPushComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
  }

}
