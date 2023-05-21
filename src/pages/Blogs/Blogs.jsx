import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='mt-28 mb-28'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>Access Token: A access token is a credential that is user to  access the resources on a server.</p>
                    <p>Refresh Token: Refresh token purpose when a access token is expires the refresh token give new access token</p>
                    <p>How they work: When a user logs in or authenticates for the first time server send access and refresh token the the user acces resource on server</p>
                    <p>
                        Storage on the client-side: https cookies
                    </p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL database: SQL databases are based on the relational data model,SQL databases have a fixed schema,SQL databases are well-suited for structured data, complex relationships</p>
                    <p>NoSQL: NoSQL databases are designed with horizontal scalability in mind. They can distribute data across multiple server,NoSQL databases use a variety of query languages specific to their data models. For example, key-value stores often have simple get and put operations,</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is express js? What is Nest JS
                </div>
                <div className="collapse-content">
                    <p>Express:  Express.js is a popular web application framework for Node.js. It provides a simple and minimalist approach to building web applications and APIs. Express.js allows developers to handle HTTP requests, define routes, manage middleware, and render dynamic content.</p>
                    <p>NestJS: NestJS is a progressive, TypeScript-based framework for building scalable and efficient server-side applications. It combines elements of object-oriented programming, functional programming, and reactive programming. NestJS is built on top of Express.js, leveraging its simplicity and maturity while providing additional features and architectural patterns.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is MongoDB aggregate and how does it work
                </div>
                <div className="collapse-content">
                    <p>In MongoDB, the aggregate operation is a powerful tool used to perform data aggregation and analysis on collections. It allows you to process and transform data, perform calculations, and generate aggregated results based on the specified criteria. The aggregate operation uses the MongoDB Aggregation Pipeline, which is a framework for data processing and transformation.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;