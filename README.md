# Unhandled Database Errors in Express.js

This repository demonstrates a common error in Express.js applications: unhandled database errors.  When a database query fails, the application might crash without providing informative error messages to the user.

## The Problem

The `bug.js` file shows an Express.js application that makes a database query.  However, it lacks proper error handling for cases where the query fails. If the database is unavailable or the query is malformed, the application will likely crash or return a generic error message.

## The Solution

The `bugSolution.js` file demonstrates how to properly handle database errors.  It uses a `try...catch` block to gracefully handle potential errors and sends a user-friendly error response.

## How to Run

1.  Clone this repository.
2.  Make sure you have Node.js and npm installed.
3.  Install the necessary dependencies: `npm install express mysql` (or your database driver).
4.  Run the `bug.js` file to see the unhandled error scenario.
5.  Run the `bugSolution.js` file to observe the proper error handling.