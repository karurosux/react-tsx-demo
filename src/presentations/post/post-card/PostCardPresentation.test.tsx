import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PostCardPresentation } from './PostCardPresentation';

Enzyme.configure({ adapter: new Adapter() });
const doc = new JSDOM('<!doctype html><html><body></body></html>');
(global as any).document = doc.window.document;
(global as any).window = doc.window;

describe('PostCardPresentation', () => {
  it('should render without crashing.', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostCardPresentation />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should show received title.', () => {
    const component = Enzyme.mount(<PostCardPresentation title="mytitle" />);
    expect(
      component
        .find('.title')
        .at(0)
        .text()
    ).toBe('mytitle');
  });

  it('should show received body.', () => {
    const component = Enzyme.mount(<PostCardPresentation body="mybody" />);
    expect(
      component
        .find('.body')
        .at(0)
        .text()
    ).toBe('mybody');
  });

  it('should show default title if not received.', () => {
    const component = Enzyme.mount(<PostCardPresentation />);
    expect(
      component
        .find('h1.title')
        .at(0)
        .text()
    ).toBe('No title');
  });

  it('should show default body if not received.', () => {
    const component = Enzyme.mount(<PostCardPresentation />);
    expect(
      component
        .find('p.body')
        .at(0)
        .text()
    ).toBe('No body');
  });
});
