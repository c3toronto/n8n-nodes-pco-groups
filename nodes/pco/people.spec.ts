import {people} from "./people.node";

test("smoke", () => {
    const node = new people()
    expect(node.description.properties).toBeDefined()
})
