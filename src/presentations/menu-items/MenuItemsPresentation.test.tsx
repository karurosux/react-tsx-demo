import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MenuItemsPresentation } from './MenuItemsPresentation';

Enzyme.configure({ adapter: new Adapter() });
const doc = new JSDOM('<!doctype html><html><body></body></html>');
(global as any).document = doc.window.document;
(global as any).window = doc.window;

describe('MenuItemsPresentation', () => {
  it('should render without crashing.', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MenuItemsPresentation menuItems={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should show received menu items.', () => {
    const component = Enzyme.mount(
      <MenuItemsPresentation
        menuItems={[{ route: '/login', text: 'Login' }, { route: '/dashboard', text: 'Dashboard' }]}
      />
    );
    expect(component.find('div.menu-item')).toHaveLength(2);
  });
});
