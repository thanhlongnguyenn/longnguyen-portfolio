'use client';

import DecryptedText from '@/components/ui/decryptedtext';
import Typewritter from 'typewriter-effect';

export default function Greetings() {
    const jsonData = {
        "greeting": "Howdy!",
        "introduction": {
            "name": "Long Nguyen",
            "career-in-progress": "Software Development",
            "current-career-focus": "Fullstack Web Developer"
        }
    };

    const jsonString = JSON.stringify(jsonData, null, 2);
    const animatedValues = [
        jsonData.greeting,
        jsonData.introduction.name,
        jsonData.introduction["career-in-progress"],
        jsonData.introduction["current-career-focus"]
    ];

    const formattedJsonString = jsonString
        .replace(jsonData.greeting, '___GREETING___')
        .replace(jsonData.introduction.name, '___NAME___')
        .replace(jsonData.introduction["career-in-progress"], '___CAREER_IN_PROGRESS___')
        .replace(jsonData.introduction["current-career-focus"], '___CURRENT_CAREER_FOCUS___');

    return (
      <div className="flex">
        <pre>
          <span className="greeting-comment">
            <span>// </span>
            <Typewritter
              options={{
                strings: ["extracted data from long-nguyen"],
                autoStart: true,
                loop: true,
              }}
            />
            {/* <DecryptedText
              text="// extracted data from long-nguyen"
              animateOn="view"
              revealDirection="start"
              speed={50}
              sequential={true}
            /> */}
          </span>

          {formattedJsonString.split(/(___.*?___)/).map((part, index) => {
            if (part.startsWith("___") && part.endsWith("___")) {
              const valueIndex = [
                "___GREETING___",
                "___NAME___",
                "___CAREER_IN_PROGRESS___",
                "___CURRENT_CAREER_FOCUS___",
              ].indexOf(part);
              const value = animatedValues[valueIndex];
              return (
                <DecryptedText
                  key={index}
                  text={value}
                  animateOn="both"
                  className="greeting-json-value"
                  parentClassName="greeting-json-value"
                  revealDirection="start"
                  speed={80}
                  sequential={true}
                  maxIterations={10}
                />
              );
            }
            return part;
          })}
        </pre>
      </div>
    );
}