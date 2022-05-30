import { Component } from '@angular/core';
import * as CustomBuildEditor from 'src/app/CKEditor/ckeditor';
import {CKEditor5} from "@ckeditor/ckeditor5-angular";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CKEditor with Angular 13';
  textdata = 'Hello world';

  public ckEditor = CustomBuildEditor;

  constructor() {
  }
  public onReady( editor: any ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }
}
