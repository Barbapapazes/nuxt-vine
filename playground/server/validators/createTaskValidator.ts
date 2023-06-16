// For small project, you can keep event handler and validator in the same file.
export const createTaskValidator = v.compile(
  v.object({
    title: v.string()
  })
)
