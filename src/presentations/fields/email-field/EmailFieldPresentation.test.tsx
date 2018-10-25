import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as sinon from 'sinon';
import { EmailFieldPresentation } from './EmailFieldPresentation';

Enzyme.configure({ adapter: new Adapter() });
const doc = new JSDOM('<!doctype html><html><body></body></html>');
(global as any).document = doc.window.document;
(global as any).window = doc.window;

describe('EmailFFieldPresentation', () => {
  it('should render without crashing.', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EmailFieldPresentation />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should show received label.', () => {
    const component = Enzyme.render(<EmailFieldPresentation label="mylabel" />);
    const result = component.find('label');
    expect(result.text()).toBe('mylabel');
  });

  it('should show "Email" as default label.', () => {
    const component = Enzyme.render(<EmailFieldPresentation />);
    const result = component.find('label');
    expect(result.text()).toBe('Email');
  });

  it('should react to change input.', () => {
    const onChangeSpy = sinon.spy();
    const component = Enzyme.mount(<EmailFieldPresentation onChange={onChangeSpy} />);
    const input = component.find('input').at(0);
    input.simulate('focus', {});
    input.simulate('change', {
      target: {
        value: 'hola'
      }
    });
    expect(onChangeSpy.callCount).toBe(1);
  });
});
