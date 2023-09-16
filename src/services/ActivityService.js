export const getActivity = () => {
  return fetch(`http://localhost:8088/activity`).then((res) => res.json())
}

// export const postActivity = (activity) => {
//   return fetch(`http://localhost:8088/activity`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(activity),
//   })
// }