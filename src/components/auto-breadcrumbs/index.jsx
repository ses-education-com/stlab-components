import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@material-ui/core';
import './auto-breadcrumbs.scss';
import { ChevronRight } from '@material-ui/icons';

const BreadCrumbText = ({ item, defaultItemText }) => {
  // if both icon and text are present, show both
  return item.icon && item.text ? (
    <>
      {item.icon}
      {item.text}
    </>
  ) : (
    item.text || item.icon || item.to || defaultItemText
  );
};

const BreadcrumbsItem = ({ item, defaultItemText }) => {
  // if .to defined ...
  return item.to ? (
    // show link
    <Link className='breadcrumbs-item' to={item.to}>
      <BreadCrumbText {...{ item, defaultItemText }} />
    </Link>
  ) : (
    // otherwise show typography. Use default text if no text is passed
    <Typography>
      <BreadCrumbText {...{ item, defaultItemText }} />
    </Typography>
  );
};

/**
 * Breadcrumbs component that renders an array of elements.
 *
 * BreadcrumbItemData type:
 * ```js
 * {
 *   to: '/some/url1',
 *   text: 'Breadcrumb Text 1', //
 *   icon: <Home /> // optional ReactNode to show as icon. If present, text is optional
 * }```
 *
 * props:
 * **items** : array of BreadcrumbItemData objects
 * **className** : string that will replace the default class name auto-breadcrumbs
 * **defaultItemText** :  string that will replace empty text, if found.
 * **showLastItemAsLink** : boolean - defines whether the last item is shown with or without link by default. Defaults to false
 *
 * @usage ```js
 * <Breadcrumbs items={[ {to: "/", text:"Home"}, {to: "/catalog", text:"Catalog"} ]} />
 * ```
 */
class AutoBreadcrumbs extends React.Component {
  render() {
    let {
      defaultItemText = '***',
      items,
      className = 'auto-breadcrumbs',
      showLastItemAsLink = false,
      separator = <ChevronRight />,
      ...other
    } = this.props;

    if (!Array.isArray(items)) {
      console.error(
        'Breadcrumbs: wrong type of items passed. Expected array of objects, passed:',
        typeof items,
        '\nReplaced with empty array.'
      );
      items = [];
    }

    if (!showLastItemAsLink && items.length > 0)
      items[items.length - 1].to = null;

    return (
      <div {...{ className }}>
        <Breadcrumbs {...{ separator, ...other }}>
          {items.map((item, ind) => (
            <BreadcrumbsItem {...{ item, defaultItemText, key: `breadcrumb-item-${ind}` }} />
          ))}
        </Breadcrumbs>
      </div>
    );
  }
}

export default AutoBreadcrumbs;
