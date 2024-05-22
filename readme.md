### Saby Intent Classifier

#### Description
The Saby Intent Classifier is a simple application that utilizes base rules to classify intents based on a JSON file. It offers a lightweight solution for intent classification, particularly useful in scenarios where complex machine learning models are not necessary or feasible.

#### Features
- **Base Rules**: Classifies intents using predefined rules stored in a JSON file.
- **Simple Interface**: Provides a straightforward interface for integrating intent classification into applications.
- **Customizable**: Allows for easy customization of intent classification rules by modifying the JSON file.

#### Installation
To use the Saby Intent Classifier, follow these steps:
1. Clone the repository: `git clone https://github.com/fadebowaley/Saby-Intent.git`
2. Install dependencies: `npm install`

#### Usage
1. Define intent classification rules in the `intents.json` file.
2. Import the `classifyIntent` function from the Saby Intent Classifier module.
3. Use the `classifyIntent` function to classify user input based on the predefined rules.

```javascript
import { classifyIntent } from 'saby-intent-classifier';

const userInput = "User's input goes here";
const intent = classifyIntent(userInput);
console.log("Detected Intent:", intent);


Contributing
Contributions are welcome! If you have suggestions, feature requests, or want to report a bug, please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.