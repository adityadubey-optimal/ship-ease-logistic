"use client"

import React from "react"
import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Tooltip
} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { LatLngExpression } from "leaflet"
import useResponsiveSize from "@/hooks/useResponsiveSize"

// Example data structure
interface Vendor {
    id?: string
    country?: string
    vendor?: string
    lat?: number
    lng?: number
    category?: "red" | "yellow" | "orange"
}

interface WorldMapProps {
    vendors: Partial<Vendor[]>
    height?: string
    width?: string
}

export default function WorldMap({ vendors, height, width }: WorldMapProps) {
    // Center the map using Leaflet's LatLngExpression
    const center: LatLngExpression = [20, 0]
    const zoom = 2

    return (
        <div style={{ width: "100%", height: height || "600px" }}>
            <MapContainer
                // Cast props as any so that TypeScript accepts them
                {...({ center, zoom, style: { width: "100%", height: "100%" }, scrollWheelZoom: true } as any)}
            >
                {/* TileLayer: using a type assertion for attribution */}
                <TileLayer
                    {...({
                        attribution:
                            '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    } as any)}
                />
                {vendors.map((v) => (
                    <CircleMarker
                        key={v?.id}
                        {...({
                            center: [v?.lat, v?.lng] as LatLngExpression,
                            radius: 12,
                            pathOptions: {
                                fillColor:
                                    v?.category === "red"
                                        ? "#E53935"
                                        : v?.category === "yellow"
                                            ? "#FFB300"
                                            : "#FB8C00",
                                fillOpacity: 0.8,
                                color: "#333",
                                weight: 1,
                            }
                        } as any)}
                    >
                        <Tooltip {...({ offset: [0, -10], opacity: 1 } as any)}>
                            <div style={{ fontSize: "0.8rem" }}>
                                <b>Country:</b> {v?.country}
                                <br />
                                <b>Vendor:</b> {v?.vendor}
                            </div>
                        </Tooltip>
                    </CircleMarker>
                ))}
            </MapContainer>
            <div style={{ display: "flex", gap: "20px", marginTop: "1rem" }}>
                <span
                    style={{
                        fontSize: `${useResponsiveSize(1.0, 1.25)}rem`,
                        fontWeight: 500,
                    }}
                >
                    Country:{" "}
                    <span
                        style={{
                            fontSize: `${useResponsiveSize(1.0, 1.25)}rem`,
                            fontWeight: 700,
                        }}
                    >
                        China
                    </span>
                </span>
                <span
                    style={{
                        fontSize: `${useResponsiveSize(1.0, 1.25)}rem`,
                        fontWeight: 500,
                    }}
                >
                    Vendor:{" "}
                    <span
                        style={{
                            fontSize: `${useResponsiveSize(1.0, 1.25)}rem`,
                            fontWeight: 700,
                        }}
                    >
                        Wuxi
                    </span>
                </span>
            </div>
        </div>
    )
}