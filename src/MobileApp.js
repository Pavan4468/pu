// src/MobileApp.js
import React from 'react';
import './MobileApp.css'; // Import CSS for styling

// Import images
import reactNativeImage from './assets/react.jpg'; // Example image path
import javaImage from './assets/java.jpg'; // Example image path
import flutterImage from './assets/flutter.png'; // Example image path
import swiftImage from './assets/swift.png'; // Example image path

function MobileApp() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Mobile App Development Roadmap</h1>
      </header>
      <section className="page-content">
        <h2>1. React Native</h2>
        <img src={reactNativeImage} alt="React Native" className="section-image" />
        <p>
          React Native is a popular framework developed by Facebook for building mobile applications using JavaScript and React. It allows developers to write code once and deploy it on both iOS and Android platforms. React Native provides a rich set of components and APIs, enabling the creation of native-like experiences with the flexibility of JavaScript.
        </p>
        <p>
          Key concepts include understanding JSX, state management, and using components from the React Native library. Developers should also be familiar with native modules for accessing device features.
        </p>

        <h2>2. Java</h2>
        <img src={javaImage} alt="Java" className="section-image" />
        <p>
          Java is a widely-used language for Android app development. It is known for its stability and extensive libraries. Android Studio is the primary IDE used for Java development in Android, providing tools for building, testing, and debugging applications.
        </p>
        <p>
          Developers need to be familiar with Java programming fundamentals, Android SDK, and UI design principles. Key components include activities, fragments, and intents, as well as understanding the Android lifecycle and resource management.
        </p>

        <h2>3. Flutter</h2>
        <img src={flutterImage} alt="Flutter" className="section-image" />
        <p>
          Flutter is an open-source UI toolkit developed by Google for building natively compiled applications from a single codebase. Using the Dart programming language, Flutter enables high-performance app development for iOS, Android, web, and desktop platforms.
        </p>
        <p>
          Key features include a rich set of pre-designed widgets, a reactive framework, and hot reload capabilities. Developers should understand Flutter's widget tree, state management, and custom animations.
        </p>

        <h2>4. Swift</h2>
        <img src={swiftImage} alt="Swift" className="section-image" />
        <p>
          Swift is Apple's programming language for iOS and macOS app development. Known for its safety and performance, Swift is designed to be easy to learn and use, making it a popular choice for developing apps in the Apple ecosystem.
        </p>
        <p>
          Developers should be proficient in Swift syntax, understand the iOS SDK, and use Xcode as the primary IDE. Key concepts include working with UIKit or SwiftUI for building user interfaces, managing app states, and handling network requests.
        </p>
      </section>
      <footer className="page-footer">
        <h3>Contact Information</h3>
        <p><strong>Teacher:</strong> Sarah Thompson</p>
        <p><strong>Email:</strong> sarahthompson@example.com</p>
        <p><strong>Contact Number:</strong> (987) 654-3210</p>
        <p><strong>Cabin Number:</strong> 505</p>
      </footer>
    </div>
  );
}

export default MobileApp;
