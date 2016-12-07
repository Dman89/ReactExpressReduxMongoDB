import {renderComponent, expect} from "../test_helper";
import CommentBox from '../../src/components/comment_box';

describe("Comment Box", () => {
  let element;
  beforeEach(() => {
    element = renderComponent(CommentBox);
  })
  it("has a text area", () => {
    expect(element.find("textarea")).to.exist;
  })
  it("has a button", () => {
    expect(element.find("button")).to.exist;
  })
  it("has same class as component", () => {
    expect(element).to.have.class('comment-box')
  })
  describe("Entering Text into the Textarea", () => {
    beforeEach(() => {
      element.find('textarea').simulate('change', 'new comment');
    })
    it("shows text that is entered in the textarea", () => {
      expect(element.find("textarea")).to.have.value('new comment')
    })
    it("when submitted, clears the input", () => {
      element.simulate('submit')
      expect(element.find("textarea")).to.have.value('')
    })
  })
})
