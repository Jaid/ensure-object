import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
  * @type { import("../src") }
  */
const {default: ensureObject} = indexModule

it("should run", () => {
  expect(ensureObject(300, "speed")).toStrictEqual({speed: 300})
})

it("should run without changes", () => {
  expect(ensureObject({speed: 300}, "speed")).toStrictEqual({speed: 300})
})


it("should run without arguments", () => {
  expect(ensureObject()).toStrictEqual({})
})