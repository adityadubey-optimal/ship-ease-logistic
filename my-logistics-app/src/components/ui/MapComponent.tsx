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
import { useTheme } from "@/context/ThemeContext"
import styled from "styled-components"
import { useIsMobile } from "@/hooks/useMobile"


interface InfoCardProps {
    country?: string
    vendor?: string
    locationCode?: string
    style?: React.CSSProperties
}

export const InfoCard: React.FC<InfoCardProps> = ({
    country = "China",
    vendor = "Wuxi",
    locationCode = "CN-SHA",
    style = {},
}) => {
    const containerStyle: React.CSSProperties = {
        backgroundColor: "#e6e9ff",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "300px",
        ...style,
    }

    const rowStyle: React.CSSProperties = {
        marginBottom: "8px",
        fontSize: "18px",
    }

    const labelStyle: React.CSSProperties = {
        fontWeight: "500",
    }

    const valueStyle: React.CSSProperties = {
        fontWeight: "normal",
    }

    const codeStyle: React.CSSProperties = {
        fontWeight: "500",
        fontSize: "18px",
    }

    return (
        <div style={containerStyle}>
            {country && (
                <div style={rowStyle}>
                    <span style={labelStyle}>Country: </span>
                    <span style={valueStyle}>{country}</span>
                </div>
            )}

            {vendor && (
                <div style={rowStyle}>
                    <span style={labelStyle}>Vendor: </span>
                    <span style={valueStyle}>{vendor}</span>
                </div>
            )}

            {locationCode && (
                <div>
                    <span style={codeStyle}>{locationCode}</span>
                </div>
            )}
        </div>
    )
}



interface InfoCardProps {
    country?: string
    vendor?: string
    locationCode?: string
    className?: string
    style?: React.CSSProperties
}

export const InfoCardComponent: React.FC<InfoCardProps> = ({
    country = "China",
    vendor = "Wuxi",
    locationCode = "CN-SHA",
    className = "",
    style = {},
}) => {
    return (
        <div
            className={`rounded-lg p-4 ${className}`}
            style={{
                backgroundColor: "#e6e9ff",
                maxWidth: "300px",
                ...style,
            }}
        >
            {country && (
                <div className="mb-2">
                    <span className="text-lg font-medium">Country: </span>
                    <span className="text-lg">{country}</span>
                </div>
            )}

            {vendor && (
                <div className="mb-2">
                    <span className="text-lg font-medium">Vendor: </span>
                    <span className="text-lg">{vendor}</span>
                </div>
            )}

            {locationCode && (
                <div>
                    <span className="text-lg font-medium">{locationCode}</span>
                </div>
            )}
        </div>
    )
}




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



const ShippingDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
 
justify-content : space-around;

 
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0.3rem;
  border: 1px solid #2563eb;
  border-radius: 0.75rem;
text-align : center;



`

const Label = styled.span<{ $fontSize?: string; $fontWeight?: string }>`
  color: #666;
  font-size: ${(props) => props.$fontSize || "0.875rem"};
  font-weight: ${(props) => props.$fontWeight || "400"};
  margin-bottom: 0.25rem;
`

const Value = styled.span<{ $fontSize?: string; $fontWeight?: string }>`
  color: #333;
  font-size: ${(props) => props.$fontSize || "1rem"};
  font-weight: ${(props) => props.$fontWeight || "600"};
`


export default function WorldMap({ vendors, height, width }: WorldMapProps) {
    const isMobile = useIsMobile()
    const { theme } = useTheme()
    // Center the map using Leaflet's LatLngExpression
    const center: LatLngExpression = [20, 0]
    const zoom = 2

    const fontSize = {
        label: "0.85rem",
        value: "1.35rem",
        title: "0.8rem",
        titleValeu: '0.8rem'
    }
    const fontWeight = {
        label: "400",
        value: "600",
        title: "400",
        titleValeu: '500'
    }

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
                            {/* <div style={{ fontSize: "0.8rem", color: ' #333' }}>
                                <b>Country:</b> {v?.country}
                                <br />
                                <b>Vendor:</b> {v?.vendor}
                                <b>CN-SHA</b>
                            </div> */}
                            <InfoCardComponent />
                        </Tooltip>
                    </CircleMarker>
                ))}
            </MapContainer>
            <div>
                <div style={{ display: "flex", marginTop: "1rem", justifyContent: 'space-between' }}>
                    <div style={{ display: "flex", gap: "20px" }}>

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
                    {isMobile ?
                        <ShippingDetails>
                            <InfoBox style={{ padding: '0.7rem 0.5rem', textAlign: 'start' }}>
                                <Label $fontSize={fontSize.label} $fontWeight={fontWeight.label}>
                                    Port of Loading
                                </Label>
                                <Value $fontSize={fontSize.value} $fontWeight={fontWeight.value}>
                                    CN-SHA
                                </Value>
                            </InfoBox>
                        </ShippingDetails>


                        : <ShippingDetails>
                            <InfoBox style={{ padding: '0.7rem 0.5rem', textAlign: 'center' }}>
                                <Label $fontSize={fontSize.label} $fontWeight={fontWeight.label}>
                                    Port of Loading
                                </Label>
                                <Value $fontSize={fontSize.value} $fontWeight={fontWeight.value}>
                                    CN-SHA
                                </Value>
                            </InfoBox>
                        </ShippingDetails>}

                </div>

            </div>
        </div>
    )
}