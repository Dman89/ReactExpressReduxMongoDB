import {renderComponent, expect} from "../../test_helper";
import Signin from '../../../src/components/auth/signin';

describe("Signin", () => {
  let element;
  beforeEach(() => {
    element = renderComponent(Signin);
  })
  it('Renders', () => {
    expect(element).to.exist;
  });
  it("Class Name: Signin", () => {
    expect(element).to.have.class('Signin')
  })
  it("Has two inputs", () => {
    expect(element.find("input").length).to.equal(2)
  })
  it("Has submit button", () => {
    expect(element.find(".SigninButtonSubmit")).to.exist;
  })
})
