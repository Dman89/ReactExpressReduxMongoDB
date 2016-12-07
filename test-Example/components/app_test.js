import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

//Use Describe to Group Together Similar Tests
describe("App", () => {
  let element;
  beforeEach(() => {
    element = renderComponent(App)
  })
  // //Use 'it' to test a single attribute of a target
  // it("Shows the correct text", () => {
  //
  //   //Use 'expect' to make an 'assertion' about a target
  //   expect(component).to.contain("React simple starter");
  //
  // });
  it("shows a comment box", () => {
    expect(element.find('.comment-box')).to.exist;
  })
  it("shows a comment list", () => {
    expect(element.find('.comment-list')).to.exist;
  })

});
