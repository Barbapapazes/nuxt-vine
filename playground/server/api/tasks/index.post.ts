import { createTaskValidator } from "../../validators/createTaskValidator";

export default defineEventHandler(async (event) => {
  const { title } = await validateBody(event, createTaskValidator)

  // You can also directly pass an object
  // const { title } = await validateBody(event, {
  //   title: v.string()
  // })

  return title
});
