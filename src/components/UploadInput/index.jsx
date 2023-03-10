function UploadInput(props) {
  return (
    <div className="button_wrap">
      <label htmlFor="image_input" className="upload_button">
        Upload
      </label>
      <input
        type="file"
        className="image_input"
        id="image_input"
        accept=".jpg, .jpeg"
        onChange={props.onChange}
      />
    </div>
  );
}

export { UploadInput };
