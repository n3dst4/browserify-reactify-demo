# Browserify/Reactify Transform demo

A sample project to demonstrate the use of Reactify in a package.json browserify.tranform config.

There is a top-level project, containing a source file called `index.js`, which
`require()`s a React component called `Baz` from a module called `bar`.

Note how `reactify` is specified in the package.json of both the top level project *and* the `bar` dependency (included in `node_modules`).

You can play about with removing one or the other to see how it breaks the build or the output code.

To run the build, make sure you have gulp installed globally:

    npm install gulp -g

Then install local dependencies in this folder:

    npm install

Then run gulp:

    gulp

The output goes into `compiled.js` (also checked in so you can see the results without having to build it yourself.)