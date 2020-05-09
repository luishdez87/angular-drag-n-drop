# Angular Drag and Drop file component

Drag and drop component for angular, without any dependencies.

You simply drag and drop, or click inside.

![](https://github.com/luishdez87/angular-drag-n-drop/blob/master/projects/demo/src/assets/normal-view.png?raw=true)

## Installation

### NPM

### DEMO

Clone the repository run `npm install` and run `ng serve demo`

## Implementation

Just add the `DragNDropModule` to your app.module.ts:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { DragNDropModule } from 'drag-n-drop';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DragNDropModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

and use it in your html:

```html

  <lf-drag-n-drop 
    multiple="true"
    labelBackground="green"
    color="white"
    (fileDropped)="handleFiles($event)">
  </lf-drag-n-drop>

```

## Properties

| Name  | Optional  | Description |
| :------------ |:---------------:| -----:|
| (fileDropped)      | No | Returns the file (s) in an event |
| multiple   (boolean)   | Yes        |   Allows you to recieve one or multiple files, this value is a boolean and false  by default |
| labelBackground   (string)   | Yes | Changes the label background color |
| color (string)      | Yes | Changes the label font color |

## Examples

```html

  <lf-drag-n-drop 
    multiple="true"
    labelBackground="green"
    color="white"
    (fileDropped)="handleFiles($event)">
  </lf-drag-n-drop>

```
![](https://github.com/luishdez87/angular-drag-n-drop/blob/master/projects/demo/src/assets/bg-changed.png?raw=true)

```html

  <lf-drag-n-drop 
    labelBackground="white"
    color="purple"
    (fileDropped)="handleFiles($event)">
  </lf-drag-n-drop>

```
![](https://github.com/luishdez87/angular-drag-n-drop/blob/master/projects/demo/src/assets/bg-and-color.png?raw=true)

