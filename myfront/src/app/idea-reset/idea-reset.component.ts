import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-idea-reset',
  templateUrl: './idea-reset.component.html',
  styleUrls: ['./idea-reset.component.css']
})
export class IdeaResetComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
  }

}
