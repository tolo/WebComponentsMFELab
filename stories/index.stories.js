import "../src/mfe1.js";
import "../src/mfe2.js";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => `
  <my-mfe1></my-mfe1>
  <p style="margin:10px">&nbsp;</p>
  <my-mfe2></my-mfe2>
`;
