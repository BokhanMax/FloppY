import { routes } from './src/router/index.js';

module.exports = {
    pages: {
        // This is our main page which refers to the main Javascript file
        index: "src/main.js",
        // Next, we list all other pages in the application,
        // and let all of them refer to the main Javascript file as well.
        internet: "src/main.js",
        media: "src/main.js",
        files: "src/main.js",
        faq: "src/main.js",
        blog: "src/main.js",
        contact: "src/main.js",
        index: {
            title: 'Index Page',
        },
        faq: {
            title: 'FAQ Page',
        },
    },
};