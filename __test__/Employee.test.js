// const { describe, it } = require("node:test")
const Employee = require("../lib/Employee")
describe("Employee", () => {
    describe("test Employee's properties", () => {
        it("test all properties", () => {
            const employee = new Employee('Bear', 1, 'bear@email.com')

            expect(employee.name).toEqual('Bear')
            expect(employee.id).toEqual(1)
            expect(employee.email).toEqual('bear@email.com')
        })

    })

})

describe("test Employee's methods", () => {
    it("test all methods", ()=>{
        const employee = new Employee('Bunny', 2, 'bunny@email.com')
        expect(employee.getName()).toEqual('Bunny')
        expect(employee.getId()).toEqual(2)
        expect(employee.getEmail()).toEqual('bunny@email.com')
        expect(employee.getRole()).toEqual('Employee')
    } )

})