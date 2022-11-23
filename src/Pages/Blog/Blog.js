import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className="blog">
            <h2 className='text-4xl font-bold mt-4 text-center'>Blogs</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7'>
                <article class="rounded-lg border  p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                    <h3 class="mt-0.5 text-lg font-bold ">
                        What are the different ways to manage a state in a React application?
                    </h3>

                    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                        The Four Kinds of React State to Manage
                        <ol>
                            <li>LOCAL STATE</li>
                            <li>GLOBAL STATE</li>
                            <li>SERVER STATE</li>
                            <li>URL STATE</li>
                        </ol>
                    </p>
                </article>
                <article class="rounded-lg border  p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                    <h3 class="mt-0.5 text-lg font-bold">
                        How does prototypical inheritance work?
                    </h3>

                    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.em?
                    </p>
                </article>
                <article class="rounded-lg border  p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                    <h3 class="mt-0.5 text-lg font-bold">
                        What is a unit test? Why should we write unit tests?
                    </h3>

                    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                        What is meant by unit testing?A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                        <span className='block'> They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</span>
                    </p>
                </article>
                <article class="rounded-lg border  p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                    <h3 class="mt-0.5 text-lg font-bold">
                        React vs. Angular vs. Vue?
                    </h3>

                    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                        Angular​ In Angular, components are called directives those are used as markers on Document Object Model (DOM) elements, which can track and detect specific behavior of every single component.For that reason, Angular usually divides the UI part of components as attributes of HTML tags, and their behaviors in the form of JavaScript code.
                        <span className='block'> React In React, it usually combines the UI and behavior of components. For instance, a code that can create a "hello world" component in React and the same part of the code is responsible for developing a UI element as well as tracking its behavior.</span>
                        <span className='block'>
                            Vue​Vue gives the opportunity to customize it which allows combining the UI and behavior of components in the same script. Further, it allows using preprocessors in Vue rather than CSS that is a relief for developers nowadays. Vue can integrate other libraries like Bootstrap.
                        </span>
                    </p>
                </article>
            </div>
        </div>

    );
};

export default Blog;