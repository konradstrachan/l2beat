import React from 'react'

interface Row {
  isSynced: boolean
  cells: string[]
}

interface StatusTableProps {
  columns: string[]
  rows: Row[]
}

export function StatusTable(props: StatusTableProps) {
  return (
    <table>
      <thead>
        <tr>
          {props.columns.map((column) => (
            <th>{column}</th>
          ))}
          <th>isSynced</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map(({ cells, isSynced }, i) => (
          <tr key={i} style={{ color: isSynced ? undefined : 'red' }}>
            {cells.map((cell) => (
              <td>{cell}</td>
            ))}
            <td>{isSynced.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}