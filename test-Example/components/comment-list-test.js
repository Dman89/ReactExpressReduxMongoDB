import {renderComponent, expect} from "../test_helper";
import CommentList from '../../src/components/comment_list';

describe("Comment List", () => {
  let element;
  beforeEach(() => {
    element = renderComponent(CommentList, null, {comments: ["New Comment", "More Comments", "Final Comment"]});
  })
  it("has same class as component", () => {
    expect(element).to.have.class('comment-list')
  })
  it("shows an LI for each comment", () => {
    expect(element.find('li').length).to.equal(3);
  })
  it("shows each comment that is provided", () => {
    expect(element).to.contain("New Comment");
    expect(element).to.contain("More Comments");
    expect(element).to.contain("Final Comment");
  })
})
