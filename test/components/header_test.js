import {renderComponent, expect} from "../test_helper";
import Header from '../../src/components/header';

describe("Header", () => {
  let element;
  beforeEach(() => {
    element = renderComponent(Header);
  })
  it('Renders', () => {
    expect(element).to.exist;
  });
  it("Class Name: Header", () => {
    expect(element).to.have.class('Header')
  })
  it("Has a \<ul\>", () => {
    expect(element.find("ul")).to.exist;
  })
  it("Has 3 \<li\>", () => {
    expect(element.find("li").length).to.equal(3);
  })
})
