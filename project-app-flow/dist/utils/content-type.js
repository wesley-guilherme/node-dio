"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/content-type.ts
var content_type_exports = {};
__export(content_type_exports, {
  ContentType: () => ContentType
});
module.exports = __toCommonJS(content_type_exports);
var ContentType = /* @__PURE__ */ ((ContentType2) => {
  ContentType2["JSON"] = "application/json";
  ContentType2["TEXT"] = "text/plain";
  ContentType2["HTML"] = "text/html";
  ContentType2["CSS"] = "text/css";
  ContentType2["CSV"] = "text/csv";
  ContentType2["XML"] = "application/xml";
  ContentType2["RSS"] = "application/rss+xml";
  ContentType2["ATOM"] = "application/atom+xml";
  ContentType2["FORM_URLENCODED"] = "application/x-www-form-urlencoded";
  ContentType2["FORM_DATA"] = "multipart/form-data";
  ContentType2["PDF"] = "application/pdf";
  ContentType2["ZIP"] = "application/zip";
  ContentType2["JPEG"] = "image/jpeg";
  ContentType2["PNG"] = "image/png";
  ContentType2["GIF"] = "image/gif";
  ContentType2["SVG"] = "image/svg+xml";
  ContentType2["JAVASCRIPT"] = "application/javascript";
  ContentType2["TYPESCRIPT"] = "application/typescript";
  ContentType2["OCTET_STREAM"] = "application/octet-stream";
  return ContentType2;
})(ContentType || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ContentType
});
