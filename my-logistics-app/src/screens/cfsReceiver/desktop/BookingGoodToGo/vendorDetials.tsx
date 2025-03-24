"use client"
import styled from "styled-components"
import { getResponsiveSize } from '@/theme/base'
import { useNavigate } from "react-router-dom"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { Calendar, Edit2, Plus, CirclePlus } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

// Props interface
interface VendorHeaderProps {
    vendor: string
    brand: string
    shipByDate: string
    cargoReadyDate: string
    portOfLoading: string
    destination: string
    fontSize?: {
        label: string
        value: string
        title: string
        titleValeu: string
    }
    fontWeight?: {
        label: string
        value: string
        title: string
        titleValeu: string
    }
    showVendroBrandDetail?: boolean
}
// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const VendorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-shrink: 0;
`

const Title = styled.span<{ $fontSize?: string; $fontWeight?: string, }>`
  color: #666;
  font-size: ${(props) => props.$fontSize || "1rem"};
  font-weight: ${(props) => props.$fontWeight || "400"};
  color : '#616161'
`

const Brand = styled.span<{ $fontSize?: string; $fontWeight?: string }>`
  color: #333;
  font-size: ${(props) => props.$fontSize || "1.25rem"};
  font-weight: ${(props) => props.$fontWeight || "600"};
    color : '#616161'
`

const ShippingDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.55rem 1.05rem;
  border: 1px solid #2563eb;
  border-radius: 0.75rem;
  min-width: 110px;
  flex-grow: 1;
    text-align : center;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`

const Label = styled.span<{ $fontSize?: string; $fontWeight?: string }>`
  color: #666;
  font-size: 0.875rem;
  font-weight: 550;
  margin-bottom: 0.1rem;
  color : #616161;
`

const Value = styled.span<{ $fontSize?: string; $fontWeight?: string }>`
  color: #333;
  font-size: 1.75rem;
  font-weight: 650;
  color : #616161;
`

// VendorHeader component
export default function VendorHeader({
    vendor,
    brand,
    shipByDate,
    cargoReadyDate,
    portOfLoading,
    destination,
    fontSize = {
        label: "0.875rem",
        value: "1rem",
        title: "1rem",
        titleValeu: '1rem'
    },
    fontWeight = {
        label: "400",
        value: "600",
        title: "400",
        titleValeu: '500'
    },
    showVendroBrandDetail = true,

}: VendorHeaderProps) {
    const { theme } = useTheme()
    const navigate = useNavigate()
    // const SHIP_BY_DATE_CARD_WIDTH = "350px";
    // const DAYS_TO_SHIP_CARD_WIDTH = "500px";
    // const PO_CARD_WIDTH = "160px";
    // const CARD_HEIGHT = "180px";

    // Responsive dimensions (in pixels)
    const SHIP_BY_DATE_CARD_WIDTH = useResponsiveSize(300, 400); // Ship-by-Date card width scales from 350px to 400px
    const DAYS_TO_SHIP_CARD_WIDTH = useResponsiveSize(500, 600);   // Days-to-Ship card width scales from 500px to 600px
    const PO_CARD_WIDTH = useResponsiveSize(160, 120);           // PO card width scales from 160px to 180px
    const CARD_HEIGHT = useResponsiveSize(80, 120);

    return (
        <Container>
            <VendorInfo>
                {showVendroBrandDetail ? (<><Title $fontSize={getResponsiveSize(1.2, 1.5) + "rem"} $fontWeight={"300"}>
                    Vendor: {<span style={{ fontSize: fontSize.titleValeu, fontWeight: "300" }}>{vendor}</span>}
                </Title>
                    <Brand $fontSize={getResponsiveSize(1.2, 1.5) + "rem"} $fontWeight={"300"}>
                        Brand: {<span style={{ fontSize: getResponsiveSize(1.2, 1.5) + "rem", fontWeight: "500" }}>{brand}</span>}
                    </Brand>
                </>) : (<div
                    style={{
                        // backgroundColor: theme.colors.cardBackground,
                        border: '1px solid #2563eb',
                        borderRadius: "8px",
                        padding: "1rem",
                        paddingBottom: '0rem',
                        paddingTop: '0rem',
                        minWidth: SHIP_BY_DATE_CARD_WIDTH,
                        maxWidth: SHIP_BY_DATE_CARD_WIDTH,

                        // height: `calc(${CARD_HEIGHT} - 10px)`,
                    }}
                >
                    <div className="flex justify-between items-center h-full">
                        <InfoBox style={{ border: 'none' }}>
                            <Label $fontSize={fontSize.label} $fontWeight={fontWeight.label}>
                                Country of Origin:
                            </Label>
                            <Value $fontSize={fontSize.value} $fontWeight={fontWeight.value}>
                                China
                            </Value>

                        </InfoBox>
                        <Edit2
                            style={{
                                color: theme.colors.textPrimary,
                                height: "20px",
                                width: "20px",
                                cursor: "pointer",
                            }}
                        />
                    </div>
                </div>)

                }
            </VendorInfo>

            <ShippingDetails>
                <InfoBox>
                    <Label $fontSize={fontSize.label} $fontWeight={fontWeight.label}>
                        Ship by date:
                    </Label>
                    <Value $fontSize={fontSize.value} $fontWeight={fontWeight.value}>
                        {shipByDate}
                    </Value>
                </InfoBox>

                <InfoBox>
                    <Label $fontSize={fontSize.label} $fontWeight={fontWeight.label}>
                        Cargo Ready Date
                    </Label>
                    <Value $fontSize={fontSize.value} $fontWeight={fontWeight.value}>
                        {cargoReadyDate}
                    </Value>
                </InfoBox>

                <InfoBox>
                    <Label $fontSize={fontSize.label} $fontWeight={fontWeight.label}>
                        Port of Loading
                    </Label>
                    <Value $fontSize={fontSize.value} $fontWeight={fontWeight.value}>
                        {portOfLoading}
                    </Value>
                </InfoBox>

                <InfoBox>
                    <Label $fontSize={fontSize.label} $fontWeight={fontWeight.label}>
                        Destination
                    </Label>
                    <Value $fontSize={fontSize.value} $fontWeight={fontWeight.value}>
                        {destination}
                    </Value>
                </InfoBox>
            </ShippingDetails>
        </Container>
    )
}

