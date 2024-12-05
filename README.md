# Incorrect Dimensions from React Native Dimensions API

This repository demonstrates a common bug in React Native applications related to the `Dimensions` API and provides a solution using `useEffect` and state management.

## Bug Description

The `Dimensions` API in React Native sometimes returns incorrect dimensions, particularly when the component mounts before the layout is fully calculated.  This can lead to incorrect layouts and unexpected behavior.

## Solution

The solution involves using the `useEffect` hook to asynchronously retrieve dimensions after the layout is finalized.  This ensures the application uses accurate values for screen width and height.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory using the terminal.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the app.

Observe the layout; you will likely find initial misalignment due to incorrect dimensions. With the fix implemented, it should layout correctly.