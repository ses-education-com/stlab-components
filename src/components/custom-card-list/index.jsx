import React from "react";
import "./custom-card-list.scss";
import { Grid, Card, CardActionArea, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { buildLink } from "../../../utils/functions";

const { REACT_APP_MEDIA_URL } = process.env;

const defaultItemProps = {
  xs: 12,
  md: 4,
  lg: 3,
};
const defaultContainerProps = {
  spacing: 4,
};

const defaultCardImageProps = {
  item: true,
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  component: "div",
  // style: { height: "auto", width: 200 },
};

const CustomCardList = (props) => {
  let {
    items,
    itemProps,
    organization,
    containerProps = {},
    cardImageProps = {},
    contentProps = {},
    rightPart,
  } = props;

  const defaultContentProps = {
    xs: 12,
    sm: 6,
    md: 8,
    lg: 9,
  };

  itemProps = { ...defaultItemProps, ...itemProps };
  containerProps = { ...defaultContainerProps, ...(containerProps || {}) };
  cardImageProps = { ...defaultCardImageProps, ...cardImageProps };
  contentProps = { ...defaultContentProps, ...contentProps };

  return (
    <Grid container {...containerProps} className="custom-card-list">
      {Array.isArray(items) && items.map((item, ind) => {
        return (
          <Grid item {...itemProps} key={`program-${ind}`}>
            <Card className="custom-card-list-item">
              <CardActionArea
                program={item}
                component={Link}
                // to={`/program/${item.program_id}`}
                to={item.link || "#"}
              >
                <Grid container>
                  <Grid
                    className="custom-card-image-container"
                    {...cardImageProps}
                    style={{
                      backgroundImage: `url(${
                        item.image
                          ? item.image
                          : `${REACT_APP_MEDIA_URL}/course-no-image.png`
                      })`,
                    }}
                  />
                  <Grid item {...contentProps}>
                    {item && item.title && <CardContent component="h3">{item.title}</CardContent> }
                    {item && item.description && <CardContent>{item.description}</CardContent>}
                  </Grid>
                  {
                    // pass a Grid item here (or anythin) to use as right part
                    rightPart && rightPart
                  }
                </Grid>
              </CardActionArea>
            </Card>
          </Grid>
        )
      } 
      )}
    </Grid>
  );
};

export default CustomCardList;
