import {groups} from "./groups.node";

test("smoke", () => {
    const node = new groups()
    expect(node.description.properties).toBeDefined()
})
