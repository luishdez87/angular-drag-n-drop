import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lf-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: [ './lf-drag-n-drop.component.scss'
  ]
})
export class DragNDropComponent implements OnInit {

  @ViewChild('dropzone', { static: true }) dropzone: ElementRef;
  @ViewChild('fileInputRef', { static: true }) fileInputRef: ElementRef;
  @ViewChild('messageLabel', { static: true }) messageLabelRef: ElementRef;
  @Input() multiple: boolean;
  @Input() labelBackground: string;
  @Input() color: string;
  @Output() fileDropped = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    if (this.labelBackground) {
      this.messageLabelRef.nativeElement.style.backgroundColor = this.labelBackground;
    }
    if (this.color) {
      this.messageLabelRef.nativeElement.style.color = this.color;
    }
    if (this.multiple) {
      this.fileInputRef.nativeElement.setAttribute('multiple', 'multiple');
    }
  }

  onFileDropped(evt) {
    this.fileDropped.emit(evt);
  }

  fileHandler(evt) {
    this.fileDropped.emit(evt);
  }
}
