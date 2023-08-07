1. Open slide No 10 from the presentation.
1. Our code is a bit messy. Remember, React's idea is to create small components. Use the image from the slide to help you with refactoring the code. Try to extract components in diffrent files. Think of a good structure of the project.
1. Try to style the components. Use the image from the slide as a design. Add some paddings and margins. You can add some icons (free icons - [here](https://fontawesome.com/search?m=free&o=r)). For positioning you can use [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). 
1. Try to implement deleting existing todos. Add a trash icon. When clicking that icon the todo should be removed from both state and `localStorage`.
1. Try to implement updating the text of existing todos. Add an edit icon. When clicking that icon the text should hide and a text input should apper on its place. Don't forget toupdate both state and `localStorage`.
1. The `localStorage` logic probably is the same everywhere. Try to extract the duplicate code in a reusable helper function. Think of a good structure of the project.
1. Try to implement a `Loader` component.
  - You can find many CSS loaders in the net - just copy one of your choice and use it.
  - Set `null` as the initial value of `todos`. 
  - Use conditional rendering to display the `Loader` component, while `todos` are `null`.
  - You can also display the loader, when adding, deleting and updating todos. The operations now are very fast, but imagine if we were firing requests to an API - the user won't be notified that he had interacted with the page.