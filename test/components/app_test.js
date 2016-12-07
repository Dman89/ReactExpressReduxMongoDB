import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });
  it('Renders', () => {
    expect(component).to.exist;
  });
  it('Class Name: App', () => {
    expect(component).to.have.class('App');
  });
});
