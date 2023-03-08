declare module namespace {

  export interface Properties {
      name: string;
  }

  export interface Crs {
      type: string;
      properties: Properties;
  }

  export interface Properties2 {
      OBJECTID: string;
      Entity: string;
      Handle: string;
      Layer: string;
      LyrFrzn: string;
      LyrLock: string;
      LyrOn: string;
      LyrVPFrzn: string;
      LyrHandle: string;
      Color: string;
      EntColor: string;
      LyrColor: string;
      BlkColor: string;
      Linetype: string;
      EntLinetyp: string;
      LyrLnType: string;
      BlkLinetyp?: any;
      Elevation: number;
      Thickness: number;
      LineWt: string;
      EntLineWt: string;
      LyrLineWt: string;
      BlkLineWt: string;
      RefName?: any;
      LTScale: number;
      ExtX: number;
      ExtY: number;
      ExtZ: number;
      DocName: string;
      DocPath: string;
      DocType: string;
      DocVer: string;
      Shape_Leng: number;
      Shape_Area: number;
  }

  export interface Geometry {
      type: string;
      coordinates: number[][][][];
  }

  export interface Feature {
      type: string;
      properties: Properties2;
      geometry: Geometry;
  }

  export interface RootObject {
      type: string;
      name: string;
      crs: Crs;
      features: Feature[];
  }

}
