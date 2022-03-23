import React from "react";

export const ReactJs = () => {
    return (
        <>
            <p>
                In Js, accessing DOM is slow when there are many nested elements present in html. So facebook
                introduced React which uses Virtual DOM.Virtual DOM is a lightweight copy of actual DOM
                present as JS object in memory. When a state is changed react take snapshot of virtual DOM befor
                update and then virtual DOM updated. Then react compares the virtual DOM snapshot and updated
                virtual DOM. This process is called diffing. ReactDOM updates only the changed state without
                refreshing entire page. Only the changed content is updated. This is called reconciliation.
                React makes use of JSX(JavaScript XML) to write HIML inside JS file of React.
                There are two types of component in React, Class and Functional components.
                Before version 16.8, state can be defined and updated using class component only. But in class
                component, code strcuture is large. So in October 2018 at React conference, react hooks
                was introduced for to include states in functional components.
                Then after that code size reduced considerably. Advantages of React are speed, code reusability,
                easier to debug using React Developer tools.
            </p>
            <p>
                Important concepts of React are conditional rendering, hooks, rendering different types of
                datatypes and JS like primitive values, arrays, objects and promise, routers, state and props,
                components, and lifecyle. React redux is used to maintain data and React JS is just a view
                layer.
            </p>
            <p>
                We must need to know atleast basic 5 hooks such as useState, useEffect, useContext, useMemo
                and useCallback. State updation is done by useState. useEffect have three usecases.
                When dependency array is empty, then useEffect executes only at the beginning of loading.
                When a dependency array has any state, whenever the state change happens, useEffect
                executes. When there is no dependency array, then useEffect for executes for each
                render. useContext hook is used to send data between nested components and also
                avoid prop drilling. Difference between useContext and redux, redux is used to maintain
                data and store state and initial state not mutated. Redux change the state by
                creating the reference and change that reference. But useContext just pass the state from
                one component to another and also mutates the state when state changes.
                useMemo and useCallback is used to prevent unnecessary renders.
            </p>
            <p>
                Redux is an open source javaScript library used for state management and centralizing
                application states. Redux have important concepts such as store, action, reducer,
                subscribe, dispatch, connect, provider, mapStateToProps and mapDispatchToProps.
                A store is an immutable object tree in Redux. A store is a state container which holds the
                application's state. Redux can have only a single store in your application. Whenever a store is
                created in Redux, you need to specify the reducer.
                Actions are the only source of information for the store as per Redux official documentation. It
                carries a payload of information from your application to store. As discussed earlier, actions
                are plain JavaScript object that must have a type attribute to indicate the type of action
                performed.In Redux, a reducer is a pure function that takes an action and the previous state of
                the application and returns the new state. The action describes what happened and it is the
                reducer's job to return the new state based on that action. dispatch is a function of the Redux
                store. You call store. dispatch to dispatch an action. This is the only way to trigger a state
                change. With React Redux, your components never access the store directly - connect does it for
                you. The connect() function connects a React component to a Redux store. It provides its
                connected component with the pieces of the data it needs from the store, and the functions it
                can use to dispatch actions to the store. In Redux, subscriptions are called after the root
                reducer has returned the new state, so you may dispatch in the subscription listeners. You are
                only disallowed to dispatch inside the reducers because they must have no side effects.
                Providing a mapDispatchToProps allows you to specify which actions your component might need to
                dispatch. It lets you provide action dispatching functions as props. Therefore, instead of
                calling props. The mapStateToProps function is used in the Redux pattern to reflect any updates
                to the Redux store and merge them into props in your component. The Redux store serves as a
                centralized place for the state to live in your application.
            </p>
        </>
    )
}