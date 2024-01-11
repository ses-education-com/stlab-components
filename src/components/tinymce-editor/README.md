# TinyMce editor react component

## Installation
- install via npm
- copy **/skins** folder to **/public/static/js** folder (this is needed for the editor to obtain the actual skin)
- import the editor into your component:
```javascript
import Editor from 'node-name-goes-here';

// import custom plugins, if any
import './plugins/custom_plugin1.js`;

// render the editor within a react component:
const RenderEditor = props => <Editor content={"<p>This is the initial HTML.</p>"} onSave={ html => console.log("Updated html:" , html)} />
```