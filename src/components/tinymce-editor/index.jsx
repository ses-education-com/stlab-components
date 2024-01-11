import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { Container, Button } from '@material-ui/core';
import { Cancel, SaveRounded as SaveIcon } from '@material-ui/icons';

// NOTE: A skin is required, and for the moment the only
// way is to take the 'skins' folder from tinymce node
// or from this component's root
// and put it in /public/static/js/ of the project

// import tinymce editor and default preferences
import './tiny';

// import {Editor} from '@tinymce/tinymce-react'
// import { Container, Button } from '@material-ui/core'
// import {SaveRounded as SaveIcon } from '@material-ui/icons'
import './editor.scss';

const isObject = (obj) => obj && typeof obj === 'object';
/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 * From https://stackoverflow.com/a/48218209/3770223
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */
const mergeDeep = (...objects) => {
  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
};

const defaultProps = {
  initialValue: '',
  init: {
    height: 500,
    /* selector: '#question .editor', */
    // contextmenu: 'question',
    menubar: true,
    plugins: [
      'image advlist autolink lists link image charmap print preview anchor media',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime table paste code help wordcount',
    ],

    toolbar: [
      'undo redo | formatselect | bold italic backcolor | \
    image media alignleft aligncenter alignright alignjustify | \
    bullist numlist outdent indent | removeformat | help',
    ],
  },
};

class TinyEditor extends React.Component {
  handleEditorChange = (content, editor) => {
    this.setState({ content });
    // adds shortcut to tiny mce - probably should be in componentDidMount or other init function
    // that has the access to editor instance
    editor.shortcuts.add('ctrl+q', 'A way to subscript', 'Subscript');
  };

  state = {
    original: '',
    content: '',
  };

  componentDidMount() {
    this.updateContent();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.content !== this.props.content) {
      this.updateContent();
    }
  }

  updateContent() {
    const { content, content: original } = this.props;
    this.setState({ content, original });
  }

  onEditorChange = (content, editor) => {
    this.setState({ content });
    // console.debug('Content was updated:', content);
  };

  render() {
    const { content, original } = this.state;

    let props = mergeDeep(defaultProps, this.props);

    const hasChanged = original !== content;

    // remove content and onSave props
    let {
      content: initialContent,
      onSave = (c) => console.log('Saving content:', c),
      onCancel = () => console.log('Cancelling (callback not set)'),
      containerProps={},
      before = null, after = null,
      ...other
    } = props;


    console.debug("TinyEditor props", props)
    return (
      <Container {...containerProps}>
        {before}
        <div className='editor-button-bar'>
          <Button onClick={() => onSave(content)} disabled={!hasChanged}>
            <SaveIcon /> Save
          </Button>
          <Button onClick={() => onCancel()}>
            <Cancel /> Cancel
          </Button>
        </div>
        <Editor
          value={content}
          onEditorChange={this.handleEditorChange}
          {...other}
        />
        {after}
      </Container>
    );
  }
}

export default TinyEditor;
