import { renderComponent } from '../test_helper';
import React from 'react';
import { mount, shallow } from 'enzyme';
import {signinUser} from '../../src/actions/index';
import Signin from '../../src/components/auth/signin';
import {SIGNIN} from '../../src/actions/types';
import {expect} from 'chai';

describe('Actions:' , () => {
  describe('Signin User' , () => {
    let data;
    let action;
    let element;
    beforeEach(function() {
      data = {email: "test8@test.com", password: "test"};
      action = signinUser(data);
      element = renderComponent(Signin);
    });
    it("Renders", () => {
      expect(action).to.exist;
    });
    describe('Submit:' , () => {
      it("Reset: Email (Input)", () => {
        expect(element.find(".emailInput").val()).to.eql("");
      });
      it("Reset: Password (Input)", () => {
        expect(element.find(".emailInput").val()).to.eql("");
      });
    })
  })
});
