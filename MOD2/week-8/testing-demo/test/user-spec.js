const { expect } = require('chai');

const User = require("../class/user.js");

// 'describ'e is a group of tests for the User class
// The beforeEach hook will set up code that runs before each test
// in the describe block while before runs once at the beginning of the block.
describe('User class', function () {

    let user;
    // mocha hook
    beforeEach(() => {
        user = new User("john_doe");
    });

// 'it' tests a single spec and checks if a User can be created successfully and does this
// by creating a new user
    it('should create successfully', function () {
        // 'expect' is an assertion that checks to see if the new user exists.
        expect(user).to.exist;
    });

    it('should set username on creation', function () {
        expect(user.username).to.equal("john_doe");
    });

});
