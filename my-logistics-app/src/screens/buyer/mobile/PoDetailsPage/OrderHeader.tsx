interface OrderHeaderProps {

    styles: {
        backgroundColor?: string
        textColor?: string
        fontSize?: string
        fontWeight?: string
        actionButtonColor?: string
        actionButtonTextColor?: string
    },
}

export default function OrderHeader() {

    return (

        <div>
            <div
                style={{
                    backgroundColor: "#D0D7FF",
                    color: "#1E1E1E",
                    fontSize: `${16}px`,
                    fontWeight: 700,
                    padding: "12px",
                    borderRadius: "8px",
                    position: "relative",
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                {/* Left Section */}
                <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: 'wrap', justifyContent: 'space-between' }}>

                    <div style={{ display: "flex", flexDirection: "row", gap: "8px", }}>
                        <p>PO Quantity : 1,545</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", gap: "8px", }}>
                        <p>Vendor Quantity: 1,593</p>
                    </div>

                </div>
            </div>


        </div>
    )
}