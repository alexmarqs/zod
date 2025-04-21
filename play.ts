import * as z from "zod";

z;
const A = z.interface({
  name: z.string(),
  get b() {
    return B;
  },
});
// .readonly();
// .meta({ id: "A" });

const B = z
  .interface({
    name: z.string(),
    get a() {
      return A;
    },
  })
  .readonly();
// .meta({ id: "B" });

// const result = z.toJSONSchema(A);
// console.dir(result, { depth: 10 });
