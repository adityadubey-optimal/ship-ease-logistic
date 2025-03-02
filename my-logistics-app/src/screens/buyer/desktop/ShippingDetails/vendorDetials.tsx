"use client"
import styled from "styled-components"

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

const Title = styled.span<{ $fontSize?: string; $fontWeight?: string }>`
  color: #666;
  font-size: ${(props) => props.$fontSize || "1rem"};
  font-weight: ${(props) => props.$fontWeight || "400"};
`

const Brand = styled.span<{ $fontSize?: string; $fontWeight?: string }>`
  color: #333;
  font-size: ${(props) => props.$fontSize || "1.25rem"};
  font-weight: ${(props) => props.$fontWeight || "600"};
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
  padding: 0.75rem 1.5rem;
  border: 1px solid #2563eb;
  border-radius: 0.75rem;
  min-width: 150px;
  flex-grow: 1;

  @media (max-width: 768px) {
    min-width: 100%;
  }
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
}: VendorHeaderProps) {
    return (
        <Container>
            <VendorInfo>
                <Title $fontSize={fontSize.title} $fontWeight={fontWeight.title}>
                    Vendor: {<span style={{ fontSize: fontSize.titleValeu, fontWeight: fontWeight.titleValeu }}>{vendor}</span>}
                </Title>
                <Brand $fontSize={fontSize.value} $fontWeight={fontWeight.value}>
                    Brand: {<span style={{ fontSize: fontSize.titleValeu, fontWeight: fontWeight.titleValeu }}>{brand}</span>}
                </Brand>
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

