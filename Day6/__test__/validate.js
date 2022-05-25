const{describe,test,expect}=require("@jest/globals")

const validate=require('../src/rex')
describe("validate",function() {
    test("all condition satisfies",function() {
    expect(validate("aa1bcs")).toBe(true)
    })
})