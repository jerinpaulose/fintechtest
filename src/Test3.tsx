import React from 'react';

const Test3 = () => {
    return (
        <div className="saas-data-access-page">
            <h1>SaaS Application Data Access Strategies</h1>

            <div className="strategy">
                <h2>API Layer</h2>
                <p>Implement an API layer that serves as an intermediary between the front-end and the database. The API layer exposes endpoints specifically designed to fetch data relevant to the front-end's needs. These endpoints can return structured data in JSON or XML format, containing only the necessary fields required by the front-end application.</p>
            </div>

            <div className="strategy">
                <h2>Custom Endpoints</h2>
                <p>Create custom endpoints within the API that fetch and return only the required data. For example, if the front-end needs a list of currencies, you can create an endpoint like <code>/api/currencies</code> that retrieves and returns the currency data without exposing other sensitive information.</p>
            </div>

            <div className="strategy">
                <h2>Data Transfer Objects (DTOs)</h2>
                <p>Use Data Transfer Objects to define the structure of data transferred between the server and the client. DTOs allow you to specify exactly which fields should be included in the data sent to the front-end, abstracting away the internal database structure. This helps in controlling what data is exposed to the client.</p>
            </div>

            <div className="strategy">
                <h2>Access Control and Authentication</h2>
                <p>Implement access control mechanisms and authentication to ensure that only authorized users can access specific data through the API. Role-based access control (RBAC) or permissions-based access control can be used to restrict access to sensitive database fields.</p>
            </div>

            <div className="strategy">
                <h2>Field-Level Access Control</h2>
                <p>Utilize field-level access control mechanisms to restrict access to specific fields within the database. This allows you to define which fields are accessible to different users or roles, ensuring that sensitive information remains protected.</p>
            </div>

            <div className="strategy">
                <h2>Query Parameterization</h2>
                <p>Allow the front-end to specify query parameters when making API requests to filter the data returned by the server. For example, you can implement query parameters to filter currencies based on criteria such as country, currency code, or currency type.</p>
            </div>

            <div className="strategy">
                <h2>Data Masking</h2>
                <p>Implement data masking techniques to obfuscate or hide sensitive information in the API responses. Data masking ensures that even if the front-end receives data, certain fields containing sensitive information are masked or anonymized.</p>
            </div>
        </div>
    );
};

export default Test3;
