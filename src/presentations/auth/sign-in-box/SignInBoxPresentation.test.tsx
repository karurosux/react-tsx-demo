import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import * as React from 'react';
import * as sinon from 'sinon';
import { SignInBoxPresentation } from './SignInBoxPresentation';

Enzyme.configure({ adapter: new Adapter() });
const doc = new JSDOM('<!doctype html><html><body></body></html>');
(global as any).document = doc.window.document;
(global as any).window = doc.window;

describe('SignInBoxPresentation', () => {
  it('should show error message.', () => {
    const component = Enzyme.shallow(<SignInBoxPresentation errorMessage="mymessage" />);
    expect(component.find('[children="mymessage"]')).toHaveLength(1);
  });

  it('should react to click when form is valid.', () => {
    const onSubmitSpy = sinon.spy();
    const component = Enzyme.mount(
      <SignInBoxPresentation errorMessage="" onSubmit={onSubmitSpy} />
    );

    component.find('input').simulate('change', { target: { value: 'just@email.com' } });
    component.find('button').simulate('click');
    onSubmitSpy();
    expect(onSubmitSpy.callCount).toBe(1);
  });

  it('should not submit when its not valid.', () => {
    const onSubmitSpy = sinon.spy();
    const component = Enzyme.mount(
      <SignInBoxPresentation errorMessage="" onSubmit={onSubmitSpy} />
    );
    const input = component.find('input').at(0);
    input.simulate('focus', {});
    input.simulate('change', {
      target: {
        value: 'email@email.com'
      }
    });
    component
      .find('button')
      .at(0)
      .simulate('click', {});
    expect(onSubmitSpy.callCount).toBe(0);
  });
});
