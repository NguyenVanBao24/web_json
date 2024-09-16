import React from 'react';

interface ViewProps {
  data: {
    name: string;
    address: string;
    tax: string;
    image: string;
  } | null;
}

const View: React.FC<ViewProps> = ({ data }) => {
  if (!data) return <p>No data submitted yet.</p>;
  return (
    <div>{`  <div style="display: flex; margin: 20px;">
      <div style="width: 30%;">
        <img alt="Company Logo" id="logo" src="/files/${data.image}">
      </div>
      <div style="text-align: right; width: 70%; display: flex; flex-direction: column;">
        <h1 style="font-size: 15px; padding: 0; margin: 0; text-transform: capitalize;">${data.name}</h1>
        <h1 style="font-size: 15px; padding: 0; margin: 0; text-transform: capitalize; font-style: italic; color: #969696;">${data.name}</h1>
         <h1 style="font-size: 15px; padding: 0; margin: 0; text-transform: capitalize;">MST: ${data.tax}</h1>
        <h1 style="font-size: 15px; padding: 0; margin: 0; text-transform: capitalize; font-style: italic; color: #969696;">Tax code:  ${data.tax}</h1>
        <h1 style="font-size: 15px; padding: 0; margin: 0; text-transform: capitalize;">
          ${data.address}
        </h1>
        <h1 style="font-size: 15px; padding: 0; margin: 0; text-transform: capitalize; font-style: italic; color: #969696;">
          ${data.address}
        </h1>
       
      </div>
    </div>`}</div>
  );
};

export default View;
