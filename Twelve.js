import React, { useState } from 'react';

const Twelve = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && (
        <div>
          <img src={URL.createObjectURL(file)} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default Twelve;
