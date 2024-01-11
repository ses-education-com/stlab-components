# shows a selectable image element
- Shows clickable image within a rectangular container. 
- If no image is passed, the default image is shown
- When clicked, browser's  "select file" dialog is shown. When file is selected, it is passed to callback for further processing
- If image is passed, a "Delete" button is shown, that opens a confirmation dialog. If user confirms deletion, another callback is called.

## accepted props:
  - `image` - URL of the image to show
  - `defaultImage`- URL of placeholder image. Will be shown if `image` value is empty.
  - `confirmationText` - text that will be shown in deletion confirmation dialog. Defaults to "**Delete image?**"
  - `onDelete` - callback to call when user requested image deletion
  - `onSelect` - callback that is called when file was selected. Receives the onChange event of input[type=file] element, meaning the callback should look something like:
    ```js
      onSelect = ({target}) => { 
        const files = target.file[0];
        const data = new FormData();
        data.append("image", file ); // converts data to object like { image: (binary image data) }
        // ...send the data anywhere
      }    
    ```
## CSS classes
  - The component contains three styled visible elements: wrapping label, close button and image display div.
  - The image is displayed using `background-image` property of the `display` element.
  - Overwrite css classes to style the component
  ```html
    <label class="image-select">
      <button class="image-selector-close"></button>
      <div class="display" style="background-image: url(...)" ></div>
    </label>
  ```