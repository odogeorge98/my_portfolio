// src/custom.d.ts
// allow importing .js / .jsx React components without TS declaration files
declare module "*.js" {
  import React from "react";
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module "*.jsx" {
  import React from "react";
  const Component: React.ComponentType<any>;
  export default Component;
}

// allow importing common image types
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
