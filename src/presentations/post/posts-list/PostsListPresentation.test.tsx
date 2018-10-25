import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PostModel } from '../../../models/PostModel';
import { PostsListPresentation } from './PostsListPresentation';

Enzyme.configure({ adapter: new Adapter() });
const doc = new JSDOM('<!doctype html><html><body></body></html>');
(global as any).document = doc.window.document;
(global as any).window = doc.window;

describe('PostsListPresentation', () => {
  it('should render without crashing.', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostsListPresentation posts={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should show a list of received posts.', () => {
    const posts: PostModel[] = [
      {
        id: 1,
        title: 'title1',
        body: 'body1'
      },
      {
        id: 2,
        title: 'title2',
        body: 'body2'
      }
    ] as PostModel[];
    const component = Enzyme.mount(<PostsListPresentation posts={posts} />);
    const postList = component.find('div.post-card');
    expect(postList).toHaveLength(2);
  });

  it('should show message "No posts" if no posts exist.', () => {
    const posts: PostModel[] = [];
    const component = Enzyme.mount(<PostsListPresentation posts={posts} />);
    const result = component.find('.no-posts-message');
    expect(result).toHaveLength(1);
  });
});
