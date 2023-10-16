import React, { Fragment, useState } from "react";

const SegmentPopup = ({ onSaveSegment }) => {
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchemaOptions, setSelectedSchemaOptions] = useState([]);
  const [newSchemaOption, setNewSchemaOption] = useState("");
  const schemaOptions = [
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ];

  const handleAddSchema = () => {
    console.log(newSchemaOption);
    selectedSchemaOptions.push(newSchemaOption);
    setNewSchemaOption("");
    console.log(selectedSchemaOptions);
  };

  const handleUpdateSchema = (e, id) => {
    console.log("updated", id);
    selectedSchemaOptions[id] = { [e.target.value]: e.target.name };
    setNewSchemaOption("");
  };

  const handleSaveSegment = () => {
    const segmentData = {
      segment_name: segmentName,
      schema: selectedSchemaOptions.map((option) => ({
        [option]: option,
      })),
    };
    onSaveSegment(segmentData);
  };
  const resetSelectedSchemaOptions = () => {
    setSelectedSchemaOptions([]);
    setNewSchemaOption("");
  };

  return (
    <Fragment>
      <div className="offcanvas-body">
        <label id="segmentName" className="form-label">
          Enter the Name of th Segment
        </label>
        <input
          type="text"
          id="segmentName"
          className="form-control rounded-0 my-2"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
          placeholder="Enter segment name"
        />
        <div className="blue-box">
          <label className="form-label">
            To save your segment, you need to add schemas to build the query
          </label>
          {selectedSchemaOptions.map((selOptions, index) => (
            <select
              className="form-select rounded-0 mb-1"
              value={selOptions}
              onChange={(e) => handleUpdateSchema(e, index)}
            >
              <option value="" disabled>
                Add schema to segment
              </option>
              {schemaOptions.map((option, i) => (
                <option key={i} value={option.value} name={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          ))}
          <select
            className="form-select rounded-0"
            value={newSchemaOption}
            onChange={(e) =>
              setNewSchemaOption({ [e.target.value]: e.target.name })
            }
          >
            <option value="" disabled>
              Add schema to segment
            </option>
            {schemaOptions
              .filter(({ value }) => {
                return !selectedSchemaOptions.find((options) => value in options);
              })
              .map((option, i) => (
                <option key={i} value={option.value} onChange={()=>{console.log("Hello")}} name={option.label}>
                  {option.label}
                </option>
              ))}
          </select>
          <div className="mt-2">
            <button
              onClick={handleAddSchema}
              className=" btn btn-success"
              disabled={!newSchemaOption}
            >
              +Add new schema
            </button>
            {selectedSchemaOptions.length > 0 && (
              <button
                onClick={resetSelectedSchemaOptions}
                className=" btn btn-danger ms-1"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="offcanvas-footer mx-3 my-4">
        <button
          onClick={handleSaveSegment}
          className="rounded-0 btn btn-success"
        >
          Save segment
        </button>
        <button
          className="rounded-0 ms-3 btn btn-secondary"
          data-bs-dismiss="offcanvas"
        >
          Cancel
        </button>
      </div>
    </Fragment>
  );
};

export default SegmentPopup;
