type ExtType = "serviceWorker" | "theme" | "page";

type Extension = {
  name: string;
  script: string;
  type: ExtType;
};

/* 
  - title: The title of the extension
  - description: A description of the extension
  - version: The version of the extension (semver)
  - script: The script URL to be downloaded and saved into scriptCopy
  - entryNamespace: The namespace of the entry function for serviceWorker extensions
  - entryFunc: The name of the entry function for serviceWorker extensions
  - scriptCopy: The script contents of the extension btoa'd (null if not downloaded)
  - type: The type of extension, see ExtType.
  - themeName: The name of the theme that goes in the data attribute
*/
interface IExtensionMetadata {
  title: string;
  description: string;
  version: string;
  image: string;
  script: string;
  entryNamespace?: string;
  entryFunc?: string;
  scriptCopy?: string;
  type: ExtType;
  themeName?: string;
}

type ExtensionMetadataJSON = Record<string, IExtensionMetadata>;

type InstallReturn = {
  code: EXT_RETURN;
  slug: string;
  title?: string;
};

type GameMetadata = {
  name: string,
  description?: string,
  image: string,
  slug: string,
}

type GameList = {
  [key: string]: GameMetadata;
};