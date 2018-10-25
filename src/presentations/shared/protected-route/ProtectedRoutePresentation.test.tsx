import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

Enzyme.configure({ adapter: new Adapter() });
const doc = new JSDOM('<!doctype html><html><body></body></html>');
(global as any).document = doc.window.document;
(global as any).window = doc.window;

describe('PretectedRoutePresentation', () => {
  it('should render without crashing.', () => {});
});
