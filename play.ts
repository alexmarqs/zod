import * as z from "zod";
z.config(z.locales.en());

/** Standard Form:
 *
 * ```
 * const schema = z.interface({ a: z.string(), "b?": z.string() });
 *
 * const data = { a: "Hello" };
 * const result = schema.safeParse(data);
 * console.dir(result, {depth: null});
 * ```
 */
const a = z.json();
type a = z.output<typeof a>;
// z.parse(a, "hello");
