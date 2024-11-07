import React, { useEffect, useState } from "react";
import Button from "./Button/Button";
import { ExampleContent } from "../../../data/Data";

const Example = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  let [content, setContent] = useState("Please Select a topic before to proceed");

  const handleSelect = (topic) => {
    console.log("Select");
    setSelectedTopic(topic);
  };
  const topics = ["components", "jsx", "props", "state"];

  useEffect(() => {
    if (selectedTopic!="Please Select a topic before to proceed" && selectedTopic) {
      console.log("selectedTopic", selectedTopic);
      console.log("selectedTopic", ExampleContent[selectedTopic]);
      setContent(
        <div id="tab-content">
          <h4>{ExampleContent[selectedTopic].title.toUpperCase()}</h4>
          <p className="mt-2"> {ExampleContent[selectedTopic].description}</p>
          <pre className="mt-3">
            <code >{ExampleContent[selectedTopic].code}</code>
          </pre>
        </div>
      );
    }
  }, [selectedTopic]);
  return (
    <section className="">
      <div className="row m-0 p-0">
        <div className="col-auto p-0">
          <h2>Examples</h2>
        </div>
      </div>
      <div className="row m-0 p-0 mt-3">
        <div className="col-12 p-0">
          {topics.map((topic) => (
            <Button
              key={topic}
              name={topic}
              selectedTopic={selectedTopic}
              handleSelect={handleSelect}
            />
          ))}
        </div>
      </div>
      <div className="row m-0 p-0 mt-3">
        <div className="col-12 p-0">
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
};

export default Example;
