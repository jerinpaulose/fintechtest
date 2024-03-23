import React from 'react';

const Test4 = () => {
  return (
    <div>
      <h2>Advantages:</h2>
      <ul>
        <li>
          <strong>Uniqueness: </strong> GUIDs are designed to be globally unique, reducing the chance of generating duplicate IDs across different systems.
        </li>
        <li>
          <strong>Distributed Systems:</strong> GUIDs simplify the process of generating unique identifiers in distributed environments without coordination between nodes.
        </li>
        <li>
          <strong>Security:</strong> GUIDs do not reveal any information about the underlying data, mitigating security vulnerabilities like enumeration attacks.
        </li>
        <li>
          <strong>No Sequence Gaps:</strong> GUIDs do not leave sequence gaps when rows are deleted or rolled back, improving database performance.
        </li>
        <li>
          <strong>Unique across Tables:</strong> GUIDs remain unique not only within a single table but also across multiple tables in the same database, simplifying schema design.
        </li>
      </ul>
      <h2>Drawbacks:</h2>
      <ul>
        <li>
          <strong>Storage Size:</strong> GUIDs typically require more storage space compared to integer-based primary keys, increasing storage requirements.
        </li>
        <li>
          <strong>Index Fragmentation:</strong> Inserting GUIDs into clustered indexes can lead to index fragmentation, degrading database performance.
        </li>
        <li>
          <strong>Readability:</strong> GUIDs are not human-readable, complicating debugging, troubleshooting, and data analysis tasks.
        </li>
        <li>
          <strong>Indexing Performance:</strong> Indexing GUID columns may result in slower query performance compared to indexing integer columns.
        </li>
        <li>
          <strong>Performance Impact on JOINs:</strong> JOIN operations involving tables with GUID primary keys may experience reduced performance.
        </li>
      </ul>
    </div>
  );
};

export default Test4;
