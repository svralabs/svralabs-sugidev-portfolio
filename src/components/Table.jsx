import PropTypes from 'prop-types';

export default function Table({
  columns,
  data,
  className = '',
  ...props
}) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-mist/10" {...props}>
        <thead className="bg-ink-soft">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-kanit font-bold uppercase tracking-wider text-on-background"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-background divide-y divide-mist/10">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-sm font-body text-on-surface-variant"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};
