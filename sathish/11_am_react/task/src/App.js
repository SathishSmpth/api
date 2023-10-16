import React from "react";
import SegmentPopup from "./segmentPopup";

const App = () => {
  const handleSaveSegment = (segmentData) => {
    // Here you can send the segmentData to the server using API calls or any other method you prefer
    console.log(segmentData);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-center">
          <div className="navbar-brand">Navbar</div>
        </div>
      </nav>
      <div className="container">
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#saveSegment"
        >
          Save Segment
        </button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="saveSegment">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title">Offcanvas</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <SegmentPopup onSaveSegment={handleSaveSegment} />
        </div>
      </div>
    </div>
  );
};

export default App;
