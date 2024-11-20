export const taskStatusClasify = (data) => {
  let completed = 0
  let progress = 0
  let pending = 0
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    switch (element.status) {
      case "completed":
        completed = completed + 1
        break;
      case "progress":
        progress = progress + 1
        break;
      case "pending":
        pending = pending + 1
        break;
      default:
        break;
    }
  }
  return [
    { name: 'Completed', value: completed },
    { name: 'Progress', value: progress },
    { name: 'Pending', value: pending },
  ]
}

export const taskPriorityClasify = (data) => {
  let low = 0
  let high = 0
  let medium = 0
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    switch (element.priority) {
      case "low":
        low = low + 1
        break;
      case "high":
        high = high + 1
        break;
      case "medium":
        medium = medium + 1
        break;
      default:
        break;
    }
  }
  return [
    { name: 'Low', value: low },
    { name: 'Medium', value: medium },
    { name: 'High', value: high },
  ]
}