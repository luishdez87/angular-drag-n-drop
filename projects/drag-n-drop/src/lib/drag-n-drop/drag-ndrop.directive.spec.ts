import { DragNDropDirective } from './drag-ndrop.directive';

let directive: DragNDropDirective;

beforeEach(() => {
  directive = new DragNDropDirective();
  const event = new MouseEvent('drag');

});

describe('DragNDropDirective', () => {
  it('should create an instance', () => {
    expect(directive).toBeTruthy();

  });

  it('should listen drag mouse event and prevent default', () => {
    const event = new MouseEvent('dragover');

    directive.onDragOver(event);

    expect(event.preventDefault).toBeTruthy();
  });

  it('should listen drag mouse event and stop propagation', () => {
    const event = new MouseEvent('dragover');

    directive.onDragOver(event);

    expect(event.stopPropagation).toBeTruthy();
  });

  it('should listen drag over mouse event and set fileOver to true', () => {
    const event = new MouseEvent('dragover');

    directive.onDragOver(event);

    expect(directive.fileOver).toBeTruthy();
  });

  it('should listen drag leave mouse event and set fileOver to false', () => {
    const event = new MouseEvent('dragleave');

    directive.onDragLeave(event);

    expect(directive.fileOver).toBeFalsy();
  });

  it('should listen drag leave mouse event and stop propagation', () => {
    const event = new DragEvent('dragleave');

    directive.onDragLeave(event);

    expect(event.stopPropagation).toBeTruthy();
  });

  it('should listen drag leave mouse event and prevent default', () => {
    const event = new DragEvent('dragleave');

    directive.onDragLeave(event);

    expect(event.preventDefault).toBeTruthy();
  });

  it('should listen drop mouse event and prevent default', () => {
    const file = new File([''], 'test.jpg');
    const fileDropEvent = { preventDefault: () => {}, dataTransfer: { files: [file, file, file] }, stopPropagation: () => {}};

    directive.onDrop(fileDropEvent);

    expect(fileDropEvent.preventDefault).toBeTruthy();
  });

  it('should listen drop mouse event and stop propagation', () => {
    const file = new File([''], 'test.jpg');
    const fileDropEvent = { preventDefault: () => {}, dataTransfer: { files: [file, file, file] }, stopPropagation: () => {}};

    directive.onDrop(fileDropEvent);

    expect(fileDropEvent.stopPropagation).toBeTruthy();
  });

  it('should listen drop mouse event and set fileOver to false', () => {
    const file = new File([''], 'test.jpg');
    const fileDropEvent = { preventDefault: () => {}, dataTransfer: { files: [file, file, file] }, stopPropagation: () => {}};

    directive.onDrop(fileDropEvent);

    expect(directive.fileOver).toBeFalsy();
  });

  it('should listen drop mouse event and emit a list of files', () => {
    const file = new File([''], 'test.jpg');
    let fileList = null;
    directive.dropFiles.subscribe(files => fileList = files);
    const fileDropEvent = { preventDefault: () => {}, dataTransfer: { files: [file, file, file] }, stopPropagation: () => {}};

    directive.onDrop(fileDropEvent);

    expect(fileList).not.toBeNull();
  });

  it('should listen drop mouse event and if not list of files not return any', () => {
    const file = new File([''], 'test.jpg');
    let fileList = null;
    directive.dropFiles.subscribe(files => fileList = files);
    const fileDropEvent = { preventDefault: () => {}, dataTransfer: [], stopPropagation: () => {}};

    directive.onDrop(fileDropEvent);

    expect(fileList).toBeNull();
  });
});
