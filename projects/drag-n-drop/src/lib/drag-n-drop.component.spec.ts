import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DragNDropComponent } from './drag-n-drop.component';

describe('DragNDropComponent', () => {
  let component: DragNDropComponent;
  let fixture: ComponentFixture<DragNDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DragNDropComponent ]
    });

    fixture = TestBed.createComponent(DragNDropComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should change background color', () => {
    component.labelBackground = 'green';

    const de = fixture.debugElement.query(By.css('label'));
    const el: HTMLElement = de.nativeElement;
    fixture.detectChanges();
    expect(el.style.backgroundColor).toBe('green');
  });

  it('should change font color', () => {
    component.color = 'purple';

    const de = fixture.debugElement.query(By.css('label'));
    const el: HTMLElement = de.nativeElement;
    fixture.detectChanges();
    expect(el.style.color).toBe('purple');
  });

  it('should add to input the attribute multiple', () => {
    component.multiple = true;

    const de = fixture.debugElement.query(By.css('input'));
    const el: HTMLElement = de.nativeElement;
    fixture.detectChanges();
    expect(el.getAttribute('multiple') ).toBe('multiple');
  });

  it('should emit a files array on drop', () => {
    fixture.detectChanges();
    let fileList = null;
    const files = [{name: 'file', size: 1024 }];
    component.fileDropped.subscribe(fl => fileList = fl);

    component.onFileDropped(files);

    expect(fileList).toContain({name: 'file', size: 1024 });
  });

  it('should emit a files array on click', () => {
    fixture.detectChanges();
    let fileList = null;
    const files = [{name: 'file', size: 1024 }];
    component.fileDropped.subscribe(fl => fileList = fl);

    component.fileHandler(files);

    expect(fileList).toContain({name: 'file', size: 1024 });
  });
});
