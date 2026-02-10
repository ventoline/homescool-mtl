import path from "path";
import { XMLParser } from "fast-xml-parser";

//import data from "public/data/Homeschool centers in Montreal.geojson";
import dataLinx from "public/data/ressources links.xml";

const DATA_DIR = path.join(process.cwd(), "data"); // private folder (NOT public)
const GEOJSON_PATH = path.join(
  DATA_DIR,
  "Homeschool centers in Montreal.geojson",
);

export type Centre = {
  id: string;
  name: string;
  description: string;
  address?: string;
  lat?: number;
  lng?: number;
  website: string;
  type?: string;
  // affiliate: boolean
};

export function getCentres(parsed): Centre[] {
  console.log("getCentres called with parsed data:", parsed.ressources);
  //  if (!parsed || !parsed?.data || !parsed?.ressources) return [];

  const itemsArray = Object.entries(parsed?.ressources).map(
    (child: unknown, idx) => {
      return {
        id: idx.toString(),
        name: child[1]["name"],
        website: child[1]["link"],
        description: child[1]["def"],
        type: child[1]["type"],
      } as Centre;
    },
  );

  console.log("Parsed items:", itemsArray);
  return itemsArray;
}

/**
 * Convert GeoJSON FeatureCollection into list items.
 * - Supports Point, Polygon, MultiPolygon (computes a representative center)
 * - Assumes coordinates are [lng, lat]
 */
export function parseGeoJSONToItems(geojson: any): Centre[] {
  if (
    !geojson ||
    geojson.type !== "FeatureCollection" ||
    !Array.isArray(geojson.features)
  )
    return [];

  if (
    !geojson ||
    geojson.type !== "FeatureCollection" ||
    !Array.isArray(geojson.features)
  ) {
    return [];
  }

  return geojson.features
    .filter((f) => f && f.type === "Feature" /* && f.geometry */)
    .map((f, idx) => {
      const props = f.properties || {};
      const { lng, lat } = getFeatureCenter(f.geometry);

      // Choose a stable id if possible
      const id =
        f.id ??
        props.id ??
        //    props.slug ??
        `${props.name ?? "feature"}-${idx}`;

      return {
        id,
        name: props.name ?? props.title ?? "",
        address: props.address ?? "",
        website: props.link ?? props.url ?? "",
        // def: props.def ?? "",
        category: props.type ?? "",
        description: props.def ?? "",
        lng,
        lat,
        // keep all original props if useful
        properties: props,
      };
    });
}

/**
 * Returns a representative center {lng, lat} for a GeoJSON geometry.
 * - Point: uses its coordinate
 * - Polygon/MultiPolygon: uses the bbox center of all vertices
 * - Other geometry types: returns {lng:null, lat:null}
 */
function getFeatureCenter(geometry) {
  if (!geometry || !geometry.type) return { lng: null, lat: null };

  if (geometry.type === "Point") {
    const c = geometry.coordinates;
    return Array.isArray(c) && c.length >= 2
      ? { lng: c[0], lat: c[1] }
      : { lng: null, lat: null };
  }

  const coords = flattenCoordinates(geometry);
  if (coords.length === 0) return { lng: null, lat: null };

  let minLng = Infinity,
    minLat = Infinity,
    maxLng = -Infinity,
    maxLat = -Infinity;

  for (const [lng, lat] of coords) {
    if (typeof lng !== "number" || typeof lat !== "number") continue;
    minLng = Math.min(minLng, lng);
    minLat = Math.min(minLat, lat);
    maxLng = Math.max(maxLng, lng);
    maxLat = Math.max(maxLat, lat);
  }

  if (
    !isFinite(minLng) ||
    !isFinite(minLat) ||
    !isFinite(maxLng) ||
    !isFinite(maxLat)
  ) {
    return { lng: null, lat: null };
  }

  return { lng: (minLng + maxLng) / 2, lat: (minLat + maxLat) / 2 };
}

/**
 * Flattens geometry coordinates into an array of [lng, lat] pairs.
 * Supports: LineString, MultiLineString, Polygon, MultiPolygon
 */
function flattenCoordinates(geometry) {
  const { type, coordinates } = geometry;

  if (!coordinates) return [];

  switch (type) {
    case "LineString":
      return coordinates.filter(isLngLat);
    case "MultiLineString":
      return coordinates.flat().filter(isLngLat);
    case "Polygon":
      // Polygon = array of linear rings; use all rings
      return coordinates.flat().filter(isLngLat);
    case "MultiPolygon":
      // MultiPolygon = array of polygons -> rings -> points
      return coordinates.flat(2).filter(isLngLat);
    default:
      return [];
  }
}

function isLngLat(x) {
  return (
    Array.isArray(x) &&
    x.length >= 2 &&
    typeof x[0] === "number" &&
    typeof x[1] === "number"
  );
}
