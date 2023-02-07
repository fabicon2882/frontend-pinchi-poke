import './Table.module.css';
import PropTypes from 'prop-types';

const TableCourse = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((column) => {
    return (
      <th key={column.label} scope="col">
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td scope="row" key={column.label} data-label={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return <tr key={keyFn(rowData)}>{renderedCells}</tr>;
  });

  return (
    <table>
      <thead>
        <tr>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default TableCourse;

TableCourse.propTypes = {
  data: PropTypes.array.isRequired,
  config: PropTypes.array.isRequired,
  keyFn: PropTypes.func.isRequired,
};
