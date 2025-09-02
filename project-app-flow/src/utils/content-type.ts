export enum ContentType {
  // JSON
  JSON = "application/json",

  // Texto
  TEXT = "text/plain",
  HTML = "text/html",
  CSS = "text/css",
  CSV = "text/csv",

  // XML
  XML = "application/xml",
  RSS = "application/rss+xml",
  ATOM = "application/atom+xml",

  // Formulários
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",

  // Arquivos
  PDF = "application/pdf",
  ZIP = "application/zip",
  JPEG = "image/jpeg",
  PNG = "image/png",
  GIF = "image/gif",
  SVG = "image/svg+xml",

  // JavaScript
  JAVASCRIPT = "application/javascript",
  TYPESCRIPT = "application/typescript",

  // Outros úteis
  OCTET_STREAM = "application/octet-stream", // arquivos binários
}
