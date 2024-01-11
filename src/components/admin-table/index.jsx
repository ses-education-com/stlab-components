// import { Button } from "@material-ui/core";
import React from "react";
import uniquid from "uniquid";
import {
  DataGrid,
  // GridLinkOperator,
  GridToolbarContainer,
  GridToolbarExport,
  GridOverlay,
} from "@material-ui/data-grid";
import GridSearchComponent from "./grid-search-component";
import "./admin-table.scss";
import { LinearProgress } from "@material-ui/core";

// const CreateCustomToolbar =
//   ({ buttons, searchComponent }) =>
//   () =>
//     (
//       <GridToolbarContainer className="admin-table-toolbar">
//         {/* <>
//           {buttons} */}
//           {searchComponent}
//         {/* </> */}
//       </GridToolbarContainer>
//     );

const CustomToolbar = ({ children }) => (
  <GridToolbarContainer className="admin-table-toolbar">
    {children}
  </GridToolbarContainer>
);
const loadingOverlay = (
  <GridOverlay>
    <div style={{ position: "absolute", top: 0, width: "100%" }}>
      <LinearProgress />
    </div>
  </GridOverlay>
);

const defaultComponents = {
  loadingOverlay,
};

class AdminTable extends React.Component {
  state = {
    search: "",
    id: null,
    rows: [],
    valueGetters: {},
  };

  componentDidMount() {
    const id = uniquid();
    this.setState({ id });
    this.findFieldValueGetters();
    this.filterRows();
  }

  componentDidUpdate(prevProps) {
    const { rows, columns } = this.props;
    const { rows: prevRows, columns: prevColumns } = prevProps;

    if (columns !== prevColumns) this.findFieldValueGetters();

    if (rows !== prevRows) {
      this.filterRows();
    }
  }

  /**
   * Find value getters for each search field and store them as object hashed by field name
   * @returns
   */
  findFieldValueGetters() {
    const { columns = [], searchFields = [] } = this.props;
    if (!Array.isArray(columns)) return;

    const valueGetters = searchFields.reduce((res, f) => {
      let column = columns.find((c) => c.field === f);
      // if there is a column...
      const getter = column
        ? // there is
          typeof column.valueGetter === "function"
          ? // return getter
            column.valueGetter
          : // no getter: let's check if there's a formatter
          typeof column.valueFormatter === "function"
          ? // return formatter
            column.valueFormatter
          : // no getter and no formatter: return value as is
            ({ value }) => value
        : // no column: return value as is
          ({ value }) => value;
      return { ...res, [f]: getter };
    }, {});

    this.setState({ valueGetters });
  }

  filterRows = () => {
    let { rows = [], searchFields = [], columns = [] } = this.props;
    let { search, valueGetters } = this.state;
    search = typeof search === "string" ? search.toLowerCase() : "";
    console.debug(search, rows, searchFields);
    if (
      search === "" ||
      !Array.isArray(rows) ||
      !Array.isArray(searchFields) ||
      !rows.length > 0 ||
      !searchFields.length > 0
    ) {
      return this.setState({ rows });
    }
    console.debug("valueGetters", valueGetters);
    const newRows = rows.filter((row) => {
      let found = false;
      for (let i = 0; i < searchFields.length && found === false; i++) {
        // get current field name
        const fieldName = searchFields[i];
        const fieldValue = valueGetters[fieldName](
          // pass field value as "value" argument inside an object,
          // for that's what a value getter / formatter would expect
          { value: row[fieldName] }
        );
        console.debug("valueGetter result", fieldValue);

        if (
          typeof fieldValue === "string" &&
          fieldValue
            // cast to lower case to make search case-insensitive
            .toLowerCase()
            .includes(search)
        ) {
          // console.debug("returning true on ", row[fieldName ])
          found = true;
        }
      }
      return found;
    });

    this.setState({ rows: [...newRows] });
  };

  onSearch = (search) => this.setState({ search }, () => this.filterRows());

  render() {
    let {
      rows: propsRows,
      columns = {},
      // rows = [],
      searchFields = [],
      components = {},
      buttons = <GridToolbarExport />,
      searchComponent,
      searchPlaceholder = "Search...",
      className,
      rowHeight = 40,
      ...other
    } = this.props;

    const { search, id, rows } = this.state;

    console.debug("rows", rows);

    searchComponent = searchComponent || (
      <GridSearchComponent
        key={`${id}-search`}
        search={search}
        onChange={this.onSearch}
        placeholder={searchPlaceholder}
      />
    );

    components = {
      ...defaultComponents,
      Toolbar: () => (
        <CustomToolbar>
          <span className="admin-table-buttons">{buttons}</span>
          <span className="admin-table-search">{searchComponent}</span>
        </CustomToolbar>
      ),
      ...components,
    };

    return (
      <div
        className={`admin-table-container${className ? ` ${className}` : ""}`}
      >
        <DataGrid
          key={`atable-${id}`}
          // filterModel={filterModel}
          components={components}
          rows={rows}
          rowHeight={rowHeight}
          columns={columns}
          {...other}
        />
      </div>
    );
  }
}

export default AdminTable;
