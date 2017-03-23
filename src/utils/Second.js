export default function b(abc, schema) {
  Object.keys(schema).forEach((a) => {
    b(abc[a], schema[a])
  })
}