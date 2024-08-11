// import {App} from '../App.js'

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <div className="button-container">
          <a href={`../App/FoH`} className="large-button">FoH</a>
          <a href={`../App/BoH`} className="large-button">BoH</a>
        </div>
      </div>
    </>
  );
}