import fs from "fs"
import path from "path"
import { XMLParser } from "fast-xml-parser"

export type Centre = {
  name: string
  description: string
  address: string
  lat: number
  lng: number
  website: string
  affiliate: boolean
}

export function getCentres(): Centre[] {
  const filePath = path.join(process.cwd(), "data/xml/centres-montreal.xml")
  const xmlData = fs.readFileSync(filePath, "utf-8")

  const parser = new XMLParser({ trimValues: true })
  const parsed = parser.parse(xmlData)
  console.log(parsed)

  return parsed.centres.centre.map((c: any) => ({
    name: c.name,
    description: c.description,
    address: c.address,
    lat: Number(c.latitude),
    lng: Number(c.longitude),
    website: c.website,
    affiliate: c.affiliate === "true",
  }))
}
